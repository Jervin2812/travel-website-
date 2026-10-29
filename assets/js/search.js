/**
 * Terra / Wanderlust - Search & Filtering Engine
 * Filters Destinations, Hotels, Flights, and Packages with instant dynamic UI updates
 */

document.addEventListener('DOMContentLoaded', () => {
  initSearchPage();
});

let currentFilters = {
  keyword: '',
  category: 'all',
  maxPrice: 2500,
  minRating: 0,
  sortBy: 'popular'
};

function initSearchPage() {
  const searchResultsContainer = document.getElementById('searchResultsList');
  if (!searchResultsContainer) return;

  // Read URL query params if any (e.g., search-results.html?query=bali)
  const urlParams = new URLSearchParams(window.location.search);
  const queryParam = urlParams.get('query');
  const typeParam = urlParams.get('type');

  if (queryParam) {
    currentFilters.keyword = queryParam.toLowerCase();
    const keywordInput = document.getElementById('filterKeyword');
    if (keywordInput) keywordInput.value = queryParam;
  }

  // Bind filter inputs
  const keywordInput = document.getElementById('filterKeyword');
  if (keywordInput) {
    keywordInput.addEventListener('input', (e) => {
      currentFilters.keyword = e.target.value.toLowerCase().trim();
      applyFiltersAndRender();
    });
  }

  const categorySelect = document.getElementById('filterCategory');
  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      currentFilters.category = e.target.value;
      applyFiltersAndRender();
    });
  }

  const priceRange = document.getElementById('filterPriceRange');
  const priceDisplay = document.getElementById('filterPriceValue');
  if (priceRange) {
    priceRange.addEventListener('input', (e) => {
      currentFilters.maxPrice = Number(e.target.value);
      if (priceDisplay) priceDisplay.textContent = `$${currentFilters.maxPrice}`;
      applyFiltersAndRender();
    });
  }

  const sortSelect = document.getElementById('filterSort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentFilters.sortBy = e.target.value;
      applyFiltersAndRender();
    });
  }

  const clearBtn = document.getElementById('clearFiltersBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      resetFilters();
    });
  }

  // Initial render
  applyFiltersAndRender();
}

function resetFilters() {
  currentFilters = {
    keyword: '',
    category: 'all',
    maxPrice: 2500,
    minRating: 0,
    sortBy: 'popular'
  };

  const kw = document.getElementById('filterKeyword');
  if (kw) kw.value = '';
  const cat = document.getElementById('filterCategory');
  if (cat) cat.value = 'all';
  const pr = document.getElementById('filterPriceRange');
  if (pr) pr.value = 2500;
  const pVal = document.getElementById('filterPriceValue');
  if (pVal) pVal.textContent = '$2500';
  const sort = document.getElementById('filterSort');
  if (sort) sort.value = 'popular';

  applyFiltersAndRender();
}

function applyFiltersAndRender() {
  const container = document.getElementById('searchResultsList');
  const countBadge = document.getElementById('resultsCount');
  const chipsContainer = document.getElementById('activeFilterChips');
  if (!container) return;

  // Aggregate items from TRAVEL_DATA (Hotels + Packages + Destinations)
  let items = [
    ...TRAVEL_DATA.hotels.map(h => ({ ...h, itemType: 'hotel', displayPrice: h.pricePerNight, priceUnit: '/ night' })),
    ...TRAVEL_DATA.packages.map(p => ({ ...p, itemType: 'package', displayPrice: p.price, priceUnit: 'total' }))
  ];

  // 1. Keyword search
  if (currentFilters.keyword) {
    items = items.filter(item => 
      item.name.toLowerCase().includes(currentFilters.keyword) ||
      (item.location && item.location.toLowerCase().includes(currentFilters.keyword)) ||
      (item.destination && item.destination.toLowerCase().includes(currentFilters.keyword))
    );
  }

  // 2. Category filter
  if (currentFilters.category !== 'all') {
    items = items.filter(item => {
      if (currentFilters.category === 'hotel') return item.itemType === 'hotel';
      if (currentFilters.category === 'package') return item.itemType === 'package';
      return true;
    });
  }

  // 3. Price filter
  items = items.filter(item => item.displayPrice <= currentFilters.maxPrice);

  // 4. Sort
  if (currentFilters.sortBy === 'price-low') {
    items.sort((a, b) => a.displayPrice - b.displayPrice);
  } else if (currentFilters.sortBy === 'price-high') {
    items.sort((a, b) => b.displayPrice - a.displayPrice);
  } else if (currentFilters.sortBy === 'rating') {
    items.sort((a, b) => b.rating - a.rating);
  } else {
    // popular default
    items.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  // Update count badge
  if (countBadge) {
    countBadge.textContent = `${items.length} experiences found`;
  }

  // Update chips
  renderFilterChips(chipsContainer);

  // Empty state handling
  if (items.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5 bg-light rounded-4 p-4">
        <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
        <h4 class="mt-3 font-weight-bold">No results match your criteria</h4>
        <p class="text-muted">Try adjusting your filters, searching for a different destination, or clearing all filters.</p>
        <button class="btn btn-primary-custom mt-2" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  // Render cards
  container.innerHTML = items.map(item => `
    <div class="col-12 col-md-6 col-lg-6 mb-4">
      <div class="travel-card">
        <div class="travel-card-media">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <span class="card-tag">${item.itemType === 'hotel' ? 'Hotel' : 'Tour Package'}</span>
          <button class="card-wishlist-btn" title="Save to favorites"><i class="bi bi-heart"></i></button>
        </div>
        <div class="travel-card-body">
          <div class="card-rating-row">
            <span class="star-rating"><i class="bi bi-star-fill"></i> ${item.rating}</span>
            <span class="rating-count">(${item.reviewsCount} verified reviews)</span>
          </div>
          <h5 class="card-item-title">${item.name}</h5>
          <p class="card-location"><i class="bi bi-geo-alt-fill text-danger"></i> ${item.location || item.destination}</p>
          <div class="card-price-row">
            <div class="card-price">$${item.displayPrice} <span>${item.priceUnit}</span></div>
            <button class="btn btn-primary-custom" onclick="selectAndBook('${item.itemType}', '${item.id}')">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFilterChips(container) {
  if (!container) return;
  const chips = [];

  if (currentFilters.keyword) {
    chips.push(`<span class="filter-chip">Query: "${currentFilters.keyword}" <button onclick="clearKeywordFilter()">&times;</button></span>`);
  }
  if (currentFilters.category !== 'all') {
    chips.push(`<span class="filter-chip">Type: ${currentFilters.category} <button onclick="clearCategoryFilter()">&times;</button></span>`);
  }
  if (currentFilters.maxPrice < 2500) {
    chips.push(`<span class="filter-chip">Up to $${currentFilters.maxPrice} <button onclick="clearPriceFilter()">&times;</button></span>`);
  }

  container.innerHTML = chips.join('');
}

function clearKeywordFilter() {
  currentFilters.keyword = '';
  const kw = document.getElementById('filterKeyword');
  if (kw) kw.value = '';
  applyFiltersAndRender();
}

function clearCategoryFilter() {
  currentFilters.category = 'all';
  const cat = document.getElementById('filterCategory');
  if (cat) cat.value = 'all';
  applyFiltersAndRender();
}

function clearPriceFilter() {
  currentFilters.maxPrice = 2500;
  const pr = document.getElementById('filterPriceRange');
  if (pr) pr.value = 2500;
  const pVal = document.getElementById('filterPriceValue');
  if (pVal) pVal.textContent = '$2500';
  applyFiltersAndRender();
}


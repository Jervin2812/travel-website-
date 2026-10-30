/**
 * TERRA Travel — Admin Management System Engine
 * Handles:
 * - Tab Navigation (Dashboard, Bookings, Destinations, Hotels, Flights, Users)
 * - Metrics Calculation & Summary Cards
 * - Booking Status Controls (Approve, Confirm, Cancel, Refund)
 * - Destination / Package CRUD (Add, Edit, Delete, Toggle Active)
 * - Hotel Inventory Management
 * - Live Search, Filters & Export Simulation
 * - Toast Feedback System
 */

// Initial Seed Data if not present in localStorage
const DEFAULT_ADMIN_BOOKINGS = [
  {
    id: "TRV-894210",
    customer: "Jervin Raj",
    email: "jervin.raj@example.com",
    title: "Bali Spiritual & Island Escape",
    type: "package",
    dates: "Nov 14 - Nov 22, 2026",
    amount: 1290,
    status: "Confirmed",
    paymentMethod: "Credit Card (Visa ending in 4242)",
    bookedOn: "2026-10-28"
  },
  {
    id: "TRV-773194",
    customer: "Sophia Laurent",
    email: "sophia.l@paris-luxury.fr",
    title: "The Ritz Paris Imperial Suite",
    type: "hotel",
    dates: "Dec 05 - Dec 09, 2026",
    amount: 2450,
    status: "Confirmed",
    paymentMethod: "Apple Pay",
    bookedOn: "2026-10-27"
  },
  {
    id: "TRV-662810",
    customer: "Marcus Vance",
    email: "marcus.vance@techalpha.io",
    title: "Swiss Alpine Glacier Express",
    type: "package",
    dates: "Jan 10 - Jan 18, 2027",
    amount: 1850,
    status: "Pending",
    paymentMethod: "Bank Transfer",
    bookedOn: "2026-10-29"
  },
  {
    id: "TRV-551902",
    customer: "Elena Rostova",
    email: "elena.rostova@dubaimedia.ae",
    title: "Burj Al Arab Ocean Suite",
    type: "hotel",
    dates: "Nov 20 - Nov 25, 2026",
    amount: 3200,
    status: "Confirmed",
    paymentMethod: "Credit Card (Amex)",
    bookedOn: "2026-10-26"
  },
  {
    id: "TRV-440283",
    customer: "David Sterling",
    email: "david.sterling@london-fin.co.uk",
    title: "Emirates First Class (LHR -> DXB)",
    type: "flight",
    dates: "Dec 12, 2026",
    amount: 2150,
    status: "Cancelled",
    paymentMethod: "Credit Card (Mastercard)",
    bookedOn: "2026-10-24"
  },
  {
    id: "TRV-339174",
    customer: "Chloe Martin",
    email: "chloe.martin@geneva.ch",
    title: "Maldives Private Island Retreat",
    type: "package",
    dates: "Feb 02 - Feb 10, 2027",
    amount: 4600,
    status: "Confirmed",
    paymentMethod: "Credit Card (Visa)",
    bookedOn: "2026-10-30"
  }
];

let adminBookings = [];
let adminDestinations = [];
let adminHotels = [];

function loadAdminData() {
  try {
    const storedBookings = localStorage.getItem('terraAdminBookings');
    adminBookings = storedBookings ? JSON.parse(storedBookings) : [...DEFAULT_ADMIN_BOOKINGS];
  } catch(e) {
    adminBookings = [...DEFAULT_ADMIN_BOOKINGS];
  }

  try {
    const storedDests = localStorage.getItem('terraAdminDestinations');
    if (storedDests) {
      adminDestinations = JSON.parse(storedDests);
    } else if (typeof TRAVEL_DATA !== 'undefined' && TRAVEL_DATA.destinations) {
      adminDestinations = [...TRAVEL_DATA.destinations];
    }
  } catch(e) {
    adminDestinations = [];
  }

  try {
    const storedHotels = localStorage.getItem('terraAdminHotels');
    if (storedHotels) {
      adminHotels = JSON.parse(storedHotels);
    } else if (typeof TRAVEL_DATA !== 'undefined' && TRAVEL_DATA.hotels) {
      adminHotels = [...TRAVEL_DATA.hotels];
    }
  } catch(e) {
    adminHotels = [];
  }
}

function saveAdminData() {
  try {
    localStorage.setItem('terraAdminBookings', JSON.stringify(adminBookings));
    localStorage.setItem('terraAdminDestinations', JSON.stringify(adminDestinations));
    localStorage.setItem('terraAdminHotels', JSON.stringify(adminHotels));
  } catch(e) {
    console.error('Failed saving to localStorage', e);
  }
}

// Switch Active Section Tab
function switchAdminTab(tabId, clickedBtn) {
  document.querySelectorAll('.admin-tab-pane').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.admin-nav-item').forEach(el => el.classList.remove('active'));
  
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
  if (clickedBtn) clickedBtn.classList.add('active');

  // Trigger render functions depending on tab
  if (tabId === 'tab-dashboard') renderAdminDashboard();
  if (tabId === 'tab-bookings') renderBookingsTable();
  if (tabId === 'tab-destinations') renderDestinationsTable();
  if (tabId === 'tab-hotels') renderHotelsTable();
}

// Render Dashboard KPI & Quick Activities
function renderAdminDashboard() {
  const totalRevenue = adminBookings.filter(b => b.status === 'Confirmed').reduce((sum, b) => sum + (b.amount || 0), 0);
  const totalBookings = adminBookings.length;
  const pendingCount = adminBookings.filter(b => b.status === 'Pending').length;
  const activeDestCount = adminDestinations.length || 6;

  const revEl = document.getElementById('statTotalRevenue');
  const bookEl = document.getElementById('statTotalBookings');
  const pendEl = document.getElementById('statPendingCount');
  const destEl = document.getElementById('statDestCount');

  if (revEl) revEl.textContent = '$' + totalRevenue.toLocaleString();
  if (bookEl) bookEl.textContent = totalBookings;
  if (pendEl) pendEl.textContent = pendingCount;
  if (destEl) destEl.textContent = activeDestCount;

  // Render Recent Bookings in Dashboard widget
  const recentTable = document.getElementById('recentBookingsTableBody');
  if (recentTable) {
    const recents = adminBookings.slice(0, 5);
    recentTable.innerHTML = recents.map(b => `
      <tr>
        <td><strong class="font-monospace text-primary">${b.id}</strong></td>
        <td>
          <div class="fw-bold text-dark">${b.customer}</div>
          <small class="text-muted">${b.email}</small>
        </td>
        <td><span class="badge bg-light text-dark border">${b.title}</span></td>
        <td class="fw-bold text-dark">$${b.amount.toLocaleString()}</td>
        <td>${getStatusBadge(b.status)}</td>
        <td>
          <div class="dropdown">
            <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Action</button>
            <ul class="dropdown-menu dropdown-menu-end shadow-sm">
              <li><a class="dropdown-item text-success" href="#" onclick="updateBookingStatus('${b.id}', 'Confirmed')"><i class="bi bi-check2-circle me-2"></i> Confirm</a></li>
              <li><a class="dropdown-item text-warning" href="#" onclick="updateBookingStatus('${b.id}', 'Pending')"><i class="bi bi-clock-history me-2"></i> Set Pending</a></li>
              <li><a class="dropdown-item text-danger" href="#" onclick="updateBookingStatus('${b.id}', 'Cancelled')"><i class="bi bi-x-circle me-2"></i> Cancel</a></li>
            </ul>
          </div>
        </td>
      </tr>
    `).join('');
  }
}

function getStatusBadge(status) {
  if (status === 'Confirmed') return '<span class="badge bg-success-subtle text-success border border-success-subtle px-2 py-1"><i class="bi bi-check-circle me-1"></i> Confirmed</span>';
  if (status === 'Pending') return '<span class="badge bg-warning-subtle text-warning border border-warning-subtle px-2 py-1"><i class="bi bi-hourglass-split me-1"></i> Pending</span>';
  if (status === 'Cancelled') return '<span class="badge bg-danger-subtle text-danger border border-danger-subtle px-2 py-1"><i class="bi bi-x-circle me-1"></i> Cancelled</span>';
  return `<span class="badge bg-secondary-subtle text-secondary px-2 py-1">${status}</span>`;
}

// Render Bookings Management Table with Filters & Search
function renderBookingsTable() {
  const query = (document.getElementById('bookingSearchInput')?.value || '').toLowerCase().trim();
  const statusFilter = document.getElementById('bookingStatusFilter')?.value || 'all';

  const tbody = document.getElementById('allBookingsTableBody');
  if (!tbody) return;

  const filtered = adminBookings.filter(b => {
    const matchStatus = (statusFilter === 'all') || (b.status.toLowerCase() === statusFilter.toLowerCase());
    const matchQuery = !query || 
      b.id.toLowerCase().includes(query) || 
      b.customer.toLowerCase().includes(query) || 
      b.title.toLowerCase().includes(query) || 
      b.email.toLowerCase().includes(query);
    return matchStatus && matchQuery;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-5 text-muted"><i class="bi bi-search fs-2 d-block mb-2"></i>No bookings matched your filter criteria.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(b => `
    <tr>
      <td><span class="font-monospace fw-bold text-primary">${b.id}</span></td>
      <td>
        <div class="fw-bold text-dark">${b.customer}</div>
        <div class="small text-muted">${b.email}</div>
      </td>
      <td>
        <div class="fw-semibold text-dark">${b.title}</div>
        <small class="text-muted"><i class="bi bi-calendar3 me-1"></i>${b.dates}</small>
      </td>
      <td><span class="badge bg-light text-dark border text-uppercase" style="font-size:0.75rem;">${b.type}</span></td>
      <td class="fw-bold text-dark">$${b.amount.toLocaleString()}</td>
      <td>${getStatusBadge(b.status)}</td>
      <td>
        <div class="d-flex gap-1">
          <button class="btn btn-sm btn-outline-success" title="Confirm Reservation" onclick="updateBookingStatus('${b.id}', 'Confirmed')"><i class="bi bi-check-lg"></i></button>
          <button class="btn btn-sm btn-outline-warning" title="Mark as Pending" onclick="updateBookingStatus('${b.id}', 'Pending')"><i class="bi bi-clock"></i></button>
          <button class="btn btn-sm btn-outline-danger" title="Cancel Booking" onclick="updateBookingStatus('${b.id}', 'Cancelled')"><i class="bi bi-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Update Booking Status
function updateBookingStatus(bookingId, newStatus) {
  const item = adminBookings.find(b => b.id === bookingId);
  if (item) {
    item.status = newStatus;
    saveAdminData();
    renderAdminDashboard();
    renderBookingsTable();
    showToast('Booking Updated', `Reservation ${bookingId} has been marked as ${newStatus}.`, 'success');
  }
}

// Render Destinations Table
function renderDestinationsTable() {
  const tbody = document.getElementById('destinationsTableBody');
  if (!tbody) return;

  tbody.innerHTML = adminDestinations.map((d, index) => `
    <tr>
      <td>
        <img src="${d.image}" alt="${d.name}" class="rounded-3 object-fit-cover shadow-sm" style="width: 52px; height: 52px;">
      </td>
      <td>
        <div class="fw-bold text-dark">${d.name}</div>
        <small class="text-muted"><i class="bi bi-geo-alt me-1"></i>${d.country}</small>
      </td>
      <td><span class="badge bg-primary-subtle text-primary border">${d.category || 'General'}</span></td>
      <td class="fw-bold text-dark">$${d.startingPrice}</td>
      <td><span class="badge bg-warning-subtle text-warning border"><i class="bi bi-star-fill me-1"></i>${d.rating || 4.9}</span></td>
      <td><span class="badge bg-success-subtle text-success">Active & Live</span></td>
      <td>
        <button class="btn btn-sm btn-outline-danger" onclick="deleteDestination(${index})"><i class="bi bi-trash me-1"></i> Delete</button>
      </td>
    </tr>
  `).join('');
}

// Add New Destination Modal Form
function handleCreateDestination(e) {
  e.preventDefault();
  const name = document.getElementById('newDestName').value.trim();
  const country = document.getElementById('newDestCountry').value.trim();
  const price = parseInt(document.getElementById('newDestPrice').value, 10);
  const category = document.getElementById('newDestCategory').value;
  const image = document.getElementById('newDestImage').value.trim();
  const desc = document.getElementById('newDestDesc').value.trim();

  if (!name || !country || !price) {
    alert('Please fill in all required destination fields.');
    return;
  }

  const newDest = {
    id: 'dest-' + name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    name,
    country,
    category,
    startingPrice: price,
    rating: 4.95,
    reviewsCount: 120,
    image: image || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    images: [
      image || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    description: desc || 'Newly curated sanctuary featuring bespoke cultural itineraries.'
  };

  adminDestinations.unshift(newDest);
  saveAdminData();
  renderDestinationsTable();
  renderAdminDashboard();

  // Close Bootstrap modal
  const modalEl = document.getElementById('addDestinationModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();

  document.getElementById('addDestinationForm').reset();
  showToast('Destination Added', `${name}, ${country} has been published to live listings!`, 'success');
}

function deleteDestination(index) {
  if (confirm('Are you sure you want to remove this destination?')) {
    const deleted = adminDestinations.splice(index, 1);
    saveAdminData();
    renderDestinationsTable();
    renderAdminDashboard();
    showToast('Destination Removed', `${deleted[0]?.name} was removed from the catalog.`, 'info');
  }
}

// Render Hotels Table
function renderHotelsTable() {
  const tbody = document.getElementById('hotelsTableBody');
  if (!tbody) return;

  tbody.innerHTML = adminHotels.map(h => `
    <tr>
      <td>
        <img src="${h.image}" alt="${h.name}" class="rounded-3 object-fit-cover shadow-sm" style="width: 52px; height: 52px;">
      </td>
      <td>
        <div class="fw-bold text-dark">${h.name}</div>
        <small class="text-muted"><i class="bi bi-geo-alt me-1"></i>${h.location}</small>
      </td>
      <td><span class="badge bg-info-subtle text-info border">${h.category || '5-Star Luxury'}</span></td>
      <td class="fw-bold text-dark">$${h.pricePerNight} <span class="small text-muted font-normal">/ night</span></td>
      <td><span class="badge bg-warning-subtle text-warning border"><i class="bi bi-star-fill me-1"></i>${h.rating || 4.9}</span></td>
      <td><span class="badge bg-success-subtle text-success">Available</span></td>
    </tr>
  `).join('');
}

// Export Bookings Simulation (CSV download)
function exportBookingsCSV() {
  const headers = ["Booking ID", "Customer", "Email", "Expedition / Stay", "Dates", "Amount ($)", "Status", "Booked On"];
  const rows = adminBookings.map(b => [
    `"${b.id}"`,
    `"${b.customer}"`,
    `"${b.email}"`,
    `"${b.title}"`,
    `"${b.dates}"`,
    `"${b.amount}"`,
    `"${b.status}"`,
    `"${b.bookedOn}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `TERRA_Bookings_Report_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('Export Complete', 'Bookings CSV report downloaded successfully.', 'success');
}

// Show Toast feedback
function showToast(title, message, type = 'info') {
  let toastContainer = document.getElementById('adminToastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'adminToastContainer';
    toastContainer.style.position = 'fixed';
    toastContainer.style.bottom = '24px';
    toastContainer.style.right = '24px';
    toastContainer.style.zIndex = '9999';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-success text-white' : (type === 'danger' ? 'bg-danger text-white' : 'bg-dark text-white');
  toast.className = `p-3 rounded-4 shadow-lg mb-2 ${bgClass} d-flex align-items-center gap-3`;
  toast.style.minWidth = '280px';
  toast.innerHTML = `
    <i class="bi ${type === 'success' ? 'bi-check-circle-fill' : 'bi-info-circle-fill'} fs-4"></i>
    <div>
      <div class="fw-bold">${title}</div>
      <div class="small opacity-90">${message}</div>
    </div>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// Initialize on Document Load
document.addEventListener('DOMContentLoaded', () => {
  loadAdminData();
  renderAdminDashboard();
  renderBookingsTable();
  renderDestinationsTable();
  renderHotelsTable();
});

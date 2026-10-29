/**
 * Terra / Wanderlust - Main JavaScript
 * Handles Navigation, Global Data Store, UI Interactions, and State Persistence
 */

// Global Travel Data Store
const TRAVEL_DATA = {
  destinations: [
    {
      id: "dest-bali",
      name: "Bali",
      country: "Indonesia",
      category: "tropical",
      startingPrice: 599,
      rating: 4.9,
      reviewsCount: 1420,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      description: "Lush rice terraces, sacred sea temples, vibrant coral reefs, and tranquil wellness retreats.",
      bestTime: "April - October",
      weather: "28°C Sunny",
      badge: "Popular"
    },
    {
      id: "dest-paris",
      name: "Paris",
      country: "France",
      category: "city",
      startingPrice: 799,
      rating: 4.8,
      reviewsCount: 2310,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      description: "Iconic architecture, world-class art museums, charming sidewalk cafes, and Seine cruises.",
      bestTime: "June - August",
      weather: "22°C Mild",
      badge: "Romantic"
    },
    {
      id: "dest-dubai",
      name: "Dubai",
      country: "United Arab Emirates",
      category: "luxury",
      startingPrice: 899,
      rating: 4.9,
      reviewsCount: 1840,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      description: "Futuristic skyscrapers, desert safaris, ultra-luxury resorts, and record-breaking attractions.",
      bestTime: "November - March",
      weather: "26°C Clear",
      badge: "Luxury"
    },
    {
      id: "dest-swiss",
      name: "Swiss Alps",
      country: "Switzerland",
      category: "adventure",
      startingPrice: 1199,
      rating: 4.95,
      reviewsCount: 980,
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
      description: "Snow-capped peaks, scenic mountain railways, pristine alpine lakes, and world-class ski slopes.",
      bestTime: "December - April",
      weather: "4°C Crisp",
      badge: "Scenic"
    },
    {
      id: "dest-tokyo",
      name: "Tokyo",
      country: "Japan",
      category: "city",
      startingPrice: 949,
      rating: 4.9,
      reviewsCount: 2650,
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
      description: "Neon-lit cityscapes, historic Shinto shrines, Michelin dining, and high-speed bullet trains.",
      bestTime: "March - May",
      weather: "19°C Spring",
      badge: "Trending"
    },
    {
      id: "dest-maldives",
      name: "Maldives",
      country: "Maldives",
      category: "tropical",
      startingPrice: 1299,
      rating: 4.98,
      reviewsCount: 1120,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
      description: "Overwater bungalows, crystal turquoise lagoons, manta ray diving, and secluded private islands.",
      bestTime: "November - April",
      weather: "29°C Tropical",
      badge: "Exclusive"
    }
  ],

  hotels: [
    {
      id: "hotel-1",
      name: "Amanjiwo Luxury Sanctuary",
      location: "Bali, Indonesia",
      destinationId: "dest-bali",
      pricePerNight: 280,
      rating: 4.95,
      reviewsCount: 420,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      amenities: ["Private Pool", "Spa & Wellness", "Free Breakfast", "Ocean View", "Airport Shuttle"],
      category: "5-Star Luxury",
      description: "Nestled amidst lush emerald hills with infinity pools overlooking serene rice paddies."
    },
    {
      id: "hotel-2",
      name: "Le Grand Parisian Palace",
      location: "Paris, France",
      destinationId: "dest-paris",
      pricePerNight: 340,
      rating: 4.88,
      reviewsCount: 680,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
      amenities: ["Eiffel Tower View", "Michelin Dining", "Concierge", "Fitness Center"],
      category: "Heritage Boutique",
      description: "Historic Haussmannian luxury just steps from the Champs-Élysées and the Louvre."
    },
    {
      id: "hotel-3",
      name: "Burj Al Mirage Beach Resort",
      location: "Dubai, UAE",
      destinationId: "dest-dubai",
      pricePerNight: 410,
      rating: 4.92,
      reviewsCount: 890,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      amenities: ["Private Beach", "Helipad", "Rooftop Lounge", "Butler Service"],
      category: "5-Star Ultra",
      description: "Spectacular Arabian Gulf views with infinity pools and world-class luxury shopping."
    },
    {
      id: "hotel-4",
      name: "The Zermatt Alpine Lodge",
      location: "Swiss Alps, Switzerland",
      destinationId: "dest-swiss",
      pricePerNight: 390,
      rating: 4.96,
      reviewsCount: 310,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      amenities: ["Ski-in/Ski-out", "Cedar Sauna", "Fireplace Suites", "Fondue Restaurant"],
      category: "Alpine Resort",
      description: "Panoramic Matterhorn views, cozy wooden chalets, and hot thermal baths."
    }
  ],

  packages: [
    {
      id: "pkg-1",
      name: "Bali Spiritual & Island Escape",
      destination: "Bali, Indonesia",
      duration: "7 Days / 6 Nights",
      price: 1150,
      rating: 4.9,
      reviewsCount: 340,
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      category: "Island & Culture",
      highlights: ["Ubud Sacred Monkey Forest", "Uluwatu Sunset Dance", "Nusa Penida Snorkel", "Luxury Villa Stay"]
    },
    {
      id: "pkg-2",
      name: "Classic European Capitals Discovery",
      destination: "Paris & Switzerland",
      duration: "10 Days / 9 Nights",
      price: 2450,
      rating: 4.92,
      reviewsCount: 520,
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
      category: "Heritage & Scenery",
      highlights: ["Louvre Guided Tour", "First Class Glacier Express", "Versailles Palace", "Lake Geneva Cruise"]
    },
    {
      id: "pkg-3",
      name: "Dubai Golden Sands & Skyscraper Luxury",
      destination: "Dubai, UAE",
      duration: "5 Days / 4 Nights",
      price: 980,
      rating: 4.85,
      reviewsCount: 410,
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      category: "Modern Adventure",
      highlights: ["Burj Khalifa Top Deck", "Desert Dune Bashing", "Dhow Marina Dinner", "Private Yacht Cruise"]
    },
    {
      id: "pkg-4",
      name: "Tokyo Tech & Kyoto Zen Experience",
      destination: "Tokyo & Kyoto, Japan",
      duration: "8 Days / 7 Nights",
      price: 2100,
      rating: 4.96,
      reviewsCount: 680,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      category: "Culture & Culinary",
      highlights: ["Shinkansen Bullet Train", "Fushimi Inari Sunrise", "Akihabara Tech Tour", "Tsukiji Food Market"]
    }
  ]
};

// Initialize App on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  renderUserHeaderState();
  setupSearchTabs();
  setupSmoothScroll();
});

// Navbar scroll shadow & active links
function setupNavbar() {
  const navbar = document.querySelector('.site-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Check logged in user state in localStorage and render header
function renderUserHeaderState() {
  const authNavContainer = document.getElementById('navbarAuthButtons');
  if (!authNavContainer) return;

  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

  if (currentUser) {
    authNavContainer.innerHTML = `
      <div class="dropdown">
        <button class="btn user-avatar-pill dropdown-toggle border-0" type="button" id="userMenuBtn" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="${currentUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80'}" alt="${currentUser.name}">
          <span>${currentUser.name}</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow-lg border-0 py-2 rounded-3" aria-labelledby="userMenuBtn">
          <li><span class="dropdown-header text-muted small">${currentUser.email}</span></li>
          <li><a class="dropdown-item py-2" href="my-bookings.html"><i class="bi bi-briefcase me-2"></i>My Bookings</a></li>
          <li><a class="dropdown-item py-2" href="profile.html"><i class="bi bi-person me-2"></i>My Profile</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><button class="dropdown-item py-2 text-danger" onclick="logoutUser()"><i class="bi bi-box-arrow-right me-2"></i>Sign Out</button></li>
        </ul>
      </div>
    `;
  } else {
    authNavContainer.innerHTML = `
      <a href="login.html" class="btn btn-outline-custom">Log In</a>
      <a href="signup.html" class="btn btn-primary-custom">Sign Up</a>
    `;
  }
}

// User logout helper
function logoutUser() {
  localStorage.removeItem('currentUser');
  window.location.reload();
}

// Tab switcher for Hero search widget
function setupSearchTabs() {
  const tabButtons = document.querySelectorAll('.search-tab-btn');
  const forms = document.querySelectorAll('.search-panel-form');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetType = btn.dataset.tab;
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      forms.forEach(form => {
        if (form.dataset.type === targetType) {
          form.classList.remove('d-none');
        } else {
          form.classList.add('d-none');
        }
      });
    });
  });
}

// Global booking selection helper - stores item to localStorage and redirects
function selectAndBook(type, itemId) {
  let item = null;
  if (type === 'destination') {
    item = TRAVEL_DATA.destinations.find(d => d.id === itemId);
    if (item) {
      const bookingDraft = {
        type: 'destination',
        id: item.id,
        title: item.name + ', ' + item.country,
        image: item.image,
        basePrice: item.startingPrice,
        price: item.startingPrice,
        rating: item.rating,
        nights: 5,
        guests: 2
      };
      localStorage.setItem('activeBookingDraft', JSON.stringify(bookingDraft));
      window.location.href = 'booking-details.html';
    }
  } else if (type === 'hotel') {
    item = TRAVEL_DATA.hotels.find(h => h.id === itemId);
    if (item) {
      const bookingDraft = {
        type: 'hotel',
        id: item.id,
        title: item.name,
        location: item.location,
        image: item.image,
        basePrice: item.pricePerNight,
        price: item.pricePerNight * 3,
        rating: item.rating,
        nights: 3,
        guests: 2
      };
      localStorage.setItem('activeBookingDraft', JSON.stringify(bookingDraft));
      window.location.href = 'booking-details.html';
    }
  } else if (type === 'package') {
    item = TRAVEL_DATA.packages.find(p => p.id === itemId);
    if (item) {
      const bookingDraft = {
        type: 'package',
        id: item.id,
        title: item.name,
        location: item.destination,
        image: item.image,
        basePrice: item.price,
        price: item.price,
        rating: item.rating,
        duration: item.duration,
        guests: 2
      };
      localStorage.setItem('activeBookingDraft', JSON.stringify(bookingDraft));
      window.location.href = 'booking-details.html';
    }
  }
}

// Smooth anchor scrolling
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

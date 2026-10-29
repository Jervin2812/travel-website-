/**
 * TERRA — Premium Travel Booking Platform
 * Core Application Engine:
 * - Hero Slider (Auto & Manual + Touch)
 * - Card Image Slider (Multi-photo carousels with zero layout shift)
 * - Testimonials Carousel (Auto & Manual + Touch)
 * - Scroll Reveal Animations
 * - Wishlist & Toast Notification System
 * - Global State & Data Store
 */

// Global Travel Data Store with Multi-Image Collections
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
      images: [
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?auto=format&fit=crop&w=800&q=80"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=800&q=80"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      ],
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
      images: [
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80"
      ],
      category: "Island & Culture",
      highlights: ["Ubud Monkey Forest", "Uluwatu Sunset Dance", "Nusa Penida Snorkel", "Luxury Villa Stay"]
    },
    {
      id: "pkg-2",
      name: "European Capitals Discovery",
      destination: "Paris & Switzerland",
      duration: "10 Days / 9 Nights",
      price: 2450,
      rating: 4.92,
      reviewsCount: 520,
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80"
      ],
      category: "Heritage & Scenery",
      highlights: ["Louvre Guided Tour", "Glacier Express First Class", "Versailles Palace", "Lake Geneva Cruise"]
    },
    {
      id: "pkg-3",
      name: "Dubai Golden Sands Luxury",
      destination: "Dubai, UAE",
      duration: "5 Days / 4 Nights",
      price: 980,
      rating: 4.85,
      reviewsCount: 410,
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      ],
      category: "Modern Adventure",
      highlights: ["Burj Khalifa VIP Deck", "Desert Dune Quad Bashing", "Dhow Marina Dinner", "Private Yacht Cruise"]
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
      images: [
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80"
      ],
      category: "Culture & Culinary",
      highlights: ["Shinkansen Bullet Train", "Fushimi Inari Sunrise", "Akihabara Tech Tour", "Tsukiji Food Market"]
    }
  ]
};

// Initialize All Systems on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  renderUserHeaderState();
  setupSearchTabs();
  initHeroSlider();
  initCardSliders();
  initTestimonialCarousel();
  initScrollAnimations();
  initWishlistButtons();
  setupSmoothScroll();
});

// Calculate base relative path for links & assets
function getBasePath() {
  const path = window.location.pathname.replace(/\\/g, '/');
  if (path.includes('/pages/destinations/') || path.includes('/pages/booking/') || path.includes('/pages/auth/') || path.includes('/pages/company/')) {
    return '../../';
  } else if (path.includes('/pages/')) {
    return '../';
  }
  return '';
}

// Sticky Navbar Scroll Elevation
function setupNavbar() {
  const navbar = document.querySelector('.site-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Render Header Authentication / User Avatar
function renderUserHeaderState() {
  const authNavContainer = document.getElementById('navbarAuthButtons');
  if (!authNavContainer) return;

  const base = getBasePath();
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
          <li><a class="dropdown-item py-2" href="${base}pages/booking/my-bookings.html"><i class="bi bi-briefcase me-2 text-primary"></i>My Bookings</a></li>
          <li><a class="dropdown-item py-2" href="${base}pages/auth/profile.html"><i class="bi bi-person me-2 text-primary"></i>My Profile</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><button class="dropdown-item py-2 text-danger" onclick="logoutUser()"><i class="bi bi-box-arrow-right me-2"></i>Sign Out</button></li>
        </ul>
      </div>
    `;
  } else {
    authNavContainer.innerHTML = `
      <a href="${base}pages/auth/login.html" class="btn btn-outline-custom">Log In</a>
      <a href="${base}pages/auth/signup.html" class="btn btn-primary-custom">Sign Up</a>
    `;
  }
}

function logoutUser() {
  localStorage.removeItem('currentUser');
  showToast('Signed Out', 'You have been logged out successfully.', 'info');
  setTimeout(() => window.location.reload(), 800);
}

// =========================================================================
// 1. HERO SLIDER ENGINE (Auto-Rotation, Manual Controls, Touch Swipe)
// =========================================================================
function initHeroSlider() {
  const container = document.querySelector('.hero-slider-container');
  if (!container) return;

  const slides = container.querySelectorAll('.hero-slide');
  const dots = container.querySelectorAll('.hero-dot');
  const prevBtn = container.querySelector('.hero-slider-prev');
  const nextBtn = container.querySelector('.hero-slider-next');

  if (slides.length <= 1) return;

  let currentSlide = 0;
  let autoTimer = null;
  const interval = 5000; // 5 seconds interval

  function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((s, i) => {
      s.classList.toggle('active', i === currentSlide);
    });

    dots.forEach((d, i) => {
      d.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(nextSlide, interval);
  }

  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
  }

  // Next / Prev click
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAuto();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAuto();
    });
  }

  // Dots click
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startAuto();
    });
  });

  // Pause on hover
  container.addEventListener('mouseenter', stopAuto);
  container.addEventListener('mouseleave', startAuto);

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAuto();
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    startAuto();
  }, { passive: true });

  startAuto();
}

// =========================================================================
// 2. CARD IMAGE SLIDER ENGINE (Interactive Carousels inside Cards)
// =========================================================================
function initCardSliders() {
  const cardSliders = document.querySelectorAll('.card-slider-media');

  cardSliders.forEach(slider => {
    const wrapper = slider.querySelector('.card-slides-wrapper');
    const slides = slider.querySelectorAll('.card-slide-img');
    const dots = slider.querySelectorAll('.card-slider-dot');
    const prevBtn = slider.querySelector('.card-slider-prev');
    const nextBtn = slider.querySelector('.card-slider-next');

    if (slides.length <= 1 || !wrapper) return;

    let currentIndex = 0;
    let cardInterval = null;

    function goToSlide(idx) {
      if (idx >= slides.length) currentIndex = 0;
      else if (idx < 0) currentIndex = slides.length - 1;
      else currentIndex = idx;

      wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        goToSlide(currentIndex + 1);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        goToSlide(currentIndex - 1);
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        goToSlide(i);
      });
    });

    // Gentle Auto-rotation on Card Hover
    slider.closest('.travel-card')?.addEventListener('mouseenter', () => {
      cardInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 2400);
    });

    slider.closest('.travel-card')?.addEventListener('mouseleave', () => {
      if (cardInterval) clearInterval(cardInterval);
      goToSlide(0); // return to hero photo smoothly
    });
  });
}

// =========================================================================
// 3. TESTIMONIAL CAROUSEL ENGINE (Auto-scroll & manual touch)
// =========================================================================
function initTestimonialCarousel() {
  const container = document.querySelector('.testimonial-carousel-container');
  if (!container) return;

  const track = container.querySelector('.testimonial-track');
  const slides = container.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');

  if (!track || slides.length === 0) return;

  let currentIdx = 0;
  let autoScrollTimer = null;

  function getVisibleSlidesCount() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1200) return 2;
    return 3;
  }

  function updateCarousel() {
    const visible = getVisibleSlidesCount();
    const maxIdx = Math.max(0, slides.length - visible);
    if (currentIdx > maxIdx) currentIdx = 0;
    if (currentIdx < 0) currentIdx = maxIdx;

    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = 24;
    const offset = currentIdx * (slideWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }

  function nextTestimonial() {
    const visible = getVisibleSlidesCount();
    const maxIdx = Math.max(0, slides.length - visible);
    currentIdx = (currentIdx >= maxIdx) ? 0 : currentIdx + 1;
    updateCarousel();
  }

  function prevTestimonial() {
    const visible = getVisibleSlidesCount();
    const maxIdx = Math.max(0, slides.length - visible);
    currentIdx = (currentIdx <= 0) ? maxIdx : currentIdx - 1;
    updateCarousel();
  }

  function startTimer() {
    stopTimer();
    autoScrollTimer = setInterval(nextTestimonial, 4500);
  }

  function stopTimer() {
    if (autoScrollTimer) clearInterval(autoScrollTimer);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextTestimonial();
      startTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevTestimonial();
      startTimer();
    });
  }

  container.addEventListener('mouseenter', stopTimer);
  container.addEventListener('mouseleave', startTimer);

  // Resize listener
  window.addEventListener('resize', updateCarousel);

  // Touch swipe support
  let touchStartX = 0;
  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopTimer();
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextTestimonial();
      else prevTestimonial();
    }
    startTimer();
  }, { passive: true });

  startTimer();
}

// =========================================================================
// 4. SCROLL ENTRANCE ANIMATIONS (IntersectionObserver)
// =========================================================================
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Animated Numbers Counter trigger if present
        if (entry.target.classList.contains('stat-number') && !entry.target.dataset.counted) {
          animateCounter(entry.target);
        }
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal, .stat-number').forEach(el => observer.observe(el));
}

// Animated Counter for Stat Numbers
function animateCounter(el) {
  el.dataset.counted = 'true';
  const target = parseInt(el.dataset.target || el.textContent.replace(/\D/g, ''), 10);
  const suffix = el.dataset.suffix || '+';
  if (!target) return;

  let current = 0;
  const step = Math.max(1, Math.floor(target / 40));
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target.toLocaleString() + suffix;
      clearInterval(timer);
    } else {
      el.textContent = current.toLocaleString() + suffix;
    }
  }, 25);
}

// =========================================================================
// 5. WISHLIST & INTERACTIVE TOASTS
// =========================================================================
function initWishlistButtons() {
  document.querySelectorAll('.card-wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const icon = btn.querySelector('i');
      btn.classList.toggle('active');

      if (btn.classList.contains('active')) {
        if (icon) icon.className = 'bi bi-heart-fill text-danger';
        showToast('Saved to Wishlist', 'Item has been added to your favorites.', 'heart');
      } else {
        if (icon) icon.className = 'bi bi-heart';
        showToast('Removed from Wishlist', 'Item was removed from your favorites.', 'info');
      }
    });
  });
}

function showToast(title, message, iconType = 'check') {
  let container = document.querySelector('.toast-container-custom');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container-custom';
    document.body.appendChild(container);
  }

  let iconHtml = '<i class="bi bi-check-circle-fill text-success fs-5"></i>';
  if (iconType === 'heart') iconHtml = '<i class="bi bi-heart-fill text-danger fs-5"></i>';
  if (iconType === 'info') iconHtml = '<i class="bi bi-info-circle-fill text-primary fs-5"></i>';

  const toast = document.createElement('div');
  toast.className = 'custom-toast';
  toast.innerHTML = `
    ${iconHtml}
    <div>
      <div class="fw-bold">${title}</div>
      <div class="small text-muted">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Search Tab Switcher
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

// Global booking selection helper
function selectAndBook(type, itemId) {
  const base = getBasePath();
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
      window.location.href = `${base}pages/booking/booking-details.html`;
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
      window.location.href = `${base}pages/booking/booking-details.html`;
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
      window.location.href = `${base}pages/booking/booking-details.html`;
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

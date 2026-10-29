/**
 * TERRA — Booking & Checkout Engine
 * Manages Step 1 (Traveler Details) -> Step 2 (Checkout & Payment) -> Step 3 (Confirmation)
 * Features live simulated credit card formatting, promo discounts, and local storage itineraries.
 */

document.addEventListener('DOMContentLoaded', () => {
  initBookingStep();
  initCheckoutStep();
  initConfirmationStep();
  initMyBookingsPage();
});

// Helper to fetch current active draft or default sample
function getActiveBookingDraft() {
  const draft = JSON.parse(localStorage.getItem('activeBookingDraft') || 'null');
  if (draft) return draft;

  // Fallback demo draft
  return {
    type: 'hotel',
    id: 'hotel-1',
    title: 'Amanjiwo Luxury Sanctuary',
    location: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    basePrice: 280,
    price: 840,
    rating: 4.95,
    nights: 3,
    guests: 2
  };
}

// -------------------------------------------------------------
// STEP 1: Traveler Information
// -------------------------------------------------------------
function initBookingStep() {
  const form = document.getElementById('travelerInfoForm');
  const summaryContainer = document.getElementById('bookingItemSummary');
  if (!form || !summaryContainer) return;

  const draft = getActiveBookingDraft();
  const tax = Math.round(draft.price * 0.1);
  const total = draft.price + 45 + tax;

  // Populate Summary
  summaryContainer.innerHTML = `
    <div class="d-flex gap-3 align-items-center mb-3 pb-3 border-bottom">
      <img src="${draft.image}" alt="${draft.title}" class="rounded-3 shadow-xs" style="width: 85px; height: 85px; object-fit: cover;">
      <div>
        <span class="badge bg-primary-subtle text-primary mb-1">${(draft.type || 'EXPERIENCE').toUpperCase()}</span>
        <h6 class="mb-1 font-weight-bold text-dark">${draft.title}</h6>
        <p class="small text-muted mb-0"><i class="bi bi-geo-alt text-danger"></i> ${draft.location || 'Featured Luxury Stay'}</p>
      </div>
    </div>
    <div class="price-item-row">
      <span>Base Rate (${draft.nights || 3} nights x ${draft.guests || 2} guests)</span>
      <span>$${draft.price}</span>
    </div>
    <div class="price-item-row">
      <span>Service & Cleanliness Hospitality</span>
      <span>$45</span>
    </div>
    <div class="price-item-row">
      <span>Taxes & Tourism Permits (10%)</span>
      <span>$${tax}</span>
    </div>
    <div class="price-item-row total-row">
      <span>Total Amount</span>
      <span class="text-primary">$${total}</span>
    </div>
    <div class="mt-3 p-2 bg-light rounded text-center small text-muted">
      <i class="bi bi-shield-check text-success me-1"></i> Best Rate Guaranteed &bull; Free Cancellation
    </div>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    const travelerData = {
      firstName: document.getElementById('firstName').value.trim(),
      lastName: document.getElementById('lastName').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      specialRequests: document.getElementById('specialRequests') ? document.getElementById('specialRequests').value.trim() : '',
      dates: document.getElementById('travelDates') ? document.getElementById('travelDates').value : 'Nov 12 - Nov 15, 2026',
      totalCost: total
    };

    const bookingPayload = {
      ...draft,
      traveler: travelerData
    };

    localStorage.setItem('activeBookingPayload', JSON.stringify(bookingPayload));
    window.location.href = 'checkout.html';
  });
}

// -------------------------------------------------------------
// STEP 2: Checkout & Payment with Live Card Simulation
// -------------------------------------------------------------
function initCheckoutStep() {
  const checkoutForm = document.getElementById('checkoutPaymentForm');
  const checkoutSummary = document.getElementById('checkoutSummaryBox');
  if (!checkoutForm || !checkoutSummary) return;

  const payload = JSON.parse(localStorage.getItem('activeBookingPayload') || 'null') || {
    ...getActiveBookingDraft(),
    traveler: { firstName: "Alex", lastName: "Morgan", email: "alex.morgan@example.com", totalCost: 969, dates: "Nov 15 - Nov 21, 2026" }
  };

  checkoutSummary.innerHTML = `
    <div class="d-flex gap-3 align-items-center mb-3 pb-3 border-bottom">
      <img src="${payload.image}" alt="${payload.title}" class="rounded-3 shadow-xs" style="width: 80px; height: 80px; object-fit: cover;">
      <div>
        <h6 class="mb-1 font-weight-bold">${payload.title}</h6>
        <p class="small text-muted mb-0">Guest: ${payload.traveler.firstName} ${payload.traveler.lastName}</p>
        <span class="badge bg-light text-dark border mt-1">${payload.traveler.dates}</span>
      </div>
    </div>
    <div class="price-item-row">
      <span>Subtotal</span>
      <span>$${payload.traveler.totalCost}</span>
    </div>
    <div class="price-item-row text-success" id="promoDiscountRow" style="display: none;">
      <span>Promo Code Discount (20% OFF)</span>
      <span id="promoDiscountVal">-$0</span>
    </div>
    <div class="price-item-row total-row">
      <span>Amount to Pay</span>
      <span class="text-primary" id="checkoutFinalTotal">$${payload.traveler.totalCost}</span>
    </div>
  `;

  // Promo Code handling
  const promoBtn = document.getElementById('applyPromoBtn');
  const promoInput = document.getElementById('promoCodeInput');
  let discount = 0;

  if (promoBtn && promoInput) {
    promoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      const alertMsg = document.getElementById('promoAlert');
      if (code === 'TRAVEL20' || code === 'TERRA20') {
        discount = Math.round(payload.traveler.totalCost * 0.2);
        document.getElementById('promoDiscountRow').style.display = 'flex';
        document.getElementById('promoDiscountVal').textContent = `-$${discount}`;
        document.getElementById('checkoutFinalTotal').textContent = `$${payload.traveler.totalCost - discount}`;
        if (alertMsg) alertMsg.innerHTML = '<span class="text-success small fw-bold"><i class="bi bi-check-circle-fill me-1"></i> Coupon "TRAVEL20" applied! 20% discount saved.</span>';
      } else {
        if (alertMsg) alertMsg.innerHTML = '<span class="text-danger small"><i class="bi bi-exclamation-circle-fill me-1"></i> Invalid coupon code. Try entering "TRAVEL20".</span>';
      }
    });
  }

  // Payment method selection cards
  const methodCards = document.querySelectorAll('.payment-method-card');
  methodCards.forEach(card => {
    card.addEventListener('click', () => {
      methodCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  // Live Card Preview formatting
  const cardHolderInput = document.getElementById('cardHolder');
  const cardNumberInput = document.getElementById('cardNumber');
  const cardExpInput = document.getElementById('cardExp');

  const previewHolder = document.getElementById('previewCardHolder');
  const previewNumber = document.getElementById('previewCardNumber');
  const previewExp = document.getElementById('previewCardExp');

  if (cardHolderInput && previewHolder) {
    cardHolderInput.addEventListener('input', (e) => {
      previewHolder.textContent = e.target.value.toUpperCase() || 'ALEX MORGAN';
    });
  }

  if (cardNumberInput && previewNumber) {
    cardNumberInput.addEventListener('input', (e) => {
      previewNumber.textContent = e.target.value || '•••• •••• •••• 4242';
    });
  }

  if (cardExpInput && previewExp) {
    cardExpInput.addEventListener('input', (e) => {
      previewExp.textContent = e.target.value || '12/28';
    });
  }

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Generate unique random booking reference
    const bookingRef = 'TRV-' + Math.floor(100000 + Math.random() * 900000);
    const finalBooking = {
      reference: bookingRef,
      bookingDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Confirmed',
      itemTitle: payload.title,
      itemLocation: payload.location || 'Worldwide Luxury Destination',
      itemImage: payload.image,
      travelerName: `${payload.traveler.firstName} ${payload.traveler.lastName}`,
      travelerEmail: payload.traveler.email,
      travelDates: payload.traveler.dates || 'Nov 12 - Nov 18, 2026',
      totalPaid: payload.traveler.totalCost - discount
    };

    // Save to user_bookings in localStorage
    const existingBookings = JSON.parse(localStorage.getItem('user_bookings') || '[]');
    existingBookings.unshift(finalBooking);
    localStorage.setItem('user_bookings', JSON.stringify(existingBookings));

    // Save for confirmation receipt
    localStorage.setItem('latestConfirmedBooking', JSON.stringify(finalBooking));

    window.location.href = 'booking-confirmation.html';
  });
}

// -------------------------------------------------------------
// STEP 3: Booking Confirmation
// -------------------------------------------------------------
function initConfirmationStep() {
  const confContainer = document.getElementById('confirmationDisplayBox');
  if (!confContainer) return;

  const booking = JSON.parse(localStorage.getItem('latestConfirmedBooking') || 'null') || {
    reference: 'TRV-482910',
    bookingDate: 'October 29, 2026',
    status: 'Confirmed',
    itemTitle: 'Amanjiwo Luxury Sanctuary',
    itemLocation: 'Bali, Indonesia',
    itemImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    travelerName: 'Alex Morgan',
    travelerEmail: 'alex.morgan@example.com',
    travelDates: 'Nov 12 - Nov 15, 2026',
    totalPaid: 969
  };

  confContainer.innerHTML = `
    <div class="card border-0 shadow-xl rounded-4 overflow-hidden mb-4 reveal active">
      <div class="bg-primary text-white p-4 p-md-5 text-center position-relative">
        <div class="rounded-circle bg-white text-primary mx-auto d-flex align-items-center justify-content-center mb-3 shadow" style="width: 72px; height: 72px; font-size: 2.2rem;">
          <i class="bi bi-check2"></i>
        </div>
        <h2 class="text-white font-weight-bold mb-2">Reservation Confirmed!</h2>
        <p class="text-white-50 mb-0">Your digital e-ticket and booking receipt have been issued to <strong>${booking.travelerEmail}</strong></p>
      </div>
      <div class="card-body p-4 p-md-5">
        <div class="row g-4 align-items-center border-bottom pb-4 mb-4">
          <div class="col-12 col-md-3">
            <img src="${booking.itemImage}" alt="${booking.itemTitle}" class="rounded-3 w-100 shadow-sm" style="height: 130px; object-fit: cover;">
          </div>
          <div class="col-12 col-md-9">
            <div class="d-flex align-items-center gap-2 mb-2">
              <span class="badge bg-success text-white px-3 py-1 rounded-pill"><i class="bi bi-shield-check me-1"></i> ${booking.status}</span>
              <span class="badge bg-light text-muted border">Instant Check-in Ready</span>
            </div>
            <h3 class="font-weight-bold mb-1">${booking.itemTitle}</h3>
            <p class="text-muted mb-0"><i class="bi bi-geo-alt-fill text-danger me-1"></i> ${booking.itemLocation}</p>
          </div>
        </div>
        <div class="row g-3 py-2">
          <div class="col-6 col-md-3">
            <span class="text-muted small d-block">Booking Reference</span>
            <strong class="text-primary font-monospace fs-5">${booking.reference}</strong>
          </div>
          <div class="col-6 col-md-3">
            <span class="text-muted small d-block">Lead Traveler</span>
            <strong class="fs-6">${booking.travelerName}</strong>
          </div>
          <div class="col-6 col-md-3">
            <span class="text-muted small d-block">Itinerary Dates</span>
            <strong class="fs-6">${booking.travelDates}</strong>
          </div>
          <div class="col-6 col-md-3">
            <span class="text-muted small d-block">Total Paid</span>
            <strong class="text-success fs-5">$${booking.totalPaid}</strong>
          </div>
        </div>
        <div class="alert alert-info mt-4 mb-0 d-flex align-items-center gap-3 rounded-3">
          <i class="bi bi-info-circle-fill fs-3 text-primary"></i>
          <span class="small">This is a verified frontend demonstration. No real credit card charges occurred. Your reservation reference is stored securely in this browser session.</span>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// My Bookings Dashboard
// -------------------------------------------------------------
function initMyBookingsPage() {
  const container = document.getElementById('myBookingsList');
  if (!container) return;

  let bookings = JSON.parse(localStorage.getItem('user_bookings') || 'null');

  // Provide realistic trips if first time opening
  if (!bookings || bookings.length === 0) {
    bookings = [
      {
        reference: 'TRV-894210',
        bookingDate: 'Oct 15, 2026',
        status: 'Upcoming',
        itemTitle: 'Le Grand Parisian Palace',
        itemLocation: 'Paris, France',
        itemImage: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
        travelerName: 'Jervin Raj',
        travelDates: 'Dec 02 - Dec 07, 2026',
        totalPaid: 1020
      },
      {
        reference: 'TRV-310574',
        bookingDate: 'Aug 22, 2026',
        status: 'Completed',
        itemTitle: 'Swiss Alps Winter Retreat',
        itemLocation: 'Zermatt, Switzerland',
        itemImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
        travelerName: 'Jervin Raj',
        travelDates: 'Sep 01 - Sep 06, 2026',
        totalPaid: 1450
      }
    ];
    localStorage.setItem('user_bookings', JSON.stringify(bookings));
  }

  container.innerHTML = bookings.map(b => `
    <div class="card border-0 shadow-sm rounded-4 p-4 mb-3 reveal active">
      <div class="row g-3 align-items-center">
        <div class="col-12 col-md-3">
          <img src="${b.itemImage}" alt="${b.itemTitle}" class="rounded-3 w-100 shadow-xs" style="height: 125px; object-fit: cover;">
        </div>
        <div class="col-12 col-md-6">
          <div class="d-flex align-items-center gap-2 mb-1">
            <span class="badge ${b.status === 'Completed' ? 'bg-secondary' : 'bg-primary'} rounded-pill">${b.status}</span>
            <span class="text-muted small">Ref: <strong class="font-monospace text-dark">${b.reference}</strong></span>
          </div>
          <h5 class="mb-1 font-weight-bold">${b.itemTitle}</h5>
          <p class="text-muted small mb-2"><i class="bi bi-geo-alt-fill text-danger me-1"></i> ${b.itemLocation}</p>
          <div class="small text-secondary"><i class="bi bi-calendar3 me-1"></i> ${b.travelDates} &bull; Guest: ${b.travelerName}</div>
        </div>
        <div class="col-12 col-md-3 text-md-end">
          <div class="fs-4 font-weight-bold text-dark mb-2">$${b.totalPaid}</div>
          <button class="btn btn-outline-custom btn-sm" onclick="showTicketModal('${b.reference}', '${b.itemTitle}')">
            <i class="bi bi-ticket-perforated me-1"></i> View Ticket
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function showTicketModal(ref, title) {
  alert(`Displaying Electronic Boarding Voucher for:\n\nReference: ${ref}\nDestination: ${title}\n\nStatus: Confirmed & Paid`);
}

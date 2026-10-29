# Terra — Premium Worldwide Travel Booking Platform (Frontend)

Terra is a modern, responsive travel booking website designed to match the visual identity and user experience of premier international platforms like Airbnb, Booking.com, and Expedia. Built exclusively using **HTML5, CSS3, Bootstrap 5, and Vanilla JavaScript**.

---

## 🌟 Highlights & Features

1. **Modern Visual Identity**:
   - Clean aesthetic with deep navy blue (`#0f172a`), sky blue (`#0284c7`), and warm golden accents.
   - Professional 8px grid system, rounded cards, elevated drop-shadows, and `Inter` typography.
   - High-definition travel photography covering destinations across Europe, Asia, and the Middle East.

2. **18 Complete Responsive Pages**:
   - **Homepage (`index.html`)**: Hero with tabbed search (Stays, Flights, Packages), Popular Destinations, Recommended 5-Star Hotels, Featured Curated Packages, Why Choose Us, Travel Inspiration editorial cards, Testimonials, and Newsletter.
   - **Explore Destinations (`destinations.html`)**: Category filters (Tropical, Cultural, Alpine, Desert) and quick search.
   - **Search Results (`search-results.html`)**: Real-time filtering by keyword, category, price range, active filter chips with removal, and multi-criteria sorting.
   - **Destination Details (`destination-details.html`)**: Multi-image gallery, travel facts, attractions, location map card, and reservation widget.
   - **Hotel Details (`hotel-details.html`)**: Suite selection, amenities grid, verified reviews, and price calculation.
   - **Flight Search (`flights.html`)**: Interactive flight deals (Air France, Emirates, Swiss), stops, baggage, and booking.
   - **Tour Packages (`packages.html`)**: Curated multi-day itineraries with duration badges and pricing.
   - **Package Details (`package-details.html`)**: Day-by-day collapsible itinerary, inclusions/exclusions, and booking calculator.
   - **Complete 3-Step Simulated Booking Flow**:
     - **Step 1: Traveler Details (`booking-details.html`)**: Form validation, special requests, and itemized subtotal.
     - **Step 2: Checkout & Payment Demo (`checkout.html`)**: Payment method cards (Card, Apple Pay, PayPal), simulated card fields, promo code discount (`TRAVEL20`), and order summary.
     - **Step 3: Booking Confirmation (`booking-confirmation.html`)**: Generated reference (`TRV-XXXXXX`), digital e-ticket, and printable receipt.
   - **Authentication Demo**:
     - **Sign In (`login.html`)** & **Sign Up (`signup.html`)**: Password visibility toggles, validation, and simulated login state.
     - Dynamic navbar state: Switches from "Log In / Sign Up" buttons to user avatar pill with dropdown when logged in.
   - **User Dashboard (`my-bookings.html`)**: View active and completed itineraries with references and total amounts.
   - **User Profile (`profile.html`)**: Edit profile data saved to `localStorage`.
   - **Company & Support (`about.html`, `contact.html`, `faq.html`)**: Verified metrics, interactive contact form, worldwide office hubs, and searchable FAQ accordion.

---

## 📂 Categorized Project Architecture

```
travel-booking-frontend/
├── index.html                                 # Flagship Homepage
├── pages/
│   ├── destinations/                          # Explore & Travel Options
│   │   ├── destinations.html                  # Explore Destinations
│   │   ├── destination-details.html           # Destination Overview & Gallery
│   │   ├── search-results.html                # Real-time Filter & Search Engine
│   │   ├── hotel-details.html                 # Boutique Hotel Suites & Amenities
│   │   ├── flights.html                       # Global Flight Deals & Transit
│   │   ├── packages.html                      # Curated Tour Packages
│   │   └── package-details.html               # Multi-day Itineraries & Details
│   ├── booking/                               # 3-Step Simulated Booking Flow
│   │   ├── booking-details.html               # Step 1: Traveler Details Form
│   │   ├── checkout.html                      # Step 2: Payment UI Demo & Promo Code
│   │   ├── booking-confirmation.html          # Step 3: Confirmed Voucher & Reference
│   │   └── my-bookings.html                   # User Itineraries Dashboard
│   ├── auth/                                  # Authentication & User State
│   │   ├── login.html                         # Sign In with Validation & Password Toggle
│   │   ├── signup.html                        # Registration & Member State
│   │   └── profile.html                       # Profile Editor & Preferences
│   └── company/                               # Information & Support Desks
│       ├── about.html                         # Story, Mission & Metrics
│       ├── contact.html                       # Contact Form & Global Office Hubs
│       └── faq.html                           # Searchable Help Center Accordion
├── assets/
│   ├── css/
│   │   ├── style.css                          # Design System, Palette & Tokens
│   │   └── responsive.css                     # Responsive Media Queries (Mobile to Desktop)
│   ├── js/
│   │   ├── main.js                            # Global State, Navbar, Data Store
│   │   ├── search.js                          # Dynamic Filters, Slider, Chips & Sort
│   │   ├── booking.js                         # Booking Engine, Prices & LocalStorage
│   │   └── auth-demo.js                       # Simulated Auth & Profile Management
│   └── images/
│       └── .gitkeep
├── DESIGN-SYSTEM.md
├── PROJECT-PLAN.md
└── README.md
```

---

## 🚀 How to Run Locally

1. Open this project directory in **Visual Studio Code**.
2. Right-click on `index.html` and click **"Open with Live Server"** (or open `index.html` directly in any web browser).
3. No build tools, Node.js, npm, or database configurations required.

---

## 🧪 Interactive Demo Features to Test

- **Hero Search Widget**: Switch between Stays, Flights, and Packages tabs.
- **Search Filtering**: Open `search-results.html`, use the slider to set a budget, or filter by category.
- **Booking Flow**: Click "Book Now" on any hotel, package, or destination. Complete Step 1 & Step 2 to generate your confirmed reference code!
- **Promo Code**: On checkout, enter `TRAVEL20` to receive an instant 20% discount.
- **Authentication**: Sign in on `login.html` to see the top navbar update with your user profile pill and dropdown menu.

---

## 🔒 Demo Notice
This project is an advanced frontend prototype. All bookings, payments, and user credentials are simulated in browser `localStorage`. No actual payments are processed or live financial data stored.

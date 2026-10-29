/**
 * TERRA — Comprehensive Multi-Language (i18n) Engine
 * Supported Languages: English (en), தமிழ் (ta), Español (es), Français (fr)
 * Features:
 * - Live UI translation across headings, buttons, tabs, inputs, filters, and cards
 * - Preserves inner icons (<i>, <svg>) while translating text nodes
 * - Bi-directional multi-language translation and state persistence in localStorage
 */

const TERRA_PHRASES = [
  // Navigation
  { en: "Home", ta: "முகப்பு", es: "Inicio", fr: "Accueil" },
  { en: "Destinations", ta: "சுற்றுலா இடங்கள்", es: "Destinos", fr: "Destinations" },
  { en: "Flights", ta: "விமானங்கள்", es: "Vuelos", fr: "Vols" },
  { en: "Hotels", ta: "விடுதிகள்", es: "Hoteles", fr: "Hôtels" },
  { en: "Tour Packages", ta: "டூர் பேக்கேஜ்கள்", es: "Paquetes Turísticos", fr: "Circuits" },
  { en: "About", ta: "எங்களை பற்றி", es: "Nosotros", fr: "À Propos" },
  { en: "Contact", ta: "தொடர்பு கொள்ள", es: "Contacto", fr: "Contact" },
  { en: "Log In", ta: "உள்நுழைக", es: "Iniciar Sesión", fr: "Connexion" },
  { en: "Sign Up", ta: "பதிவு செய்க", es: "Registrarse", fr: "S'inscrire" },
  { en: "My Bookings", ta: "என் முன்பதிவுகள்", es: "Mis Reservas", fr: "Mes Réservations" },
  { en: "Profile", ta: "சுயவிவரம்", es: "Perfil", fr: "Profil" },
  { en: "Sign Out", ta: "வெளியேறு", es: "Cerrar Sesión", fr: "Déconnexion" },

  // Search Tabs & Hero
  { en: "Stays & Hotels", ta: "தங்கும் விடுதிகள்", es: "Alojamientos", fr: "Hôtels & Séjours" },
  { en: "Search Stays", ta: "விடுதிகளை தேடுக", es: "Buscar Alojamientos", fr: "Rechercher des Hôtels" },
  { en: "Find Flights", ta: "விமானம் தேடுக", es: "Buscar Vuelos", fr: "Trouver des Vols" },
  { en: "Browse Expeditions", ta: "டூர் பேக்கேஜ்கள்", es: "Explorar Paquetes", fr: "Parcourir les Circuits" },
  { en: "Search", ta: "தேடுக", es: "Buscar", fr: "Rechercher" },
  { en: "Discover the World, Your Way.", ta: "உலகை உங்கள் விருப்பப்படி கொண்டாடுங்கள்.", es: "Descubre el Mundo a tu Manera.", fr: "Découvrez le Monde à Votre Façon." },
  { en: "Discover the World,\nYour Way.", ta: "உலகை உங்கள் விருப்பப்படி கொண்டாடுங்கள்.", es: "Descubre el Mundo a tu Manera.", fr: "Découvrez le Monde à Votre Façon." },
  { en: "Bespoke Worldwide Expeditions", ta: "சிறப்பு உலகளாவிய பயணங்கள்", es: "Expediciones Exclusivas", fr: "Expéditions Uniques" },
  { en: "Explore Destinations", ta: "இடங்களை ஆராய்க", es: "Explorar Destinos", fr: "Explorer les Destinations" },
  { en: "Curated Packages", ta: "சிறப்பு பேக்கேஜ்கள்", es: "Paquetes Exclusivos", fr: "Circuits Exclusifs" },
  { en: "Alpine Luxury Sanctuaries", ta: "ஆல்ப்ஸ் சொகுசு விடுதிகள்", es: "Santuarios Alpinos", fr: "Sanctuaires Alpins" },
  { en: "View Alpine Lodges", ta: "மலை விடுதிகளை காண்க", es: "Ver Alojamientos", fr: "Voir les Chalets" },
  { en: "Compare Stays", ta: "விடுதிகளை ஒப்பிடுக", es: "Comparar Estancias", fr: "Comparer les Séjours" },
  { en: "Iconic Capital Escapes", ta: "பிரபல நகர பயணங்கள்", es: "Escapadas a Capitales", fr: "Escapades dans les Capitales" },
  { en: "View European Tour", ta: "ஐரோப்பிய பயணத்தை காண்க", es: "Ver Tour Europeo", fr: "Voir le Circuit Européen" },
  { en: "Search Flights", ta: "விமானங்களை தேடுக", es: "Buscar Vuelos", fr: "Rechercher des Vols" },

  // Search Fields & Labels
  { en: "Destination", ta: "இடம்", es: "Destino", fr: "Destination" },
  { en: "Where are you going? (e.g. Bali, Paris)", ta: "எங்கே செல்ல விரும்புகிறீர்கள்? (எ.கா. பாலி, பாரிஸ்)", es: "¿A dónde vas? (ej. Bali, París)", fr: "Où allez-vous ? (ex. Bali, Paris)" },
  { en: "Check-in", ta: "வருகை", es: "Llegada", fr: "Arrivée" },
  { en: "Check-out", ta: "வெளியேறுதல்", es: "Salida", fr: "Départ" },
  { en: "Travelers & Rooms", ta: "பயணிகள் & அறைகள்", es: "Viajeros y Habitaciones", fr: "Voyageurs et Chambres" },
  { en: "Flying From", ta: "புறப்படும் இடம்", es: "Origen", fr: "Départ de" },
  { en: "Flying To", ta: "சேருமிடம்", es: "Destino", fr: "Arrivée à" },
  { en: "Departure", ta: "புறப்படும் தேதி", es: "Ida", fr: "Date de départ" },
  { en: "Return", ta: "திரும்பும் தேதி", es: "Vuelta", fr: "Date de retour" },
  { en: "Cabin Class", ta: "வகுப்பு", es: "Clase", fr: "Classe" },
  { en: "Trip Duration", ta: "பயண காலம்", es: "Duración", fr: "Durée" },
  { en: "All Durations", ta: "அனைத்து கால அளவுகள்", es: "Todas las duraciones", fr: "Toutes les durées" },
  { en: "Economy", ta: "பொருளாதார வகுப்பு", es: "Económica", fr: "Économique" },
  { en: "Premium Economy", ta: "பிரீமியம் பொருளாதாரம்", es: "Premium Economy", fr: "Premium Économie" },
  { en: "Business Class", ta: "வணிக வகுப்பு", es: "Clase Ejecutiva", fr: "Classe Affaires" },
  { en: "First Class", ta: "முதல் வகுப்பு", es: "Primera Clase", fr: "Première Classe" },

  // Section Headers
  { en: "Popular Destinations", ta: "பிரபலமான சுற்றுலா இடங்கள்", es: "Destinos Populares", fr: "Destinations Populaires" },
  { en: "Handpicked wonders of the world favored by discerning travelers. Hover to preview galleries.", ta: "பயணிகள் விரும்பும் உலகத்தரம் வாய்ந்த சுற்றுலா இடங்கள். படங்களை காண தொடவும்.", es: "Maravillas del mundo seleccionadas para viajeros exigentes.", fr: "Merveilles du monde sélectionnées pour les voyageurs exigeants." },
  { en: "Recommended Hotels", ta: "பரிந்துரைக்கப்பட்ட விடுதிகள்", es: "Hoteles Recomendados", fr: "Hôtels Recommandés" },
  { en: "Experience unmatched comfort, breathtaking views, and verified 5-star service. Use arrows or hover to browse suites.", ta: "உயர் தரம், அற்புதமான காட்சிகள் மற்றும் சரிபார்க்கப்பட்ட 5-நட்சத்திர சொகுசு சேவை.", es: "Confort inigualable, vistas impresionantes y servicio de 5 estrellas verificado.", fr: "Confort inégalé, vues imprenables et service 5 étoiles vérifié." },
  { en: "Featured Tour Packages", ta: "சிறப்பு டூர் பேக்கேஜ்கள்", es: "Paquetes Turísticos Destacados", fr: "Circuits Touristiques Recommandés" },
  { en: "Expertly planned routes, exclusive local guides, and effortless travel logistics.", ta: "திட்டமிடப்பட்ட பாதைகள், பிரத்யேக வழிகாட்டிகள் மற்றும் முழுமையான போக்குவரத்து வசதிகள்.", es: "Rutas planificadas por expertos, guías locales exclusivos y logística sin esfuerzo.", fr: "Itinéraires planifiés par des experts, guides locaux exclusifs et logistique sans effort." },
  { en: "Why Travel With Terra", ta: "ஏன் டெர்ரா உடன் பயணிக்க வேண்டும்?", es: "¿Por Qué Elegir Terra?", fr: "Pourquoi Voyager Avec Terra ?" },
  { en: "We combine bespoke luxury, transparent pricing, and 24/7 global concierges to elevate every journey.", ta: "தனிப்பயனாக்கப்பட்ட சொகுசு, வெளிப்படையான விலை மற்றும் 24/7 உலகளாவிய வழிகாட்டுதல்.", es: "Combinamos lujo personalizado, precios transparentes y atención 24/7.", fr: "Nous combinons luxe sur mesure, prix transparents et conciergerie 24/7." },
  { en: "Loved by Travelers Worldwide", ta: "சர்வதேச பயணிகளின் மதிப்புரைகள்", es: "Elogiado por Viajeros de Todo el Mundo", fr: "Approuvé par les Voyageurs du Monde Entier" },
  { en: "Over 45,000 satisfied explorers booked their unforgettable journeys with Terra.", ta: "45,000-க்கும் மேற்பட்ட பயணிகள் டெர்ரா மூலம் தங்களின் மறக்க முடியாத பயணங்களை பதிவு செய்துள்ளனர்.", es: "Más de 45.000 exploradores reservaron sus viajes con Terra.", fr: "Plus de 45 000 explorateurs ont réservé leurs voyages avec Terra." },
  { en: "Travel Inspiration", ta: "பயண உத்வேகம்", es: "Inspiración para Viajar", fr: "Inspiration de Voyage" },
  { en: "Captivating stories and insider guides written by our seasoned travel curators.", ta: "எங்கள் பயண நிபுணர்களால் எழுதப்பட்ட சுவாரஸ்யமான கதைகள் மற்றும் வழிகாட்டிகள்.", es: "Historias cautivadoras y guías exclusivas escritas por expertos.", fr: "Histoires captivantes et guides rédigés par nos experts en voyage." },
  { en: "Get $100 Off Your First Trip", ta: "உங்கள் முதல் பயணத்திற்கு $100 தள்ளுபடி பெறுங்கள்", es: "Obtén $100 de Descuento en tu Primer Viaje", fr: "Obtenez 100 $ de Réduction sur Votre Premier Voyage" },
  { en: "Join over 150,000 travelers receiving secret flash sales, destination guides, and private flight deals each week.", ta: "ஒவ்வொரு வாரமும் பிரத்யேக சலுகைகள் மற்றும் வழிகாட்டிகளைப் பெற 150,000+ பயணிகளுடன் இணையுங்கள்.", es: "Únete a más de 150.000 viajeros que reciben ofertas exclusivas cada semana.", fr: "Rejoignez plus de 150 000 voyageurs recevant des offres exclusives chaque semaine." },

  // Why Choose Us
  { en: "Transparent Luxury Pricing", ta: "வெளிப்படையான சொகுசு விலை", es: "Precios Transparentes de Lujo", fr: "Tarifs de Luxe Transparents" },
  { en: "No hidden resort charges or surprise booking commissions. What you see is precisely what you pay.", ta: "மறைக்கப்பட்ட கட்டணங்கள் ஏதுமில்லை. நீங்கள் பார்ப்பது மட்டுமே உங்கள் கட்டணம்.", es: "Sin cargos ocultos ni sorpresas. Lo que ves es exactamente lo que pagas.", fr: "Aucun frais caché. Ce que vous voyez est exactement ce que vous payez." },
  { en: "Handpicked Properties", ta: "தேர்ந்தெடுக்கப்பட்ட விடுதிகள்", es: "Propiedades Exclusivas", fr: "Propriétés Sélectionnées" },
  { en: "Every villa, suite, and eco-retreat is personally vetted for architectural style, privacy, and impeccable service.", ta: "ஒவ்வொரு வில்லாவும் தரம், தனிமை மற்றும் உன்னத சேவைக்காக நேரில் ஆய்வு செய்யப்படுகிறது.", es: "Cada villa y suite es inspeccionada personalmente por su estilo, privacidad y servicio impecable.", fr: "Chaque villa et suite est inspectée pour son style, son intimité et son service impeccable." },
  { en: "24/7 Dedicated Concierge", ta: "24/7 உடனடி சேவை", es: "Conserjería Dedicada 24/7", fr: "Conciergerie Dédiée 24/7" },
  { en: "From private yacht charters to Michelin reservations, our global concierge team manages every single detail.", ta: "தனி படகு சவாரி முதல் சிறப்பு உணவகங்கள் வரை உங்கள் அனைத்து தேவைகளையும் நாங்கள் கவனிக்கிறோம்.", es: "Desde yates privados hasta reservas exclusivas, nuestro equipo gestiona cada detalle.", fr: "Du yacht privé aux réservations étoilées, notre équipe s'occupe de chaque détail." },
  { en: "Flexible Itineraries", ta: "நெகிழ்வான பயணத் திட்டம்", es: "Itinerarios Flexibles", fr: "Itinéraires Flexibles" },
  { en: "Life happens. Enjoy penalty-free date adjustments and transparent cancellations on premier stays.", ta: "பயண தேதிகளை எவ்வித அபராதமும் இன்றி மாற்றிக்கொள்ளும் வசதி உண்டு.", es: "Disfruta de cambios de fecha sin penalizaciones y cancelaciones claras.", fr: "Profitez de modifications de dates sans frais et d'annulations flexibles." },

  // Card Buttons & Badges
  { en: "View Details", ta: "விவரங்களை காண்க", es: "Ver Detalles", fr: "Voir les Détails" },
  { en: "Book Tour", ta: "டூர் பதிவு செய்", es: "Reservar Tour", fr: "Réserver le Circuit" },
  { en: "Full Itinerary", ta: "முழு அட்டவணை", es: "Itinerario Completo", fr: "Itinéraire Complet" },
  { en: "Book Now", ta: "இப்போதே பதிவு செய்", es: "Reservar Ahora", fr: "Réserver" },
  { en: "Select Flight", ta: "விமானம் தேர்வு செய்", es: "Seleccionar Vuelo", fr: "Sélectionner le Vol" },
  { en: "Starting from", ta: "தொடக்க விலை", es: "Desde", fr: "À partir de" },
  { en: "starting from", ta: "தொடக்க விலை", es: "desde", fr: "à partir de" },
  { en: "/ night", ta: "/ இரவு", es: "/ noche", fr: "/ nuit" },
  { en: "/ person", ta: "/ நபர்", es: "/ persona", fr: "/ personne" },
  { en: "Guest Favorite", ta: "பயணிகளின் விருப்பம்", es: "Favorito", fr: "Coup de Cœur" },
  { en: "Luxury Pick", ta: "சொகுசு தேர்வு", es: "Opción de Lujo", fr: "Sélection Luxe" },
  { en: "Best Value", ta: "சிறந்த மதிப்பு", es: "Mejor Valor", fr: "Meilleur Prix" },
  { en: "Boutique", ta: "பொட்டிக்", es: "Boutique", fr: "Boutique" },
  { en: "Trending", ta: "பிரபலம்", es: "Tendencia", fr: "Tendance" },
  { en: "Cultural", ta: "கலாச்சாரம்", es: "Cultural", fr: "Culturel" },
  { en: "Adventure", ta: "சாகசம்", es: "Aventura", fr: "Aventure" },
  { en: "Scenic Nature", ta: "இயற்கை எழில்", es: "Naturaleza", fr: "Nature" },
  { en: "Luxury Escapes", ta: "சொகுசு பயணம்", es: "Escapadas de Lujo", fr: "Escapades Luxe" },

  // Newsletter & Footer
  { en: "Subscribe", ta: "இணைந்திடுக", es: "Suscribirse", fr: "S'abonner" },
  { en: "Enter your email address", ta: "உங்கள் மின்னஞ்சலை உள்ளிடவும்", es: "Ingresa tu correo electrónico", fr: "Entrez votre adresse e-mail" },
  { en: "Privacy Policy", ta: "தனியுரிமை கொள்கை", es: "Política de Privacidad", fr: "Politique de Confidentialité" },
  { en: "Terms of Service", ta: "சேவை விதிமுறைகள்", es: "Términos del Servicio", fr: "Conditions d'Utilisation" },
  { en: "All rights reserved.", ta: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.", es: "Todos los derechos reservados.", fr: "Tous droits réservés." },

  // Booking & Details Common
  { en: "Lead Traveler Details", ta: "முன்னணி பயணி விவரங்கள்", es: "Detalles del Pasajero Principal", fr: "Détails du Voyageur Principal" },
  { en: "Reservation Summary", ta: "முன்பதிவு சுருக்கம்", es: "Resumen de Reserva", fr: "Résumé de la Réservation" },
  { en: "Continue to Payment", ta: "பணம் செலுத்த தொடர்க", es: "Continuar al Pago", fr: "Continuer vers le Paiement" },
  { en: "Select Payment Method", ta: "பணம் செலுத்தும் முறை", es: "Método de Pago", fr: "Mode de Paiement" },
  { en: "Order Summary", ta: "ஆர்டர் சுருக்கம்", es: "Resumen del Pedido", fr: "Récapitulatif de la Commande" },
  { en: "Confirm & Complete Booking", ta: "முன்பதிவை உறுதிசெய்க", es: "Confirmar y Completar Reserva", fr: "Confirmer la Réservation" },
  { en: "Reservation Confirmed!", ta: "முன்பதிவு உறுதிசெய்யப்பட்டது!", es: "¡Reserva Confirmada!", fr: "Réservation Confirmée !" },
  { en: "Print Travel Voucher", ta: "பயண ரசீதை அச்சிடுக", es: "Imprimir Comprobante", fr: "Imprimer le Bon de Voyage" },
  { en: "Return Home", ta: "முகப்பிற்கு செல்க", es: "Volver al Inicio", fr: "Retour à l'Accueil" },
  { en: "Filter by", ta: "வடிகட்டுதல்", es: "Filtrar por", fr: "Filtrer par" },
  { en: "Sort by", ta: "வரிசைப்படுத்து", es: "Ordenar por", fr: "Trier par" },
  { en: "Clear All", ta: "அனைத்தையும் நீக்கு", es: "Limpiar Todo", fr: "Tout Effacer" },
  { en: "Apply Filters", ta: "வடிகட்டிகளை பயன்படுத்து", es: "Aplicar Filtros", fr: "Appliquer les Filtres" },
  { en: "Free Cancellation", ta: "இலவச ரத்து வசதி", es: "Cancelación Gratuita", fr: "Annulation Gratuite" },
  { en: "Instant Confirmation", ta: "உடனடி உறுதிப்படுத்தல்", es: "Confirmación Inmediata", fr: "Confirmation Immédiate" },
  { en: "Credit / Debit Card", ta: "கிரெடிட் / டெபிட் கார்டு", es: "Tarjeta de Crédito / Débito", fr: "Carte de Crédit / Débit" },
  { en: "Subtotal", ta: "கூட்டுத்தொகை", es: "Subtotal", fr: "Sous-total" },
  { en: "Total Amount", ta: "மொத்த தொகை", es: "Monto Total", fr: "Montant Total" },
  { en: "Total Amount Due", ta: "மொத்த கட்டணம்", es: "Total a Pagar", fr: "Total à Payer" },
  { en: "Due Today", ta: "இன்று செலுத்த வேண்டிய தொகை", es: "Total Hoy", fr: "Dû Aujourd'hui" },
  { en: "Price: Low to High", ta: "விலை: குறைந்ததிலிருந்து அதிகம்", es: "Precio: Menor a Mayor", fr: "Prix : Croissant" },
  { en: "Price: High to Low", ta: "விலை: அதிகத்திலிருந்து குறைவு", es: "Precio: Mayor a Menor", fr: "Prix : Décroissant" },
  { en: "Highest Rated", ta: "அதிக மதிப்பீடு", es: "Mejor Valorados", fr: "Les Mieux Notés" },
  { en: "First Name", ta: "முதல் பெயர்", es: "Nombre", fr: "Prénom" },
  { en: "Last Name", ta: "கடைசி பெயர்", es: "Apellido", fr: "Nom" },
  { en: "Email Address", ta: "மின்னஞ்சல் முகவரி", es: "Correo Electrónico", fr: "Adresse e-mail" },
  { en: "Mobile Phone Number", ta: "தொலைபேசி எண்", es: "Número de Teléfono", fr: "Numéro de Téléphone" },
  { en: "Password", ta: "கடவுச்சொல்", es: "Contraseña", fr: "Mot de passe" },
  { en: "Remember me", ta: "என்னை நினைவில் கொள்க", es: "Recuérdame", fr: "Se souvenir de moi" },
  { en: "Forgot password?", ta: "கடவுச்சொல் மறந்துவிட்டதா?", es: "¿Olvidaste tu contraseña?", fr: "Mot de passe oublié ?" },
  { en: "Don't have an account?", ta: "கணக்கு இல்லையா?", es: "¿No tienes una cuenta?", fr: "Vous n'avez pas de compte ?" },
  { en: "Already have an account?", ta: "ஏற்கனவே கணக்கு உள்ளதா?", es: "¿Ya tienes una cuenta?", fr: "Vous avez déjà un compte ?" },
  { en: "Create Account", ta: "கணக்கு தொடங்குக", es: "Crear Cuenta", fr: "Créer un Compte" },
  { en: "Send Message", ta: "செய்தி அனுப்புக", es: "Enviar Mensaje", fr: "Envoyer le Message" },
  { en: "Frequently Asked Questions", ta: "அடிக்கடி கேட்கப்படும் கேள்விகள்", es: "Preguntas Frecuentes", fr: "Foire Aux Questions" }
];

// Build Bi-directional Lookup Table
const PHRASE_LOOKUP = {};
TERRA_PHRASES.forEach(item => {
  ['en', 'ta', 'es', 'fr'].forEach(fromLang => {
    const text = item[fromLang];
    if (text) {
      const clean = text.trim().toLowerCase();
      PHRASE_LOOKUP[clean] = item;
    }
  });
});

/**
 * Get current active language code
 */
function getCurrentLanguage() {
  try {
    return (typeof localStorage !== 'undefined' ? localStorage.getItem('terraLang') : null) || 'en';
  } catch (e) {
    return 'en';
  }
}

/**
 * Updates text of an element while safely preserving child <i> or <svg> icons
 */
function safeUpdateNodeText(el, newText) {
  if (!el || !newText) return;

  const icon = el.querySelector('i, svg');
  if (icon) {
    let replaced = false;
    for (let i = 0; i < el.childNodes.length; i++) {
      const node = el.childNodes[i];
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0) {
        node.nodeValue = ' ' + newText.trim() + ' ';
        replaced = true;
        break;
      }
    }
    if (!replaced) {
      el.innerHTML = icon.outerHTML + ' ' + newText;
    }
  } else {
    el.textContent = newText;
  }
}

/**
 * Translate an arbitrary string if known in phrase dictionary
 */
function translatePhrase(rawText, targetLang) {
  if (!rawText) return rawText;
  const clean = rawText.trim().replace(/^[:\s\-•]+|[:\s\-•]+$/g, '').toLowerCase();
  const matched = PHRASE_LOOKUP[clean];
  if (matched && matched[targetLang]) {
    return matched[targetLang];
  }
  return rawText;
}

/**
 * Universal DOM Text Walker that translates all common UI nodes
 */
function translateDomNodes(targetLang) {
  // 1. Tags with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const matched = TERRA_PHRASES.find(p => p.en.toLowerCase().includes(key.replace(/_/g, ' ')));
    if (matched && matched[targetLang]) {
      if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
        el.placeholder = matched[targetLang];
      } else {
        safeUpdateNodeText(el, matched[targetLang]);
      }
    }
  });

  // 2. Selectors covering navigation, headings, buttons, badges, tabs, and form labels
  const selectors = [
    '.site-navbar .nav-link',
    '.nav-link',
    '.search-tab-btn',
    '.search-input-group label',
    '.section-title',
    '.section-desc',
    '.section-tagline',
    'h1.hero-title',
    'h1, h2, h3, h4, h5, h6',
    '.hero-slide-content .badge',
    '.hero-slide-content .btn',
    '.destination-card .btn',
    '.hotel-card .btn',
    '.package-card .btn',
    '.travel-card .btn',
    '.card .btn',
    '.btn-primary-custom',
    '.btn-outline-custom',
    '.btn-glass',
    '.btn-navy-custom',
    '.badge',
    '.footer-links a',
    '.site-footer a',
    '.why-card h5',
    '.why-card p',
    'form label',
    '.form-label',
    'form[data-type="hotels"] button[type="submit"]',
    'form[data-type="flights"] button[type="submit"]',
    'form[data-type="packages"] button[type="submit"]'
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      // Don't translate dropdown items inside the language picker itself!
      if (el.closest('#langDropdownBtn') || el.closest('#navbarAuthButtons .dropdown-menu')) return;

      const icon = el.querySelector('i, svg');
      let text = '';
      if (icon) {
        for (let node of el.childNodes) {
          if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0) {
            text = node.nodeValue.trim();
            break;
          }
        }
      } else {
        text = el.textContent.trim();
      }

      if (text) {
        const translated = translatePhrase(text, targetLang);
        if (translated !== text) {
          safeUpdateNodeText(el, translated);
        }
      }
    });
  });

  // 3. Translate search input placeholders
  document.querySelectorAll('input[placeholder]').forEach(inp => {
    const ph = inp.getAttribute('placeholder');
    if (ph) {
      const translated = translatePhrase(ph, targetLang);
      if (translated !== ph) {
        inp.placeholder = translated;
      }
    }
  });
}

/**
 * Set and apply language across document
 */
function setLanguage(lang, isInitial = false) {
  if (!['en', 'ta', 'es', 'fr'].includes(lang)) lang = 'en';
  localStorage.setItem('terraLang', lang);

  // Apply full DOM translations
  translateDomNodes(lang);

  // Update active label on language button
  const currentLangLabel = document.getElementById('currentLangLabel');
  if (currentLangLabel) {
    const labels = { en: 'EN', ta: 'தமிழ்', es: 'ES', fr: 'FR' };
    currentLangLabel.textContent = labels[lang] || 'EN';
  }

  // Update html lang attribute
  if (document.documentElement) {
    document.documentElement.lang = lang;
  }

  const toasts = {
    en: "Language set to English",
    ta: "மொழி தமிழுக்கு மாற்றப்பட்டது",
    es: "Idioma cambiado a Español",
    fr: "Langue changée en Français"
  };

  if (!isInitial && typeof showToast === 'function') {
    showToast('Language Updated', toasts[lang], 'info');
  }
}

// Global I18N Object & helper for main.js and search.js integration
if (typeof window !== 'undefined') {
  window.setLanguage = setLanguage;
  window.I18N = {
    get: getCurrentLanguage,
    set: setLanguage,
    apply: () => translateDomNodes(getCurrentLanguage()),
    translate: translatePhrase
  };
}

// Auto-initialize i18n on page load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const lang = getCurrentLanguage();
    setLanguage(lang, true);
  });
}

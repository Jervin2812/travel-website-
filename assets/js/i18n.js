/**
 * TERRA — Comprehensive Multi-Language (i18n) Engine
 * Supported Languages: English (en), தமிழ் (ta), Español (es), Français (fr)
 * Features:
 * - TreeWalker full-document translation across ALL 18 pages
 * - Complete coverage of Headings, Breadcrumbs, Badges, Tabs, Stats, Forms, Cards, & Footers
 * - Preserves inner icons (<i>, <svg>) by updating text nodes directly
 * - Bi-directional multi-language translation and state persistence in localStorage
 */

const TERRA_PHRASES = [
  {
    "en": "Home",
    "ta": "முகப்பு",
    "es": "Inicio",
    "fr": "Accueil"
  },
  {
    "en": "Destinations",
    "ta": "சுற்றுலா இடங்கள்",
    "es": "Destinos",
    "fr": "Destinations"
  },
  {
    "en": "Flights",
    "ta": "விமானங்கள்",
    "es": "Vuelos",
    "fr": "Vols"
  },
  {
    "en": "Hotels",
    "ta": "விடுதிகள்",
    "es": "Hoteles",
    "fr": "Hôtels"
  },
  {
    "en": "Tour Packages",
    "ta": "டூர் பேக்கேஜ்கள்",
    "es": "Paquetes Turísticos",
    "fr": "Circuits"
  },
  {
    "en": "About",
    "ta": "எங்களை பற்றி",
    "es": "Nosotros",
    "fr": "À Propos"
  },
  {
    "en": "Contact",
    "ta": "தொடர்பு கொள்ள",
    "es": "Contacto",
    "fr": "Contact"
  },
  {
    "en": "Log In",
    "ta": "உள்நுழைக",
    "es": "Iniciar Sesión",
    "fr": "Connexion"
  },
  {
    "en": "Sign Up",
    "ta": "பதிவு செய்க",
    "es": "Registrarse",
    "fr": "S'inscrire"
  },
  {
    "en": "My Bookings",
    "ta": "என் முன்பதிவுகள்",
    "es": "Mis Reservas",
    "fr": "Mes Réservations"
  },
  {
    "en": "Profile",
    "ta": "சுயவிவரம்",
    "es": "Perfil",
    "fr": "Profil"
  },
  {
    "en": "My Profile",
    "ta": "என் சுயவிவரம்",
    "es": "Mi Perfil",
    "fr": "Mon Profil"
  },
  {
    "en": "Sign Out",
    "ta": "வெளியேறு",
    "es": "Cerrar Sesión",
    "fr": "Déconnexion"
  },
  {
    "en": "Company",
    "ta": "நிறுவனம்",
    "es": "Compañía",
    "fr": "Entreprise"
  },
  {
    "en": "Navigation",
    "ta": "பக்கங்கள்",
    "es": "Navegación",
    "fr": "Navigation"
  },
  {
    "en": "Top Destinations",
    "ta": "முக்கிய இடங்கள்",
    "es": "Destinos Principales",
    "fr": "Destinations Phares"
  },
  {
    "en": "All rights reserved.",
    "ta": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    "es": "Todos los derechos reservados.",
    "fr": "Tous droits réservés."
  },
  {
    "en": "Privacy Policy",
    "ta": "தனியுரிமை கொள்கை",
    "es": "Política de Privacidad",
    "fr": "Politique de Confidentialité"
  },
  {
    "en": "Terms of Service",
    "ta": "சேவை விதிமுறைகள்",
    "es": "Términos del Servicio",
    "fr": "Conditions d'Utilisation"
  },
  {
    "en": "About Terra",
    "ta": "டெர்ரா பற்றி",
    "es": "Sobre Terra",
    "fr": "À Propos de Terra"
  },
  {
    "en": "Contact Us",
    "ta": "தொடர்பு கொள்ள",
    "es": "Contáctenos",
    "fr": "Contactez-nous"
  },
  {
    "en": "Help & FAQ",
    "ta": "உதவி & கேள்விகள்",
    "es": "Ayuda y Preguntas",
    "fr": "Aide & FAQ"
  },
  {
    "en": "About Us",
    "ta": "எங்களை பற்றி",
    "es": "Sobre Nosotros",
    "fr": "À Propos de Nous"
  },
  {
    "en": "Contact & Concierge",
    "ta": "தொடர்பு & வழிகாட்டுதல்",
    "es": "Contacto y Conserjería",
    "fr": "Contact & Conciergerie"
  },
  {
    "en": "Stays & Hotels",
    "ta": "தங்கும் விடுதிகள்",
    "es": "Alojamientos",
    "fr": "Hôtels & Séjours"
  },
  {
    "en": "Search Stays",
    "ta": "விடுதிகளை தேடுக",
    "es": "Buscar Alojamientos",
    "fr": "Rechercher des Hôtels"
  },
  {
    "en": "Find Flights",
    "ta": "விமானம் தேடுக",
    "es": "Buscar Vuelos",
    "fr": "Trouver des Vols"
  },
  {
    "en": "Browse Expeditions",
    "ta": "டூர் பேக்கேஜ்கள்",
    "es": "Explorar Paquetes",
    "fr": "Parcourir les Circuits"
  },
  {
    "en": "Search",
    "ta": "தேடுக",
    "es": "Buscar",
    "fr": "Rechercher"
  },
  {
    "en": "Discover the World, Your Way.",
    "ta": "உலகை உங்கள் விருப்பப்படி கொண்டாடுங்கள்.",
    "es": "Descubre el Mundo a tu Manera.",
    "fr": "Découvrez le Monde à Votre Façon."
  },
  {
    "en": "Discover the World,",
    "ta": "உலகை உங்கள் விருப்பப்படி கொண்டாடுங்கள்,",
    "es": "Descubre el Mundo,",
    "fr": "Découvrez le Monde,"
  },
  {
    "en": "Your Way.",
    "ta": "உங்கள் வழியில்.",
    "es": "A tu Manera.",
    "fr": "À Votre Façon."
  },
  {
    "en": "Bespoke Worldwide Expeditions",
    "ta": "சிறப்பு உலகளாவிய பயணங்கள்",
    "es": "Expediciones Exclusivas",
    "fr": "Expéditions Uniques"
  },
  {
    "en": "Explore Destinations",
    "ta": "இடங்களை ஆராய்க",
    "es": "Explorar Destinos",
    "fr": "Explorer les Destinations"
  },
  {
    "en": "Curated Packages",
    "ta": "சிறப்பு பேக்கேஜ்கள்",
    "es": "Paquetes Exclusivos",
    "fr": "Circuits Exclusifs"
  },
  {
    "en": "Alpine Luxury Sanctuaries",
    "ta": "ஆல்ப்ஸ் சொகுசு விடுதிகள்",
    "es": "Santuarios Alpinos",
    "fr": "Sanctuaires Alpins"
  },
  {
    "en": "Breathtaking Vistas,",
    "ta": "அற்புதமான இயற்கை காட்சிகள்,",
    "es": "Vistas Impresionantes,",
    "fr": "Vues À Couper Le Souffle,"
  },
  {
    "en": "Unforgettable Comfort.",
    "ta": "மறக்க முடியாத சொகுசு அனுபவம்.",
    "es": "Confort Inolvidable.",
    "fr": "Un Confort Inoubliable."
  },
  {
    "en": "View Alpine Lodges",
    "ta": "மலை விடுதிகளை காண்க",
    "es": "Ver Alojamientos",
    "fr": "Voir les Chalets"
  },
  {
    "en": "Compare Stays",
    "ta": "விடுதிகளை ஒப்பிடுக",
    "es": "Comparar Estancias",
    "fr": "Comparer les Séjours"
  },
  {
    "en": "Iconic Capital Escapes",
    "ta": "பிரபல நகர பயணங்கள்",
    "es": "Escapadas a Capitales",
    "fr": "Escapades dans les Capitales"
  },
  {
    "en": "Timeless Culture,",
    "ta": "காலத்தால் அழியாத கலாச்சாரம்,",
    "es": "Cultura Eterna,",
    "fr": "Culture Intemporelle,"
  },
  {
    "en": "Curated For You.",
    "ta": "உங்களுக்காக வடிவமைக்கப்பட்டது.",
    "es": "Diseñado Para Ti.",
    "fr": "Créé Pour Vous."
  },
  {
    "en": "View European Tour",
    "ta": "ஐரோப்பிய பயணத்தை காண்க",
    "es": "Ver Tour Europeo",
    "fr": "Voir le Circuit Européen"
  },
  {
    "en": "Search Flights",
    "ta": "விமானங்களை தேடுக",
    "es": "Buscar Vuelos",
    "fr": "Rechercher des Vols"
  },
  {
    "en": "Destination",
    "ta": "இடம்",
    "es": "Destino",
    "fr": "Destination"
  },
  {
    "en": "Where are you going? (e.g. Bali, Paris)",
    "ta": "எங்கே செல்ல விரும்புகிறீர்கள்? (எ.கா. பாலி, பாரிஸ்)",
    "es": "¿A dónde vas? (ej. Bali, París)",
    "fr": "Où allez-vous ? (ex. Bali, Paris)"
  },
  {
    "en": "Check-in",
    "ta": "வருகை",
    "es": "Llegada",
    "fr": "Arrivée"
  },
  {
    "en": "Check-out",
    "ta": "வெளியேறுதல்",
    "es": "Salida",
    "fr": "Départ"
  },
  {
    "en": "Travelers & Rooms",
    "ta": "பயணிகள் & அறைகள்",
    "es": "Viajeros y Habitaciones",
    "fr": "Voyageurs et Chambres"
  },
  {
    "en": "Guests & Rooms",
    "ta": "விருந்தினர்கள் & அறைகள்",
    "es": "Huéspedes y Habitaciones",
    "fr": "Voyageurs et Chambres"
  },
  {
    "en": "Flying From",
    "ta": "புறப்படும் இடம்",
    "es": "Origen",
    "fr": "Départ de"
  },
  {
    "en": "Flying To",
    "ta": "சேருமிடம்",
    "es": "Destino",
    "fr": "Arrivée à"
  },
  {
    "en": "Departure",
    "ta": "புறப்படும் தேதி",
    "es": "Ida",
    "fr": "Date de départ"
  },
  {
    "en": "Return",
    "ta": "திரும்பும் தேதி",
    "es": "Vuelta",
    "fr": "Date de retour"
  },
  {
    "en": "Departure Date",
    "ta": "புறப்படும் தேதி",
    "es": "Fecha de Salida",
    "fr": "Date de Départ"
  },
  {
    "en": "Check-in Date",
    "ta": "வருகை தேதி",
    "es": "Fecha de Llegada",
    "fr": "Date d'Arrivée"
  },
  {
    "en": "Check-out Date",
    "ta": "வெளியேறும் தேதி",
    "es": "Fecha de Salida",
    "fr": "Date de Départ"
  },
  {
    "en": "Cabin Class",
    "ta": "வகுப்பு",
    "es": "Clase",
    "fr": "Classe"
  },
  {
    "en": "Trip Duration",
    "ta": "பயண காலம்",
    "es": "Duración",
    "fr": "Durée"
  },
  {
    "en": "All Durations",
    "ta": "அனைத்து கால அளவுகள்",
    "es": "Todas las duraciones",
    "fr": "Toutes les durées"
  },
  {
    "en": "Duration",
    "ta": "கால அளவு",
    "es": "Duración",
    "fr": "Durée"
  },
  {
    "en": "Departure City",
    "ta": "புறப்படும் நகரம்",
    "es": "Ciudad de Origen",
    "fr": "Ville de Départ"
  },
  {
    "en": "Destination City",
    "ta": "சேரும் நகரம்",
    "es": "Ciudad de Destino",
    "fr": "Ville de Destination"
  },
  {
    "en": "Tour Region",
    "ta": "சுற்றுலா பகுதி",
    "es": "Región del Tour",
    "fr": "Région du Circuit"
  },
  {
    "en": "Travelers",
    "ta": "பயணிகள்",
    "es": "Viajeros",
    "fr": "Voyageurs"
  },
  {
    "en": "Month",
    "ta": "மாதம்",
    "es": "Mes",
    "fr": "Mois"
  },
  {
    "en": "Explore Tours",
    "ta": "சுற்றுலாக்களை ஆராய்க",
    "es": "Explorar Tours",
    "fr": "Explorer les Circuits"
  },
  {
    "en": "Popular Destinations",
    "ta": "பிரபலமான சுற்றுலா இடங்கள்",
    "es": "Destinos Populares",
    "fr": "Destinations Populaires"
  },
  {
    "en": "Recommended Hotels",
    "ta": "பரிந்துரைக்கப்பட்ட விடுதிகள்",
    "es": "Hoteles Recomendados",
    "fr": "Hôtels Recommandés"
  },
  {
    "en": "Featured Tour Packages",
    "ta": "சிறப்பு டூர் பேக்கேஜ்கள்",
    "es": "Paquetes Turísticos Destacados",
    "fr": "Circuits Touristiques Recommandés"
  },
  {
    "en": "Why Travel With Terra",
    "ta": "ஏன் டெர்ரா உடன் பயணிக்க வேண்டும்?",
    "es": "¿Por Qué Elegir Terra?",
    "fr": "Pourquoi Voyager Avec Terra ?"
  },
  {
    "en": "Loved by Travelers Worldwide",
    "ta": "சர்வதேச பயணிகளின் மதிப்புரைகள்",
    "es": "Elogiado por Viajeros de Todo el Mundo",
    "fr": "Approuvé par les Voyageurs du Monde Entier"
  },
  {
    "en": "Travel Inspiration",
    "ta": "பயண உத்வேகம்",
    "es": "Inspiración para Viajar",
    "fr": "Inspiration de Voyage"
  },
  {
    "en": "Get $100 Off Your First Trip",
    "ta": "உங்கள் முதல் பயணத்திற்கு $100 தள்ளுபடி பெறுங்கள்",
    "es": "Obtén $100 de Descuento en tu Primer Viaje",
    "fr": "Obtenez 100 $ de Réduction sur Votre Premier Voyage"
  },
  {
    "en": "Join Free",
    "ta": "இலவசமாக இணையுங்கள்",
    "es": "Únete Gratis",
    "fr": "Rejoignez Gratuitement"
  },
  {
    "en": "Subscribe",
    "ta": "இணைந்திடுக",
    "es": "Suscribirse",
    "fr": "S'abonner"
  },
  {
    "en": "Instant Booking",
    "ta": "உடனடி முன்பதிவு",
    "es": "Reserva Inmediata",
    "fr": "Réservation Immédiate"
  },
  {
    "en": "Curated Stays",
    "ta": "தேர்ந்தெடுக்கப்பட்ட தங்குமிடங்கள்",
    "es": "Estancias Exclusivas",
    "fr": "Séjours Exclusifs"
  },
  {
    "en": "Transparent Pricing",
    "ta": "வெளிப்படையான விலை",
    "es": "Precios Transparentes",
    "fr": "Prix Transparents"
  },
  {
    "en": "24/7 Concierge",
    "ta": "24/7 வழிகாட்டுதல் சேவை",
    "es": "Conserjería 24/7",
    "fr": "Conciergerie 24/7"
  },
  {
    "en": "Redefining the Art of International Travel",
    "ta": "சர்வதேச பயணக் கலையை மறுவரையறை செய்கிறோம்",
    "es": "Redefiniendo el Arte de los Viajes Internacionales",
    "fr": "Redéfinir l'Art du Voyage International"
  },
  {
    "en": "Our Purpose & Story",
    "ta": "எங்கள் நோக்கம் & கதை",
    "es": "Nuestro Propósito e Historia",
    "fr": "Notre Mission & Histoire"
  },
  {
    "en": "Meet Our Concierge",
    "ta": "எங்கள் உதவி மையத்தை சந்திக்கவும்",
    "es": "Conoce Nuestra Conserjería",
    "fr": "Rencontrez Notre Conciergerie"
  },
  {
    "en": "Global Explorers Hosted",
    "ta": "பயணித்த சர்வதேச பயணிகள்",
    "es": "Viajeros Globales Recibidos",
    "fr": "Voyageurs Accueillis"
  },
  {
    "en": "Bespoke Sanctuaries",
    "ta": "தனிப்பயனாக்கப்பட்ட விடுதிகள்",
    "es": "Santuarios Exclusivos",
    "fr": "Sanctuaires Exclusifs"
  },
  {
    "en": "Client Satisfaction",
    "ta": "வாடிக்கையாளர் திருப்தி",
    "es": "Satisfacción del Cliente",
    "fr": "Satisfaction Client"
  },
  {
    "en": "Dedicated Concierge Desk",
    "ta": "பிரத்யேக உதவி மையம்",
    "es": "Mesa de Conserjería Dedicada",
    "fr": "Service de Conciergerie Dédié"
  },
  {
    "en": "Our Guiding Pillars",
    "ta": "எங்கள் வழிகாட்டும் கொள்கைகள்",
    "es": "Nuestros Pilares Fundamentales",
    "fr": "Nos Piliers Fondateurs"
  },
  {
    "en": "The Terra Distinction",
    "ta": "டெர்ராவின் தனிச்சிறப்பு",
    "es": "La Distinción Terra",
    "fr": "La Distinction Terra"
  },
  {
    "en": "Curated Rarity",
    "ta": "அரிய இடங்களின் தேர்வு",
    "es": "Rareza Curada",
    "fr": "Rareté Soigneusement Choisie"
  },
  {
    "en": "Transparent Integrity",
    "ta": "வெளிப்படையான நேர்மை",
    "es": "Integridad Transparente",
    "fr": "Intégrité Transparente"
  },
  {
    "en": "Personal Mastery",
    "ta": "தனிப்பட்ட சிறப்பான சேவை",
    "es": "Maestría Personal",
    "fr": "Maîtrise Personnelle"
  },
  {
    "en": "Cultural Respect",
    "ta": "கலாச்சார மரியாதை",
    "es": "Respeto Cultural",
    "fr": "Respect Culturel"
  },
  {
    "en": "Global Leadership",
    "ta": "உலகளாவிய தலைமை",
    "es": "Liderazgo Global",
    "fr": "Leadership Mondial"
  },
  {
    "en": "The Curators Behind Terra",
    "ta": "டெர்ராவை வழிநடத்தும் நிபுணர்கள்",
    "es": "Los Curadores Detrás de Terra",
    "fr": "Les Curateurs Derrière Terra"
  },
  {
    "en": "Begin Planning Your Next Chapter",
    "ta": "உங்கள் அடுத்த பயணத் திட்டத்தை தொடங்குங்கள்",
    "es": "Comienza a Planificar tu Próximo Capítulo",
    "fr": "Commencez à Planifier Votre Prochain Chapitre"
  },
  {
    "en": "We're Here For Every Mile of Your Journey",
    "ta": "உங்கள் பயணத்தின் ஒவ்வொரு மைலிலும் நாங்கள் உங்களுடன்",
    "es": "Estamos Aquí en Cada Milla de tu Viaje",
    "fr": "À Vos Côtés à Chaque Étape de Votre Voyage"
  },
  {
    "en": "24/7 Global Travelers Desk",
    "ta": "24/7 சர்வதேச பயண உதவி மையம்",
    "es": "Mesa Global de Viajeros 24/7",
    "fr": "Bureau des Voyageurs 24/7"
  },
  {
    "en": "WhatsApp VIP Concierge",
    "ta": "வாட்ஸ்அப் விஐபி உதவி",
    "es": "Conserjería VIP de WhatsApp",
    "fr": "Conciergerie VIP WhatsApp"
  },
  {
    "en": "Send a Message to Our Desk",
    "ta": "எங்கள் உதவி மையத்திற்கு செய்தி அனுப்புக",
    "es": "Envía un Mensaje a Nuestra Mesa",
    "fr": "Envoyez un Message à Notre Bureau"
  },
  {
    "en": "Full Name",
    "ta": "முழு பெயர்",
    "es": "Nombre Completo",
    "fr": "Nom Complet"
  },
  {
    "en": "Email Address",
    "ta": "மின்னஞ்சல் முகவரி",
    "es": "Correo Electrónico",
    "fr": "Adresse e-mail"
  },
  {
    "en": "Phone / WhatsApp",
    "ta": "தொலைபேசி / வாட்ஸ்அப்",
    "es": "Teléfono / WhatsApp",
    "fr": "Téléphone / WhatsApp"
  },
  {
    "en": "Inquiry Topic",
    "ta": "விசாரணைத் தலைப்பு",
    "es": "Tema de Consulta",
    "fr": "Sujet de la Demande"
  },
  {
    "en": "Subject / Booking Reference",
    "ta": "பொருள் / முன்பதிவு எண்",
    "es": "Asunto / Referencia de Reserva",
    "fr": "Objet / Référence de Réservation"
  },
  {
    "en": "Message Details",
    "ta": "செய்தி விவரங்கள்",
    "es": "Detalles del Mensaje",
    "fr": "Détails du Message"
  },
  {
    "en": "Send Inquiry",
    "ta": "விசாரணையை அனுப்புக",
    "es": "Enviar Consulta",
    "fr": "Envoyer la Demande"
  },
  {
    "en": "Global Operations Hubs",
    "ta": "உலகளாவிய அலுவலக மையங்கள்",
    "es": "Centros de Operaciones Globales",
    "fr": "Centres d'Opérations Mondiaux"
  },
  {
    "en": "New York Headquarters",
    "ta": "நியூயார்க் தலைமை அலுவலகம்",
    "es": "Sede de Nueva York",
    "fr": "Siège de New York"
  },
  {
    "en": "Paris European Bureau",
    "ta": "பாரிஸ் ஐரோப்பிய அலுவலகம்",
    "es": "Oficina Europea de París",
    "fr": "Bureau Européen de Paris"
  },
  {
    "en": "Dubai Middle East Hub",
    "ta": "துபாய் மத்திய கிழக்கு மையம்",
    "es": "Centro de Dubai Medio Oriente",
    "fr": "Centre Moyen-Orient de Dubaï"
  },
  {
    "en": "Tokyo Asia-Pacific Bureau",
    "ta": "டோக்கியோ ஆசியா-பசிபிக் அலுவலகம்",
    "es": "Oficina de Tokio Asia-Pacífico",
    "fr": "Bureau Asie-Pacifique de Tokyo"
  },
  {
    "en": "Frequently Asked Questions",
    "ta": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    "es": "Preguntas Frecuentes",
    "fr": "Foire Aux Questions"
  },
  {
    "en": "How Can Our Concierge Assist You?",
    "ta": "எங்கள் உதவி மையம் உங்களுக்கு எவ்வாறு உதவ முடியும்?",
    "es": "¿Cómo Puede Ayudarte Nuestra Conserjería?",
    "fr": "Comment Notre Conciergerie Peut-elle Vous Aider ?"
  },
  {
    "en": "All Questions",
    "ta": "அனைத்து கேள்விகள்",
    "es": "Todas las Preguntas",
    "fr": "Toutes les Questions"
  },
  {
    "en": "Bookings & Vouchers",
    "ta": "முன்பதிவுகள் & ரசீதுகள்",
    "es": "Reservas y Comprobantes",
    "fr": "Réservations & Bons"
  },
  {
    "en": "Cancellations & Refunds",
    "ta": "ரத்து செய்தல் & பணத்தைத் திரும்பப் பெறுதல்",
    "es": "Cancelaciones y Reembolsos",
    "fr": "Annulations & Remboursements"
  },
  {
    "en": "Flights & Baggage",
    "ta": "விமானங்கள் & லக்கேஜ்",
    "es": "Vuelos y Equipaje",
    "fr": "Vols & Bagages"
  },
  {
    "en": "Tour Expeditions",
    "ta": "சுற்றுலா பயணங்கள்",
    "es": "Expediciones y Tours",
    "fr": "Expéditions & Circuits"
  },
  {
    "en": "Still Have Questions?",
    "ta": "இன்னும் கேள்விகள் உள்ளதா?",
    "es": "¿Aún Tienes Preguntas?",
    "fr": "Vous Avez Encore des Questions ?"
  },
  {
    "en": "Welcome Back",
    "ta": "மீண்டும் வருக",
    "es": "Bienvenido de Nuevo",
    "fr": "Bienvenue à Nouveau"
  },
  {
    "en": "Sign In to Portal",
    "ta": "போர்ட்டலில் உள்நுழைக",
    "es": "Iniciar Sesión en el Portal",
    "fr": "Se Connecter au Portail"
  },
  {
    "en": "Keep me logged in for 30 days",
    "ta": "30 நாட்களுக்கு என்னை உள்நுழைந்திருக்க வைக்கவும்",
    "es": "Mantenerme conectado durante 30 días",
    "fr": "Rester connecté pendant 30 jours"
  },
  {
    "en": "Fill Demo",
    "ta": "மாதிரி விவரங்களை நிரப்புக",
    "es": "Llenar Demo",
    "fr": "Remplir Démo"
  },
  {
    "en": "Password",
    "ta": "கடவுச்சொல்",
    "es": "Contraseña",
    "fr": "Mot de passe"
  },
  {
    "en": "Sign In",
    "ta": "உள்நுழைக",
    "es": "Iniciar Sesión",
    "fr": "Se Connecter"
  },
  {
    "en": "Create Account",
    "ta": "கணக்கு தொடங்குக",
    "es": "Crear Cuenta",
    "fr": "Créer un Compte"
  },
  {
    "en": "Create Free Account",
    "ta": "இலவச கணக்கு தொடங்குக",
    "es": "Crear Cuenta Gratis",
    "fr": "Créer un Compte Gratuit"
  },
  {
    "en": "Full Legal Name",
    "ta": "முழு சட்டப்பூர்வ பெயர்",
    "es": "Nombre Legal Completo",
    "fr": "Nom Légal Complet"
  },
  {
    "en": "Join Terra",
    "ta": "டெர்ராவில் இணையுங்கள்",
    "es": "Únete a Terra",
    "fr": "Rejoignez Terra"
  },
  {
    "en": "Unlock Rare Sanctuaries & Priority Privileges",
    "ta": "அரிய விடுதிகள் & முன்னுரிமை சலுகைகளைப் பெறுங்கள்",
    "es": "Accede a Santuarios Exclusivos y Privilegios",
    "fr": "Débloquez des Sanctuaires Rares & Privilèges"
  },
  {
    "en": "Personal Information",
    "ta": "தனிப்பட்ட விவரங்கள்",
    "es": "Información Personal",
    "fr": "Informations Personnelles"
  },
  {
    "en": "Travel Preferences",
    "ta": "பயண விருப்பங்கள்",
    "es": "Preferencias de Viaje",
    "fr": "Préférences de Voyage"
  },
  {
    "en": "Security & Login",
    "ta": "பாதுகாப்பு & உள்நுழைவு",
    "es": "Seguridad e Inicio de Sesión",
    "fr": "Sécurité & Connexion"
  },
  {
    "en": "Save Changes",
    "ta": "மாற்றங்களைச் சேமிக்கவும்",
    "es": "Guardar Cambios",
    "fr": "Enregistrer les Modifications"
  },
  {
    "en": "Save Preferences",
    "ta": "விருப்பங்களைச் சேமிக்கவும்",
    "es": "Guardar Preferencias",
    "fr": "Enregistrer les Préférences"
  },
  {
    "en": "Preferred Currency",
    "ta": "விருப்பமான நாணயம்",
    "es": "Moneda Preferida",
    "fr": "Devise Préférée"
  },
  {
    "en": "Preferred Home Airport",
    "ta": "விருப்பமான விமான நிலையம்",
    "es": "Aeropuerto de Origen Preferido",
    "fr": "Aéroport d'Origine Préféré"
  },
  {
    "en": "Seating Preference",
    "ta": "இருக்கை விருப்பம்",
    "es": "Preferencia de Asiento",
    "fr": "Préférence de Siège"
  },
  {
    "en": "Meal Requirement",
    "ta": "உணவு விருப்பம்",
    "es": "Requisito Dietético",
    "fr": "Préférence de Repas"
  },
  {
    "en": "Mobile Phone Number",
    "ta": "தொலைபேசி எண்",
    "es": "Número de Teléfono",
    "fr": "Numéro de Téléphone"
  },
  {
    "en": "Country of Residence",
    "ta": "வசிக்கும் நாடு",
    "es": "País de Residencia",
    "fr": "Pays de Résidence"
  },
  {
    "en": "Change Password",
    "ta": "கடவுச்சொல்லை மாற்றவும்",
    "es": "Cambiar Contraseña",
    "fr": "Changer le Mot de Passe"
  },
  {
    "en": "Deactivate Account",
    "ta": "கணக்கை முடக்கவும்",
    "es": "Desactivar Cuenta",
    "fr": "Désactiver le Compte"
  },
  {
    "en": "Explore the World's Wonders",
    "ta": "உலகின் அதிசயங்களை ஆராய்க",
    "es": "Explora las Maravillas del Mundo",
    "fr": "Explorez les Merveilles du Monde"
  },
  {
    "en": "All Regions",
    "ta": "அனைத்து பகுதிகள்",
    "es": "Todas las Regiones",
    "fr": "Toutes les Régions"
  },
  {
    "en": "Tropical & Island",
    "ta": "தீவு & கடற்கரை",
    "es": "Tropical e Islas",
    "fr": "Tropical & Îles"
  },
  {
    "en": "Alpine & Nature",
    "ta": "மலை & இயற்கை",
    "es": "Alpino y Naturaleza",
    "fr": "Alpin & Nature"
  },
  {
    "en": "Cultural Cities",
    "ta": "கலாச்சார நகரங்கள்",
    "es": "Ciudades Culturales",
    "fr": "Villes Culturelles"
  },
  {
    "en": "Desert Luxury",
    "ta": "பாலைவன சொகுசு",
    "es": "Lujo en el Desierto",
    "fr": "Luxe du Désert"
  },
  {
    "en": "About This Destination",
    "ta": "இந்த சுற்றுலா இடம் பற்றி",
    "es": "Acerca de Este Destino",
    "fr": "À Propos de Cette Destination"
  },
  {
    "en": "Key Highlights & Travel Facts",
    "ta": "முக்கிய அம்சங்கள் & பயணத் தகவல்கள்",
    "es": "Puntos Destacados y Datos de Viaje",
    "fr": "Points Forts & Infos Pratiques"
  },
  {
    "en": "Must-Experience Attractions",
    "ta": "கட்டாயம் காண வேண்டிய இடங்கள்",
    "es": "Atracciones Imperdibles",
    "fr": "Incontournables"
  },
  {
    "en": "Location & Airport Connections",
    "ta": "இடம் & விமான நிலைய இணைப்புகள்",
    "es": "Ubicación y Conexiones de Aeropuerto",
    "fr": "Localisation & Accès Aéroport"
  },
  {
    "en": "Direct International Connectivity",
    "ta": "நேரடி சர்வதேச விமான வசதி",
    "es": "Conectividad Internacional Directa",
    "fr": "Liaisons Internationales Directes"
  },
  {
    "en": "Proceed to Reservation",
    "ta": "முன்பதிவுக்கு தொடரவும்",
    "es": "Proceder a la Reserva",
    "fr": "Procéder à la Réservation"
  },
  {
    "en": "Select Travel Window",
    "ta": "பயண தேதியை தேர்ந்தெடுக்கவும்",
    "es": "Seleccionar Fechas de Viaje",
    "fr": "Choisir les Dates de Voyage"
  },
  {
    "en": "Number of Travelers",
    "ta": "பயணிகளின் எண்ணிக்கை",
    "es": "Número de Viajeros",
    "fr": "Nombre de Voyageurs"
  },
  {
    "en": "Find & Book Premium Worldwide Flights",
    "ta": "சர்வதேச பிரீமியம் விமானங்களை தேடி பதிவு செய்யுங்கள்",
    "es": "Encuentra y Reserva Vuelos Premium Mundiales",
    "fr": "Trouvez et Réservez des Vols Premium"
  },
  {
    "en": "Flight Stops",
    "ta": "நிறுத்தங்கள்",
    "es": "Escalas",
    "fr": "Escales"
  },
  {
    "en": "Non-Stop Direct Flights",
    "ta": "நேரடி விமானங்கள் (நிறுத்தங்கள் இல்லை)",
    "es": "Vuelos Directos Sin Escalas",
    "fr": "Vols Directs Sans Escale"
  },
  {
    "en": "1 Stop (Under 2 hours)",
    "ta": "1 நிறுத்தம் (2 மணி நேரத்திற்குள்)",
    "es": "1 Escala (Menos de 2 horas)",
    "fr": "1 Escale (Moins de 2h)"
  },
  {
    "en": "2+ Stops",
    "ta": "2+ நிறுத்தங்கள்",
    "es": "2+ Escalas",
    "fr": "2+ Escales"
  },
  {
    "en": "Participating Airlines",
    "ta": "விமான நிறுவனங்கள்",
    "es": "Aerolíneas Participantes",
    "fr": "Compagnies Aériennes"
  },
  {
    "en": "In-Flight Experience",
    "ta": "விமானத்தில் கிடைக்கும் வசதிகள்",
    "es": "Experiencia a Bordo",
    "fr": "Expérience à Bord"
  },
  {
    "en": "Full Lie-Flat Beds",
    "ta": "முழு படுக்கை வசதி",
    "es": "Camas Totalmente Reclinables",
    "fr": "Sièges-Lits Plats"
  },
  {
    "en": "Chef-Curated Dining",
    "ta": "சிறப்பு சமையல் கலைஞர் உணவு",
    "es": "Comida Seleccionada por Chefs",
    "fr": "Repas Conçus par des Chefs"
  },
  {
    "en": "High-Speed Starlink WiFi",
    "ta": "அதிவேக வைஃபை வசதி",
    "es": "WiFi Starlink de Alta Velocidad",
    "fr": "Wi-Fi Haut Débit Starlink"
  },
  {
    "en": "Dedicated Flight Concierge",
    "ta": "பிரத்யேக விமான உதவி",
    "es": "Conserje de Vuelo Dedicado",
    "fr": "Concierge de Vol Dédié"
  },
  {
    "en": "24h Free Cancellation",
    "ta": "24 மணி நேர இலவச ரத்து",
    "es": "Cancelación Gratuita 24h",
    "fr": "Annulation Gratuite 24h"
  },
  {
    "en": "Best Airfare Promise",
    "ta": "சிறந்த கட்டண உத்தரவாதம்",
    "es": "Mejor Tarifa Garantizada",
    "fr": "Meilleur Tarif Garanti"
  },
  {
    "en": "Refine Results",
    "ta": "முடிவுகளை வடிகட்டு",
    "es": "Refinar Resultados",
    "fr": "Affiner les Résultats"
  },
  {
    "en": "Reset All",
    "ta": "அனைத்தையும் மீட்டமை",
    "es": "Restablecer Todo",
    "fr": "Tout Réinitialiser"
  },
  {
    "en": "Select Flight",
    "ta": "விமானம் தேர்வு செய்",
    "es": "Seleccionar Vuelo",
    "fr": "Sélectionner le Vol"
  },
  {
    "en": "Curated Worldwide Expeditions",
    "ta": "சிறப்பு உலகளாவிய டூர் தொகுப்புகள்",
    "es": "Expediciones Mundiales Exclusivas",
    "fr": "Expéditions Exclusives à Travers le Monde"
  },
  {
    "en": "All Expeditions",
    "ta": "அனைத்து பயணங்கள்",
    "es": "Todas las Expediciones",
    "fr": "Toutes les Expéditions"
  },
  {
    "en": "Featured Expeditions",
    "ta": "முக்கிய பயணங்கள்",
    "es": "Expediciones Destacadas",
    "fr": "Expéditions en Vedette"
  },
  {
    "en": "Boutique Group Size",
    "ta": "சிறிய குழு பயணம்",
    "es": "Grupos Reducidos Boutique",
    "fr": "Petits Groupes Privilège"
  },
  {
    "en": "Private Chauffeurs",
    "ta": "தனி வாகன ஓட்டுநர்கள்",
    "es": "Chóferes Privados",
    "fr": "Chauffeurs Privés"
  },
  {
    "en": "Flexible Rebooking",
    "ta": "நெகிழ்வான தேதி மாற்றம்",
    "es": "Reagendamiento Flexible",
    "fr": "Modification Flexible"
  },
  {
    "en": "VIP Behind-the-Scenes",
    "ta": "விஐபி பிரத்யேக அனுமதி",
    "es": "Acceso VIP Exclusivo",
    "fr": "Accès VIP dans les Coulisses"
  },
  {
    "en": "Expedition Overview",
    "ta": "பயணக் கண்ணோட்டம்",
    "es": "Resumen de la Expedición",
    "fr": "Aperçu de l'Expédition"
  },
  {
    "en": "Curated Highlights",
    "ta": "சிறப்பம்சங்கள்",
    "es": "Puntos Destacados",
    "fr": "Points Forts"
  },
  {
    "en": "Detailed Day-by-Day Itinerary",
    "ta": "நாள் வாரியான விரிவான பயணத்திட்டம்",
    "es": "Itinerario Detallado Día a Día",
    "fr": "Itinéraire Détaillé Jour par Jour"
  },
  {
    "en": "What's Included & Excluded",
    "ta": "சேர்க்கப்பட்டவை & சேர்க்கப்படாதவை",
    "es": "Qué Está Incluido y Excluido",
    "fr": "Ce Qui Est Inclus & Exclu"
  },
  {
    "en": "Included with Terra",
    "ta": "டெர்ராவில் சேர்க்கப்பட்டவை",
    "es": "Incluido con Terra",
    "fr": "Inclus avec Terra"
  },
  {
    "en": "Not Included",
    "ta": "சேர்க்கப்படாதவை",
    "es": "No Incluido",
    "fr": "Non Inclus"
  },
  {
    "en": "Book This Expedition",
    "ta": "இந்த பயணத்தை பதிவு செய்",
    "es": "Reservar Esta Expedición",
    "fr": "Réserver Cette Expédition"
  },
  {
    "en": "About The Property",
    "ta": "விடுதி பற்றி",
    "es": "Acerca de la Propiedad",
    "fr": "À Propos de l'Établissement"
  },
  {
    "en": "Included Property Amenities",
    "ta": "விடுதியில் உள்ள வசதிகள்",
    "es": "Comodidades Incluidas",
    "fr": "Équipements Inclus"
  },
  {
    "en": "Available Suites & Villas",
    "ta": "கிடைக்கும் அறைகள் & வில்லாக்கள்",
    "es": "Suites y Villas Disponibles",
    "fr": "Suites et Villas Disponibles"
  },
  {
    "en": "Book This Sanctuary",
    "ta": "இந்த விடுதியை பதிவு செய்",
    "es": "Reservar Este Santuario",
    "fr": "Réserver ce Sanctuaire"
  },
  {
    "en": "Select Suite",
    "ta": "அறையை தேர்வு செய்",
    "es": "Seleccionar Suite",
    "fr": "Sélectionner la Suite"
  },
  {
    "en": "Select Villa",
    "ta": "வில்லாவை தேர்வு செய்",
    "es": "Seleccionar Villa",
    "fr": "Sélectionner la Villa"
  },
  {
    "en": "24/7 Butler",
    "ta": "24/7 பட்லர் சேவை",
    "es": "Mayordomo 24/7",
    "fr": "Majordome 24/7"
  },
  {
    "en": "Airport Chauffeur",
    "ta": "விமான நிலைய வாகன சேவை",
    "es": "Chófer de Aeropuerto",
    "fr": "Chauffeur Aéroport"
  },
  {
    "en": "Infinity Pool",
    "ta": "இன்ஃபினிட்டி நீச்சல் குளம்",
    "es": "Piscina Infinita",
    "fr": "Piscine à Débordement"
  },
  {
    "en": "Holistic Spa",
    "ta": "ஆயுர்வேத ஸ்பா",
    "es": "Spa Holístico",
    "fr": "Spa Holistique"
  },
  {
    "en": "Organic Breakfast",
    "ta": "இயற்கை காலை உணவு",
    "es": "Desayuno Orgánico",
    "fr": "Petit-déjeuner Bio"
  },
  {
    "en": "Deluxe Garden Villa",
    "ta": "தோட்ட வில்லா",
    "es": "Villa con Jardín Deluxe",
    "fr": "Villa Jardin Deluxe"
  },
  {
    "en": "Panoramic Infinity Pool Suite",
    "ta": "நீச்சல் குளம் கொண்ட சூட் அறை",
    "es": "Suite con Piscina Panorámica",
    "fr": "Suite Piscine Panoramique"
  },
  {
    "en": "Lead Traveler Details",
    "ta": "முன்னணி பயணி விவரங்கள்",
    "es": "Detalles del Pasajero Principal",
    "fr": "Détails du Voyageur Principal"
  },
  {
    "en": "Travel & Room Preferences",
    "ta": "பயணம் & அறை விருப்பங்கள்",
    "es": "Preferencias de Viaje y Habitación",
    "fr": "Préférences de Voyage & Chambre"
  },
  {
    "en": "Confirmed Itinerary Dates",
    "ta": "உறுதிசெய்யப்பட்ட பயண தேதிகள்",
    "es": "Fechas Confirmadas del Itinerario",
    "fr": "Dates Confirmées de l'Itinéraire"
  },
  {
    "en": "Bedding Setup",
    "ta": "படுக்கை அமைப்பு",
    "es": "Configuración de Camas",
    "fr": "Configuration des Lits"
  },
  {
    "en": "Special Requests or Dietary Requirements (Optional)",
    "ta": "சிறப்பு கோரிக்கைகள் அல்லது உணவு விருப்பங்கள் (விருப்பத்திற்குரியது)",
    "es": "Peticiones Especiales o Dietéticas (Opcional)",
    "fr": "Demandes Spéciales ou Régimes (Optionnel)"
  },
  {
    "en": "Emergency Contact (Optional)",
    "ta": "அவசர தொடர்பு (விருப்பத்திற்குரியது)",
    "es": "Contacto de Emergencia (Opcional)",
    "fr": "Contact d'Urgence (Optionnel)"
  },
  {
    "en": "Emergency Contact Name",
    "ta": "அவசர தொடர்பு பெயர்",
    "es": "Nombre de Contacto de Emergencia",
    "fr": "Nom du Contact d'Urgence"
  },
  {
    "en": "Emergency Contact Phone",
    "ta": "அவசர தொடர்பு தொலைபேசி எண்",
    "es": "Teléfono de Contacto de Emergencia",
    "fr": "Téléphone du Contact d'Urgence"
  },
  {
    "en": "Continue to Payment",
    "ta": "பணம் செலுத்த தொடர்க",
    "es": "Continuar al Pago",
    "fr": "Continuer vers le Paiement"
  },
  {
    "en": "Reservation Summary",
    "ta": "முன்பதிவு சுருக்கம்",
    "es": "Resumen de Reserva",
    "fr": "Résumé de la Réservation"
  },
  {
    "en": "Select Payment Method",
    "ta": "பணம் செலுத்தும் முறை",
    "es": "Método de Pago",
    "fr": "Mode de Paiement"
  },
  {
    "en": "Credit / Debit Card",
    "ta": "கிரெடிட் / டெபிட் கார்டு",
    "es": "Tarjeta de Crédito / Débito",
    "fr": "Carte de Crédit / Débit"
  },
  {
    "en": "Apple Pay",
    "ta": "ஆப்பிள் பே",
    "es": "Apple Pay",
    "fr": "Apple Pay"
  },
  {
    "en": "PayPal Checkout",
    "ta": "பேபால்",
    "es": "PayPal",
    "fr": "PayPal"
  },
  {
    "en": "Cardholder Full Name",
    "ta": "கார்டுதாரர் முழு பெயர்",
    "es": "Nombre Completo del Titular",
    "fr": "Nom Complet du Titulaire"
  },
  {
    "en": "Card Number",
    "ta": "கார்டு எண்",
    "es": "Número de Tarjeta",
    "fr": "Numéro de Carte"
  },
  {
    "en": "Expiration Date",
    "ta": "காலாவதி தேதி",
    "es": "Fecha de Expiración",
    "fr": "Date d'Expiration"
  },
  {
    "en": "Security Code (CVV)",
    "ta": "பாதுகாப்பு குறியீடு (CVV)",
    "es": "Código de Seguridad (CVV)",
    "fr": "Code de Sécurité (CVV)"
  },
  {
    "en": "Billing address is identical to lead traveler primary residence.",
    "ta": "பில்லிங் முகவரியும் பயணியின் முகவரியும் ஒன்றே.",
    "es": "La dirección de facturación coincide con la del pasajero.",
    "fr": "L'adresse de facturation est identique à celle du voyageur."
  },
  {
    "en": "Have a Promotional Code?",
    "ta": "தள்ளுபடி கூப்பன் குறியீடு உள்ளதா?",
    "es": "¿Tienes un Código Promocional?",
    "fr": "Vous Avez un Code Promo ?"
  },
  {
    "en": "Apply",
    "ta": "பயன்படுத்து",
    "es": "Aplicar",
    "fr": "Appliquer"
  },
  {
    "en": "Order Summary",
    "ta": "ஆர்டர் சுருக்கம்",
    "es": "Resumen del Pedido",
    "fr": "Récapitulatif de la Commande"
  },
  {
    "en": "Confirm & Complete Booking",
    "ta": "முன்பதிவை உறுதிசெய்க",
    "es": "Confirmar y Completar Reserva",
    "fr": "Confirmer la Réservation"
  },
  {
    "en": "Reservation Confirmed!",
    "ta": "முன்பதிவு உறுதிசெய்யப்பட்டது!",
    "es": "¡Reserva Confirmada!",
    "fr": "Réservation Confirmée !"
  },
  {
    "en": "Print Travel Voucher",
    "ta": "பயண ரசீதை அச்சிடுக",
    "es": "Imprimir Comprobante",
    "fr": "Imprimer le Bon de Voyage"
  },
  {
    "en": "Add to Wallet / Calendar",
    "ta": "கேலெண்டரில் சேர்க்க",
    "es": "Añadir a la Cartera / Calendario",
    "fr": "Ajouter au Calendrier"
  },
  {
    "en": "Copy Code",
    "ta": "குறியீட்டை நகலெடு",
    "es": "Copiar Código",
    "fr": "Copier le Code"
  },
  {
    "en": "Return Home",
    "ta": "முகப்பிற்கு செல்க",
    "es": "Volver al Inicio",
    "fr": "Retour à l'Accueil"
  },
  {
    "en": "Your Travel Reservations",
    "ta": "உங்கள் பயண முன்பதிவுகள்",
    "es": "Tus Reservas de Viaje",
    "fr": "Vos Réservations de Voyage"
  },
  {
    "en": "Upcoming Expeditions",
    "ta": "வரவிருக்கும் பயணங்கள்",
    "es": "Próximas Expediciones",
    "fr": "Expéditions À Venir"
  },
  {
    "en": "Past Journeys",
    "ta": "முடிவடைந்த பயணங்கள்",
    "es": "Viajes Anteriores",
    "fr": "Voyages Passés"
  },
  {
    "en": "All Bookings",
    "ta": "அனைத்து முன்பதிவுகள்",
    "es": "Todas las Reservas",
    "fr": "Toutes les Réservations"
  },
  {
    "en": "Electronic Travel Voucher",
    "ta": "மின்னணு பயண ரசீது",
    "es": "Comprobante de Viaje Electrónico",
    "fr": "Bon de Voyage Électronique"
  },
  {
    "en": "View Ticket",
    "ta": "டிக்கெட் காண்க",
    "es": "Ver Boleto",
    "fr": "Voir le Billet"
  },
  {
    "en": "Search Results",
    "ta": "தேடல் முடிவுகள்",
    "es": "Resultados de Búsqueda",
    "fr": "Résultats de Recherche"
  },
  {
    "en": "Filter By",
    "ta": "வடிகட்டுதல்",
    "es": "Filtrar Por",
    "fr": "Filtrer Par"
  },
  {
    "en": "Max Budget",
    "ta": "அதிகபட்ச பட்ஜெட்",
    "es": "Presupuesto Máximo",
    "fr": "Budget Maximum"
  },
  {
    "en": "Experience Category",
    "ta": "அனுபவ வகை",
    "es": "Categoría de Experiencia",
    "fr": "Catégorie d'Expérience"
  },
  {
    "en": "Essential Amenities",
    "ta": "அத்தியாவசிய வசதிகள்",
    "es": "Comodidades Esenciales",
    "fr": "Équipements Essentiels"
  },
  {
    "en": "Complimentary Gourmet Breakfast",
    "ta": "இலவச சுவையான காலை உணவு",
    "es": "Desayuno Gourmet Gratuito",
    "fr": "Petit-déjeuner Gourmet Gratuit"
  },
  {
    "en": "Airport Chauffeur Transfer",
    "ta": "விமான நிலைய வாகன வசதி",
    "es": "Traslado con Chófer al Aeropuerto",
    "fr": "Transfert Chauffeur Aéroport"
  },
  {
    "en": "Swimming Pool / Spa",
    "ta": "நீச்சல் குளம் / ஸ்பா",
    "es": "Piscina / Spa",
    "fr": "Piscine / Spa"
  },
  {
    "en": "High-Speed Wi-Fi",
    "ta": "அதிவேக வைஃபை",
    "es": "Wi-Fi de Alta Velocidad",
    "fr": "Wi-Fi Haut Débit"
  },
  {
    "en": "Destination or Property",
    "ta": "இடம் அல்லது விடுதி",
    "es": "Destino o Propiedad",
    "fr": "Destination ou Établissement"
  },
  {
    "en": "Clear All",
    "ta": "அனைத்தையும் நீக்கு",
    "es": "Limpiar Todo",
    "fr": "Tout Effacer"
  },
  {
    "en": "Sort By:",
    "ta": "வரிசைப்படுத்து:",
    "es": "Ordenar Por:",
    "fr": "Trier Par :"
  },
  {
    "en": "Price: Low to High",
    "ta": "விலை: குறைந்ததிலிருந்து அதிகம்",
    "es": "Precio: Menor a Mayor",
    "fr": "Prix : Croissant"
  },
  {
    "en": "Price: High to Low",
    "ta": "விலை: அதிகத்திலிருந்து குறைவு",
    "es": "Precio: Mayor a Menor",
    "fr": "Prix : Décroissant"
  },
  {
    "en": "Highest Rated",
    "ta": "அதிக மதிப்பீடு",
    "es": "Mejor Valorados",
    "fr": "Les Mieux Notés"
  },
  {
    "en": "View Details",
    "ta": "விவரங்களை காண்க",
    "es": "Ver Detalles",
    "fr": "Voir les Détails"
  },
  {
    "en": "Book Tour",
    "ta": "டூர் பதிவு செய்",
    "es": "Reservar Tour",
    "fr": "Réserver le Circuit"
  },
  {
    "en": "Full Itinerary",
    "ta": "முழு அட்டவணை",
    "es": "Itinerario Completo",
    "fr": "Itinéraire Complet"
  },
  {
    "en": "Book Now",
    "ta": "இப்போதே பதிவு செய்",
    "es": "Reservar Ahora",
    "fr": "Réserver"
  },
  {
    "en": "Trips starting from",
    "ta": "தொடக்க விலை",
    "es": "Viajes desde",
    "fr": "Voyages à partir de"
  },
  {
    "en": "starting from",
    "ta": "தொடக்க விலை",
    "es": "desde",
    "fr": "à partir de"
  },
  {
    "en": "Starting from",
    "ta": "தொடக்க விலை",
    "es": "Desde",
    "fr": "À partir de"
  },
  {
    "en": "/ night",
    "ta": "/ இரவு",
    "es": "/ noche",
    "fr": "/ nuit"
  },
  {
    "en": "/ person",
    "ta": "/ நபர்",
    "es": "/ persona",
    "fr": "/ personne"
  },
  {
    "en": "Guest Favorite",
    "ta": "பயணிகளின் விருப்பம்",
    "es": "Favorito",
    "fr": "Coup de Cœur"
  },
  {
    "en": "Luxury Pick",
    "ta": "சொகுசு தேர்வு",
    "es": "Opción de Lujo",
    "fr": "Sélection Luxe"
  },
  {
    "en": "Best Value",
    "ta": "சிறந்த மதிப்பு",
    "es": "Mejor Valor",
    "fr": "Meilleur Prix"
  },
  {
    "en": "Boutique",
    "ta": "பொட்டிக்",
    "es": "Boutique",
    "fr": "Boutique"
  },
  {
    "en": "Trending",
    "ta": "பிரபலம்",
    "es": "Tendencia",
    "fr": "Tendance"
  },
  {
    "en": "Cultural",
    "ta": "கலாச்சாரம்",
    "es": "Cultural",
    "fr": "Culturel"
  },
  {
    "en": "Adventure",
    "ta": "சாகசம்",
    "es": "Aventura",
    "fr": "Aventure"
  },
  {
    "en": "Scenic Nature",
    "ta": "இயற்கை எழில்",
    "es": "Naturaleza",
    "fr": "Nature"
  },
  {
    "en": "Luxury Escapes",
    "ta": "சொகுசு பயணம்",
    "es": "Escapadas de Lujo",
    "fr": "Escapades Luxe"
  },
  {
    "en": "Scenic",
    "ta": "இயற்கை காட்சி",
    "es": "Escénico",
    "fr": "Panoramique"
  },
  {
    "en": "Free Cancellation",
    "ta": "இலவச ரத்து வசதி",
    "es": "Cancelación Gratuita",
    "fr": "Annulation Gratuite"
  },
  {
    "en": "Subtotal",
    "ta": "கூட்டுத்தொகை",
    "es": "Subtotal",
    "fr": "Sous-total"
  },
  {
    "en": "Total Amount",
    "ta": "மொத்த தொகை",
    "es": "Monto Total",
    "fr": "Montant Total"
  },
  {
    "en": "Total Amount Due",
    "ta": "மொத்த கட்டணம்",
    "es": "Total a Pagar",
    "fr": "Total à Payer"
  },
  {
    "en": "Due Today",
    "ta": "இன்று செலுத்த வேண்டிய தொகை",
    "es": "Total Hoy",
    "fr": "Dû Aujourd'hui"
  },
  {
    "en": "First Name",
    "ta": "முதல் பெயர்",
    "es": "Nombre",
    "fr": "Prénom"
  },
  {
    "en": "Last Name",
    "ta": "கடைசி பெயர்",
    "es": "Apellido",
    "fr": "Nom"
  },
  {
    "en": "Title",
    "ta": "தலைப்பு",
    "es": "Título",
    "fr": "Titre"
  },
  {
    "en": "Close",
    "ta": "மூடுக",
    "es": "Cerrar",
    "fr": "Fermer"
  },
  {
    "en": "Print",
    "ta": "அச்சிடுக",
    "es": "Imprimir",
    "fr": "Imprimer"
  }
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
 * Translate an arbitrary string if known in phrase dictionary
 */
function translatePhrase(rawText, targetLang) {
  if (!rawText) return rawText;
  const clean = rawText.trim().replace(/^[\s:–•|]+|[\s:–•|]+$/g, '').toLowerCase();
  const matched = PHRASE_LOOKUP[clean];
  if (matched && matched[targetLang]) {
    return matched[targetLang];
  }
  return rawText;
}

/**
 * Universal DOM Text Walker that translates all text nodes across ANY page
 */
function translateDomNodes(targetLang) {
  if (typeof document === 'undefined' || !document.body) return;

  // 1. Process elements with explicit data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const matched = TERRA_PHRASES.find(p => p.en.toLowerCase().includes(key.replace(/_/g, ' ')));
    if (matched && matched[targetLang]) {
      if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
        el.placeholder = matched[targetLang];
      } else {
        // Update first text node or textContent
        let updated = false;
        for (let i = 0; i < el.childNodes.length; i++) {
          if (el.childNodes[i].nodeType === Node.TEXT_NODE && el.childNodes[i].nodeValue.trim().length > 0) {
            el.childNodes[i].nodeValue = ' ' + matched[targetLang] + ' ';
            updated = true;
            break;
          }
        }
        if (!updated && !el.querySelector('i, svg')) {
          el.textContent = matched[targetLang];
        }
      }
    }
  });

  // 2. TreeWalker over entire document body to translate all text nodes
  try {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          const tag = parent.tagName;
          if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'CODE') {
            return NodeFilter.FILTER_REJECT;
          }
          // Do not translate language picker dropdown options
          if (parent.closest('#langDropdownBtn') || parent.closest('#navbarAuthButtons .dropdown-menu')) {
            return NodeFilter.FILTER_REJECT;
          }
          const val = node.nodeValue.trim();
          if (val.length >= 2 && !val.startsWith('$') && !val.startsWith('http') && !val.startsWith('©')) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_REJECT;
        }
      }
    );

    const nodesToUpdate = [];
    while (walker.nextNode()) {
      nodesToUpdate.push(walker.currentNode);
    }

    nodesToUpdate.forEach(node => {
      const orig = node.nodeValue.trim();
      const translated = translatePhrase(orig, targetLang);
      if (translated && translated !== orig) {
        // Preserve surrounding whitespace
        const leading = node.nodeValue.match(/^\s*/)[0];
        const trailing = node.nodeValue.match(/\s*$/)[0];
        node.nodeValue = leading + translated + trailing;
      }
    });
  } catch (err) {
    console.warn("TreeWalker traversal fallback", err);
  }

  // 3. Translate all inputs and textareas placeholder attributes
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(inp => {
    const ph = inp.getAttribute('placeholder');
    if (ph) {
      const translated = translatePhrase(ph, targetLang);
      if (translated !== ph) {
        inp.placeholder = translated;
      }
    }
  });

  // 4. Update HTML lang attribute
  if (document.documentElement) {
    document.documentElement.lang = targetLang;
  }
}

/**
 * Set and apply language across document
 */
function setLanguage(lang, isInitial = false) {
  if (!['en', 'ta', 'es', 'fr'].includes(lang)) lang = 'en';
  try {
    localStorage.setItem('terraLang', lang);
  } catch (e) {}

  // Apply translations to whole document
  translateDomNodes(lang);

  // Update active label on language button
  const currentLangLabel = document.getElementById('currentLangLabel');
  if (currentLangLabel) {
    const labels = { en: 'EN', ta: 'தமிழ்', es: 'ES', fr: 'FR' };
    currentLangLabel.textContent = labels[lang] || 'EN';
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

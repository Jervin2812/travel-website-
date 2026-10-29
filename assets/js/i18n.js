/**
 * TERRA — Comprehensive Universal Multi-Language (i18n) Engine
 * 12 Major World Languages Supported:
 * - English (en) [Default]
 * - தமிழ் (ta) [India / Sri Lanka / Singapore / Malaysia]
 * - हिन्दी (hi) [India]
 * - Español (es) [Spain / Latin America]
 * - Français (fr) [France / Canada / Switzerland]
 * - Deutsch (de) [Germany / Austria / Switzerland]
 * - Italiano (it) [Italy / Switzerland]
 * - Português (pt) [Portugal / Brazil]
 * - العربية (ar) [UAE / Saudi Arabia / Middle East]
 * - 日本語 (ja) [Japan]
 * - 中文 (zh) [China / Taiwan / Singapore]
 * - Русский (ru) [Global Eastern Europe & Central Asia]
 */

const TERRA_PHRASES = [
  {
    "en": "Home",
    "ta": "முகப்பு",
    "hi": "होम",
    "es": "Inicio",
    "fr": "Accueil",
    "de": "Startseite",
    "it": "Home",
    "pt": "Início",
    "ar": "الرئيسية",
    "ja": "ホーム",
    "zh": "首页",
    "ru": "Главная"
  },
  {
    "en": "Destinations",
    "ta": "சுற்றுலா இடங்கள்",
    "hi": "गंतव्य",
    "es": "Destinos",
    "fr": "Destinations",
    "de": "Reiseziele",
    "it": "Destinazioni",
    "pt": "Destinos",
    "ar": "الوجهات",
    "ja": "目的地",
    "zh": "目的地",
    "ru": "Направления"
  },
  {
    "en": "Flights",
    "ta": "விமானங்கள்",
    "hi": "उड़ानें",
    "es": "Vuelos",
    "fr": "Vols",
    "de": "Flüge",
    "it": "Voli",
    "pt": "Voos",
    "ar": "رحلات طيران",
    "ja": "フライト",
    "zh": "航班",
    "ru": "Авиабилеты"
  },
  {
    "en": "Hotels",
    "ta": "விடுதிகள்",
    "hi": "होटल",
    "es": "Hoteles",
    "fr": "Hôtels",
    "de": "Hotels",
    "it": "Hotel",
    "pt": "Hotéis",
    "ar": "فنادق",
    "ja": "ホテル",
    "zh": "酒店",
    "ru": "Отели"
  },
  {
    "en": "Tour Packages",
    "ta": "டூர் பேக்கேஜ்கள்",
    "hi": "टूर पैकेज",
    "es": "Paquetes Turísticos",
    "fr": "Circuits",
    "de": "Reisepakete",
    "it": "Pacchetti Vacanza",
    "pt": "Pacotes Turísticos",
    "ar": "باقات السفر",
    "ja": "ツアーパッケージ",
    "zh": "旅游套餐",
    "ru": "Турпакеты"
  },
  {
    "en": "About",
    "ta": "எங்களை பற்றி",
    "hi": "हमारे बारे में",
    "es": "Nosotros",
    "fr": "À Propos",
    "de": "Über Uns",
    "it": "Chi Siamo",
    "pt": "Sobre",
    "ar": "من نحن",
    "ja": "会社概要",
    "zh": "关于我们",
    "ru": "О нас"
  },
  {
    "en": "Contact",
    "ta": "தொடர்பு கொள்ள",
    "hi": "संपर्क",
    "es": "Contacto",
    "fr": "Contact",
    "de": "Kontakt",
    "it": "Contatti",
    "pt": "Contato",
    "ar": "اتصل بنا",
    "ja": "お問い合わせ",
    "zh": "联系我们",
    "ru": "Контакты"
  },
  {
    "en": "Log In",
    "ta": "உள்நுழைக",
    "hi": "लॉग इन",
    "es": "Iniciar Sesión",
    "fr": "Connexion",
    "de": "Anmelden",
    "it": "Accedi",
    "pt": "Entrar",
    "ar": "تسجيل الدخول",
    "ja": "ログイン",
    "zh": "登录",
    "ru": "Войти"
  },
  {
    "en": "Sign Up",
    "ta": "பதிவு செய்க",
    "hi": "साइन अप",
    "es": "Registrarse",
    "fr": "S'inscrire",
    "de": "Registrieren",
    "it": "Registrati",
    "pt": "Cadastre-se",
    "ar": "إنشاء حساب",
    "ja": "新規登録",
    "zh": "注册",
    "ru": "Регистрация"
  },
  {
    "en": "My Bookings",
    "ta": "என் முன்பதிவுகள்",
    "hi": "मेरी बुकिंग",
    "es": "Mis Reservas",
    "fr": "Mes Réservations",
    "de": "Meine Buchungen",
    "it": "Le Mie Prenotazioni",
    "pt": "Minhas Reservas",
    "ar": "حجوزاتي",
    "ja": "予約一覧",
    "zh": "我的订单",
    "ru": "Мои бронирования"
  },
  {
    "en": "Profile",
    "ta": "சுயவிவரம்",
    "hi": "प्रोफ़ाइल",
    "es": "Perfil",
    "fr": "Profil",
    "de": "Profil",
    "it": "Profilo",
    "pt": "Perfil",
    "ar": "الملف الشخصي",
    "ja": "プロフィール",
    "zh": "个人资料",
    "ru": "Профиль"
  },
  {
    "en": "My Profile",
    "ta": "என் சுயவிவரம்",
    "hi": "मेरी प्रोफ़ाइल",
    "es": "Mi Perfil",
    "fr": "Mon Profil",
    "de": "Mein Profil",
    "it": "Il Mio Profilo",
    "pt": "Meu Perfil",
    "ar": "ملفي الشخصي",
    "ja": "マイプロフィール",
    "zh": "我的资料",
    "ru": "Мой профиль"
  },
  {
    "en": "Sign Out",
    "ta": "வெளியேறு",
    "hi": "साइन आउट",
    "es": "Cerrar Sesión",
    "fr": "Déconnexion",
    "de": "Abmelden",
    "it": "Esci",
    "pt": "Sair",
    "ar": "تسجيل الخروج",
    "ja": "ログアウト",
    "zh": "退出登录",
    "ru": "Выйти"
  },
  {
    "en": "Company",
    "ta": "நிறுவனம்",
    "hi": "कंपनी",
    "es": "Compañía",
    "fr": "Entreprise",
    "de": "Unternehmen",
    "it": "Azienda",
    "pt": "Empresa",
    "ar": "الشركة",
    "ja": "会社情報",
    "zh": "公司",
    "ru": "Компания"
  },
  {
    "en": "Navigation",
    "ta": "பக்கங்கள்",
    "hi": "नेविगेशन",
    "es": "Navegación",
    "fr": "Navigation",
    "de": "Navigation",
    "it": "Navigazione",
    "pt": "Navegação",
    "ar": "التنقل",
    "ja": "ナビゲーション",
    "zh": "导航",
    "ru": "Навигация"
  },
  {
    "en": "Top Destinations",
    "ta": "முக்கிய இடங்கள்",
    "hi": "शीर्ष गंतव्य",
    "es": "Destinos Principales",
    "fr": "Destinations Phares",
    "de": "Top Reiseziele",
    "it": "Migliori Destinazioni",
    "pt": "Melhores Destinos",
    "ar": "أفضل الوجهات",
    "ja": "人気の目的地",
    "zh": "热门目的地",
    "ru": "Популярные направления"
  },
  {
    "en": "All rights reserved.",
    "ta": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    "hi": "सर्वाधिकार सुरक्षित।",
    "es": "Todos los derechos reservados.",
    "fr": "Tous droits réservés.",
    "de": "Alle Rechte vorbehalten.",
    "it": "Tutti i diritti riservati.",
    "pt": "Todos os direitos reservados.",
    "ar": "جميع الحقوق محفوظة.",
    "ja": "無断転載を禁じます。",
    "zh": "版权所有。",
    "ru": "Все права защищены."
  },
  {
    "en": "Privacy Policy",
    "ta": "தனியுரிமை கொள்கை",
    "hi": "गोपनीयता नीति",
    "es": "Política de Privacidad",
    "fr": "Politique de Confidentialité",
    "de": "Datenschutzrichtlinie",
    "it": "Informativa sulla Privacy",
    "pt": "Política de Privacidade",
    "ar": "سياسة الخصوصية",
    "ja": "プライバシーポリシー",
    "zh": "隐私政策",
    "ru": "Политика конфиденциальности"
  },
  {
    "en": "Terms of Service",
    "ta": "சேவை விதிமுறைகள்",
    "hi": "सेवा की शर्तें",
    "es": "Términos del Servicio",
    "fr": "Conditions d'Utilisation",
    "de": "Nutzungsbedingungen",
    "it": "Termini di Servizio",
    "pt": "Termos de Serviço",
    "ar": "شروط الخدمة",
    "ja": "利用規約",
    "zh": "服务条款",
    "ru": "Условия обслуживания"
  },
  {
    "en": "About Terra",
    "ta": "டெர்ரா பற்றி",
    "hi": "टेरा के बारे में",
    "es": "Sobre Terra",
    "fr": "À Propos de Terra",
    "de": "Über Terra",
    "it": "Informazioni su Terra",
    "pt": "Sobre a Terra",
    "ar": "حول تيرا",
    "ja": "Terraについて",
    "zh": "关于Terra",
    "ru": "О компании Terra"
  },
  {
    "en": "Contact Us",
    "ta": "தொடர்பு கொள்ள",
    "hi": "संपर्क करें",
    "es": "Contáctenos",
    "fr": "Contactez-nous",
    "de": "Kontaktieren Sie Uns",
    "it": "Contattaci",
    "pt": "Fale Conosco",
    "ar": "اتصل بنا",
    "ja": "お問い合わせ",
    "zh": "联系我们",
    "ru": "Связаться с нами"
  },
  {
    "en": "Help & FAQ",
    "ta": "உதவி & கேள்விகள்",
    "hi": "मदद और अक्सर पूछे जाने वाले प्रश्न",
    "es": "Ayuda y Preguntas",
    "fr": "Aide & FAQ",
    "de": "Hilfe & FAQ",
    "it": "Aiuto e FAQ",
    "pt": "Ajuda e FAQ",
    "ar": "المساعدة والأسئلة الشائعة",
    "ja": "ヘルプ＆よくある質問",
    "zh": "帮助与常见问题",
    "ru": "Помощь и FAQ"
  },
  {
    "en": "About Us",
    "ta": "எங்களை பற்றி",
    "hi": "हमारे बारे में",
    "es": "Sobre Nosotros",
    "fr": "À Propos de Nous",
    "de": "Über Uns",
    "it": "Chi Siamo",
    "pt": "Sobre Nós",
    "ar": "من نحن",
    "ja": "私たちについて",
    "zh": "关于我们",
    "ru": "О нас"
  },
  {
    "en": "Contact & Concierge",
    "ta": "தொடர்பு & வழிகாட்டுதல்",
    "hi": "संपर्क और दरबान",
    "es": "Contacto y Conserjería",
    "fr": "Contact & Conciergerie",
    "de": "Kontakt & Concierge",
    "it": "Contatti e Concierge",
    "pt": "Contato e Concierge",
    "ar": "الاتصال والكونسيرج",
    "ja": "お問い合わせ＆コンシェルジュ",
    "zh": "联系与礼宾服务",
    "ru": "Контакты и консьерж"
  },
  {
    "en": "Stays & Hotels",
    "ta": "தங்கும் விடுதிகள்",
    "hi": "ठहरने की जगह और होटल",
    "es": "Alojamientos",
    "fr": "Hôtels & Séjours",
    "de": "Unterkünfte & Hotels",
    "it": "Soggiorni e Hotel",
    "pt": "Hospedagens e Hotéis",
    "ar": "الإقامات والفنادق",
    "ja": "宿泊＆ホテル",
    "zh": "住宿与酒店",
    "ru": "Проживание и отели"
  },
  {
    "en": "Search Stays",
    "ta": "விடுதிகளை தேடுக",
    "hi": "होटल खोजें",
    "es": "Buscar Alojamientos",
    "fr": "Rechercher des Hôtels",
    "de": "Unterkünfte suchen",
    "it": "Cerca Soggiorni",
    "pt": "Buscar Hospedagens",
    "ar": "بحث عن إقامات",
    "ja": "宿泊先を検索",
    "zh": "搜索住宿",
    "ru": "Поиск жилья"
  },
  {
    "en": "Find Flights",
    "ta": "விமானம் தேடுக",
    "hi": "उड़ानें खोजें",
    "es": "Buscar Vuelos",
    "fr": "Trouver des Vols",
    "de": "Flüge finden",
    "it": "Trova Voli",
    "pt": "Encontrar Voos",
    "ar": "ابحث عن رحلات",
    "ja": "フライトを検索",
    "zh": "查找航班",
    "ru": "Найти рейсы"
  },
  {
    "en": "Browse Expeditions",
    "ta": "டூர் பேக்கேஜ்கள்",
    "hi": "अभियान देखें",
    "es": "Explorar Paquetes",
    "fr": "Parcourir les Circuits",
    "de": "Expeditionen durchsuchen",
    "it": "Esplora Spedizioni",
    "pt": "Explorar Expedições",
    "ar": "تصفح الرحلات الاستكشافية",
    "ja": "ツアーを探す",
    "zh": "浏览探险行程",
    "ru": "Смотреть экспедиции"
  },
  {
    "en": "Search",
    "ta": "தேடுக",
    "hi": "खोजें",
    "es": "Buscar",
    "fr": "Rechercher",
    "de": "Suchen",
    "it": "Cerca",
    "pt": "Buscar",
    "ar": "بحث",
    "ja": "検索",
    "zh": "搜索",
    "ru": "Поиск"
  },
  {
    "en": "Discover the World, Your Way.",
    "ta": "உலகை உங்கள் விருப்பப்படி கொண்டாடுங்கள்.",
    "hi": "दुनिया को अपने तरीके से खोजें।",
    "es": "Descubre el Mundo a tu Manera.",
    "fr": "Découvrez le Monde à Votre Façon.",
    "de": "Entdecken Sie die Welt nach Ihren Wünschen.",
    "it": "Scopri il Mondo a Modo Tuo.",
    "pt": "Descubra o Mundo do Seu Jeito.",
    "ar": "اكتشف العالم بأسلوبك الخاص.",
    "ja": "あなただけの旅で、世界を発見する。",
    "zh": "随心探索世界。",
    "ru": "Откройте мир по-своему."
  },
  {
    "en": "Bespoke Worldwide Expeditions",
    "ta": "சிறப்பு உலகளாவிய பயணங்கள்",
    "hi": "विशेष वैश्विक अभियान",
    "es": "Expediciones Exclusivas",
    "fr": "Expéditions Uniques",
    "de": "Maßgeschneiderte weltweite Reisen",
    "it": "Spedizioni Esclusive nel Mondo",
    "pt": "Expedições Exclusivas Globais",
    "ar": "رحلات استكشافية عالمية مخصصة",
    "ja": "オーダーメイドの世界探検",
    "zh": "专属全球探险之旅",
    "ru": "Индивидуальные мировые туры"
  },
  {
    "en": "Explore Destinations",
    "ta": "இடங்களை ஆராய்க",
    "hi": "गंतव्यों का अन्वेषण करें",
    "es": "Explorar Destinos",
    "fr": "Explorer les Destinations",
    "de": "Reiseziele entdecken",
    "it": "Esplora Destinazioni",
    "pt": "Explorar Destinos",
    "ar": "استكشف الوجهات",
    "ja": "目的地を探索",
    "zh": "探索目的地",
    "ru": "Исследовать направления"
  },
  {
    "en": "Curated Packages",
    "ta": "சிறப்பு பேக்கேஜ்கள்",
    "hi": "क्यूरेटेड पैकेज",
    "es": "Paquetes Exclusivos",
    "fr": "Circuits Exclusifs",
    "de": "Kuratierte Reisepakete",
    "it": "Pacchetti Curati",
    "pt": "Pacotes Selecionados",
    "ar": "باقات منتقاة بعناية",
    "ja": "厳選パッケージ",
    "zh": "精选旅游套餐",
    "ru": "Эксклюзивные пакеты"
  },
  {
    "en": "Destination",
    "ta": "இடம்",
    "hi": "गंतव्य",
    "es": "Destino",
    "fr": "Destination",
    "de": "Reiseziel",
    "it": "Destinazione",
    "pt": "Destino",
    "ar": "الوجهة",
    "ja": "目的地",
    "zh": "目的地",
    "ru": "Место назначения"
  },
  {
    "en": "Where are you going? (e.g. Bali, Paris)",
    "ta": "எங்கே செல்ல விரும்புகிறீர்கள்? (எ.கா. பாலி, பாரிஸ்)",
    "hi": "आप कहाँ जा रहे हैं? (उदा. बाली, पेरिस)",
    "es": "¿A dónde vas? (ej. Bali, París)",
    "fr": "Où allez-vous ? (ex. Bali, Paris)",
    "de": "Wohin reisen Sie? (z.B. Bali, Paris)",
    "it": "Dove vuoi andare? (es. Bali, Parigi)",
    "pt": "Para onde você vai? (ex. Bali, Paris)",
    "ar": "إلى أين تتجه؟ (مثال: بالي، باريس)",
    "ja": "どこに行きますか？ (例: バリ、パリ)",
    "zh": "想去哪里？（例如：巴厘岛、巴黎）",
    "ru": "Куда вы отправляетесь? (напр., Бали, Париж)"
  },
  {
    "en": "Check-in",
    "ta": "வருகை",
    "hi": "चेक-इन",
    "es": "Llegada",
    "fr": "Arrivée",
    "de": "Check-in",
    "it": "Check-in",
    "pt": "Check-in",
    "ar": "تسجيل الوصول",
    "ja": "チェックイン",
    "zh": "入住",
    "ru": "Заезд"
  },
  {
    "en": "Check-out",
    "ta": "வெளியேறுதல்",
    "hi": "चेक-आउट",
    "es": "Salida",
    "fr": "Départ",
    "de": "Check-out",
    "it": "Check-out",
    "pt": "Check-out",
    "ar": "تسجيل المغادرة",
    "ja": "チェックアウト",
    "zh": "退房",
    "ru": "Выезд"
  },
  {
    "en": "Travelers & Rooms",
    "ta": "பயணிகள் & அறைகள்",
    "hi": "यात्री और कमरे",
    "es": "Viajeros y Habitaciones",
    "fr": "Voyageurs et Chambres",
    "de": "Reisende & Zimmer",
    "it": "Viaggiatori e Camere",
    "pt": "Viajantes e Quartos",
    "ar": "المسافرون والغرف",
    "ja": "旅行者と部屋",
    "zh": "人数与房间",
    "ru": "Гости и номера"
  },
  {
    "en": "Flying From",
    "ta": "புறப்படும் இடம்",
    "hi": "कहाँ से उड़ान",
    "es": "Origen",
    "fr": "Départ de",
    "de": "Abflug von",
    "it": "Partenza da",
    "pt": "Origem do Voo",
    "ar": "المغادرة من",
    "ja": "出発地",
    "zh": "出发城市",
    "ru": "Откуда"
  },
  {
    "en": "Flying To",
    "ta": "சேருமிடம்",
    "hi": "कहाँ के लिए उड़ान",
    "es": "Destino",
    "fr": "Arrivée à",
    "de": "Flug nach",
    "it": "Arrivo a",
    "pt": "Destino do Voo",
    "ar": "الوصول إلى",
    "ja": "到着地",
    "zh": "到达城市",
    "ru": "Куда"
  },
  {
    "en": "Departure",
    "ta": "புறப்படும் தேதி",
    "hi": "प्रस्थान",
    "es": "Ida",
    "fr": "Date de départ",
    "de": "Hinflug",
    "it": "Andata",
    "pt": "Data de Partida",
    "ar": "المغادرة",
    "ja": "往路",
    "zh": "出发日期",
    "ru": "Туда"
  },
  {
    "en": "Return",
    "ta": "திரும்பும் தேதி",
    "hi": "वापसी",
    "es": "Vuelta",
    "fr": "Date de retour",
    "de": "Rückflug",
    "it": "Ritorno",
    "pt": "Data de Retorno",
    "ar": "العودة",
    "ja": "復路",
    "zh": "返程日期",
    "ru": "Обратно"
  },
  {
    "en": "Cabin Class",
    "ta": "வகுப்பு",
    "hi": "केबिन क्लास",
    "es": "Clase",
    "fr": "Classe",
    "de": "Kabinenklasse",
    "it": "Classe di Cabina",
    "pt": "Classe de Cabine",
    "ar": "درجة السفر",
    "ja": "座席クラス",
    "zh": "舱位等级",
    "ru": "Класс обслуживания"
  },
  {
    "en": "Economy",
    "ta": "பொருளாதார வகுப்பு",
    "hi": "इकोनॉमी",
    "es": "Económica",
    "fr": "Économique",
    "de": "Economy",
    "it": "Economy",
    "pt": "Econômica",
    "ar": "الدرجة السياحية",
    "ja": "エコノミー",
    "zh": "经济舱",
    "ru": "Эконом"
  },
  {
    "en": "Premium Economy",
    "ta": "பிரீமியம் பொருளாதாரம்",
    "hi": "प्रीमियम इकोनॉमी",
    "es": "Premium Economy",
    "fr": "Premium Économie",
    "de": "Premium Economy",
    "it": "Premium Economy",
    "pt": "Premium Economy",
    "ar": "الدرجة السياحية الممتازة",
    "ja": "プレミアムエコノミー",
    "zh": "高端经济舱",
    "ru": "Премиум-эконом"
  },
  {
    "en": "Business Class",
    "ta": "வணிக வகுப்பு",
    "hi": "बिजनेस क्लास",
    "es": "Clase Ejecutiva",
    "fr": "Classe Affaires",
    "de": "Business Class",
    "it": "Business Class",
    "pt": "Classe Executiva",
    "ar": "درجة رجال الأعمال",
    "ja": "ビジネスクラス",
    "zh": "公务舱",
    "ru": "Бизнес-класс"
  },
  {
    "en": "First Class",
    "ta": "முதல் வகுப்பு",
    "hi": "प्रथम श्रेणी",
    "es": "Primera Clase",
    "fr": "Première Classe",
    "de": "First Class",
    "it": "Prima Classe",
    "pt": "Primeira Classe",
    "ar": "الدرجة الأولى",
    "ja": "ファーストクラス",
    "zh": "头等舱",
    "ru": "Первый класс"
  },
  {
    "en": "Popular Destinations",
    "ta": "பிரபலமான சுற்றுலா இடங்கள்",
    "hi": "लोकप्रिय गंतव्य",
    "es": "Destinos Populares",
    "fr": "Destinations Populaires",
    "de": "Beliebte Reiseziele",
    "it": "Destinazioni Popolari",
    "pt": "Destinos Populares",
    "ar": "الوجهات الشهيرة",
    "ja": "人気の目的地",
    "zh": "热门目的地",
    "ru": "Популярные направления"
  },
  {
    "en": "Recommended Hotels",
    "ta": "பரிந்துரைக்கப்பட்ட விடுதிகள்",
    "hi": "अनुशंसित होटल",
    "es": "Hoteles Recomendados",
    "fr": "Hôtels Recommandés",
    "de": "Empfohlene Hotels",
    "it": "Hotel Consigliati",
    "pt": "Hotéis Recomendados",
    "ar": "فنادق موصى بها",
    "ja": "おすすめのホテル",
    "zh": "推荐酒店",
    "ru": "Рекомендуемые отели"
  },
  {
    "en": "Featured Tour Packages",
    "ta": "சிறப்பு டூர் பேக்கேஜ்கள்",
    "hi": "विशेष टूर पैकेज",
    "es": "Paquetes Turísticos Destacados",
    "fr": "Circuits Touristiques Recommandés",
    "de": "Besondere Reisepakete",
    "it": "Pacchetti Turistici in Evidenza",
    "pt": "Pacotes em Destaque",
    "ar": "باقات السفر المميزة",
    "ja": "注目のツアーパッケージ",
    "zh": "精选旅游套餐",
    "ru": "Рекомендуемые турпакеты"
  },
  {
    "en": "Why Travel With Terra",
    "ta": "ஏன் டெர்ரா உடன் பயணிக்க வேண்டும்?",
    "hi": "टेरा के साथ यात्रा क्यों करें?",
    "es": "¿Por Qué Elegir Terra?",
    "fr": "Pourquoi Voyager Avec Terra ?",
    "de": "Warum mit Terra reisen?",
    "it": "Perché Viaggiare con Terra",
    "pt": "Por que Viajar com a Terra",
    "ar": "لماذا تسافر مع تيرا؟",
    "ja": "Terraを選ぶ理由",
    "zh": "为什么选择Terra？",
    "ru": "Почему стоит путешествовать с Terra"
  },
  {
    "en": "Loved by Travelers Worldwide",
    "ta": "சர்வதேச பயணிகளின் மதிப்புரைகள்",
    "hi": "दुनिया भर के यात्रियों द्वारा पसंद किया गया",
    "es": "Elogiado por Viajeros de Todo el Mundo",
    "fr": "Approuvé par les Voyageurs du Monde Entier",
    "de": "Von Reisenden weltweit geschätzt",
    "it": "Amato dai Viaggiatori di Tutto il Mondo",
    "pt": "Adorado por Viajantes do Mundo Todo",
    "ar": "محبوب من المسافرين حول العالم",
    "ja": "世界中の旅行者に愛されています",
    "zh": "深受全球旅行者喜爱",
    "ru": "Выбор путешественников со всего мира"
  },
  {
    "en": "Travel Inspiration",
    "ta": "பயண உத்வேகம்",
    "hi": "यात्रा प्रेरणा",
    "es": "Inspiración para Viajar",
    "fr": "Inspiration de Voyage",
    "de": "Reise-Inspiration",
    "it": "Ispirazione di Viaggio",
    "pt": "Inspiração para Viagens",
    "ar": "إلهام السفر",
    "ja": "旅のインスピレーション",
    "zh": "旅行灵感",
    "ru": "Вдохновение для путешествий"
  },
  {
    "en": "Get $100 Off Your First Trip",
    "ta": "உங்கள் முதல் பயணத்திற்கு $100 தள்ளுபடி பெறுங்கள்",
    "hi": "अपनी पहली यात्रा पर $100 की छूट पाएं",
    "es": "Obtén $100 de Descuento en tu Primer Viaje",
    "fr": "Obtenez 100 $ de Réduction sur Votre Premier Voyage",
    "de": "Erhalten Sie 100 $ Rabatt auf Ihre erste Reise",
    "it": "Ricevi $100 di Sconto sul Primo Viaggio",
    "pt": "Ganhe $100 de Desconto na Primeira Viagem",
    "ar": "احصل على خصم 100 دولار على أول رحلة",
    "ja": "初回の旅で100ドル割引",
    "zh": "首航立减100美元",
    "ru": "Скидка 100 $ на первое путешествие"
  },
  {
    "en": "Subscribe",
    "ta": "இணைந்திடுக",
    "hi": "सब्सक्राइब करें",
    "es": "Suscribirse",
    "fr": "S'abonner",
    "de": "Abonnieren",
    "it": "Iscriviti",
    "pt": "Inscrever-se",
    "ar": "اشتراك",
    "ja": "購読する",
    "zh": "订阅",
    "ru": "Подписаться"
  },
  {
    "en": "Enter your email address",
    "ta": "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
    "hi": "अपना ईमेल दर्ज करें",
    "es": "Ingresa tu correo electrónico",
    "fr": "Entrez votre adresse e-mail",
    "de": "Geben Sie Ihre E-Mail-Adresse ein",
    "it": "Inserisci il tuo indirizzo email",
    "pt": "Digite seu endereço de e-mail",
    "ar": "أدخل بريدك الإلكتروني",
    "ja": "メールアドレスを入力",
    "zh": "输入您的电子邮箱",
    "ru": "Введите адрес эл. почты"
  },
  {
    "en": "View Details",
    "ta": "விவரங்களை காண்க",
    "hi": "विवरण देखें",
    "es": "Ver Detalles",
    "fr": "Voir les Détails",
    "de": "Details ansehen",
    "it": "Visualizza Dettagli",
    "pt": "Ver Detalhes",
    "ar": "عرض التفاصيل",
    "ja": "詳細を見る",
    "zh": "查看详情",
    "ru": "Подробнее"
  },
  {
    "en": "Book Tour",
    "ta": "டூர் பதிவு செய்",
    "hi": "टूर बुक करें",
    "es": "Reservar Tour",
    "fr": "Réserver le Circuit",
    "de": "Tour buchen",
    "it": "Prenota Tour",
    "pt": "Reservar Excursão",
    "ar": "حجز الجولة",
    "ja": "ツアーを予約",
    "zh": "预订行程",
    "ru": "Забронировать тур"
  },
  {
    "en": "Full Itinerary",
    "ta": "முழு அட்டவணை",
    "hi": "पूरा कार्यक्रम",
    "es": "Itinerario Completo",
    "fr": "Itinéraire Complet",
    "de": "Vollständiger Reiseplan",
    "it": "Itinerario Completo",
    "pt": "Itinerário Completo",
    "ar": "البرنامج الكامل",
    "ja": "全旅程を見る",
    "zh": "完整行程",
    "ru": "Полная программа"
  },
  {
    "en": "Book Now",
    "ta": "இப்போதே பதிவு செய்",
    "hi": "अभी बुक करें",
    "es": "Reservar Ahora",
    "fr": "Réserver",
    "de": "Jetzt buchen",
    "it": "Prenota Ora",
    "pt": "Reservar Agora",
    "ar": "احجز الآن",
    "ja": "今すぐ予約",
    "zh": "立即预订",
    "ru": "Забронировать"
  },
  {
    "en": "Select Flight",
    "ta": "விமானம் தேர்வு செய்",
    "hi": "उड़ान चुनें",
    "es": "Seleccionar Vuelo",
    "fr": "Sélectionner le Vol",
    "de": "Flug auswählen",
    "it": "Seleziona Volo",
    "pt": "Selecionar Voo",
    "ar": "اختر الرحلة",
    "ja": "フライトを選択",
    "zh": "选择航班",
    "ru": "Выбрать рейс"
  },
  {
    "en": "Trips starting from",
    "ta": "தொடக்க விலை",
    "hi": "शुरुआती मूल्य",
    "es": "Viajes desde",
    "fr": "Voyages à partir de",
    "de": "Reisen ab",
    "it": "Viaggi a partire da",
    "pt": "Viagens a partir de",
    "ar": "تبدأ الرحلات من",
    "ja": "料金：〜から",
    "zh": "起价：",
    "ru": "Туры от"
  },
  {
    "en": "starting from",
    "ta": "தொடக்க விலை",
    "hi": "से शुरू",
    "es": "desde",
    "fr": "à partir de",
    "de": "ab",
    "it": "a partire da",
    "pt": "a partir de",
    "ar": "ابتداءً من",
    "ja": "〜から",
    "zh": "起",
    "ru": "от"
  },
  {
    "en": "/ night",
    "ta": "/ இரவு",
    "hi": "/ रात",
    "es": "/ noche",
    "fr": "/ nuit",
    "de": "/ Nacht",
    "it": "/ notte",
    "pt": "/ noite",
    "ar": "/ ليلة",
    "ja": "/ 泊",
    "zh": "/ 晚",
    "ru": "/ ночь"
  },
  {
    "en": "/ person",
    "ta": "/ நபர்",
    "hi": "/ व्यक्ति",
    "es": "/ persona",
    "fr": "/ personne",
    "de": "/ Person",
    "it": "/ persona",
    "pt": "/ pessoa",
    "ar": "/ شخص",
    "ja": "/ 名",
    "zh": "/ 人",
    "ru": "/ чел."
  },
  {
    "en": "Guest Favorite",
    "ta": "பயணிகளின் விருப்பம்",
    "hi": "अतिथियों की पसंद",
    "es": "Favorito",
    "fr": "Coup de Cœur",
    "de": "Gästefavorit",
    "it": "Preferito dagli Ospiti",
    "pt": "Favorito dos Hóspedes",
    "ar": "المفضل لدى الضيوف",
    "ja": "ゲストのお気に入り",
    "zh": "房客最爱",
    "ru": "Выбор гостей"
  },
  {
    "en": "Luxury Pick",
    "ta": "சொகுசு தேர்வு",
    "hi": "लक्जरी विकल्प",
    "es": "Opción de Lujo",
    "fr": "Sélection Luxe",
    "de": "Luxus-Auswahl",
    "it": "Scelta di Lusso",
    "pt": "Opção de Luxo",
    "ar": "اختيار الفخامة",
    "ja": "ラグジュアリー選出",
    "zh": "奢华精选",
    "ru": "Люкс выбор"
  },
  {
    "en": "Best Value",
    "ta": "சிறந்த மதிப்பு",
    "hi": "सर्वोत्तम मूल्य",
    "es": "Mejor Valor",
    "fr": "Meilleur Prix",
    "de": "Bestes Preis-Leistungs-Verhältnis",
    "it": "Miglior Valore",
    "pt": "Melhor Custo-Benefício",
    "ar": "أفضل قيمة",
    "ja": "ベストバリュー",
    "zh": "最具性价比",
    "ru": "Лучшая цена"
  },
  {
    "en": "Trending",
    "ta": "பிரபலம்",
    "hi": "ट्रेंडिंग",
    "es": "Tendencia",
    "fr": "Tendance",
    "de": "Im Trend",
    "it": "Di Tendenza",
    "pt": "Em Alta",
    "ar": "رائج الآن",
    "ja": "トレンド",
    "zh": "热门潮流",
    "ru": "В тренде"
  },
  {
    "en": "Cultural",
    "ta": "கலாச்சாரம்",
    "hi": "सांस्कृतिक",
    "es": "Cultural",
    "fr": "Culturel",
    "de": "Kulturell",
    "it": "Culturale",
    "pt": "Cultural",
    "ar": "ثقافي",
    "ja": "文化・歴史",
    "zh": "文化探索",
    "ru": "Культурный"
  },
  {
    "en": "Adventure",
    "ta": "சாகசம்",
    "hi": "रोमांच",
    "es": "Aventura",
    "fr": "Aventure",
    "de": "Abenteuer",
    "it": "Avventura",
    "pt": "Aventura",
    "ar": "مغامرة",
    "ja": "アドベンチャー",
    "zh": "户外冒险",
    "ru": "Приключения"
  },
  {
    "en": "Scenic Nature",
    "ta": "இயற்கை எழில்",
    "hi": "सुंदर प्रकृति",
    "es": "Naturaleza",
    "fr": "Nature",
    "de": "Landschaft & Natur",
    "it": "Natura e Paesaggi",
    "pt": "Natureza Cênica",
    "ar": "طبيعة خلابة",
    "ja": "絶景・自然",
    "zh": "自然风光",
    "ru": "Природа и пейзажи"
  },
  {
    "en": "Luxury Escapes",
    "ta": "சொகுசு பயணம்",
    "hi": "लक्जरी पलायन",
    "es": "Escapadas de Lujo",
    "fr": "Escapades Luxe",
    "de": "Luxusreisen",
    "it": "Fughe di Lusso",
    "pt": "Refúgios de Luxo",
    "ar": "ملاذات فاخرة",
    "ja": "ラグジュアリーリトリート",
    "zh": "高端度假",
    "ru": "Роскошный отдых"
  },
  {
    "en": "Redefining the Art of International Travel",
    "ta": "சர்வதேச பயணக் கலையை மறுவரையறை செய்கிறோம்",
    "hi": "अंतर्राष्ट्रीय यात्रा की कला को नया रूप देना",
    "es": "Redefiniendo el Arte de los Viajes Internacionales",
    "fr": "Redéfinir l'Art du Voyage International",
    "de": "Die Kunst des internationalen Reisens neu definiert",
    "it": "Ridefinire l'Arte del Viaggio Internazionale",
    "pt": "Redefinindo a Arte das Viagens Internacionais",
    "ar": "إعادة صياغة فن السفر الدولي",
    "ja": "世界の旅を、新次元の芸術へ。",
    "zh": "重新定义奢华国际旅行的艺术",
    "ru": "Переосмысление искусства путешествий"
  },
  {
    "en": "Our Purpose & Story",
    "ta": "எங்கள் நோக்கம் & கதை",
    "hi": "हमारा उद्देश्य और कहानी",
    "es": "Nuestro Propósito e Historia",
    "fr": "Notre Mission & Histoire",
    "de": "Unsere Mission & Geschichte",
    "it": "La Nostra Missione e Storia",
    "pt": "Nosso Propósito e História",
    "ar": "هدفنا وقصتنا",
    "ja": "私たちの理念と物語",
    "zh": "我们的宗旨与故事",
    "ru": "Наша цель и история"
  },
  {
    "en": "The Terra Distinction",
    "ta": "டெர்ராவின் தனிச்சிறப்பு",
    "hi": "टेरा की विशेषता",
    "es": "La Distinción Terra",
    "fr": "La Distinction Terra",
    "de": "Der Terra-Unterschied",
    "it": "La Distinzione Terra",
    "pt": "O Diferencial Terra",
    "ar": "تميز تيرا الفريد",
    "ja": "Terraのこだわり",
    "zh": "Terra的卓越标准",
    "ru": "Преимущества Terra"
  },
  {
    "en": "Curated Rarity",
    "ta": "அரிய இடங்களின் தேர்வு",
    "hi": "क्यूरेटेड दुर्लभता",
    "es": "Rareza Curada",
    "fr": "Rareté Soigneusement Choisie",
    "de": "Kuratierte Exklusivität",
    "it": "Rarità Selezionata",
    "pt": "Raridade Selecionada",
    "ar": "ندرة استثنائية",
    "ja": "厳選された希少価値",
    "zh": "独特罕见之选",
    "ru": "Редкие находки"
  },
  {
    "en": "Transparent Integrity",
    "ta": "வெளிப்படையான நேர்மை",
    "hi": "पारदर्शी सत्यनिष्ठा",
    "es": "Integridad Transparente",
    "fr": "Intégrité Transparente",
    "de": "Transparente Integrität",
    "it": "Integrità Trasparente",
    "pt": "Integridade Transparente",
    "ar": "نزاهة وشفافية مطلقة",
    "ja": "透明性と信頼",
    "zh": "透明诚信",
    "ru": "Прозрачность и честность"
  },
  {
    "en": "Personal Mastery",
    "ta": "தனிப்பட்ட சிறப்பான சேவை",
    "hi": "व्यक्तिगत महारत",
    "es": "Maestría Personal",
    "fr": "Maîtrise Personnelle",
    "de": "Persönliche Exzellenz",
    "it": "Maestria Personale",
    "pt": "Maestria Pessoal",
    "ar": "مهارة وخبرة شخصية",
    "ja": "卓越したパーソナル対応",
    "zh": "专属尊贵体验",
    "ru": "Индивидуальное мастерство"
  },
  {
    "en": "Cultural Respect",
    "ta": "கலாச்சார மரியாதை",
    "hi": "सांस्कृतिक सम्मान",
    "es": "Respeto Cultural",
    "fr": "Respect Culturel",
    "de": "Kultureller Respekt",
    "it": "Rispetto Culturale",
    "pt": "Respeito Cultural",
    "ar": "احترام التراث الثقافي",
    "ja": "文化への敬意",
    "zh": "尊重多元文化",
    "ru": "Уважение к культуре"
  },
  {
    "en": "The Curators Behind Terra",
    "ta": "டெர்ராவை வழிநடத்தும் நிபுணர்கள்",
    "hi": "टेरा के पीछे के क्यूरेटर",
    "es": "Los Curadores Detrás de Terra",
    "fr": "Les Curateurs Derrière Terra",
    "de": "Die Macher hinter Terra",
    "it": "I Curatori Dietro Terra",
    "pt": "Os Curadores por Trás da Terra",
    "ar": "المشرفون والخبراء وراء تيرا",
    "ja": "Terraを支えるキュレーターたち",
    "zh": "Terra背后的策划大师",
    "ru": "Кураторы Terra"
  },
  {
    "en": "We're Here For Every Mile of Your Journey",
    "ta": "உங்கள் பயணத்தின் ஒவ்வொரு மைலிலும் நாங்கள் உங்களுடன்",
    "hi": "हम आपकी यात्रा के हर मील में आपके साथ हैं",
    "es": "Estamos Aquí en Cada Milla de tu Viaje",
    "fr": "À Vos Côtés à Chaque Étape de Votre Voyage",
    "de": "Wir begleiten jede Meile Ihrer Reise",
    "it": "Al tuo fianco in ogni chilometro",
    "pt": "Estamos com você a cada milha",
    "ar": "معك في كل ميل من رحلتك",
    "ja": "旅のすべての一歩に、寄り添う。",
    "zh": "在您旅程的每一英里与您相伴",
    "ru": "С вами на каждой миле пути"
  },
  {
    "en": "Send a Message to Our Desk",
    "ta": "எங்கள் உதவி மையத்திற்கு செய்தி அனுப்புக",
    "hi": "हमारे डेस्क को संदेश भेजें",
    "es": "Envía un Mensaje a Nuestra Mesa",
    "fr": "Envoyez un Message à Notre Bureau",
    "de": "Nachricht an unseren Schalter senden",
    "it": "Invia un Messaggio al Nostro Desk",
    "pt": "Envie uma Mensagem para Nós",
    "ar": "أرسل رسالة إلى فريقنا",
    "ja": "デスクへメッセージを送信",
    "zh": "向服务台发送咨询",
    "ru": "Отправить сообщение"
  },
  {
    "en": "Frequently Asked Questions",
    "ta": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    "hi": "अक्सर पूछे जाने वाले प्रश्न",
    "es": "Preguntas Frecuentes",
    "fr": "Foire Aux Questions",
    "de": "Häufig gestellte Fragen",
    "it": "Domande Frequenti",
    "pt": "Perguntas Frequentes",
    "ar": "الأسئلة الشائعة",
    "ja": "よくある質問",
    "zh": "常见问题解答",
    "ru": "Часто задаваемые вопросы"
  },
  {
    "en": "Explore the World's Wonders",
    "ta": "உலகின் அதிசயங்களை ஆராய்க",
    "hi": "दुनिया के अजूबों का अन्वेषण करें",
    "es": "Explora las Maravillas del Mundo",
    "fr": "Explorez les Merveilles du Monde",
    "de": "Entdecken Sie die Wunder der Welt",
    "it": "Esplora le Meraviglie del Mondo",
    "pt": "Explore as Maravilhas do Mundo",
    "ar": "استكشف عجائب العالم",
    "ja": "世界の驚異を探索する",
    "zh": "探索世界奇观",
    "ru": "Исследуйте чудеса света"
  },
  {
    "en": "Find & Book Premium Worldwide Flights",
    "ta": "சர்வதேச பிரீமியம் விமானங்களை தேடி பதிவு செய்யுங்கள்",
    "hi": "प्रीमियम वैश्विक उड़ानें खोजें और बुक करें",
    "es": "Encuentra y Reserva Vuelos Premium Mundiales",
    "fr": "Trouvez et Réservez des Vols Premium",
    "de": "Weltweite Premium-Flüge finden & buchen",
    "it": "Trova e Prenota Voli Premium nel Mondo",
    "pt": "Encontre e Reserve Voos Premium Mundiais",
    "ar": "احجز رحلات طيران فاخرة حول العالم",
    "ja": "世界のプレミアムフライトを検索・予約",
    "zh": "查找并预订全球尊贵航班",
    "ru": "Поиск и бронирование премиальных авиабилетов"
  },
  {
    "en": "Curated Worldwide Expeditions",
    "ta": "சிறப்பு உலகளாவிய டூர் தொகுப்புகள்",
    "hi": "क्यूरेटेड विश्वव्यापी अभियान",
    "es": "Expediciones Mundiales Exclusivas",
    "fr": "Expéditions Exclusives à Travers le Monde",
    "de": "Kuratierte weltweite Expeditionen",
    "it": "Spedizioni Mondiali Curate",
    "pt": "Expedições Mundiais Selecionadas",
    "ar": "رحلات استكشافية عالمية فاخرة",
    "ja": "厳選された世界探検ツアー",
    "zh": "精选全球主题探险",
    "ru": "Эксклюзивные мировые экспедиции"
  },
  {
    "en": "Lead Traveler Details",
    "ta": "முன்னணி பயணி விவரங்கள்",
    "hi": "मुख्य यात्री विवरण",
    "es": "Detalles del Pasajero Principal",
    "fr": "Détails du Voyageur Principal",
    "de": "Angaben zum Hauptreisenden",
    "it": "Dettagli del Viaggiatore Principale",
    "pt": "Dados do Passageiro Principal",
    "ar": "بيانات المسافر الرئيسي",
    "ja": "代表旅行者情報",
    "zh": "主要旅客信息",
    "ru": "Данные основного пассажира"
  },
  {
    "en": "Reservation Summary",
    "ta": "முன்பதிவு சுருக்கம்",
    "hi": "आरक्षण सारांश",
    "es": "Resumen de Reserva",
    "fr": "Résumé de la Réservation",
    "de": "Buchungsübersicht",
    "it": "Riepilogo della Prenotazione",
    "pt": "Resumo da Reserva",
    "ar": "ملخص الحجز",
    "ja": "予約の概要",
    "zh": "预订摘要",
    "ru": "Сводка бронирования"
  },
  {
    "en": "Select Payment Method",
    "ta": "பணம் செலுத்தும் முறை",
    "hi": "भुगतान विधि चुनें",
    "es": "Método de Pago",
    "fr": "Mode de Paiement",
    "de": "Zahlungsmethode wählen",
    "it": "Metodo di Pagamento",
    "pt": "Método de Pagamento",
    "ar": "اختر طريقة الدفع",
    "ja": "支払い方法を選択",
    "zh": "选择支付方式",
    "ru": "Выберите способ оплаты"
  },
  {
    "en": "Confirm & Complete Booking",
    "ta": "முன்பதிவை உறுதிசெய்க",
    "hi": "बुकिंग की पुष्टि करें और पूरा करें",
    "es": "Confirmar y Completar Reserva",
    "fr": "Confirmer la Réservation",
    "de": "Buchung bestätigen & abschließen",
    "it": "Conferma e Completa la Prenotazione",
    "pt": "Confirmar e Concluir Reserva",
    "ar": "تأكيد واستكمال الحجز",
    "ja": "予約を確定・完了する",
    "zh": "确认并完成预订",
    "ru": "Подтвердить и завершить бронирование"
  },
  {
    "en": "Reservation Confirmed!",
    "ta": "முன்பதிவு உறுதிசெய்யப்பட்டது!",
    "hi": "आरक्षण की पुष्टि हो गई!",
    "es": "¡Reserva Confirmada!",
    "fr": "Réservation Confirmée !",
    "de": "Reservierung Bestätigt!",
    "it": "Prenotazione Confermata!",
    "pt": "Reserva Confirmada!",
    "ar": "تم تأكيد الحجز بنجاح!",
    "ja": "予約が完了しました！",
    "zh": "预订已确认！",
    "ru": "Бронирование подтверждено!"
  },
  {
    "en": "Your Travel Reservations",
    "ta": "உங்கள் பயண முன்பதிவுகள்",
    "hi": "आपके यात्रा आरक्षण",
    "es": "Tus Reservas de Viaje",
    "fr": "Vos Réservations de Voyage",
    "de": "Ihre Reisebuchungen",
    "it": "Le Tue Prenotazioni di Viaggio",
    "pt": "Suas Reservas de Viagem",
    "ar": "حجوزات السفر الخاصة بك",
    "ja": "あなたの旅行予約",
    "zh": "您的旅行订单",
    "ru": "Ваши поездки и бронирования"
  },
  {
    "en": "Print Travel Voucher",
    "ta": "பயண ரசீதை அச்சிடுக",
    "hi": "यात्रा वाउचर प्रिंट करें",
    "es": "Imprimir Comprobante",
    "fr": "Imprimer le Bon de Voyage",
    "de": "Reisegutschein drucken",
    "it": "Stampa Voucher di Viaggio",
    "pt": "Imprimir Voucher de Viagem",
    "ar": "طباعة قسيمة السفر",
    "ja": "予約バウチャーを印刷",
    "zh": "打印旅行凭证",
    "ru": "Печать ваучера"
  },
  {
    "en": "Continue to Payment",
    "ta": "பணம் செலுத்த தொடர்க",
    "hi": "भुगतान के लिए आगे बढ़ें",
    "es": "Continuar al Pago",
    "fr": "Continuer vers le Paiement",
    "de": "Weiter zur Zahlung",
    "it": "Procedi al Pagamento",
    "pt": "Continuar para Pagamento",
    "ar": "المتابعة إلى الدفع",
    "ja": "お支払いへ進む",
    "zh": "继续支付",
    "ru": "Перейти к оплате"
  },
  {
    "en": "Order Summary",
    "ta": "ஆர்டர் சுருக்கம்",
    "hi": "ऑर्डर सारांश",
    "es": "Resumen del Pedido",
    "fr": "Récapitulatif de la Commande",
    "de": "Bestellübersicht",
    "it": "Riepilogo Ordine",
    "pt": "Resumo do Pedido",
    "ar": "ملخص الطلب",
    "ja": "注文の概要",
    "zh": "订单概览",
    "ru": "Сумма заказа"
  },
  {
    "en": "Search Results",
    "ta": "தேடல் முடிவுகள்",
    "hi": "खोज परिणाम",
    "es": "Resultados de Búsqueda",
    "fr": "Résultats de Recherche",
    "de": "Suchergebnisse",
    "it": "Risultati della Ricerca",
    "pt": "Resultados da Busca",
    "ar": "نتائج البحث",
    "ja": "検索結果",
    "zh": "搜索结果",
    "ru": "Результаты поиска"
  },
  {
    "en": "Clear All",
    "ta": "அனைத்தையும் நீக்கு",
    "hi": "सभी साफ़ करें",
    "es": "Limpiar Todo",
    "fr": "Tout Effacer",
    "de": "Alles zurücksetzen",
    "it": "Cancella Tutto",
    "pt": "Limpar Tudo",
    "ar": "مسح الكل",
    "ja": "すべてクリア",
    "zh": "清空全部",
    "ru": "Сбросить всё"
  },
  {
    "en": "Filter By",
    "ta": "வடிகட்டுதல்",
    "hi": "द्वारा फ़िल्टर करें",
    "es": "Filtrar Por",
    "fr": "Filtrer Par",
    "de": "Filtern nach",
    "it": "Filtra Per",
    "pt": "Filtrar Por",
    "ar": "تصفية حسب",
    "ja": "絞り込み：",
    "zh": "筛选条件",
    "ru": "Фильтры"
  },
  {
    "en": "Free Cancellation",
    "ta": "இலவச ரத்து வசதி",
    "hi": "मुफ़्त रद्दीकरण",
    "es": "Cancelación Gratuita",
    "fr": "Annulation Gratuite",
    "de": "Kostenlose Stornierung",
    "it": "Cancellazione Gratuita",
    "pt": "Cancelamento Gratuito",
    "ar": "إلغاء مجاني",
    "ja": "無料キャンセル可能",
    "zh": "免费取消",
    "ru": "Бесплатная отмена"
  }
];

// Build Bi-directional Lookup Table
const PHRASE_LOOKUP = {};
TERRA_PHRASES.forEach(item => {
  Object.keys(item).forEach(langKey => {
    const text = item[langKey];
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

  // 2. TreeWalker over entire document body to translate text nodes safely
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
          // Do not translate inside language picker dropdown itself
          if (parent.closest('#langDropdownBtn') || parent.closest('#navbarAuthButtons .dropdown-menu') || parent.closest('.lang-selector-btn')) {
            return NodeFilter.FILTER_REJECT;
          }
          // Skip pure numbers or currency amounts like $280
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
        const leading = node.nodeValue.match(/^\s*/)[0];
        const trailing = node.nodeValue.match(/\s*$/)[0];
        node.nodeValue = leading + translated + trailing;
      }
    });
  } catch (err) {
    console.warn("TreeWalker translation fallback:", err);
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

  // 4. Update HTML lang & dir attribute for RTL support (Arabic)
  if (document.documentElement) {
    document.documentElement.lang = targetLang;
    if (targetLang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.removeAttribute('dir');
    }
  }
}

/**
 * Set and apply language across document
 */
function setLanguage(lang, isInitial = false) {
  const supported = ['en', 'ta', 'hi', 'es', 'fr', 'de', 'it', 'pt', 'ar', 'ja', 'zh', 'ru'];
  if (!supported.includes(lang)) lang = 'en';
  try {
    localStorage.setItem('terraLang', lang);
  } catch (e) {}

  // Apply translations to whole document
  translateDomNodes(lang);

  // Update active label on language button
  const currentLangLabel = document.getElementById('currentLangLabel');
  if (currentLangLabel) {
    const labels = {
      en: 'EN',
      ta: 'தமிழ்',
      hi: 'हिन्दी',
      es: 'ES',
      fr: 'FR',
      de: 'DE',
      it: 'IT',
      pt: 'PT',
      ar: 'العربية',
      ja: '日本語',
      zh: '中文',
      ru: 'RU'
    };
    currentLangLabel.textContent = labels[lang] || 'EN';
  }

  const toasts = {
    en: "Language set to English",
    ta: "மொழி தமிழுக்கு மாற்றப்பட்டது",
    hi: "भाषा बदलकर हिन्दी कर दी गई है",
    es: "Idioma cambiado a Español",
    fr: "Langue changée en Français",
    de: "Sprache auf Deutsch geändert",
    it: "Lingua impostata su Italiano",
    pt: "Idioma alterado para Português",
    ar: "تم تغيير اللغة إلى العربية",
    ja: "言語を日本語に変更しました",
    zh: "语言已切换为简体中文",
    ru: "Язык изменен на русский"
  };

  if (!isInitial && typeof showToast === 'function') {
    showToast('Language Updated', toasts[lang] || 'Language updated', 'info');
  }
}

// Global I18N Object & helper for main.js and search.js integration
if (typeof window !== 'undefined') {
  window.setLanguage = setLanguage;
  window.applyTranslations = (lang) => setLanguage(lang, true);
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

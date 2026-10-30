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
,
  {
      "en": "Founded with a passion to bridge cultural wonder with effortless luxury, Terra connects discerning explorers with hand-vetted sanctuaries, private scenic routes, and bespoke local expeditions.",
      "ta": "கலாச்சார அதிசயங்களை நிகரற்ற ஆடம்பரத்துடன் இணைக்கும் ஆர்வத்துடன் தொடங்கப்பட்ட டெர்ரா, தேர்ந்தெடுக்கப்பட்ட சொர்க்க பூமிகள், தனிப்பட்ட இயற்கை வழித்தடங்கள் மற்றும் தனித்துவமான பயணங்களை உங்களுக்கு வழங்குகிறது.",
      "hi": "सांस्कृतिक आकर्षण को सहज विलासिता के साथ जोड़ने के जुनून के साथ स्थापित, टेरा समझदार यात्रियों को चुनिंदा अभयारण्यों और व्यक्तिगत यात्राओं से जोड़ता है।",
      "es": "Fundada con la pasión de unir la maravilla cultural con el lujo natural, Terra conecta a exploradores exigentes con santuarios exclusivos y expediciones a medida.",
      "fr": "Fondée avec la passion d'unir émerveillement culturel et luxe raffiné, Terra connecte les voyageurs avec des sanctuaires exclusifs et des expéditions sur mesure.",
      "de": "Gegründet aus der Leidenschaft, kulturelle Wunder mit mühelosem Luxus zu verbinden, bringt Terra anspruchsvolle Reisende zu handverlesenen Rückzugsorten.",
      "it": "Fondata con la passione di unire meraviglia culturale e lusso discreto, Terra connette viaggiatori esigenti con santuari selezionati e itinerari esclusivi.",
      "pt": "Fundada com a paixão de unir maravilhas culturais com luxo sem esforço, a Terra conecta viajantes a refúgios selecionados e expedições sob medida.",
      "ar": "تأسست تيرا لربط الروائع الثقافية بالفخامة الراقية، لتوصل المستكشفين بملاذات حصرية ومسارات خاصة لا تُنسى.",
      "ja": "文化の深遠なる美と極上の安らぎを融合させるために誕生したTERRA。厳選された隠れ家とオーダーメイドの旅をお届けします。",
      "zh": "TERRA致力于将深厚的文化底蕴与极致奢华融为一体，为追求卓越的旅行家打造手选秘境与专属定制旅程。",
      "ru": "Созданная, чтобы объединить культурные чудеса с безмятежной роскошью, Terra открывает избранные курорты и эксклюзивные экспедиции."
  },
  {
      "en": "100% Carbon Balanced Expeditions",
      "ta": "100% கார்பன் சமநிலைப்படுத்தப்பட்ட பயணங்கள்",
      "hi": "100% कार्बन संतुलित अभियान",
      "es": "Expediciones 100% Carbono Neutral",
      "fr": "Expéditions 100% Neutres en Carbone",
      "de": "100% CO2-kompensierte Expeditionen",
      "it": "Spedizioni al 100% a Impatto Zero",
      "pt": "Expedições 100% Neutras em Carbono",
      "ar": "رحلات استكشافية متوازنة الكربون بنسبة 100%",
      "ja": "100％カーボンオフセット認証ツアー",
      "zh": "100% 碳中和认证生态远征",
      "ru": "100% углеродно-нейтральные экспедиции"
  },
  {
      "en": "Verified conservation offsets for all booked journeys.",
      "ta": "முன்பதிவு செய்யப்படும் அனைத்துப் பயணங்களுக்கும் சரிபார்க்கப்பட்ட சுற்றுச்சூழல் பாதுகாப்பு பங்களிப்புகள்.",
      "hi": "सभी बुक की गई यात्राओं के लिए सत्यापित पर्यावरण संरक्षण सहयोग।",
      "es": "Compensación verificada de conservación para cada viaje reservado.",
      "fr": "Compensations écologiques vérifiées pour chaque voyage réservé.",
      "de": "Geprüfte Umweltschutzkompensationen für jede gebuchte Reise.",
      "it": "Compensazione ecologica certificata per ogni viaggio prenotato.",
      "pt": "Compensações ecológicas verificadas para todas as viagens reservadas.",
      "ar": "مساهمات معتمدة لحماية البيئة لكل رحلة يتم حجزها.",
      "ja": "ご予約いただいたすべての旅で環境保全オフセットを実施しています。",
      "zh": "每笔预订行程均包含权威认证的生态保护与碳补偿。",
      "ru": "Подтвержденная экологическая компенсация для всех поездок."
  },
  {
      "en": "Global Explorers Hosted",
      "ta": "பயணம் செய்த உலகளாவிய பயணிகள்",
      "hi": "वैश्विक यात्री जिन्होंने यात्रा की",
      "es": "Exploradores Globales Recibidos",
      "fr": "Voyageurs Internationaux Accueillis",
      "de": "Begeisterte Reisende weltweit",
      "it": "Esploratori Globali Ospitati",
      "pt": "Viajantes Globais Atendidos",
      "ar": "مستكشفون حول العالم تم استضافتهم",
      "ja": "ご案内した世界のエクスプローラー",
      "zh": "服务过的全球尊荣旅行家",
      "ru": "Принятых путешественников со всего мира"
  },
  {
      "en": "Bespoke Sanctuaries",
      "ta": "தனித்துவமான சொர்க்க ரிசார்ட்டுகள்",
      "hi": "अनूठे लग्जरी अभयारण्य",
      "es": "Santuarios Exclusivos",
      "fr": "Sanctuaires d'Exception",
      "de": "Exklusive Rückzugsorte",
      "it": "Santuari Esclusivi",
      "pt": "Refúgios Exclusivos",
      "ar": "ملاذات فاخرة مخصصة",
      "ja": "厳選された極上のリゾート",
      "zh": "精选私享避世奢华庄园",
      "ru": "Эксклюзивных приватных курортов"
  },
  {
      "en": "Client Satisfaction",
      "ta": "வாடிக்கையாளர் திருப்தி",
      "hi": "ग्राहक संतुष्टि",
      "es": "Satisfacción del Cliente",
      "fr": "Satisfaction Client",
      "de": "Kundenzufriedenheit",
      "it": "Soddisfazione dei Clienti",
      "pt": "Satisfação dos Clientes",
      "ar": "نسبة رضا العملاء",
      "ja": "お客様満足度",
      "zh": "客户五星满意率",
      "ru": "Удовлетворенность клиентов"
  },
  {
      "en": "Dedicated Concierge Desk",
      "ta": "24/7 பிரத்யேக பயண உதவி மையம்",
      "hi": "समर्पित सहायता डेस्क",
      "es": "Mesa de Conserjería Dedicada",
      "fr": "Conciergerie Dédiée 24/7",
      "de": "Persönlicher 24/7 Concierge-Service",
      "it": "Concierge Dedicato 24/7",
      "pt": "Serviço de Concierge Dedicado",
      "ar": "مكتب كونسيرج مخصص على مدار الساعة",
      "ja": "24時間対応プライベートコンシェルジュ",
      "zh": "全天候专属礼宾管家中心",
      "ru": "Круглосуточная служба консьержей"
  },
  {
      "en": "Our Guiding Pillars",
      "ta": "எங்கள் வழிகாட்டும் தூண்கள்",
      "hi": "हमारे मार्गदर्शक स्तंभ",
      "es": "Nuestros Pilares Fundamentales",
      "fr": "Nos Piliers Fondateurs",
      "de": "Unsere Grundpfeiler",
      "it": "I Nostri Pilastri Guida",
      "pt": "Nossos Pilares Fundamentais",
      "ar": "ركائزنا التوجيهية",
      "ja": "私たちの指針・哲学",
      "zh": "我们的核心价值支柱",
      "ru": "Наши ключевые ценности"
  },
  {
      "en": "Every accommodation, flight partnership, and expedition guide adheres to our strict charter of hospitality excellence.",
      "ta": "ஒவ்வொரு தங்குமிடம், விமானக் கூட்டு மற்றும் பயண வழிகாட்டியும் எங்கள் கடுமையான விருந்தோம்பல் தரநிலையை உறுதிப்படுத்துகிறது.",
      "hi": "हर आवास, उड़ान साझेदारी और यात्रा गाइड हमारे सख्त आतिथ्य चार्टर का पालन करते हैं।",
      "es": "Cada estancia, aerolínea aliada y guía de expedición cumple con nuestra estricta carta de excelencia en hospitalidad.",
      "fr": "Chaque hébergement, partenaire aérien et guide respecte notre charte rigoureuse d'excellence hôtelière.",
      "de": "Jede Unterkunft, Airline-Partnerschaft und Expeditionsführung erfüllt unsere strengen Qualitätsrichtlinien.",
      "it": "Ogni alloggio, compagnia aerea partner e guida rispetta i nostri rigorosi standard di eccellenza nell'ospitalità.",
      "pt": "Cada hospedagem, companhia aérea parceira e guia segue nossos rigorosos padrões de excelência.",
      "ar": "تلتزم كل وجهة إقامة وشريك طيران ومرشد سياحي بميثاقنا الصارم لجودة الضيافة.",
      "ja": "すべての宿泊施設、航空便、ガイドは、私たちが定める極めて厳格なおもてなし基準をクリアしています。",
      "zh": "每一处入住胜地、航空合作伙伴与地陪专家均恪守严苛的尊贵款待准则。",
      "ru": "Каждый отель, авиакомпания-партнер и гид соответствуют нашим строгим стандартам гостеприимства."
  },
  {
      "en": "We reject mass listings. Every destination is personally inspected to guarantee privacy, authenticity, and extraordinary architecture.",
      "ta": "பொதுவான பட்டியல்களை நாங்கள் ஏற்பதில்லை. தனிமை, உண்மைத்தன்மை மற்றும் கண்கவர் கட்டடக் கலையை உறுதி செய்ய ஒவ்வொரு இடமும் நேரில் ஆய்வு செய்யப்படுகிறது.",
      "hi": "हम सामान्य सूचियों को अस्वीकार करते हैं। गोपनीयता, प्रामाणिकता और वास्तुकला की गारंटी के लिए हर गंतव्य का व्यक्तिगत निरीक्षण किया जाता है।",
      "es": "Rechazamos los listados masivos. Cada destino es inspeccionado personalmente para garantizar privacidad, autenticidad y arquitectura extraordinaria.",
      "fr": "Nous refusons le tourisme de masse. Chaque destination est inspectée personnellement pour garantir intimité, authenticité et architecture d'exception.",
      "de": "Wir verzichten auf Massenangebote. Jeder Ort wird persönlich geprüft, um Privatsphäre, Authentizität und exzellente Architektur zu sichern.",
      "it": "Rifiutiamo le liste di massa. Ogni destinazione è ispezionata personalmente per garantire privacy, autenticità e architettura straordinaria.",
      "pt": "Rejeitamos listagens em massa. Cada destino é inspecionado pessoalmente para garantir privacidade, autenticidade e arquitetura única.",
      "ar": "نرفض القوائم التجارية المزدحمة. يتم فحص كل وجهة شخصياً لضمان الخصوصية والأصالة والروعة المعمارية.",
      "ja": "大量掲載は行いません。プライバシー、本物であること、卓越した建築美を保証するため現地を直接確認しています。",
      "zh": "我们拒绝大众化流水线产品。每一处度假胜地均经专家亲身严苛考察，确保隐私、本真与非凡美学。",
      "ru": "Мы отказываемся от массовых предложений. Каждая локация инспектируется лично ради приватности и аутентичности."
  },
  {
      "en": "No surprise resort fees, bait-and-switch pricing, or undisclosed checkout taxes. What you see is what you pay.",
      "ta": "மறைமுகக் கட்டணங்கள், திடீர் விலையேற்றங்கள் அல்லது அறிவிக்கப்படாத வரிகள் எதுவுமில்லை. நீங்கள் பார்ப்பது மட்டுமே நீங்கள் செலுத்தும் தொகை.",
      "hi": "कोई अप्रत्याशित रिसॉर्ट शुल्क या छिपे हुए टैक्स नहीं। जो आप देखते हैं, वही भुगतान करते हैं।",
      "es": "Sin tarifas ocultas de resort ni impuestos sorpresa. Lo que ves es exactamente lo que pagas.",
      "fr": "Aucun frais d'hôtel surprise ni taxe dissimulée. Ce que vous voyez est exactement ce que vous payez.",
      "de": "Keine versteckten Gebühren oder unerwartete Steuern. Was Sie sehen, ist genau das, was Sie zahlen.",
      "it": "Nessuna commissione a sorpresa o tassa nascosta. Ciò che vedi è esattamente ciò che paghi.",
      "pt": "Sem taxas surpresa de resort ou impostos ocultos. O que você vê é exatamente o que paga.",
      "ar": "لا توجد رسوم خفية أو ضرائب غير معلنة. ما تراه هو ما تدفعه بالضبط.",
      "ja": "不透明な追加料金や隠れリゾートフィーは一切ありません。表示価格がそのままお支払い総額です。",
      "zh": "绝无任何隐性度假村杂费或未披露税费。所见即所得，清清楚楚。",
      "ru": "Никаких скрытых курортных сборов и налогов. Вы платите ровно ту сумму, которую видите."
  },
  {
      "en": "Direct phone and messaging contact with certified regional travel custodians who coordinate transfers, dining, and custom needs.",
      "ta": "உங்கள் பயணப் போக்குவரத்து, உணவு மற்றும் தனிப்பட்ட தேவைகளை ஒருங்கிணைக்கும் சான்றளிக்கப்பட்ட பிராந்திய நிபுணர்களுடன் நேரடி தொடர்பு.",
      "hi": "प्रमाणित क्षेत्रीय यात्रा सलाहकारों के साथ सीधा संपर्क जो आपकी यात्रा, भोजन और जरूरतों का समन्वय करते हैं।",
      "es": "Contacto directo telefónico y por mensaje con expertos certificados que coordinan traslados, gastronomía y deseos especiales.",
      "fr": "Contact direct par téléphone et messagerie avec des experts régionaux certifiés pour vos transferts, tables et souhaits particuliers.",
      "de": "Direkter telefonischer Kontakt mit zertifizierten Reiseexperten für Transfers, Kulinarik und persönliche Wünsche.",
      "it": "Contatto diretto con custodi di viaggio regionali certificati per coordinare trasferimenti, ristoranti e desideri su misura.",
      "pt": "Contato direto por telefone e mensagem com especialistas regionais certificados para coordenar traslados e gastronomia.",
      "ar": "تواصل هاتفي ومباشر مع خبراء سفر إقليميين معتمدين لتنسيق التنقلات والمطاعم ورغباتكم الخاصة.",
      "ja": "送迎や特別なお食事、特別なご要望を手配する認定トラベルエキスパートと直接やり取りできます。",
      "zh": "直接致电或在线联络经官方认证的在地旅行专家，随心协调专车、米其林餐饮与个性化需求。",
      "ru": "Прямая связь с сертифицированными тревел-экспертами для трансферов, броней и особых пожеланий."
  },
  {
      "en": "We work directly with indigenous guides, organic farming cooperatives, and local craftsmen to keep tourism beneficial to resident communities.",
      "ta": "சுற்றுலாவால் உள்ளூர் சமூகங்கள் பயனடையும் வகையில் பாரம்பரிய வழிகாட்டிகள், இயற்கை விவசாயிகள் மற்றும் கைவினைஞர்களுடன் நாங்கள் இணைந்து பணியாற்றுகிறோம்.",
      "hi": "हम स्थानीय गाइडों, जैविक कृषकों और कारीगरों के साथ सीधे काम करते हैं ताकि पर्यटन स्थानीय समुदायों के लिए लाभकारी हो।",
      "es": "Trabajamos directamente con guías locales, cooperativas orgánicas y artesanos para que el turismo beneficie a las comunidades.",
      "fr": "Nous collaborons directement avec des guides locaux, coopératives bio et artisans afin que le voyage soutienne les communautés.",
      "de": "Wir arbeiten eng mit lokalen Führern, Bio-Bauern und Handwerkern zusammen, um Gemeinden nachhaltig zu stärken.",
      "it": "Collaboriamo direttamente con guide indigene, cooperative agricole e artigiani per far sì che il turismo sostenga le comunità.",
      "pt": "Trabalhamos diretamente com guias locais, cooperativas agrícolas e artesãos para beneficiar as comunidades residentes.",
      "ar": "نتعاون مباشرة مع المرشدين المحليين والمزارعين والحرفيين ليكون السفر نافعاً ومستداماً للمجتمعات المحلية.",
      "ja": "現地の先住ガイドやオーガニック農家、職人と直接提携し、地域社会に実りをもたらす旅を推進しています。",
      "zh": "我们直接与原住民向导、有机合作社和传统匠人携手，确保旅游业为当地社区带来长期福祉。",
      "ru": "Мы сотрудничаем напрямую с коренными гидами, эко-фермерами и ремесленниками во благо местных сообществ."
  },
  {
      "en": "Global Leadership",
      "ta": "உலகளாவிய தலைமைத்துவம்",
      "hi": "वैश्विक नेतृत्व",
      "es": "Liderazgo Global",
      "fr": "Direction Internationale",
      "de": "Globale Führung",
      "it": "Leadership Globale",
      "pt": "Liderança Global",
      "ar": "القيادة العالمية",
      "ja": "グローバル・リーダーシップ",
      "zh": "全球领军专家团队",
      "ru": "Мировое лидерство"
  },
  {
      "en": "Architects, aviation veterans, and local cultural anthropologists crafting extraordinary journeys.",
      "ta": "கட்டடக் கலைஞர்கள், விமானப் போக்குவரத்து வல்லுநர்கள் மற்றும் கலாச்சார ஆய்வாளர்கள் இணைந்து உருவாக்கும் அற்புதப் பயணங்கள்.",
      "hi": "वास्तुकार, विमानन विशेषज्ञ और सांस्कृतिक मानवविज्ञानी मिलकर असाधारण यात्राएं तैयार करते हैं।",
      "es": "Arquitectos, veteranos de aviación y antropólogos culturales creando viajes extraordinarios.",
      "fr": "Architectes, experts de l'aviation et anthropologues culturels concevant des voyages d'exception.",
      "de": "Architekten, Luftfahrtveteranen und Kulturanthropologen gestalten unvergleichliche Reisen.",
      "it": "Architetti, esperti di aviazione e antropologi culturali che creano viaggi straordinari.",
      "pt": "Arquitetos, veteranos da aviação e antropólogos culturais criando jornadas extraordinárias.",
      "ar": "مهندسون وخبراء طيران وباحثون ثقافيون يصممون رحلات لا مثيل لها.",
      "ja": "建築家、航空業界の熟練者、文化人類学者が結集し、唯一無二の物語を描き出します。",
      "zh": "由著名建筑大师、资深航空专家与文化学者联袂匠心构筑的梦幻旅途。",
      "ru": "Архитекторы, эксперты авиации и культурологи создают незабываемые маршруты."
  },
  {
      "en": "Begin Planning Your Next Chapter",
      "ta": "உங்கள் அடுத்த பயண அத்தியாயத்தைத் திட்டமிடத் தொடங்குங்கள்",
      "hi": "अपने अगले अध्याय की योजना बनाना शुरू करें",
      "es": "Comienza a Planear tu Próximo Capítulo",
      "fr": "Commencez à Écrire Votre Prochain Chapitre",
      "de": "Beginnen Sie die Planung Ihres nächsten Kapitels",
      "it": "Inizia a Pianificare il Tuo Prossimo Capitolo",
      "pt": "Comece a Planejar seu Próximo Capítulo",
      "ar": "ابدأ في التخطيط لفصلك القادم",
      "ja": "あなたの旅の新しい物語をはじめましょう",
      "zh": "开启谱写您人生探索的新篇章",
      "ru": "Начните планировать новую главу путешествий"
  },
  {
      "en": "Connect with our curators to tailor your custom itinerary or reserve from our worldwide destinations.",
      "ta": "உங்கள் தனிப்பயன் பயணத்திட்டத்தை உருவாக்க அல்லது உலகளாவிய இடங்களை முன்பதிவு செய்ய எங்கள் நிபுணர்களுடன் இணையுங்கள்.",
      "hi": "अपनी कस्टम यात्रा योजना तैयार करने या हमारे वैश्विक गंतव्यों से बुक करने के लिए हमारे सलाहकारों से जुड़ें।",
      "es": "Conéctate con nuestros curadores para diseñar un itinerario a medida o reservar en nuestros destinos globales.",
      "fr": "Contactez nos experts pour façonner votre itinéraire sur mesure ou réserver nos destinations d'exception.",
      "de": "Verbinden Sie sich mit unseren Kuratoren für Ihre maßgeschneiderte Reiseroute weltweit.",
      "it": "Contatta i nostri curatori per creare un itinerario su misura o prenotare le nostre destinazioni nel mondo.",
      "pt": "Conecte-se com nossos curadores para criar seu roteiro personalizado ou reservar em nossos destinos globais.",
      "ar": "تواصل مع خبرائنا لتصميم جدول رحلتك الخاص أو الحجز من بين وجهاتنا العالمية.",
      "ja": "専任キュレーターにご相談いただき、理想のカスタムツアーや世界各地のリゾートをご予約ください。",
      "zh": "即刻联络我们的资深旅行策展团队，定制专属尊享行程或预订全球度假圣地。",
      "ru": "Свяжитесь с нашими кураторами для индивидуального маршрута или бронирования."
  },
  {
      "en": "Contact Our Desk",
      "ta": "எங்கள் உதவி மையத்தைத் தொடர்பு கொள்ளுங்கள்",
      "hi": "हमारे डेस्क से संपर्क करें",
      "es": "Contactar Nuestra Mesa",
      "fr": "Contacter Notre Équipe",
      "de": "Kontaktieren Sie unseren Desk",
      "it": "Contatta il Nostro Desk",
      "pt": "Contate Nossa Central",
      "ar": "تواصل مع مكتبنا",
      "ja": "コンシェルジュデスクにお問い合わせ",
      "zh": "联络尊享礼宾专席",
      "ru": "Связаться с нашей службой"
  },
  {
      "en": "Meet Our Concierge",
      "ta": "எங்கள் பயண ஆலோசகரைச் சந்தியுங்கள்",
      "hi": "हमारे दरबान से मिलें",
      "es": "Conoce a Nuestro Conserje",
      "fr": "Rencontrer Notre Concierge",
      "de": "Lernen Sie unseren Concierge kennen",
      "it": "Incontra il Nostro Concierge",
      "pt": "Conheça Nosso Concierge",
      "ar": "تحدث إلى خبير الكونسيرج",
      "ja": "コンシェルジュに相談する",
      "zh": "与专属礼宾面对面",
      "ru": "Познакомиться с консьержем"
  },
  {
      "en": "24/7 Global Travelers Desk",
      "ta": "24/7 உலகளாவிய பயணிகள் உதவி மையம்",
      "hi": "24/7 वैश्विक यात्री सहायता डेस्क",
      "es": "Mesa Global de Viajeros 24/7",
      "fr": "Bureau des Voyageurs 24/7",
      "de": "Weltweiter 24/7 Reiseservice",
      "it": "Desk Viaggiatori Globale 24/7",
      "pt": "Central Global de Viajantes 24/7",
      "ar": "مكتب المسافرين العالمي على مدار 24/7",
      "ja": "24時間365日 世界共通トラベルデスク",
      "zh": "24/7 全球尊荣旅行家接待中心",
      "ru": "Круглосуточная служба путешественников 24/7"
  },
  {
      "en": "Have an inquiry regarding an upcoming reservation, private aircraft charter, or custom itinerary? Reach our curators anytime.",
      "ta": "முன்பதிவு, தனி விமான சேவை அல்லது பயணத் திட்டம் பற்றிய கேள்விகள் உள்ளதா? எங்களை எந்த நேரத்திலும் தொடர்பு கொள்ளுங்கள்.",
      "hi": "क्या आपके पास आगामी आरक्षण या कस्टम यात्रा कार्यक्रम के संबंध में कोई प्रश्न है? कभी भी हमसे संपर्क करें।",
      "es": "¿Tienes dudas sobre una reserva, vuelos privados o un itinerario a medida? Contáctanos en cualquier momento.",
      "fr": "Une question sur une réservation à venir, un vol privé ou un itinéraire personnalisé ? Contactez-nous à tout moment.",
      "de": "Haben Sie Fragen zu einer Buchung, Charterflügen oder einer individuellen Reiseroute? Kontaktieren Sie uns jederzeit.",
      "it": "Hai domande su una prenotazione, un volo privato o un itinerario personalizzato? Contattaci in qualsiasi momento.",
      "pt": "Dúvidas sobre uma reserva, voo privativo ou roteiro sob medida? Fale conosco a qualquer momento.",
      "ar": "هل لديك استفسار حول حجز قادم أو طيران خاص أو جدول رحلة؟ تواصل مع خبرائنا في أي وقت.",
      "ja": "ご予約、プライベートジェットの手配、カスタムツアーについてのご質問は、いつでも専任チームへ。",
      "zh": "无论关于预订确认、私人包机还是独家定制路线，欢迎随时与我们的专家团队联络。",
      "ru": "Есть вопросы по бронированию, частным рейсам или индивидуальному туру? Пишите нам в любое время."
  },
  {
      "en": "WhatsApp VIP Concierge",
      "ta": "WhatsApp VIP பயண உதவி",
      "hi": "WhatsApp वीआईपी दरबान",
      "es": "WhatsApp VIP Conserjería",
      "fr": "WhatsApp VIP Conciergerie",
      "de": "WhatsApp VIP Concierge",
      "it": "WhatsApp VIP Concierge",
      "pt": "WhatsApp VIP Concierge",
      "ar": "واتساب كونسيرج كبار الشخصيات",
      "ja": "WhatsApp VIPコンシェルジュ",
      "zh": "WhatsApp VIP 贵宾在线管家",
      "ru": "WhatsApp VIP-консьерж"
  },
  {
      "en": "Our dedicated operations curators reply within an average of 18 minutes.",
      "ta": "எங்கள் பிரத்யேகப் பணியாளர்கள் சராசரியாக 18 நிமிடங்களுக்குள் பதிலளிப்பார்கள்.",
      "hi": "हमारे समर्पित सलाहकार औसतन 18 मिनट के भीतर जवाब देते हैं।",
      "es": "Nuestros curadores responden en un promedio de 18 minutos.",
      "fr": "Nos conseillers dédiés vous répondent en moyenne sous 18 minutes.",
      "de": "Unsere Experten antworten Ihnen durchschnittlich innerhalb von 18 Minuten.",
      "it": "I nostri curatori rispondono in una media di 18 minutos.",
      "pt": "Nossos curadores respondem em média em até 18 minutos.",
      "ar": "يرد خبراؤنا المختصون في غضون 18 دقيقة في المتوسط.",
      "ja": "専任コンシェルジュが平均18分以内に迅速に回答いたします。",
      "zh": "我们的专属运营策展专家将在平均18分钟内予以答复。",
      "ru": "Наши специалисты отвечают в среднем в течение 18 минут."
  },
  {
      "en": "Message Dispatched Successfully!",
      "ta": "செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!",
      "hi": "संदेश सफलतापूर्वक भेजा गया!",
      "es": "¡Mensaje Enviado con Éxito!",
      "fr": "Message Envoyé avec Succès !",
      "de": "Nachricht erfolgreich gesendet!",
      "it": "Messaggio Inviato con Successo!",
      "pt": "Mensagem Enviada com Sucesso!",
      "ar": "تم إرسال رسالتك بنجاح!",
      "ja": "メッセージが正常に送信されました！",
      "zh": "留言发送成功！",
      "ru": "Сообщение успешно отправлено!"
  },
  {
      "en": "Our concierge on duty has received your request and will respond via email shortly.",
      "ta": "பணியில் உள்ள எங்கள் ஆலோசகர் உங்கள் கோரிக்கையைப் பெற்றுள்ளார், விரைவில் மின்னஞ்சல் மூலம் பதிலளிப்பார்.",
      "hi": "हमारे ड्यूटी पर मौजूद दरबान को आपका अनुरोध मिल गया है और वह जल्द ही ईमेल के जरिए जवाब देंगे।",
      "es": "Nuestro conserje de guardia ha recibido tu solicitud y responderá por correo en breve.",
      "fr": "Notre concierge de garde a bien reçu votre demande et vous répondra par e-mail sous peu.",
      "de": "Unser diensthabender Concierge hat Ihre Anfrage erhalten und antwortet in Kürze per E-Mail.",
      "it": "Il nostro concierge di turno ha ricevuto la tua richiesta e risponderà via email a breve.",
      "pt": "Nosso concierge de plantão recebeu sua solicitação e responderá por e-mail em breve.",
      "ar": "استلم موظف الكونسيرج المناوب طلبك وسيتواصل معك عبر البريد الإلكتروني قريباً.",
      "ja": "担当コンシェルジュがリクエストを受領いたしました。まもなくメールにてご案内いたします。",
      "zh": "值班礼宾专员已收到您的需求，将尽快通过电子邮件给您回复。",
      "ru": "Дежурный консьерж принял вашу заявку и вскоре свяжется с вами по email."
  },
  {
      "en": "Full Name",
      "ta": "முழுப் பெயர்",
      "hi": "पूरा नाम",
      "es": "Nombre Completo",
      "fr": "Nom Complet",
      "de": "Vollständiger Name",
      "it": "Nome Completo",
      "pt": "Nome Completo",
      "ar": "الاسم الكامل",
      "ja": "氏名",
      "zh": "全名",
      "ru": "Полное имя"
  },
  {
      "en": "Email Address",
      "ta": "மின்னஞ்சல் முகவரி",
      "hi": "ईमेल पता",
      "es": "Correo Electrónico",
      "fr": "Adresse E-mail",
      "de": "E-Mail-Adresse",
      "it": "Indirizzo Email",
      "pt": "Endereço de E-mail",
      "ar": "البريد الإلكتروني",
      "ja": "メールアドレス",
      "zh": "电子邮箱",
      "ru": "Электронная почта"
  },
  {
      "en": "Phone / WhatsApp",
      "ta": "தொலைபேசி / வாட்ஸ்அப்",
      "hi": "फोन / व्हाट्सएप",
      "es": "Teléfono / WhatsApp",
      "fr": "Téléphone / WhatsApp",
      "de": "Telefon / WhatsApp",
      "it": "Telefono / WhatsApp",
      "pt": "Telefone / WhatsApp",
      "ar": "الهاتف / واتساب",
      "ja": "お電話 / WhatsApp",
      "zh": "联系电话 / WhatsApp",
      "ru": "Телефон / WhatsApp"
  },
  {
      "en": "Inquiry Topic",
      "ta": "விசாரணைத் தலைப்பு",
      "hi": "पूछताछ का विषय",
      "es": "Tema de la Consulta",
      "fr": "Objet de la Demande",
      "de": "Thema der Anfrage",
      "it": "Oggetto della Richiesta",
      "pt": "Assunto da Consulta",
      "ar": "موضوع الاستفسار",
      "ja": "お問い合わせ項目",
      "zh": "咨询事项分类",
      "ru": "Тема обращения"
  },
  {
      "en": "Custom Itinerary Planning",
      "ta": "தனிப்பயன் பயணத்திட்ட வடிவமைப்பு",
      "hi": "कस्टम यात्रा योजना",
      "es": "Planificación de Itinerario a Medida",
      "fr": "Conception d'Itinéraire Sur Mesure",
      "de": "Individuelle Reiseplanung",
      "it": "Pianificazione Itinerario su Misura",
      "pt": "Planejamento de Roteiro Sob Medida",
      "ar": "تخطيط جدول رحلة خاص",
      "ja": "オーダーメイド旅行の企画",
      "zh": "定制私人专属行程策划",
      "ru": "Индивидуальный маршрут"
  },
  {
      "en": "Existing Reservation Modification",
      "ta": "முன்பதிவு மாற்றம் செய்தல்",
      "hi": "मौजूदा आरक्षण में बदलाव",
      "es": "Modificación de Reserva Existente",
      "fr": "Modification de Réservation Existante",
      "de": "Änderung einer bestehenden Buchung",
      "it": "Modifica Prenotazione Esistente",
      "pt": "Alteração de Reserva Existente",
      "ar": "تعديل حجز قائم",
      "ja": "既存予約の変更・リクエスト",
      "zh": "已有预订信息修改",
      "ru": "Изменение существующей брони"
  },
  {
      "en": "Corporate / Group Booking",
      "ta": "கார்ப்பரேட் / குழு முன்பதிவு",
      "hi": "कॉर्पोरेट / समूह बुकिंग",
      "es": "Reserva Corporativa o Grupal",
      "fr": "Réservation Groupe ou Entreprise",
      "de": "Firmen- & Gruppenreisen",
      "it": "Prenotazione Aziendale / di Gruppo",
      "pt": "Reserva Corporativa / em Grupo",
      "ar": "حجوزات الشركات والمجموعات",
      "ja": "企業・グループ団体旅行の予約",
      "zh": "企业会奖与团队私享包团",
      "ru": "Корпоративное / групповое бронирование"
  },
  {
      "en": "Boutique Villa Partnership",
      "ta": "பூட்டிக் வில்லா கூட்டாண்மை",
      "hi": "बुटीक विला साझेदारी",
      "es": "Alianza de Villas Boutique",
      "fr": "Partenariat Villas de Charme",
      "de": "Boutique-Villa-Partnerschaften",
      "it": "Partnership Ville di Lusso",
      "pt": "Parceria de Vilas Exclusivas",
      "ar": "شراكة الفلل والمنتجعات الفاخرة",
      "ja": "高級リゾート・ヴィラ提携",
      "zh": "精品庄园与独栋别墅加盟合作",
      "ru": "Партнерство с бутик-виллами"
  },
  {
      "en": "Subject / Booking Reference",
      "ta": "பொருள் / முன்பதிவு எண்",
      "hi": "विषय / बुकिंग संदर्भ",
      "es": "Asunto / Referencia de Reserva",
      "fr": "Sujet / Référence de Réservation",
      "de": "Betreff / Buchungsnummer",
      "it": "Oggetto / Riferimento Prenotazione",
      "pt": "Assunto / Referência da Reserva",
      "ar": "الموضوع / رقم الحجز المرجعي",
      "ja": "件名 / 予約照会番号",
      "zh": "主题 / 预订编号参考",
      "ru": "Тема / номер бронирования"
  },
  {
      "en": "Message Details",
      "ta": "செய்தி விவரங்கள்",
      "hi": "संदेश का विवरण",
      "es": "Detalles del Mensaje",
      "fr": "Détails de Votre Message",
      "de": "Nachrichtendetails",
      "it": "Dettagli del Messaggio",
      "pt": "Detalhes da Mensagem",
      "ar": "تفاصيل الرسالة",
      "ja": "メッセージ内容",
      "zh": "详细需求说明",
      "ru": "Детали сообщения"
  },
  {
      "en": "Send Message",
      "ta": "செய்தி அனுப்புக",
      "hi": "संदेश भेजें",
      "es": "Enviar Mensaje",
      "fr": "Envoyer le Message",
      "de": "Nachricht senden",
      "it": "Invia Messaggio",
      "pt": "Enviar Mensagem",
      "ar": "إرسال الرسالة",
      "ja": "メッセージを送信する",
      "zh": "提交发送需求",
      "ru": "Отправить сообщение"
  },
  {
      "en": "Global Concierge Hubs",
      "ta": "உலகளாவிய உதவி மையங்கள்",
      "hi": "वैश्विक दरबान केंद्र",
      "es": "Centros Globales de Conserjería",
      "fr": "Bureaux de Conciergerie Mondiaux",
      "de": "Globale Concierge-Zentren",
      "it": "Sedi Concierge Globali",
      "pt": "Centros Globais de Concierge",
      "ar": "مراكز الكونسيرج العالمية",
      "ja": "世界主要都市のコンシェルジュ拠点",
      "zh": "全球各大枢纽礼宾中心",
      "ru": "Глобальные консьерж-хабы"
  },
  {
      "en": "London Headquarters",
      "ta": "லண்டன் தலைமையகம்",
      "hi": "लंदन मुख्यालय",
      "es": "Sede Central de Londres",
      "fr": "Siège de Londres",
      "de": "Hauptsitz London",
      "it": "Sede Centrale di Londra",
      "pt": "Sede de Londres",
      "ar": "المقر الرئيسي في لندن",
      "ja": "ロンドン本部",
      "zh": "伦敦全球总部",
      "ru": "Штаб-квартира в Лондоне"
  },
  {
      "en": "Tokyo Operations Hub",
      "ta": "டோக்கியோ செயல்பாட்டு மையம்",
      "hi": "टोक्यो संचालन केंद्र",
      "es": "Centro de Operaciones de Tokio",
      "fr": "Centre des Opérations de Tokyo",
      "de": "Betriebszentrum Tokio",
      "it": "Centro Operativo di Tokyo",
      "pt": "Centro de Operações de Tóquio",
      "ar": "مركز عمليات طوكيو",
      "ja": "東京オペレーションズハブ",
      "zh": "东京亚太运营中心",
      "ru": "Операционный центр в Токио"
  },
  {
      "en": "Dubai Regional Desk",
      "ta": "துபாய் பிராந்திய மையம்",
      "hi": "दुबई क्षेत्रीय डेस्क",
      "es": "Mesa Regional de Dubái",
      "fr": "Bureau Régional de Dubaï",
      "de": "Regionalbüro Dubai",
      "it": "Desk Regionale di Dubai",
      "pt": "Central Regional de Dubai",
      "ar": "المكتب الإقليمي في دبي",
      "ja": "ドバイ中東デスク",
      "zh": "迪拜中东区域专席",
      "ru": "Региональный офис в Дубае"
  },
  {
      "en": "New York Office",
      "ta": "நியூயார்க் அலுவலகம்",
      "hi": "न्यूयॉर्क कार्यालय",
      "es": "Oficina de Nueva York",
      "fr": "Bureau de New York",
      "de": "Büro New York",
      "it": "Ufficio di New York",
      "pt": "Escritório de Nova York",
      "ar": "مكتب نيويورك",
      "ja": "ニューヨークオフィス",
      "zh": "纽约北美办事处",
      "ru": "Офис в Нью-Йорке"
  },
  {
      "en": "Direct VIP Line",
      "ta": "நேரடி விஐபி தொடர்பு",
      "hi": "सीधी वीआईपी लाइन",
      "es": "Línea Directa VIP",
      "fr": "Ligne Directe VIP",
      "de": "Direkte VIP-Hotline",
      "it": "Linea Diretta VIP",
      "pt": "Linha Direta VIP",
      "ar": "الخط المباشر لكبار الشخصيات",
      "ja": "VIP専用直通ライン",
      "zh": "VIP 贵宾专属直线",
      "ru": "Прямая VIP-линия"
  },
  {
      "en": "Average Response",
      "ta": "சராசரி பதில் நேரம்",
      "hi": "औसत प्रतिक्रिया समय",
      "es": "Respuesta Promedio",
      "fr": "Temps de Réponse Moyen",
      "de": "Durchschnittliche Reaktionszeit",
      "it": "Tempo Medio di Risposta",
      "pt": "Resposta Média",
      "ar": "متوسط وقت الرد",
      "ja": "平均応答時間",
      "zh": "平均响应时间",
      "ru": "Среднее время ответа"
  },
  {
      "en": "Instant Live Chat",
      "ta": "உடனடி நேரடி அரட்டை",
      "hi": "त्वरित लाइव चैट",
      "es": "Chat en Vivo Instantáneo",
      "fr": "Chat en Direct Instantané",
      "de": "Sofortiger Live-Chat",
      "it": "Chat Live Istantanea",
      "pt": "Chat ao Vivo Instantâneo",
      "ar": "دردشة مباشرة فورية",
      "ja": "オンラインチャットサポート",
      "zh": "实时专属管家在线交流",
      "ru": "Мгновенный онлайн-чат"
  },
  {
      "en": "Emergency Response Hotline",
      "ta": "அவசரகால உதவி எண்",
      "hi": "आपातकालीन प्रतिक्रिया हॉटलाइन",
      "es": "Línea de Emergencia 24/7",
      "fr": "Ligne d'Urgence 24/7",
      "de": "Notfall-Hotline",
      "it": "Hotline di Emergenza 24/7",
      "pt": "Linha Direta de Emergência",
      "ar": "خط طوارئ المسافرين",
      "ja": "24時間緊急ホットライン",
      "zh": "24小时紧急事务专线",
      "ru": "Экстренная горячая линия"
  }
,
  {
      "en": "Global Heritage",
      "ta": "உலகளாவிய பாரம்பரியம்",
      "hi": "वैश्विक विरासत",
      "es": "Patrimonio Global",
      "fr": "Héritage Mondial",
      "de": "Globales Erbe",
      "it": "Patrimonio Globale",
      "pt": "Patrimônio Global",
      "ar": "إرث عالمي عريق",
      "ja": "グローバルな歴史と実績",
      "zh": "享誉全球的奢华旅程传承",
      "ru": "Мировое наследие"
  },
  {
      "en": "Explorers Hosted",
      "ta": "பயணித்த எக்ஸ்ப்ளோரர்கள்",
      "hi": "यात्री जिन्होंने यात्रा की",
      "es": "Exploradores Recibidos",
      "fr": "Voyageurs Accueillis",
      "de": "Begeisterte Reisende",
      "it": "Esploratori Ospitati",
      "pt": "Viajantes Atendidos",
      "ar": "مستكشفون تم استقبالهم",
      "ja": "ご案内した旅行者",
      "zh": "尊享服务客户",
      "ru": "Довольных путешественников"
  },
  {
      "en": "Client Reviews",
      "ta": "வாடிக்கையாளர் மதிப்புரைகள்",
      "hi": "ग्राहक समीक्षाएं",
      "es": "Reseñas de Clientes",
      "fr": "Avis Clients",
      "de": "Kundenbewertungen",
      "it": "Recensioni dei Clienti",
      "pt": "Avaliações de Clientes",
      "ar": "تقييمات العملاء",
      "ja": "お客様レビュー",
      "zh": "客户真实好评",
      "ru": "Отзывы клиентов"
  },
  {
      "en": "Founder & Curator",
      "ta": "நிறுவனர் & அமைப்பாளர்",
      "hi": "संस्थापक और क्यूरेटर",
      "es": "Fundadora y Curadora",
      "fr": "Fondatrice & Curatrice",
      "de": "Gründerin & Kuratorin",
      "it": "Fondatrice e Curatrice",
      "pt": "Fundadora e Curadora",
      "ar": "المؤسس والمنسق الرئيسي",
      "ja": "創業者＆統括キュレーター",
      "zh": "创始人兼首席策展人",
      "ru": "Основатель и куратор"
  },
  {
      "en": "Founder & Chief Experience Curator",
      "ta": "நிறுவனர் & தலைமை அனுபவ அமைப்பாளர்",
      "hi": "संस्थापक और मुख्य अनुभव क्यूरेटर",
      "es": "Fundadora y Curadora Principal de Experiencias",
      "fr": "Fondatrice & Directrice des Expériences",
      "de": "Gründerin & Leitende Erlebnis-Kuratorin",
      "it": "Fondatrice e Curatrice Principale delle Esperienze",
      "pt": "Fundadora e Curadora Principal de Experiências",
      "ar": "المؤسس والمدير الإبداعي للتجارب",
      "ja": "創業者 兼 チーフ・エクスペリエンス・キュレーター",
      "zh": "创始人兼首席旅行体验官",
      "ru": "Основатель и главный куратор впечатлений"
  },
  {
      "en": "Former boutique architect who spent a decade discovering remote coastal retreats and historic estates across Southeast Asia and the Mediterranean.",
      "ta": "தென்கிழக்கு ஆசியா மற்றும் மத்திய தரைக்கடல் பகுதிகளில் தொலைதூர கடற்கரை விடுதிகள் மற்றும் வரலாற்று எஸ்டேட்டுகளைக் கண்டறிவதில் ஒரு தசாப்தத்தை அர்ப்பணித்த முன்னாள் பூட்டிக் கட்டடக் கலைஞர்.",
      "hi": "पूर्व बुटीक वास्तुकार जिन्होंने दक्षिण पूर्व एशिया और भूमध्य सागर में दूरस्थ तटीय रिसॉर्ट्स और ऐतिहासिक संपदाओं की खोज में एक दशक बिताया।",
      "es": "Arquitecta de renombre que dedicó una década a descubrir refugios costeros remotos y fincas históricas en el sudeste asiático y el Mediterráneo.",
      "fr": "Architecte chevronnée ayant passé une décennie à dénicher des retraites côtières isolées et des domaines historiques en Asie du Sud-Est et en Méditerranée.",
      "de": "Ehemalige Boutique-Architektin, die ein Jahrzehnt damit verbrachte, abgelegene Küstenrefugien und historische Anwesen zu entdecken.",
      "it": "Architetto di boutique che ha dedicato un decennio a scoprire tenute storiche e ritiri costieri remoti nel Mediterraneo e nel Sud-Est asiatico.",
      "pt": "Arquiteta de renome que passou uma década descobrindo refúgios costeiros e propriedades históricas no Sudeste Asiático e Mediterrâneo.",
      "ar": "مهندسة معمارية سابقة أمضت عقداً كاملاً في اكتشاف الملاذات الساحلية المعزولة والقصور التاريخية عبر جنوب شرق آسيا والبحر المتوسط.",
      "ja": "東南アジアや地中海の秘境リゾートや歴史的邸宅の開拓に10年を捧げた、元ブティック建築家。",
      "zh": "资深精品建筑师，耗费十年探索东南亚与地中海隐世海滨庄园与历史名邸。",
      "ru": "Архитектор, посвятившая десять лет открытию уединенных прибрежных ретритов и поместий."
  },
  {
      "en": "Nordic Specialist",
      "ta": "நோர்டிக் நிபுணர்",
      "hi": "नॉर्डिक विशेषज्ञ",
      "es": "Especialista Nórdico",
      "fr": "Spécialiste Nordique",
      "de": "Nordic-Spezialist",
      "it": "Specialista Nordico",
      "pt": "Especialista Nórdico",
      "ar": "خبير الرحلات الشمالية",
      "ja": "北欧・アルプス専門家",
      "zh": "北欧与极地探险专家",
      "ru": "Специалист по Скандинавии"
  },
  {
      "en": "Head of Alpine & Nordic Expeditions",
      "ta": "ஆல்ப்ஸ் & நோர்டிக் பயணங்களின் தலைவர்",
      "hi": "अल्पाइन और नॉर्डिक अभियानों के प्रमुख",
      "es": "Director de Expediciones Alpinas y Nórdicas",
      "fr": "Responsable des Expéditions Alpines & Nordiques",
      "de": "Leiter der Alpin- & Nordischen Expeditionen",
      "it": "Responsabile delle Spedizioni Alpine e Nordiche",
      "pt": "Diretor de Expedições Alpinas e Nórdicas",
      "ar": "رئيس رحلات جبال الألب والدول الإسكندنافية",
      "ja": "アルプス・北欧遠征部門ヘッド",
      "zh": "阿尔卑斯与北欧探险总监",
      "ru": "Руководитель альпийских и северных экспедиций"
  },
  {
      "en": "Swiss mountain guide and logistics director coordinating private ski chalets, glacier heli-transfers, and Scandinavian wellness lodges.",
      "ta": "தனிப்பட்ட ஸ்கை ஷாலேக்கள், பனிப்பாறை ஹெலிகாப்டர் பரிமாற்றங்கள் மற்றும் ஸ்காண்டிநேவிய ஆரோக்கிய விடுதிகளை ஒருங்கிணைக்கும் சுவிஸ் மலை வழிகாட்டி மற்றும் தளவாட இயக்குனர்.",
      "hi": "स्विस माउंटेन गाइड और लॉजिस्टिक्स निदेशक जो निजी स्की शैले, ग्लेशियर हेली-ट्रांसफर और वेलनेस लॉज का समन्वय करते हैं।",
      "es": "Guía de montaña suizo y director logístico que coordina chalets de esquí privados, transfers en helicóptero y lodges de bienestar nórdicos.",
      "fr": "Guide de haute montagne suisse et directeur logistique coordonnant chalets privés, héliski et écolodges scandinaves.",
      "de": "Schweizer Bergführer und Logistikleiter für private Ski-Chalets, Gletscher-Helikoptertransfers und skandinavische Lodges.",
      "it": "Guida alpina svizzera e direttore logistico che coordina chalet privati, eli-trasferimenti sui ghiacciai e lodge scandinavi.",
      "pt": "Guia de montanha suíço e diretor de logística coordenando chalés de esqui privativos, traslados de helicóptero e lodges escandinavos.",
      "ar": "مرشد جبلي سويسري ومدير لوجستي ينسق شاليهات التزلج الخاصة والنقل بالمروحيات ومنتجعات الاستجمام الإسكندنافية.",
      "ja": "プライベートスキーシャレーや氷河ヘリ送迎、北欧ウェルネスロッジを手がけるスイス公認山岳ガイド兼ロジスティクス統括。",
      "zh": "瑞士特级高山向导与运营总监，统筹安排私享滑雪木屋、冰川直升机摆渡与北欧疗愈酒店。",
      "ru": "Швейцарский горный гид и логистический директор по организации приватных шале и вертолетных трансферов."
  },
  {
      "en": "VIP Concierge VP",
      "ta": "விஐபி பயண உதவி துணைத் தலைவர்",
      "hi": "वीआईपी दरबान उपाध्यक्ष",
      "es": "Vicepresidenta de Conserjería VIP",
      "fr": "VP Conciergerie VIP",
      "de": "VP VIP-Concierge",
      "it": "Vicepresidente Concierge VIP",
      "pt": "Vice-Presidente de Concierge VIP",
      "ar": "نائب رئيس كونسيرج كبار الشخصيات",
      "ja": "VIPコンシェルジュ統括副社長",
      "zh": "VIP 尊享礼宾服务副总裁",
      "ru": "Вице-президент VIP-консьерж службы"
  },
  {
      "en": "Director of VIP Concierge Services",
      "ta": "விஐபி பயண உதவி சேவைகளின் இயக்குனர்",
      "hi": "वीआईपी दरबान सेवाओं के निदेशक",
      "es": "Directora de Servicios de Conserjería VIP",
      "fr": "Directrice des Services de Conciergerie VIP",
      "de": "Direktorin für VIP-Concierge-Services",
      "it": "Direttrice dei Servizi Concierge VIP",
      "pt": "Diretora de Serviços de Concierge VIP",
      "ar": "مديرة خدمات الكونسيرج لكبار الشخصيات",
      "ja": "VIPコンシェルジュ・ディレクター",
      "zh": "贵宾尊享礼宾服务总监",
      "ru": "Директор службы VIP-консьержей"
  },
  {
      "en": "Luxury hospitality veteran overseeing our 24/7 global operations hubs in Paris, Tokyo, and Dubai with a 99.4% client satisfaction rate.",
      "ta": "பாரிஸ், டோக்கியோ மற்றும் துபாயில் உள்ள எங்கள் 24/7 உலகளாவிய மையங்களை 99.4% வாடிக்கையாளர் திருப்தி விகிதத்துடன் மேற்பார்வையிடும் சொகுசு விருந்தோம்பல் நிபுணர்.",
      "hi": "99.4% ग्राहक संतुष्टि दर के साथ पेरिस, टोक्यो और दुबई में हमारे 24/7 वैश्विक संचालन केंद्रों की देखरेख करने वाली आतिथ्य विशेषज्ञ।",
      "es": "Veterana de la hospitalidad de lujo que supervisa nuestros centros globales 24/7 en París, Tokio y Dubái con un 99.4% de satisfacción.",
      "fr": "Professionnelle de l'hôtellerie de luxe supervisant nos hubs 24/7 à Paris, Tokyo et Dubaï avec 99,4% de satisfaction client.",
      "de": "Erfahrene Luxushotellerie-Expertin, die unsere 24/7-Zentren in Paris, Tokio und Dubai mit 99,4% Zufriedenheit leitet.",
      "it": "Esperta di ospitalità di lusso che supervisiona i nostri hub globali 24/7 a Parigi, Tokyo e Dubai con il 99,4% di soddisfazione.",
      "pt": "Especialista em hospitalidade de luxo supervisionando nossos centros 24/7 em Paris, Tóquio e Dubai com 99,4% de satisfação.",
      "ar": "خبيرة ضيافة فاخرة تشرف على مراكز عملياتنا العالمية على مدار 24/7 في باريس وطوكيو ودبي بنسبة رضا 99.4%.",
      "ja": "パリ、東京、ドバイの24時間オペレーション拠点を統括し、顧客満足度99.4％を誇るラグジュアリーホスピタリティの熟練者。",
      "zh": "资深奢华酒店运营专家，统筹管理巴黎、东京与迪拜24/7全天候运营中心，保持99.4%超高满意率。",
      "ru": "Эксперт гостиничного бизнеса класса люкс, курирующая хабы в Париже, Токио и Дубае с рейтингом 99,4%."
  },
  {
      "en": "Handcrafted international journeys, bespoke private flights, and 5-star verified stays worldwide. Redefining modern travel with comfort and precision.",
      "ta": "கைவினை நேர்த்தியுடன் வடிவமைக்கப்பட்ட சர்வதேசப் பயணங்கள், தனி விமானச் சேவைகள் மற்றும் உலகளவில் சரிபார்க்கப்பட்ட 5-நட்சத்திர தங்குமிடங்கள். நவீன பயணத்தை வசதி மற்றும் துல்லியத்துடன் மறுவரையறை செய்கிறது.",
      "hi": "हस्तनिर्मित अंतर्राष्ट्रीय यात्राएं, विशेष निजी उड़ानें और 5-स्टार सत्यापित आवास। आराम और सटीकता के साथ आधुनिक यात्रा को नया रूप देना।",
      "es": "Viajes internacionales artesanales, vuelos privados exclusivos y estancias de 5 estrellas verificadas en todo el mundo. Redefiniendo el viaje moderno.",
      "fr": "Voyages d'exception personnalisés, vols privés et séjours 5 étoiles certifiés dans le monde entier. Le voyage moderne réinventé.",
      "de": "Handverlesene Weltreisen, private Flüge und geprüfte 5-Sterne-Unterkünfte weltweit. Moderner Luxus mit höchster Präzision.",
      "it": "Viaggi internazionali su misura, voli privati esclusivi e soggiorni a 5 stelle certificati in tutto il mondo. Il viaggio moderno ridefinito.",
      "pt": "Viagens internacionais sob medida, voos privativos e estadias 5 estrelas verificadas no mundo todo. Redefinindo a viagem moderna.",
      "ar": "رحلات دولية مصممة خصيصاً، رحلات طيران خاصة، وإقامات فندقية 5 نجوم معتمدة حول العالم مع راحة فائقة.",
      "ja": "洗練された世界各地のオーダーメイド旅、プライベートフライト、五つ星認定リゾート。確かな品質で現代の旅を革新します。",
      "zh": "匠心独运的尊享环球旅途、定制私人航线与全球严选五星庄园。以从容精准重塑现代奢华出行。",
      "ru": "Эксклюзивные авторские туры, частные авиарейсы и проверенные 5-звездочные отели по всему миру."
  },
  {
      "en": "Quick Links",
      "ta": "விரைவு இணைப்புகள்",
      "hi": "त्वरित लिंक",
      "es": "Enlaces Rápidos",
      "fr": "Accès Rapide",
      "de": "Schnellzugriff",
      "it": "Link Rapidi",
      "pt": "Links Rápidos",
      "ar": "روابط سريعة",
      "ja": "クイックリンク",
      "zh": "快速链接",
      "ru": "Быстрые ссылки"
  },
  {
      "en": "Explore Stays",
      "ta": "தங்குமிடங்களை ஆராயுங்கள்",
      "hi": "आवास देखें",
      "es": "Explorar Estancias",
      "fr": "Explorer les Séjours",
      "de": "Unterkünfte Entdecken",
      "it": "Esplora Alloggi",
      "pt": "Explorar Estadias",
      "ar": "استكشف أماكن الإقامة",
      "ja": "厳選ホテル・リゾートを探す",
      "zh": "探索奢华住宿",
      "ru": "Найти отели"
  },
  {
      "en": "Flight Search",
      "ta": "விமானத் தேடல்",
      "hi": "उड़ान खोज",
      "es": "Búsqueda de Vuelos",
      "fr": "Recherche de Vols",
      "de": "Flugsuche",
      "it": "Ricerca Voli",
      "pt": "Pesquisa de Voos",
      "ar": "البحث عن رحلات الطيران",
      "ja": "航空券フライト検索",
      "zh": "高端航线搜索",
      "ru": "Поиск рейсов"
  },
  {
      "en": "Global Concierge",
      "ta": "உலகளாவிய உதவி மையம்",
      "hi": "वैश्विक दरबान",
      "es": "Conserjería Global",
      "fr": "Conciergerie Mondiale",
      "de": "Globaler Concierge",
      "it": "Concierge Globale",
      "pt": "Concierge Global",
      "ar": "الكونسيرج العالمي",
      "ja": "グローバル・コンシェルジュ",
      "zh": "全球礼宾专席",
      "ru": "Глобальный консьерж"
  },
  {
      "en": "IATA Accredited Luxury Agency",
      "ta": "IATA அங்கீகரிக்கப்பட்ட சொகுசு நிறுவனம்",
      "hi": "IATA मान्यता प्राप्त लक्जरी एजेंसी",
      "es": "Agencia de Lujo Acreditada por IATA",
      "fr": "Agence de Luxe Accréditée IATA",
      "de": "IATA-akkreditierte Luxusagentur",
      "it": "Agenzia di Lusso Accreditata IATA",
      "pt": "Agência de Luxo Acreditada pela IATA",
      "ar": "وكالة سفر فاخرة معتمدة من اتحاد النقل الجوي الدولي (IATA)",
      "ja": "IATA公認 国際ラグジュアリートラベルカンパニー",
      "zh": "国际航协 (IATA) 官方认证奢华旅行服务商",
      "ru": "Аккредитованное IATA люксовое агентство"
  },
  {
      "en": "All bookings 100% bonded and carbon neutral.",
      "ta": "அனைத்து முன்பதிவுகளும் 100% பாதுகாப்பானவை மற்றும் கார்பன் சமநிலைப்படுத்தப்பட்டவை.",
      "hi": "सभी बुकिंग 100% सुरक्षित और कार्बन तटस्थ हैं।",
      "es": "Todas las reservas 100% garantizadas y neutras en carbono.",
      "fr": "Toutes les réservations sont 100% garanties et neutres en carbone.",
      "de": "Alle Buchungen sind 100% abgesichert und CO2-neutral.",
      "it": "Tutte le prenotazioni sono garantite al 100% e a impatto zero.",
      "pt": "Todas as reservas 100% garantidas e neutras em carbono.",
      "ar": "جميع الحجوزات مضمونة بنسبة 100% ومحايدة للكربون.",
      "ja": "すべての予約は完全保証付きかつ100％カーボンオフセットです。",
      "zh": "所有行程预订均享有100%履约保证金与全额碳中和保障。",
      "ru": "Все бронирования на 100% застрахованы и углеродно-нейтральны."
  },
  {
      "en": "Cookie Preferences",
      "ta": "குக்கீ விருப்பங்கள்",
      "hi": "कुकी प्राथमिकताएं",
      "es": "Preferencias de Cookies",
      "fr": "Préférences de Cookies",
      "de": "Cookie-Einstellungen",
      "it": "Preferenze Cookie",
      "pt": "Preferências de Cookies",
      "ar": "تفضيلات ملفات تعريف الارتباط",
      "ja": "クッキーの設定",
      "zh": "Cookie 偏好管理",
      "ru": "Настройки файлов cookie"
  },
  {
      "en": "VIP Concierge Email",
      "ta": "விஐபி உதவி மின்னஞ்சல்",
      "hi": "वीआईपी दरबान ईमेल",
      "es": "Correo de Conserjería VIP",
      "fr": "E-mail Conciergerie VIP",
      "de": "VIP-Concierge E-Mail",
      "it": "Email Concierge VIP",
      "pt": "E-mail de Concierge VIP",
      "ar": "بريد كونسيرج كبار الشخصيات",
      "ja": "VIPコンシェルジュ専用メール",
      "zh": "VIP 礼宾专属邮箱",
      "ru": "Email VIP-консьержа"
  },
  {
      "en": "Within 18 Minutes",
      "ta": "18 நிமிடங்களுக்குள்",
      "hi": "18 मिनट के भीतर",
      "es": "En Menos de 18 Minutos",
      "fr": "Sous 18 Minutes",
      "de": "Innerhalb von 18 Minuten",
      "it": "Entro 18 Minuti",
      "pt": "Em Até 18 Minutos",
      "ar": "خلال 18 دقيقة",
      "ja": "平均18分以内",
      "zh": "18分钟以内快速响应",
      "ru": "В течение 18 минут"
  },
  {
      "en": "24/7 Dedicated Ops",
      "ta": "24/7 பிரத்யேக செயல்பாடுகள்",
      "hi": "24/7 समर्पित संचालन",
      "es": "Operaciones Dedicadas 24/7",
      "fr": "Opérations Dédiées 24/7",
      "de": "24/7 Einsatzzentrale",
      "it": "Operazioni Dedicate 24/7",
      "pt": "Operações Dedicadas 24/7",
      "ar": "عمليات مخصصة على مدار 24/7",
      "ja": "24時間専任オペレーション",
      "zh": "24/7 专属后台响应保障",
      "ru": "Круглосуточная поддержка 24/7"
  },
  {
      "en": "SSL Encrypted",
      "ta": "SSL மறைகுறியாக்கப்பட்டது",
      "hi": "SSL एन्क्रिप्टेड",
      "es": "Cifrado SSL",
      "fr": "Chiffré SSL",
      "de": "SSL-verschlüsselt",
      "it": "Crittografia SSL",
      "pt": "Criptografado com SSL",
      "ar": "مشفر بأمان SSL",
      "ja": "SSL暗号化通信",
      "zh": "金融级 SSL 加密安全",
      "ru": "SSL-шифрование"
  },
  {
      "en": "Live Timezones",
      "ta": "நேரலை நேர மண்டலங்கள்",
      "hi": "लाइव समय क्षेत्र",
      "es": "Zonas Horarias en Vivo",
      "fr": "Fuseaux Horaires en Direct",
      "de": "Live-Zeitzonen",
      "it": "Fusi Orari in Tempo Reale",
      "pt": "Fusos Horários em Tempo Real",
      "ar": "المناطق الزمنية المباشرة",
      "ja": "現地リアルタイム時差表示",
      "zh": "全球各枢纽实时时区",
      "ru": "Текущее время в хабах"
  },
  {
      "en": "Western Europe & Atlantic Desk",
      "ta": "மேற்கு ஐரோப்பா & அட்லாண்டிக் மையம்",
      "hi": "पश्चिमी यूरोप और अटलांटिक डेस्क",
      "es": "Mesa de Europa Occidental y Atlántico",
      "fr": "Bureau Europe de l'Ouest & Atlantique",
      "de": "Desk Westeuropa & Atlantik",
      "it": "Desk Europa Occidentale e Atlantico",
      "pt": "Central da Europa Ocidental e Atlântico",
      "ar": "مكتب غرب أوروبا والمحيط الأطلسي",
      "ja": "西欧・大西洋デスク",
      "zh": "西欧与大西洋事务专席",
      "ru": "Отдел Западной Европы и Атлантики"
  },
  {
      "en": "Asia-Pacific Expeditions",
      "ta": "ஆசிய-பசிபிக் பயணங்கள்",
      "hi": "एशिया-प्रशांत अभियान",
      "es": "Expediciones Asia-Pacífico",
      "fr": "Expéditions Asie-Pacifique",
      "de": "Asien-Pazifik-Expeditionen",
      "it": "Spedizioni Asia-Pacifico",
      "pt": "Expedições Ásia-Pacífico",
      "ar": "رحلات آسيا والمحيط الهادئ",
      "ja": "アジア太平洋エクスペディション",
      "zh": "亚太地区定制探险",
      "ru": "Экспедиции в Азиатско-Тихоокеанский регион"
  },
  {
      "en": "Middle East & Africa Curations",
      "ta": "மத்திய கிழக்கு & ஆப்பிரிக்கா திட்டங்கள்",
      "hi": "मध्य पूर्व और अफ्रीका क्यूरेशन",
      "es": "Curadurías de Medio Oriente y África",
      "fr": "Sélections Moyen-Orient & Afrique",
      "de": "Nahost- & Afrika-Reisen",
      "it": "Selezioni Medio Oriente e Africa",
      "pt": "Curadorias do Oriente Médio e África",
      "ar": "رحلات الشرق الأوسط وأفريقيا المنتقاة",
      "ja": "中東・アフリカ厳選コレクション",
      "zh": "中东与非洲经典精选",
      "ru": "Маршруты по Ближнему Востоку и Африке"
  },
  {
      "en": "Americas & Transatlantic Desk",
      "ta": "அமெரிக்கா & அட்லாண்டிக் கடந்த மையம்",
      "hi": "अमेरिका और ट्रांसअटलांटिक डेस्क",
      "es": "Mesa de las Américas y Transatlántica",
      "fr": "Bureau Amériques & Transatlantique",
      "de": "Desk Amerika & Transatlantik",
      "it": "Desk Americhe e Transatlantico",
      "pt": "Central das Américas e Transatlântico",
      "ar": "مكتب الأمريكتين وعبر الأطلسي",
      "ja": "南北アメリカ・大西洋横断デスク",
      "zh": "美洲与跨大西洋事务专席",
      "ru": "Отдел Америки и трансатлантических рейсов"
  }
];

// Helper to normalize strings for robust translation matching
function normalizeI18nStr(str) {
  if (!str) return '';
  return str.trim()
    .replace(/\s+/g, ' ')
    .replace(/^["'“”«»\s:–•|]+|["'“”«»\s:–•|]+$/g, '')
    .toLowerCase();
}

// Build Comprehensive Bi-directional Lookup Table
const PHRASE_LOOKUP = {};
TERRA_PHRASES.forEach(item => {
  Object.keys(item).forEach(langKey => {
    const text = item[langKey];
    if (text) {
      const clean = normalizeI18nStr(text);
      if (clean) PHRASE_LOOKUP[clean] = item;
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
  const clean = normalizeI18nStr(rawText);
  if (!clean) return rawText;

  // 1. Direct match
  const matched = PHRASE_LOOKUP[clean];
  if (matched && matched[targetLang]) {
    return matched[targetLang];
  }

  // 2. Case-insensitive key match
  for (let key in PHRASE_LOOKUP) {
    if (key === clean && PHRASE_LOOKUP[key][targetLang]) {
      return PHRASE_LOOKUP[key][targetLang];
    }
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

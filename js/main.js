/* 
 * MP Citizen Portal 2.0 - Core Functionality & UI Logic
 * Author: Senior Frontend Architect
 */

// Translation Database (English and Hindi)
const TRANSLATIONS = {
  en: {
    // Navigation
    portal_title: "MP Citizen Portal 2.0",
    nav_home: "Home",
    nav_dashboards: "Dashboards",
    lbl_citizen_portal: "Citizen Portal",
    lbl_student_hub: "Student Hub",
    lbl_kisan_hub: "Kisan Hub",
    lbl_women_hub: "Ladli Behna Hub",
    nav_services: "Services",
    nav_notifications: "Notifications",
    nav_help: "Help",
    btn_login: "Login/Register",
    search_placeholder: "Search services...",

    // Hero Section
    hero_badge: "AI-POWERED CITIZEN SERVICES",
    hero_title: "Empowering Citizens, Elevating Governance",
    hero_desc: "Access all Madhya Pradesh government services, state schemes, and digital resources at one place with real-time AI assistance.",
    hero_placeholder: "Ask about a service, scheme, (e.g., Apply for...)",
    voice_btn_title: "Voice Search",
    search_btn: "Search",
    trending_lbl: "Trending:",
    tag_cm_helpline: "CM Helpline 181",
    tag_ration: "Ration Card Application",
    tag_scholarship: "e-Scholarships",
    tag_ladli: "Ladli Behna Scheme",
    scroll_down: "SCROLL TO SERVICES",

    // Quick Actions
    qa_title: "Quick Action Hub",
    qa_subtitle: "Instant Access",
    qa_desc: "Direct access channels to Madhya Pradesh's most requested citizen utility tools and support helplines.",
    cm_title: "CM Helpline 181",
    cm_desc: "Submit public grievances, track complaints, or access public service delivery guarantees directly.",
    land_title: "Bhulekh Land Records",
    land_desc: "Search, view, and print certified copies of land maps, Khasra, Khatauni, and ownership records.",
    mun_title: "e-Municipality Portal",
    mun_desc: "Pay property taxes, apply for water connection, birth, death, and trade certificates online.",
    farmer_title: "e-Uparjan MP",
    farmer_desc: "Crop procurement registration, minimum support price payments, and crop insurance tracking.",
    btn_access: "Access Now",

    // Featured Sections
    feat_subtitle: "MP Development & Heritage",
    feat_title: "A Land of Opportunity, Culture & Progress",
    feat_desc: "Explore how Madhya Pradesh merges deep cultural roots with tech-driven citizen empowerment.",
    card_emp_tag: "EMPOWERMENT",
    card_emp_title: "Ladli Behna Yojana",
    card_emp_desc: "Financial security, healthcare access, and empowerment benefits for women across MP.",
    card_tour_tag: "TOURISM & HERITAGE",
    card_tour_title: "Heart of Incredible India",
    card_tour_desc: "Explore historic monuments like Sanchi Stupa, Khajuraho Temples, and wildlife sanctuaries.",
    card_edu_tag: "EDUCATION & YOUTH",
    card_edu_title: "e-Scholarships Portal",
    card_edu_desc: "Digital support systems and scholarship benefits directly dispatched to MP students.",

    // Live Stats
    stat_citizens: "4.5M+",
    stat_citizens_lbl: "Active Citizens",
    stat_citizens_desc: "Registered users on the portal",
    stat_services: "650+",
    stat_services_lbl: "Services Offered",
    stat_services_desc: "Completely digital end-to-end services",
    stat_schemes: "120+",
    stat_schemes_lbl: "Govt Schemes",
    stat_schemes_desc: "Empowerment and welfare programs",
    stat_resolved: "98.4%",
    stat_resolved_lbl: "Grievance Resolution",
    stat_resolved_desc: "Fastest resolution rate in the country",

    // News/Notifications
    notif_lbl: "LIVE BULLETINS",
    notif_item1: "Apply for Post-Matric Scholarships open till July 31, 2026.",
    notif_item2: "Chief Minister announces new subsidy package for solar pump installation.",
    notif_item3: "Lokayukta portal integrated with central grievance dashboard.",
    notif_item4: "Madhya Pradesh ranks #1 in Digital Service Delivery for the consecutive third year.",

    // Service Directory Tabs
    dir_subtitle: "Services Directory",
    dir_title: "Search Services by Audience",
    dir_desc: "Quickly browse and access the government services and schemes that matter directly to you.",
    tab_all: "All Services",
    tab_citizens: "For Citizens",
    tab_farmers: "For Farmers",
    tab_students: "For Students",
    tab_business: "For Businesses",
    tab_tourists: "For Tourists",

    // Service Items
    s_birth: "Birth & Death Registration",
    s_birth_d: "Apply and download municipal birth/death certificates.",
    s_ration: "Apply for New Ration Card",
    s_ration_d: "Department of Food, Civil Supplies, and Consumer Protection.",
    s_domicile: "Domicile / Resident Certificate",
    s_domicile_d: "Official local residence certificate for education & employment.",
    s_khasra: "Khasra/Khatauni Copy",
    s_khasra_d: "Land records and maps downloadable under MP Bhulekh.",
    s_insurance: "Pradhan Mantri Fasal Bima",
    s_insurance_d: "Crop insurance and calamity claim support portal for MP farmers.",
    s_solar: "Solar Pump Subsidy Registration",
    s_solar_d: "Apply for agricultural solar water pumps with government financial subsidy.",
    s_scholar: "Post-Matric Scholarship Scheme",
    s_scholar_d: "Financial support for students belonging to SC, ST, OBC and EWS categories.",
    s_laptop: "Free Laptop Scheme Registration",
    s_laptop_d: "Incentive scheme for students scoring 75% or above in Board exams.",
    s_business: "Railway Ticket Booking",
    s_business_d: "Book railway tickets online for domestic and Special Trains for  travel.",
    s_gst: "MP Commercial Tax Portal",
    s_gst_d: "Register and file state commercial taxes and professional taxes.",
    s_tour: "MP Tourism Hotel Booking",
    s_tour_d: "Official booking for heritage hotels, wildlife safaris, and packages.",
    s_guide: "Approved Tour Guide Database",
    s_guide_d: "Search and hire verified multilingual guides across historic sites.",

    // Footer
    footer_desc: "MP Citizen Portal 2.0 is the unified AI-powered digital service delivery gateway of the Government of Madhya Pradesh, India. Built with a vision of transparency, accessibility, and proactive governance.",
    footer_col1: "Quick Links",
    footer_col2: "Support & Help",
    footer_col3: "Contact Government",
    link_about: "About MP Govt",
    link_policies: "State Policies",
    link_departments: "Government Departments",
    link_tenders: "Tenders & Procurements",
    link_helpdesk: "24x7 Portal Helpdesk",
    link_faq: "Frequently Asked Questions",
    link_grievance: "File a Public Grievance",
    link_feedback: "Submit Website Feedback",
    contact_address: "Vallabh Bhawan, Mantralaya, Bhopal, Madhya Pradesh - 462004",
    contact_phone: "CM Helpline: 181 | Portal Help: 1800-233-179",
    contact_email: "support.portal@mp.gov.in",
    footer_copy: "© 2026 Government of Madhya Pradesh. Designed and Developed for Digital India.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_sitemap: "Sitemap"
  },
  hi: {
    // Navigation
    portal_title: "एमपी नागरिक पोर्टल 2.0",
    nav_home: "मुख्य पृष्ठ",
    nav_dashboards: "डैशबोर्ड",
    lbl_citizen_portal: "नागरिक पोर्टल",
    lbl_student_hub: "छात्र हब",
    lbl_kisan_hub: "किसान हब",
    lbl_women_hub: "लाड़ली बहना हब",
    nav_services: "एमपी सेवाएं",
    nav_notifications: "सरकारी सूचनाएं",
    nav_help: "सहायता",
    btn_login: "लॉगिन / पंजीकरण",
    search_placeholder: "सेवाएं खोजें...",

    // Hero Section
    hero_badge: "एआई-संचालित नागरिक सेवाएं",
    hero_title: "नागरिकों का सशक्तिकरण, उन्नत सुशासन",
    hero_desc: "वास्तविक समय में एआई मार्गदर्शन के साथ मध्य प्रदेश सरकार की सभी सेवाओं, राज्य योजनाओं और डिजिटल संसाधनों तक एक ही स्थान पर पहुँचें।",
    hero_placeholder: "सेवा, योजना या प्रक्रिया के बारे में पूछें... (जैसे, भू-अभिलेख के लिए आवेदन)",
    voice_btn_title: "आवाज खोज",
    search_btn: "एआई खोज",
    trending_lbl: "प्रचलित:",
    tag_cm_helpline: "सीएम हेल्पलाइन 181",
    tag_ration: "राशन कार्ड आवेदन",
    tag_scholarship: "ई-स्कॉलरशिप",
    tag_ladli: "लाड़ली बहना योजना",
    scroll_down: "सेवाओं पर जाएं",

    // Quick Actions
    qa_title: "त्वरित कार्रवाई हब",
    qa_subtitle: "त्वरित पहुंच",
    qa_desc: "मध्य प्रदेश के सबसे अधिक अनुरोधित नागरिक उपयोगिता उपकरणों और सहायता हेल्पलाइनों तक सीधी पहुंच।",
    cm_title: "सीएम हेल्पलाइन 181",
    cm_desc: "सार्वजनिक शिकायतें दर्ज करें, शिकायतों को ट्रैक करें, या सीधे लोक सेवा गारंटी का लाभ उठाएं।",
    land_title: "भू-अभिलेख भूलेख",
    land_desc: "भूमि मानचित्र, खसरा, खतौनी और स्वामित्व अभिलेखों की प्रमाणित प्रतियां खोजें, देखें और प्रिंट करें।",
    mun_title: "ई-नगरपालिका पोर्टल",
    mun_desc: "संपत्ति कर का भुगतान करें, ऑनलाइन पानी के कनेक्शन, जन्म, मृत्यु और व्यापार प्रमाण पत्र के लिए आवेदन करें।",
    farmer_title: "ई-उपार्जन एमपी",
    farmer_desc: "फसल खरीद पंजीकरण, न्यूनतम समर्थन मूल्य भुगतान और फसल बीमा ट्रैकिंग।",
    btn_access: "अभी पहुंचें",

    // Featured Sections
    feat_subtitle: "एमपी विकास और विरासत",
    feat_title: "अवसर, संस्कृति और प्रगति की भूमि",
    feat_desc: "जानें कि कैसे मध्य प्रदेश तकनीकी-संचालित नागरिक सशक्तिकरण के साथ गहरी सांस्कृतिक जड़ों को जोड़ता है।",
    card_emp_tag: "सशक्तिकरण",
    card_emp_title: "लाड़ली बहना योजना",
    card_emp_desc: "पूरे मध्य प्रदेश में महिलाओं के लिए वित्तीय सुरक्षा, स्वास्थ्य देखभाल और सशक्तिकरण लाभ।",
    card_tour_tag: "पर्यटन और विरासत",
    card_tour_title: "अतुल्य भारत का हृदय",
    card_tour_desc: "सांची स्तूप, खजुराहो मंदिर जैसे ऐतिहासिक स्मारकों और वन्यजीव अभ्यारण्यों का पता लगाएं।",
    card_edu_tag: "शिक्षा और युवा",
    card_edu_title: "ई-स्कॉलरशिप पोर्टल",
    card_edu_desc: "मध्य प्रदेश के छात्रों को सीधे भेजे जाने वाले डिजिटल सहायता प्रणाली और छात्रवृत्ति लाभ।",

    // Live Stats
    stat_citizens: "4.5 मिलियन+",
    stat_citizens_lbl: "सक्रिय नागरिक",
    stat_citizens_desc: "पोर्टल पर पंजीकृत उपयोगकर्ता",
    stat_services: "650+",
    stat_services_lbl: "प्रदान की जाने वाली सेवाएं",
    stat_services_desc: "पूरी तरह से डिजिटल एंड-टू-एंड सेवाएं",
    stat_schemes: "120+",
    stat_schemes_lbl: "सरकारी योजनाएं",
    stat_schemes_desc: "सशक्तिकरण और कल्याण कार्यक्रम",
    stat_resolved: "98.4%",
    stat_resolved_lbl: "शिकायत निवारण",
    stat_resolved_desc: "देश में सबसे तेज शिकायत निवारण दर",

    // News/Notifications
    notif_lbl: "लाइव बुलेटिन",
    notif_item1: "पोस्ट-मैट्रिक छात्रवृत्ति के लिए आवेदन 31 जुलाई, 2026 तक खुले हैं।",
    notif_item2: "मुख्यमंत्री ने सोलर पंप स्थापना के लिए नए सब्सिडी पैकेज की घोषणा की।",
    notif_item3: "लोकायुक्त पोर्टल को केंद्रीय शिकायत डैशबोर्ड के साथ एकीकृत किया गया।",
    notif_item4: "मध्य प्रदेश लगातार तीसरे वर्ष डिजिटल सेवा वितरण में #1 स्थान पर रहा।",

    // Service Directory Tabs
    dir_subtitle: "सेवा निर्देशिका",
    dir_title: "दर्शकों के अनुसार सेवाएं खोजें",
    dir_desc: "आसानी से उन सरकारी सेवाओं और योजनाओं तक पहुँचें जो सीधे आपके लिए महत्वपूर्ण हैं।",
    tab_all: "सभी सेवाएं",
    tab_citizens: "नागरिकों के लिए",
    tab_farmers: "किसानों के लिए",
    tab_students: "छात्रों के लिए",
    tab_business: "व्यवसायों के लिए",
    tab_tourists: "पर्यटकों के लिए",

    // Service Items
    s_birth: "जन्म एवं मृत्यु पंजीकरण",
    s_birth_d: "नगर निगम जन्म/मृत्यु प्रमाण पत्र के लिए आवेदन करें और डाउनलोड करें।",
    s_ration: "नए राशन कार्ड के लिए आवेदन करें",
    s_ration_d: "खाद्य, नागरिक आपूर्ति और उपभोक्ता संरक्षण विभाग।",
    s_domicile: "मूल निवासी प्रमाण पत्र",
    s_domicile_d: "शिक्षा और रोजगार के लिए आधिकारिक स्थानीय निवास प्रमाण पत्र।",
    s_khasra: "खसरा/खतौनी की प्रति",
    s_khasra_d: "एमपी भूलेख के तहत डाउनलोड करने योग्य भूमि अभिलेख और मानचित्र।",
    s_insurance: "प्रधानमंत्री फसल बीमा",
    s_insurance_d: "मध्य प्रदेश के किसानों के लिए फसल बीमा और आपदा दावा सहायता पोर्टल।",
    s_solar: "सोलर पंप सब्सिडी पंजीकरण",
    s_solar_d: "सरकारी वित्तीय सब्सिडी के साथ कृषि सोलर वाटर पंप के लिए आवेदन करें।",
    s_scholar: "पोस्ट-मैट्रिक छात्रवृत्ति योजना",
    s_scholar_d: "एससी, एसटी, ओबीसी और ईडब्ल्यूएस श्रेणियों के छात्रों के लिए वित्तीय सहायता।",
    s_laptop: "मुफ्त लैपटॉप योजना पंजीकरण",
    s_laptop_d: "बोर्ड परीक्षाओं में 75% या उससे अधिक अंक प्राप्त करने वाले छात्रों के लिए प्रोत्साहन योजना।",
    s_business: "एकल खिड़की प्रणाली",
    s_business_d: "व्यापार लाइसेंस, पर्यावरण अनापत्ति प्रमाण पत्र और औद्योगिक पंजीकरण।",
    s_gst: "एमपी वाणिज्यिक कर पोर्टल",
    s_gst_d: "राज्य वाणिज्यिक करों और व्यावसायिक करों को पंजीकृत और दाखिल करें।",
    s_tour: "एमपी पर्यटन होटल बुकिंग",
    s_tour_d: "हेरिटेज होटलों, वन्यजीव सफारी और पैकेजों के लिए आधिकारिक बुकिंग।",
    s_guide: "अनुमोदित टूर गाइड डेटाबेस",
    s_guide_d: "ऐतिहासिक स्थलों पर सत्यापित बहुभाषी गाइड खोजें और किराए पर लें।",

    // Footer
    footer_desc: "एमपी नागरिक पोर्टल 2.0 मध्य प्रदेश सरकार, भारत का एकीकृत एआई-संचालित डिजिटल सेवा वितरण पोर्टल है। यह पारदर्शिता, पहुंच और सक्रिय शासन की दृष्टि से बनाया गया है।",
    footer_col1: "त्वरित लिंक्स",
    footer_col2: "सहायता और संपर्क",
    footer_col3: "सरकार से संपर्क करें",
    link_about: "एमपी सरकार के बारे में",
    link_policies: "राज्य नीतियां",
    link_departments: "सरकारी विभाग",
    link_tenders: "निविदाएं और खरीद",
    link_helpdesk: "24x7 पोर्टल हेल्पडेस्क",
    link_faq: "अक्सर पूछे जाने वाले प्रश्न",
    link_grievance: "जन शिकायत दर्ज करें",
    link_feedback: "वेबसाइट प्रतिक्रिया सबमिट करें",
    contact_address: "वल्लभ भवन, मंत्रालय, भोपाल, मध्य प्रदेश - 462004",
    contact_phone: "सीएम हेल्पलाइन: 181 | पोर्टल सहायता: 1800-233-179",
    contact_email: "support.portal@mp.gov.in",
    footer_copy: "© 2026 मध्य प्रदेश सरकार। डिजिटल इंडिया के लिए डिज़ाइन और विकसित।",
    footer_privacy: "गोपनीयता नीति",
    footer_terms: "सेवा की शर्तें",
    footer_sitemap: "साइटमैप"
  }
};

// Global App State
let currentLang = localStorage.getItem('mp_lang') || 'en';
let currentTheme = localStorage.getItem('mp_theme') || 'dark';

// DOM Elements Loaded
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initHeroSlider();
  initHeaderScroll();
  initStatsCounters();
  initServicesTabs();
  initScrollReveal();
  initNavDropdowns();
});

// --- Navigation Dropdowns (click/touch + keyboard accessible)
function initNavDropdowns() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  if (!dropdowns.length) return;

  dropdowns.forEach(drop => {
    const toggle = drop.querySelector('.nav-link');
    const menu = drop.querySelector('.nav-dropdown-content');

    if (!toggle || !menu) return;

    // Prevent default for anchor toggle triggers
    toggle.addEventListener('click', (e) => {
      // If the link has a real href that navigates to '#', prevent it
      if (toggle.getAttribute('href') === '#' || toggle.classList.contains('dropdown-toggle')) {
        e.preventDefault();
      }
      const isOpen = drop.classList.contains('open');
      closeAllNavDropdowns();
      if (!isOpen) drop.classList.add('open');
    });

    // Keyboard support: Enter/Space to toggle, Esc to close
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isOpen = drop.classList.contains('open');
        closeAllNavDropdowns();
        if (!isOpen) drop.classList.add('open');
      } else if (e.key === 'Escape') {
        drop.classList.remove('open');
        toggle.focus();
      }
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      closeAllNavDropdowns();
    }
  });

  // Close on Esc globally
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllNavDropdowns();
  });

  function closeAllNavDropdowns() {
    document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
  }
}

// --- Theme Management ---
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('mp_theme', currentTheme);
      updateThemeIcon();
    });
  }
}

function updateThemeIcon() {
  const themeIcon = document.querySelector('#theme-toggle-btn i');
  if (themeIcon) {
    if (currentTheme === 'light') {
      themeIcon.className = 'fas fa-moon';
    } else {
      themeIcon.className = 'fas fa-sun';
    }
  }
}

// --- Language Translation ---
function initLanguage() {
  setLanguage(currentLang);

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'hi' : 'en';
      setLanguage(nextLang);
    });
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mp_lang', lang);
  
  // Update toggle button text to show the option to switch to the OTHER language
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === 'en' ? 'हिन्दी' : 'English';
  }

  // Scan all translation targets
  const translatables = document.querySelectorAll('[data-translate]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      // Check if translating a placeholder
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', TRANSLATIONS[lang][key]);
      } else {
        el.textContent = TRANSLATIONS[lang][key];
      }
    }
  });

  // Dispatch custom event for translation dependencies in other files
  window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: lang } }));
}

// --- Header Scroll Effect ---
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// --- Hero Slider ---
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slider .slide');
  let currentSlide = 0;
  const slideInterval = 6000; // 6 seconds

  if (slides.length > 0) {
    // Make first slide active
    slides[0].classList.add('active');

    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, slideInterval);
  }
}

// --- Statistics Counters ---
function initStatsCounters() {
  const statsSection = document.getElementById('statistics');
  const countElements = document.querySelectorAll('.stat-number');
  let animated = false;

  const countUp = (el) => {
    const targetText = el.getAttribute('data-target');
    const hasPlus = targetText.includes('+');
    const hasPercent = targetText.includes('%');
    const targetVal = parseFloat(targetText.replace(/[+%]/g, ''));
    let startVal = 0;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = duration / frameRate;
    const step = targetVal / totalFrames;
    let currentFrame = 0;

    const animate = () => {
      startVal += step;
      currentFrame++;

      if (currentFrame >= totalFrames) {
        el.textContent = targetText;
      } else {
        let displayVal = startVal.toFixed(hasPercent ? 1 : 0);
        el.textContent = displayVal + (hasPercent ? '%' : (hasPlus ? '+' : ''));
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        countElements.forEach(el => countUp(el));
        animated = true;
      }
    });
  }, { threshold: 0.3 });

  if (statsSection) {
    observer.observe(statsSection);
  }
}

// --- Services Filter Directory Tabs ---
function initServicesTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const serviceCards = document.querySelectorAll('.service-item-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all tabs
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        // Add fade out class
        card.classList.add('fade-out');
        card.classList.remove('fade-in');

        setTimeout(() => {
          if (filter === 'all' || cardCategory.includes(filter)) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.classList.remove('fade-out');
              card.classList.add('fade-in');
            }, 50);
          } else {
            card.style.display = 'none';
          }
        }, 200);
      });
    });
  });
}

// --- Scroll Reveal ---
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elTop < windowHeight - 80) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  // Trigger once initially
  setTimeout(revealOnScroll, 300);
}

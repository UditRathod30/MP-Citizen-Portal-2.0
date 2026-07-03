/* 
 * MP Citizen Portal 2.0 - Dashboard Core Script
 * Author: Senior Frontend Architect
 */

// Dashboard Bilingual Translation Dictionary
const DB_TRANSLATIONS = {
  en: {
    auth_portal_title: "MP Citizen Portal 2.0",
    nav_overview: "<i class='fas fa-chart-line'></i> <span class='sidebar-link-text'>Overview</span>",
    nav_tracker: "<i class='fas fa-route'></i> <span class='sidebar-link-text'>Track Status</span>",
    nav_locker: "<i class='fas fa-folder-open'></i> <span class='sidebar-link-text'>Doc Locker</span>",
    nav_schemes: "<i class='fas fa-hands-holding-child'></i> <span class='sidebar-link-text'>Welfare Schemes</span>",
    nav_profile: "<i class='fas fa-user-gear'></i> <span class='sidebar-link-text'>My Profile</span>",
    
    // Notifications Dropdown
    btn_clear: "Clear All",
    notif_title: "Notifications",
    notif_item1: "Your Domicile Certificate application has been approved!",
    notif_item2: "Ration Card requires document correction. Click to fix.",
    notif_item3: "CM Solar Pump Subsidy enrollment starts today.",
    
    // Overview Section
    welcome_greeting: "Good Day, Rajesh Kumar",
    welcome_desc: "Manage your welfare schemes and official applications from your personalized governance hub.",
    lbl_verified: "Verified",
    lbl_aadhaar: "Aadhaar",
    lbl_mobile: "Mobile",
    lbl_citizen_id: "Citizen Portal ID",
    
    // Statistics Cards
    stat_submitted: "Submitted Apps",
    stat_approved: "Approved Apps",
    stat_review: "Under Review",
    stat_action: "Action Required",
    
    // Charts Headers
    chart_line_title: "Application Submissions Trend (6 Months)",
    chart_pie_title: "Services Usage by Category",
    
    // Bottom cards
    lbl_recent_activity: "Recent Portal Activity",
    lbl_quick_actions: "Quick Action Grid",
    qa_khasra: "Get Khasra Map",
    qa_tax: "Property Tax",
    qa_grievance: "CM 181 Complaint",
    qa_profile: "Update Profile",
    
    // Tracker Page
    tracker_title: "Application Tracking System",
    tracker_subtitle: "Select a submitted application from the left to view its detailed timeline.",
    search_app_placeholder: "Search applications by name or ID...",
    filter_all: "All Statuses",
    filter_approved: "Approved",
    filter_progress: "In Progress",
    filter_action: "Action Required",
    lbl_track_progress: "Track Progress <i class='fas fa-chevron-right'></i>",
    
    // Timeline Card details
    timeline_title: "Detailed Processing Timeline",
    timeline_select_prompt: "Please select an application from the history panel to display live tracking details.",
    timeline_action_header: "ACTION REQUIRED ON APPLICATION",
    btn_upload_correction: "Upload Corrected Documents",
    
    // Document Locker Page
    locker_title: "Digital Document Locker",
    locker_subtitle: "Access digitally signed certificates and upload personal government files securely.",
    locker_btn_view: "<i class='fas fa-eye'></i> View",
    locker_btn_download: "<i class='fas fa-download'></i> Get",
    locker_btn_share: "<i class='fas fa-share-nodes'></i> Share",
    locker_btn_delete: "<i class='fas fa-trash-can'></i> Delete",
    upload_title: "Drag & Drop Files Here",
    upload_subtitle: "Click to upload caste, resident, or marksheet certificates (PDF/PNG format)",
    
    // Schemes Page
    schemes_title: "Welfare Schemes & AI Search",
    schemes_subtitle: "Enter queries to discover state welfare schemes you qualify to enroll in.",
    schemes_search_placeholder: "Search schemes... (e.g. Ladli Behna, education scholarship, farmer pump)",
    chip_all: "All Schemes",
    chip_women: "Women Welfare",
    chip_education: "Students & Youth",
    chip_farming: "Farmers Benefits",
    scheme_eligibility: "<i class='fas fa-circle-check'></i> Eligible based on your verified profile",
    btn_scheme_apply: "Apply for Scheme",
    empty_schemes_text: "<i class='fas fa-circle-info'></i><br>No matching welfare schemes found. Try adjusting search query.",
    
    // AI Chatbot
    bot_greeting: "Namaste Rajesh! I am MP-AI. How can I help you navigate citizen services today?",
    chat_placeholder: "Type a message... (e.g. check status, CM helpline number)",
    
    // View names
    view_overview: "Overview Hub",
    view_tracker: "Application Tracker",
    view_locker: "Document Locker",
    view_schemes: "State Schemes"
  },
  hi: {
    auth_portal_title: "एमपी नागरिक पोर्टल 2.0",
    nav_overview: "<i class='fas fa-chart-line'></i> <span class='sidebar-link-text'>अवलोकन</span>",
    nav_tracker: "<i class='fas fa-route'></i> <span class='sidebar-link-text'>ट्रैक स्थिति</span>",
    nav_locker: "<i class='fas fa-folder-open'></i> <span class='sidebar-link-text'>दस्तावेज़ लॉकर</span>",
    nav_schemes: "<i class='fas fa-hands-holding-child'></i> <span class='sidebar-link-text'>कल्याणकारी योजनाएं</span>",
    nav_profile: "<i class='fas fa-user-gear'></i> <span class='sidebar-link-text'>मेरी प्रोफ़ाइल</span>",
    
    // Notifications Dropdown
    btn_clear: "सभी हटाएं",
    notif_title: "सूचनाएं",
    notif_item1: "आपका मूल निवासी प्रमाण पत्र आवेदन स्वीकृत हो गया है!",
    notif_item2: "राशन कार्ड में दस्तावेज़ सुधार की आवश्यकता है। ठीक करने के लिए क्लिक करें।",
    notif_item3: "सीएम सोलर पंप सब्सिडी पंजीकरण आज से शुरू हो रहा है।",
    
    // Overview Section
    welcome_greeting: "शुभ दिन, राजेश कुमार",
    welcome_desc: "अपने व्यक्तिगत शासन केंद्र से अपनी कल्याणकारी योजनाओं और आधिकारिक आवेदनों का प्रबंधन करें।",
    lbl_verified: "सत्यापित",
    lbl_aadhaar: "आधार",
    lbl_mobile: "मोबाइल",
    lbl_citizen_id: "नागरिक पोर्टल आईडी",
    
    // Statistics Cards
    stat_submitted: "जमा आवेदन",
    stat_approved: "स्वीकृत आवेदन",
    stat_review: "समीक्षाधीन",
    stat_action: "कार्रवाई आवश्यक",
    
    // Charts Headers
    chart_line_title: "आवेदन प्रस्तुतीकरण रुझान (6 महीने)",
    chart_pie_title: "श्रेणी के अनुसार सेवाओं का उपयोग",
    
    // Bottom cards
    lbl_recent_activity: "हालिया पोर्टल गतिविधि",
    lbl_quick_actions: "त्वरित कार्रवाई ग्रिड",
    qa_khasra: "खसरा नक्शा प्राप्त करें",
    qa_tax: "संपत्ति कर",
    qa_grievance: "सीएम 181 शिकायत",
    qa_profile: "प्रोफ़ाइल अपडेट करें",
    
    // Tracker Page
    tracker_title: "आवेदन ट्रैकिंग प्रणाली",
    tracker_subtitle: "विस्तृत समयरेखा देखने के लिए बाईं ओर से एक जमा आवेदन का चयन करें।",
    search_app_placeholder: "नाम या आईडी से आवेदन खोजें...",
    filter_all: "सभी स्थितियां",
    filter_approved: "स्वीकृत",
    filter_progress: "समीक्षाधीन",
    filter_action: "कार्रवाई आवश्यक",
    lbl_track_progress: "ट्रैक स्थिति <i class='fas fa-chevron-right'></i>",
    
    // Timeline Card details
    timeline_title: "विस्तृत प्रसंस्करण समयरेखा",
    timeline_select_prompt: "लाइव ट्रैकिंग विवरण प्रदर्शित करने के लिए कृपया इतिहास पैनल से एक आवेदन का चयन करें।",
    timeline_action_header: "आवेदन पर कार्रवाई की आवश्यकता है",
    btn_upload_correction: "संशोधित दस्तावेज़ अपलोड करें",
    
    // Document Locker Page
    locker_title: "डिजिटल दस्तावेज़ लॉकर",
    locker_subtitle: "डिजिटल रूप से हस्ताक्षरित प्रमाण पत्रों तक पहुँचें और व्यक्तिगत सरकारी फ़ाइलों को सुरक्षित रूप से अपलोड करें।",
    locker_btn_view: "<i class='fas fa-eye'></i> देखें",
    locker_btn_download: "<i class='fas fa-download'></i> प्राप्त करें",
    locker_btn_share: "<i class='fas fa-share-nodes'></i> साझा करें",
    locker_btn_delete: "<i class='fas fa-trash-can'></i> हटाएं",
    upload_title: "दस्तावेज़ों को यहाँ खींचें और छोड़ें",
    upload_subtitle: "जाति, निवासी या अंकतालिका प्रमाण पत्र (PDF/PNG प्रारूप) अपलोड करने के लिए क्लिक करें",
    
    // Schemes Page
    schemes_title: "कल्याणकारी योजनाएं और एआई खोज",
    schemes_subtitle: "राज्य कल्याणकारी योजनाओं की खोज करने के लिए प्रश्न दर्ज करें जिनमें आप नामांकन के पात्र हैं।",
    schemes_search_placeholder: "योजनाएं खोजें... (जैसे लाड़ली बहना, शिक्षा छात्रवृत्ति, किसान पंप)",
    chip_all: "सभी योजनाएं",
    chip_women: "महिला कल्याण",
    chip_education: "छात्र और युवा",
    chip_farming: "किसान कल्याण",
    scheme_eligibility: "<i class='fas fa-circle-check'></i> आपके सत्यापित प्रोफ़ाइल के आधार पर पात्र",
    btn_scheme_apply: "योजना के लिए आवेदन करें",
    empty_schemes_text: "<i class='fas fa-circle-info'></i><br>कोई मिलान योजना नहीं मिली। खोज बदलने का प्रयास करें।",
    
    // AI Chatbot
    bot_greeting: "नमस्ते राजेश! मैं एमपी-एआई हूँ। आज नागरिक सेवाओं से संबंधित आपकी क्या सहायता कर सकता हूँ?",
    chat_placeholder: "संदेश टाइप करें... (जैसे आवेदन स्थिति, सीएम हेल्पलाइन नंबर)",
    
    // View names
    view_overview: "अवलोकन केंद्र",
    view_tracker: "आवेदन ट्रैकर",
    view_locker: "दस्तावेज़ लॉकर",
    view_schemes: "राज्य योजनाएं"
  }
};

// Application Mock Data Database
const APP_MOCK_DATA = [
  {
    id: "MP2026-DOM8932",
    name_en: "Domicile / Residence Certificate",
    name_hi: "मूल निवासी प्रमाण पत्र",
    date: "2026-06-15",
    status: "approved",
    timeline_en: [
      { stage: "Application Submitted", desc: "Citizen submitted details successfully.", time: "June 15, 2026, 10:15 AM", status: "completed" },
      { stage: "Document Verification", desc: "Aadhaar and Resident details verified automatically.", time: "June 15, 2026, 10:18 AM", status: "completed" },
      { stage: "Patwari Field Investigation", desc: "Local Officer verified resident address profile.", time: "June 20, 2026, 04:30 PM", status: "completed" },
      { stage: "Tehsildar Final Approval", desc: "Digital signature certified.", time: "June 22, 2026, 11:00 AM", status: "completed" }
    ]
  },
  {
    id: "MP2026-LDB9032",
    name_en: "Ladli Behna Yojana Scheme",
    name_hi: "लाड़ली बहना योजना",
    date: "2026-06-28",
    status: "progress",
    timeline_en: [
      { stage: "Application Submitted", desc: "Citizen enrollment received online.", time: "June 28, 2026, 02:40 PM", status: "completed" },
      { stage: "Aadhaar-DBT Verification", desc: "Bank Account linking details certified.", time: "June 29, 2026, 09:12 AM", status: "completed" },
      { stage: "Municipal Ward Verification", desc: "Local ward counselor reviewing household income.", time: "Processing...", status: "active" },
      { stage: "Beneficiary Certificate Dispatch", desc: "Sanction order publication.", time: "Pending", status: "pending" }
    ]
  },
  {
    id: "MP2026-RAT4032",
    name_en: "Apply for New Ration Card",
    name_hi: "नए राशन कार्ड के लिए आवेदन",
    date: "2026-07-01",
    status: "clarification",
    actionRequired: true,
    actionDesc_en: "Income Certificate submitted is expired. Please upload a valid Income Certificate issued after April 1, 2026.",
    actionDesc_hi: "प्रस्तुत किया गया आय प्रमाण पत्र समाप्त हो गया है। कृपया 1 अप्रैल, 2026 के बाद जारी किया गया वैध आय प्रमाण पत्र अपलोड करें।",
    timeline_en: [
      { stage: "Application Submitted", desc: "Application form submitted online.", time: "July 01, 2026, 11:30 AM", status: "completed" },
      { stage: "Verification Officer Audit", desc: "Income document audited. Rejection flagged due to expiry.", time: "July 02, 2026, 03:15 PM", status: "active" },
      { stage: "Citizen Correction Upload", desc: "Pending upload of new certificate.", time: "Waiting for Citizen Action", status: "pending" },
      { stage: "Final Card Issuance", desc: "Distribution verification.", time: "Pending", status: "pending" }
    ]
  }
];

// Document Locker Mock Database
let LOCKER_MOCK_DATA = [
  { id: "doc-1", name: "Domicile_Certificate.pdf", size: "142 KB", date: "2026-06-22", type: "pdf", issued: true, dept_en: "Department of Revenue", dept_hi: "राजस्व विभाग" },
  { id: "doc-2", name: "Aadhaar_Card.pdf", size: "1.2 MB", date: "2026-05-10", type: "pdf", issued: false, dept_en: "UIDAI Government of India", dept_hi: "यूआईडीएआई भारत सरकार" },
  { id: "doc-3", name: "Class_X_Marksheet.png", size: "480 KB", date: "2026-05-12", type: "png", issued: false, dept_en: "MP Board of Secondary Education", dept_hi: "एमपी माध्यमिक शिक्षा बोर्ड" }
];

// Welfare Schemes Mock Database
const SCHEMES_MOCK_DATA = [
  { id: "s-1", category: "women", title_en: "Ladli Behna Yojana", title_hi: "लाड़ली बहना योजना", desc_en: "Provides financial assistance of ₹1250/month to women from economically weaker sections.", desc_hi: "आर्थिक रूप से कमजोर वर्गों की महिलाओं को ₹1250/माह की वित्तीय सहायता प्रदान करता है।" },
  { id: "s-2", category: "education", title_en: "Post-Matric Scholarship", title_hi: "पोस्ट-मैट्रिक छात्रवृत्ति योजना", desc_en: "Fee reimbursement and monthly allowance for college students belonging to SC/ST/OBC categories.", desc_hi: "एससी/एसटी/ओबीसी श्रेणियों के कॉलेज छात्रों के लिए शुल्क प्रतिपूर्ति और मासिक भत्ता।" },
  { id: "s-3", category: "farming", title_en: "Solar Pump Subsidy Program", title_hi: "सोलर पंप सब्सिडी कार्यक्रम", desc_en: "Provides up to 90% government subsidy to purchase agricultural solar water pumps.", desc_hi: "कृषि सोलर वाटर पंप खरीदने के लिए 90% तक सरकारी सब्सिडी प्रदान करता है।" },
  { id: "s-4", category: "education", title_en: "Free Laptop Incentive Scheme", title_hi: "मुफ्त लैपटॉप प्रोत्साहन योजना", desc_en: "Provides ₹25,000 to purchase laptops for students scoring 75%+ in class 12th Board exams.", desc_hi: "12वीं बोर्ड परीक्षाओं में 75%+ अंक प्राप्त करने वाले छात्रों के लिए लैपटॉप खरीदने के लिए ₹25,000 प्रदान करता है।" },
  { id: "s-5", category: "women", title_en: "Ladli Laxmi Yojana 2.0", title_hi: "लाड़ली लक्ष्मी योजना 2.0", desc_en: "Assures savings certificates and educational incentives for girl children born in MP families.", desc_hi: "एमपी परिवारों में जन्म लेने वाली बालिकाओं के लिए बचत प्रमाण पत्र और शैक्षिक प्रोत्साहन सुनिश्चित करता है।" }
];

// Global Configurations
let currentLang = localStorage.getItem('mp_lang') || 'en';
let currentTheme = localStorage.getItem('mp_theme') || 'dark';
let submissionChart, categoryChart;

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initSidebar();
  initBackgroundSlider();
  createParticles();
  initNotificationBell();
  initSectionSwitcher();
  initCharts();
  initTrackerFilter();
  renderAppTrackerList();
  initLockerDragAndDrop();
  renderLockerGrid();
  initLockerViewerModal();
  initSchemesFilter();
  initFloatingAssistant();
  
  // Set default tracker selection
  selectTrackerApp(APP_MOCK_DATA[0].id);
});

// --- Theme Settings ---
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
      
      // Re-initialize charts to apply correct theme colors
      initCharts();
    });
  }
}

function updateThemeIcon() {
  const themeIcon = document.querySelector('#theme-toggle-btn i');
  if (themeIcon) {
    themeIcon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

// --- Language Translation Settings ---
function initLanguage() {
  setLanguage(currentLang);

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'hi' : 'en';
      setLanguage(nextLang);
      
      // Refresh translation dependent items
      renderAppTrackerList();
      
      // Update selected application text in timeline if any is active
      const activeApp = document.querySelector('.app-tracker-item.active');
      if (activeApp) {
        selectTrackerApp(activeApp.dataset.id);
      }

      renderLockerGrid();
      filterSchemes();
      
      // Refresh Chart labels
      initCharts();
    });
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mp_lang', lang);
  
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === 'en' ? 'हिन्दी' : 'English';
  }

  // Scan translatable fields
  const translatables = document.querySelectorAll('[data-translate]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (DB_TRANSLATIONS[lang] && DB_TRANSLATIONS[lang][key]) {
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', DB_TRANSLATIONS[lang][key]);
      } else {
        el.innerHTML = DB_TRANSLATIONS[lang][key];
      }
    }
  });

  // Page Title Update
  document.title = (lang === 'en' ? "Citizen Dashboard" : "नागरिक डैशबोर्ड") + " | MP Citizen Portal 2.0";
}

// --- Collapsible Sidebar Settings ---
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  
  if (sidebar && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      
      // Update icon toggle
      const icon = toggleBtn.querySelector('i');
      if (sidebar.classList.contains('collapsed')) {
        icon.className = 'fas fa-bars';
      } else {
        icon.className = 'fas fa-arrow-left';
      }
      
      // Re-configure charts size on side width transition
      setTimeout(() => {
        if (submissionChart) submissionChart.resize();
        if (categoryChart) categoryChart.resize();
      }, 400);
    });
  }
}

// --- Background Slideshow Slider ---
function initBackgroundSlider() {
  const slides = document.querySelectorAll('.db-bg-slider .db-bg-slide');
  if (slides.length === 0) return;

  let currentSlide = 0;
  slides[0].classList.add('active');

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 9000);
}

// --- Particles Generator ---
function createParticles() {
  const container = document.querySelector('.db-particles');
  if (!container) return;

  const count = 18;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'db-particle';
    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.animationDuration = `${Math.random() * 8 + 12}s`;
    container.appendChild(particle);
  }
}

// --- Notifications dropdown Menu ---
function initNotificationBell() {
  const trigger = document.getElementById('notification-bell-btn');
  const dropdown = document.getElementById('notification-dropdown');
  const clearBtn = document.getElementById('clear-notif-btn');

  if (trigger && dropdown) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && e.target !== trigger) {
        dropdown.classList.remove('active');
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      const list = document.getElementById('notification-list');
      if (list) {
        list.innerHTML = `<div style="font-size: 0.8rem; color: var(--text-muted); text-align: center; padding: 1.5rem 0;">${currentLang === 'en' ? 'No notifications' : 'कोई सूचना नहीं है'}</div>`;
        const badge = document.querySelector('.bell-badge');
        if (badge) badge.style.display = 'none';
      }
    });
  }
}

// --- Single Page Navigation switcher ---
function initSectionSwitcher() {
  const links = document.querySelectorAll('.sidebar-link');
  const sections = document.querySelectorAll('.db-section');
  const titleDisplay = document.getElementById('header-view-title');

  links.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.dataset.target;
      if (!target) return;

      // Update link states
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Update section visibility
      sections.forEach(sec => sec.classList.remove('active'));
      const activeSection = document.getElementById(`${target}-section`);
      if (activeSection) {
        activeSection.classList.add('active');
      }

      // Update view title name in header
      if (titleDisplay) {
        const transKey = `view_${target}`;
        titleDisplay.innerHTML = DB_TRANSLATIONS[currentLang][transKey] || target;
      }
      
      // Auto close sidebar if on mobile screen
      if (window.innerWidth <= 992) {
        document.getElementById('sidebar').classList.add('collapsed');
      }
    });
  });
}

// --- Chart.js Data Visualizations ---
function initCharts() {
  const subCtx = document.getElementById('submissionTrendChart');
  const catCtx = document.getElementById('categoryUsageChart');

  if (!subCtx || !catCtx) return;

  // Chart styling parameters based on Theme variables
  const isDark = currentTheme === 'dark';
  const textColor = isDark ? '#9ca3af' : '#475569';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(15, 23, 42, 0.05)';

  // Destroy previous instances to prevent duplicates
  if (submissionChart) submissionChart.destroy();
  if (categoryChart) categoryChart.destroy();

  // 1. Line Chart
  const months = currentLang === 'en' 
    ? ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] 
    : ['फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई'];

  submissionChart = new Chart(subCtx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: currentLang === 'en' ? 'Applications' : 'आवेदन',
        data: [2, 4, 3, 5, 8, 9],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: '#6366f1'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { color: textColor, font: { family: 'Inter' } }
        },
        y: {
          grid: { color: gridColor },
          ticks: { color: textColor, stepSize: 2, font: { family: 'Inter' } }
        }
      }
    }
  });

  // 2. Doughnut Chart
  const catLabels = currentLang === 'en'
    ? ['Land Records', 'Municipal', 'Agriculture', 'Education']
    : ['भूमि अभिलेख', 'नगर पालिका', 'कृषि', 'शिक्षा'];

  categoryChart = new Chart(catCtx, {
    type: 'doughnut',
    data: {
      labels: catLabels,
      datasets: [{
        data: [40, 25, 20, 15],
        backgroundColor: ['#6366f1', '#06b6d4', '#f97316', '#10b981'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: textColor,
            font: { family: 'Inter', size: 11 },
            boxWidth: 12
          }
        }
      }
    }
  });
}

// --- Application Tracker View Controls ---
let trackerFilterStatus = 'all';
let trackerSearchQuery = '';

function initTrackerFilter() {
  const searchInput = document.getElementById('tracker-search');
  const statusSelect = document.getElementById('tracker-status-filter');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      trackerSearchQuery = e.target.value.toLowerCase();
      renderAppTrackerList();
    });
  }

  if (statusSelect) {
    statusSelect.addEventListener('change', (e) => {
      trackerFilterStatus = e.target.value;
      renderAppTrackerList();
    });
  }
}

function renderAppTrackerList() {
  const container = document.getElementById('app-tracker-list');
  if (!container) return;

  container.innerHTML = '';

  const filtered = APP_MOCK_DATA.filter(app => {
    const name = currentLang === 'en' ? app.name_en : app.name_hi;
    const matchesSearch = name.toLowerCase().includes(trackerSearchQuery) || app.id.toLowerCase().includes(trackerSearchQuery);
    const matchesFilter = trackerFilterStatus === 'all' || app.status === trackerFilterStatus;
    return matchesSearch && matchesFilter;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="color: var(--text-muted); padding: 2rem; text-align:center;">${currentLang === 'en' ? 'No applications found' : 'कोई आवेदन नहीं मिला'}</div>`;
    return;
  }

  filtered.forEach(app => {
    const card = document.createElement('div');
    card.className = `app-tracker-item db-glass-card hover-lift ${app.id === activeTrackerId ? 'active' : ''}`;
    card.dataset.id = app.id;
    card.setAttribute('tabindex', '0');

    const appName = currentLang === 'en' ? app.name_en : app.name_hi;
    const dateFormatted = new Date(app.date).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'hi-IN', { year: 'numeric', month: 'short', day: 'numeric' });

    let badgeClass = '';
    let badgeText = '';

    if (app.status === 'approved') {
      badgeClass = 'approved';
      badgeText = currentLang === 'en' ? 'Approved' : 'स्वीकृत';
    } else if (app.status === 'progress') {
      badgeClass = 'progress';
      badgeText = currentLang === 'en' ? 'In Progress' : 'समीक्षाधीन';
    } else {
      badgeClass = 'clarification';
      badgeText = currentLang === 'en' ? 'Action Required' : 'कार्रवाई आवश्यक';
    }

    card.innerHTML = `
      <div class="app-item-info">
        <h4 class="app-item-title">${appName}</h4>
        <div class="app-item-meta">
          <span class="app-item-id">${app.id}</span>
          <span>•</span>
          <span>${dateFormatted}</span>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
        <span class="app-status-badge ${badgeClass}">${badgeText}</span>
        <span class="app-tracker-action" data-translate="lbl_track_progress">Track Status <i class="fas fa-chevron-right"></i></span>
      </div>
    `;

    card.addEventListener('click', () => {
      selectTrackerApp(app.id);
    });

    // Keyboard accessibility keydowns
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectTrackerApp(app.id);
      }
    });

    container.appendChild(card);
  });
}

let activeTrackerId = APP_MOCK_DATA[0].id;

function selectTrackerApp(id) {
  activeTrackerId = id;
  
  // Update class states in list items
  document.querySelectorAll('.app-tracker-item').forEach(item => {
    if (item.dataset.id === id) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  const app = APP_MOCK_DATA.find(a => a.id === id);
  const timelineCard = document.getElementById('timeline-card');

  if (!app || !timelineCard) return;

  const appName = currentLang === 'en' ? app.name_en : app.name_hi;
  
  // Set Timeline header info
  document.getElementById('timeline-app-name').textContent = appName;
  document.getElementById('timeline-app-id').textContent = app.id;

  // Render nodes list
  const container = document.getElementById('timeline-nodes-list');
  container.innerHTML = '';

  app.timeline_en.forEach(node => {
    const nodeDiv = document.createElement('div');
    nodeDiv.className = `timeline-node ${node.status}`;

    // Translate stage name if keys exist
    const stageText = currentLang === 'en' ? node.stage : (node.stage === "Application Submitted" ? "आवेदन जमा किया गया" : (node.stage === "Document Verification" ? "दस्तावेज़ सत्यापन" : (node.stage === "Patwari Field Investigation" ? "पटवारी फील्ड जांच" : (node.stage === "Tehsildar Final Approval" ? "तहसीलदार अंतिम स्वीकृति" : (node.stage === "Aadhaar-DBT Verification" ? "आधार-डीबीटी सत्यापन" : (node.stage === "Municipal Ward Verification" ? "नगर निगम वार्ड सत्यापन" : (node.stage === "Beneficiary Certificate Dispatch" ? "लाभार्थी प्रमाण पत्र प्रेषण" : (node.stage === "Verification Officer Audit" ? "सत्यापन अधिकारी ऑडिट" : (node.stage === "Citizen Correction Upload" ? "नागरिक सुधार अपलोड" : (node.stage === "Final Card Issuance" ? "अंतिम राशन कार्ड वितरण" : node.stage))))))))));
    
    const descText = currentLang === 'en' ? node.desc : (node.desc.includes("Citizen submitted") ? "नागरिक ने सफलतापूर्वक विवरण जमा किया।" : (node.desc.includes("verified automatically") ? "आधार और निवासी विवरण स्वतः सत्यापित।" : (node.desc.includes("verified address") ? "स्थानीय अधिकारी ने पते का सत्यापन किया।" : (node.desc.includes("signature certified") ? "डिजिटल हस्ताक्षर प्रमाणित।" : (node.desc.includes("enrollment received") ? "नागरिक नामांकन ऑनलाइन प्राप्त हुआ।" : (node.desc.includes("DBT Verification") || node.desc.includes("linking details") ? "बैंक खाता लिंकिंग विवरण प्रमाणित।" : (node.desc.includes("counselor reviewing") ? "स्थानीय वार्ड पार्षद घरेलू आय की समीक्षा कर रहे हैं।" : (node.desc.includes("Sanction order") ? "स्वीकृति आदेश का प्रकाशन।" : (node.desc.includes("Audited") || node.desc.includes("expiry") ? "आय दस्तावेज का ऑडिट। वैधता समाप्त होने के कारण अस्वीकार कर दिया गया।" : (node.desc.includes("Pending upload") ? "नए प्रमाण पत्र के अपलोड की प्रतीक्षा है।" : (node.desc.includes("Distribution verification") ? "राशन वितरण सत्यापन।" : node.desc))))))))));

    const timeText = currentLang === 'en' ? node.time : (node.time === "Processing..." ? "प्रगति पर..." : (node.time === "Pending" ? "लंबित" : (node.time === "Waiting for Citizen Action" ? "नागरिक कार्रवाई की प्रतीक्षा में" : node.time)));

    nodeDiv.innerHTML = `
      <div class="timeline-bullet"></div>
      <div class="timeline-content">
        <h5 class="timeline-stage-title">${stageText}</h5>
        <p class="timeline-stage-desc">${descText}</p>
        <span class="timeline-stage-time">${timeText}</span>
      </div>
    `;

    container.appendChild(nodeDiv);
  });

  // Action required banner controls
  const actionBanner = document.getElementById('timeline-action-card');
  if (app.status === 'clarification') {
    actionBanner.classList.add('active');
    const descEl = document.getElementById('timeline-action-desc');
    descEl.textContent = currentLang === 'en' ? app.actionDesc_en : app.actionDesc_hi;
  } else {
    actionBanner.classList.remove('active');
  }
}

// --- Digital Document Locker Controls ---
function renderLockerGrid() {
  const grid = document.getElementById('locker-grid');
  if (!grid) return;

  grid.innerHTML = '';

  LOCKER_MOCK_DATA.forEach(doc => {
    const card = document.createElement('div');
    card.className = `doc-card db-glass-card hover-lift ${doc.type}`;
    
    const formattedDate = new Date(doc.date).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'hi-IN', { year: 'numeric', month: 'short' });
    const dept = currentLang === 'en' ? doc.dept_en : doc.dept_hi;

    card.innerHTML = `
      <div class="doc-card-top">
        <div class="doc-icon-wrapper">
          <i class="fas ${doc.type === 'pdf' ? 'fa-file-pdf' : 'fa-file-image'}"></i>
        </div>
        <div class="doc-menu-btn" title="Options">
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
      
      <div class="doc-details">
        <h4 class="doc-name">${doc.name}</h4>
        <div class="doc-meta">
          <span>${doc.size}</span>
          <span>•</span>
          <span>${formattedDate}</span>
        </div>
        <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 0.5rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${dept}">
          ${dept}
        </div>
      </div>

      <div class="doc-actions-bar">
        <button class="btn-doc-action" onclick="viewLockerDoc('${doc.id}')" data-translate="locker_btn_view">
          <i class="fas fa-eye"></i> View
        </button>
        <button class="btn-doc-action" onclick="downloadLockerDoc('${doc.name}')" data-translate="locker_btn_download">
          <i class="fas fa-download"></i> Get
        </button>
        <button class="btn-doc-action btn-doc-delete" onclick="deleteLockerDoc('${doc.id}')" title="Delete">
          <i class="fas fa-trash-can"></i>
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}

function initLockerDragAndDrop() {
  const zone = document.getElementById('locker-upload-zone');
  if (!zone) return;

  // Prevent defaults for drag events
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    zone.addEventListener(eventName, (e) => e.preventDefault(), false);
  });

  zone.addEventListener('dragover', () => zone.classList.add('dragover'));
  zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
  zone.addEventListener('drop', (e) => {
    zone.classList.remove('dragover');
    const files = e.clipboardData ? e.clipboardData.files : e.dataTransfer.files;
    if (files.length > 0) {
      simulateFileUpload(files[0]);
    }
  });

  // Clicking triggers manual selector
  zone.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.png,.jpg,.jpeg';
    input.onchange = (e) => {
      if (e.target.files.length > 0) {
        simulateFileUpload(e.target.files[0]);
      }
    };
    input.click();
  });
}

function simulateFileUpload(file) {
  // Show upload toast/loader
  alert(currentLang === 'en' ? `Uploading ${file.name}...` : `${file.name} अपलोड हो रहा है...`);

  setTimeout(() => {
    const newDoc = {
      id: `doc-${Date.now()}`,
      name: file.name,
      size: `${Math.round(file.size / 1024)} KB`,
      date: new Date().toISOString().split('T')[0],
      type: file.name.endsWith('.pdf') ? 'pdf' : 'png',
      issued: false,
      dept_en: "Citizen Uploaded File",
      dept_hi: "नागरिक द्वारा अपलोड की गई फ़ाइल"
    };

    LOCKER_MOCK_DATA.push(newDoc);
    renderLockerGrid();
    alert(currentLang === 'en' ? 'Document uploaded successfully!' : 'दस्तावेज़ सफलतापूर्वक अपलोड किया गया!');
  }, 1000);
}

function deleteLockerDoc(id) {
  if (confirm(currentLang === 'en' ? "Are you sure you want to delete this document?" : "क्या आप वाकई इस दस्तावेज़ को हटाना चाहते हैं?")) {
    LOCKER_MOCK_DATA = LOCKER_MOCK_DATA.filter(doc => doc.id !== id);
    renderLockerGrid();
  }
}
// Expose functions globally for click handlers
window.deleteLockerDoc = deleteLockerDoc;

function downloadLockerDoc(name) {
  alert(currentLang === 'en' ? `Downloading ${name} locally...` : `${name} स्थानीय रूप से डाउनलोड हो रहा है...`);
}
window.downloadLockerDoc = downloadLockerDoc;

// --- Locker Viewer Modal Drawing ---
function initLockerViewerModal() {
  const modal = document.getElementById('doc-viewer-modal');
  const closeBtn = document.getElementById('btn-doc-close');

  if (modal && closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
    
    // Clicking backdrop closes modal
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
}

function viewLockerDoc(id) {
  const doc = LOCKER_MOCK_DATA.find(d => d.id === id);
  const modal = document.getElementById('doc-viewer-modal');
  const frame = document.getElementById('doc-viewer-frame');

  if (!doc || !modal || !frame) return;

  // Render a mock certificate with government emblems
  const dept = currentLang === 'en' ? doc.dept_en : doc.dept_hi;
  const title = doc.name.replace(/_/g, ' ').replace('.pdf', '').replace('.png', '');
  
  const today = new Date().toLocaleDateString(currentLang === 'en' ? 'en-US' : 'hi-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  frame.innerHTML = `
    <div class="doc-mock-file">
      <div class="doc-mock-watermark">GOVERNMENT OF MP</div>
      <div class="doc-mock-header">
        <img src="assets/mp_logo.png" alt="MP emblem" class="doc-mock-logo">
        <div class="doc-mock-dept">${dept}</div>
        <h3 class="doc-mock-title">${title}</h3>
      </div>
      
      <div class="doc-mock-details">
        <div class="doc-mock-detail-item">
          <span class="doc-mock-label">${currentLang === 'en' ? 'Certificate Number' : 'प्रमाण पत्र संख्या'}</span>
          <span class="doc-mock-value">MP-CERT-2026-${Math.floor(Math.random() * 900000 + 100000)}</span>
        </div>
        <div class="doc-mock-detail-item">
          <span class="doc-mock-label">${currentLang === 'en' ? 'Issued To' : 'जारी किया गया'}</span>
          <span class="doc-mock-value">Rajesh Kumar</span>
        </div>
        <div class="doc-mock-detail-item">
          <span class="doc-mock-label">${currentLang === 'en' ? 'Father/Spouse Name' : 'पिता/पति का नाम'}</span>
          <span class="doc-mock-value">Mr. Hari Prasad Kumar</span>
        </div>
        <div class="doc-mock-detail-item">
          <span class="doc-mock-label">${currentLang === 'en' ? 'Aadhaar Reference' : 'आधार संदर्भ'}</span>
          <span class="doc-mock-value">XXXX-XXXX-8930</span>
        </div>
        <div class="doc-mock-detail-item">
          <span class="doc-mock-label">${currentLang === 'en' ? 'Status' : 'स्थिति'}</span>
          <span class="doc-mock-value" style="color: var(--color-green);">${currentLang === 'en' ? 'Valid & Verified' : 'मान्य और सत्यापित'}</span>
        </div>
        <div class="doc-mock-detail-item">
          <span class="doc-mock-label">${currentLang === 'en' ? 'Issue Date' : 'जारी करने की तिथि'}</span>
          <span class="doc-mock-value">${doc.date}</span>
        </div>
      </div>
      
      <div class="doc-mock-footer">
        <div>
          <div>${currentLang === 'en' ? 'Electronically Generated Document' : 'इलेक्ट्रॉनिक रूप से जनरेट किया गया दस्तावेज़'}</div>
          <div>${currentLang === 'en' ? 'Date Verified:' : 'सत्यापित तिथि:'} ${today}</div>
        </div>
        
        <div style="display: flex; gap: 1rem; align-items: flex-end;">
          <div class="doc-mock-qr"></div>
          <div class="doc-mock-sign">
            <div class="doc-mock-sign-title">${currentLang === 'en' ? 'Authorized Digit Sign' : 'अधिकृत डिजिटल हस्ताक्षर'}</div>
            <div style="font-size: 0.75rem; color:#475569;">Govt. of Madhya Pradesh</div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}
window.viewLockerDoc = viewLockerDoc;

// --- Government Welfare Schemes View Filters ---
let schemeFilterCategory = 'all';
let schemeSearchQuery = '';

function initSchemesFilter() {
  const chips = document.querySelectorAll('.schemes-chip');
  const searchInput = document.getElementById('schemes-search-bar');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      schemeFilterCategory = chip.dataset.category;
      filterSchemes();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      schemeSearchQuery = e.target.value.toLowerCase();
      filterSchemes();
    });
  }
}

function filterSchemes() {
  const grid = document.getElementById('schemes-grid');
  const emptyState = document.getElementById('schemes-empty-state');
  if (!grid) return;

  const cards = grid.querySelectorAll('.scheme-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const title = card.querySelector('.scheme-title').textContent.toLowerCase();
    const desc = card.querySelector('.scheme-desc').textContent.toLowerCase();
    const cat = card.dataset.category;

    const matchesSearch = title.includes(schemeSearchQuery) || desc.includes(schemeSearchQuery);
    const matchesCategory = schemeFilterCategory === 'all' || cat === schemeFilterCategory;

    if (matchesSearch && matchesCategory) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (visibleCount === 0 && emptyState) {
    emptyState.style.display = 'block';
  } else if (emptyState) {
    emptyState.style.display = 'none';
  }
}

// Support suggestion chips search trigger
function searchSchemeSuggestion(query) {
  const searchInput = document.getElementById('schemes-search-bar');
  if (searchInput) {
    searchInput.value = query;
    schemeSearchQuery = query.toLowerCase();
    
    // Auto click 'All Schemes' category chip to clear filters
    document.querySelectorAll('.schemes-chip').forEach(chip => {
      if (chip.dataset.category === 'all') {
        chip.click();
      }
    });
    
    filterSchemes();
  }
}
window.searchSchemeSuggestion = searchSchemeSuggestion;

// --- Floating AI assistant chatbot controls ---
function initFloatingAssistant() {
  const trigger = document.getElementById('assistant-trigger');
  const windowBox = document.getElementById('chatbot-window');
  const closeBtn = document.getElementById('chat-close');
  const form = document.getElementById('chat-input-form');
  const msgInput = document.getElementById('chat-message-input');
  const msgBoard = document.getElementById('chat-messages');

  if (trigger && windowBox) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      windowBox.classList.toggle('active');
      
      // Focus input field if chatbot opens
      if (windowBox.classList.contains('active') && msgInput) {
        msgInput.focus();
      }
    });
  }

  if (closeBtn && windowBox) {
    closeBtn.addEventListener('click', () => {
      windowBox.classList.remove('active');
    });
  }

  // Pre-load Bot greeting message
  if (msgBoard) {
    msgBoard.innerHTML = `<div class="chat-bubble bot">${DB_TRANSLATIONS[currentLang]['bot_greeting']}</div>`;
  }

  if (form && msgInput && msgBoard) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = msgInput.value.trim();
      if (!val) return;

      // Append User message
      appendChatMessage('user', val);
      msgInput.value = '';

      // Simulate Bot processing (typing dots)
      const loaderBubble = document.createElement('div');
      loaderBubble.className = 'chat-bubble bot typing';
      loaderBubble.innerHTML = `
        <div class="typing-indicator" style="padding:0;">
          <div class="typing-dot" style="background:#fff;"></div>
          <div class="typing-dot" style="background:#fff;"></div>
          <div class="typing-dot" style="background:#fff;"></div>
        </div>
      `;
      msgBoard.appendChild(loaderBubble);
      msgBoard.scrollTop = msgBoard.scrollHeight;

      setTimeout(() => {
        // Remove typing indicators
        loaderBubble.remove();

        // Calculate replies
        let replyText = '';
        const lowercaseVal = val.toLowerCase();

        if (lowercaseVal.includes('status') || lowercaseVal.includes('स्थिति') || lowercaseVal.includes('track')) {
          replyText = currentLang === 'en' 
            ? "Your Domicile Certificate application is <strong>APPROVED</strong> and available in the Doc Locker. Your Ration Card application requires <strong>correction uploads</strong>."
            : "आपका मूल निवासी प्रमाण पत्र आवेदन <strong>स्वीकृत</strong> है और दस्तावेज़ लॉकर में उपलब्ध है। आपके राशन कार्ड आवेदन में <strong>सुधार अपलोड</strong> की आवश्यकता है।";
        } else if (lowercaseVal.includes('helpline') || lowercaseVal.includes('181') || lowercaseVal.includes('कॉल')) {
          replyText = currentLang === 'en'
            ? "For direct grievance filings, dial the CM Helpline at <strong>181</strong>. For technical portal help, contact <strong>1800-233-179</strong>."
            : "सीधे शिकायत दर्ज करने के लिए, सीएम हेल्पलाइन <strong>181</strong> पर कॉल करें। तकनीकी पोर्टल सहायता के लिए, <strong>1800-233-179</strong> पर संपर्क करें।";
        } else if (lowercaseVal.includes('scholarship') || lowercaseVal.includes('छात्रवृत्ति') || lowercaseVal.includes('fees')) {
          replyText = currentLang === 'en'
            ? "The Post-Matric Scholarship portal is currently active. You can apply directly from the <strong>Welfare Schemes</strong> tab."
            : "पोस्ट-मैट्रिक छात्रवृत्ति पोर्टल वर्तमान में सक्रिय है। आप सीधे <strong>कल्याणकारी योजनाएं</strong> टैब से आवेदन कर सकते हैं।";
        } else if (lowercaseVal.includes('document') || lowercaseVal.includes('pdf') || lowercaseVal.includes('locker') || lowercaseVal.includes('लॉकर')) {
          replyText = currentLang === 'en'
            ? "You can view, download, or share certificates inside your <strong>Doc Locker</strong> tab. Drag-and-drop any PDF file to store it there!"
            : "आप अपने <strong>दस्तावेज़ लॉकर</strong> टैब में प्रमाण पत्र देख, डाउनलोड या साझा कर सकते हैं। वहां स्टोर करने के लिए किसी भी पीडीएफ फ़ाइल को खींचें और छोड़ें!";
        } else {
          replyText = currentLang === 'en'
            ? "Thank you for reaching out. You can browse state welfare schemes from the 'Welfare Schemes' tab or click CM Helpline 181 to register inquiries."
            : "संपर्क करने के लिए धन्यवाद। आप 'कल्याणकारी योजनाएं' टैब से राज्य की योजनाओं को देख सकते हैं या पूछताछ दर्ज करने के लिए सीएम हेल्पलाइन 181 पर क्लिक कर सकते हैं।";
        }

        appendChatMessage('bot', replyText);
      }, 1200);
    });
  }
}

function appendChatMessage(sender, text) {
  const msgBoard = document.getElementById('chat-messages');
  if (!msgBoard) return;

  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  bubble.innerHTML = text;

  msgBoard.appendChild(bubble);
  msgBoard.scrollTop = msgBoard.scrollHeight;
}

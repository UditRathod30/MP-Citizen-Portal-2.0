/* 
 * MP Citizen Portal 2.0 - Women Dashboard Logic
 * Author: Senior Frontend Architect
 */

const WOMEN_TRANSLATIONS = {
  en: {
    auth_portal_title: "MP Citizen Portal 2.0",
    nav_overview: "<i class='fas fa-user-tie'></i> <span class='sidebar-link-text'>Empowerment Hub</span>",
    nav_behna: "<i class='fas fa-house-chimney-heart'></i> <span class='sidebar-link-text'>Ladli Behna</span>",
    nav_shg: "<i class='fas fa-users-rectangle'></i> <span class='sidebar-link-text'>Self Help Groups</span>",
    nav_health: "<i class='fas fa-heart-pulse'></i> <span class='sidebar-link-text'>Women Health</span>",
    
    // Overview
    welcome_greeting: "Namaste, Rajeshwari Bai",
    welcome_desc: "Monitor your monthly Ladli Behna payouts, manage Self Help Group accounts, and enroll in vocational skills courses.",
    lbl_verified: "Profile Verified",
    lbl_citizen_id: "Samagra Member ID",
    
    // Statistics
    stat_submitted: "Monthly Payout",
    stat_approved: "SHG Balance",
    stat_review: "Skill Courses",
    stat_action: "Action Required",
    
    // Charts
    chart_line_title: "SHG Mutual Savings Growth (6 Months in ₹)",
    chart_pie_title: "Skill Course Enrollment",
    
    // Custom Headers
    lbl_shg: "Self Help Group Accounts (Narmada Sangathan)",
    lbl_courses: "Free Vocational Courses (Skill Development)",
    lbl_health: "Pregnancy & General Health Checks",
    lbl_finance: "Interest-Free Loans Tracker",
    btn_enroll: "Enroll",
    
    // Health Items
    h_item1: "Asha Health Inspection",
    h_item2: "Maternity Scheme Eligibility",
    h_item3: "Hemoglobin & Iron Check",
    
    // Chat bot replies
    bot_greeting: "Namaste Rajeshwari! I am MP-AI. Ask me about Ladli Behna DBT links, self-help group credits, or tailoring courses.",
    chat_placeholder: "Type a query... (e.g. check Ladli Behna status, tailoring courses)",
    
    view_overview: "Empowerment Hub",
    view_behna: "Ladli Behna Yojana",
    view_shg: "Self Help Groups (SHG)",
    view_health: "Women Health Center"
  },
  hi: {
    auth_portal_title: "एमपी नागरिक पोर्टल 2.0",
    nav_overview: "<i class='fas fa-user-tie'></i> <span class='sidebar-link-text'>सशक्तिकरण केंद्र</span>",
    nav_behna: "<i class='fas fa-house-chimney-heart'></i> <span class='sidebar-link-text'>लाड़ली बहना</span>",
    nav_shg: "<i class='fas fa-users-rectangle'></i> <span class='sidebar-link-text'>स्वयं सहायता समूह</span>",
    nav_health: "<i class='fas fa-heart-pulse'></i> <span class='sidebar-link-text'>महिला स्वास्थ्य</span>",
    
    // Overview
    welcome_greeting: "नमस्ते, राजेश्वरी बाई",
    welcome_desc: "अपने मासिक लाड़ली बहना भुगतान की निगरानी करें, स्वयं सहायता समूह खातों का प्रबंधन करें, और व्यावसायिक कौशल पाठ्यक्रमों में नामांकन करें।",
    lbl_verified: "प्रोफ़ाइल सत्यापित",
    lbl_citizen_id: "समग्र सदस्य आईडी",
    
    // Statistics
    stat_submitted: "मासिक भुगतान",
    stat_approved: "समूह बचत",
    stat_review: "कौशल पाठ्यक्रम",
    stat_action: "कार्रवाई आवश्यक",
    
    // Charts
    chart_line_title: "एसएचजी आपसी बचत वृद्धि (6 महीने ₹ में)",
    chart_pie_title: "कौशल पाठ्यक्रम नामांकन",
    
    // Custom Headers
    lbl_shg: "स्वयं सहायता समूह खाते (नर्मदा संगठन)",
    lbl_courses: "नि: शुल्क व्यावसायिक पाठ्यक्रम (कौशल विकास)",
    lbl_health: "गर्भावस्था एवं सामान्य स्वास्थ्य जांच",
    lbl_finance: "ब्याज मुक्त ऋण ट्रैकर",
    btn_enroll: "नामांकन करें",
    
    // Health Items
    h_item1: "आशा स्वास्थ्य निरीक्षण",
    h_item2: "मातृत्व योजना पात्रता",
    h_item3: "हीमोग्लोबिन और आयरन जांच",
    
    // Chat bot replies
    bot_greeting: "नमस्ते राजेश्वरी! मैं एमपी-एआई हूँ। मुझसे लाड़ली बहना डीबीटी लिंक, स्वयं सहायता समूह क्रेडिट या सिलाई पाठ्यक्रमों के बारे में पूछें।",
    chat_placeholder: "प्रश्न टाइप करें... (जैसे लाड़ली बहना स्थिति की जांच करें, सिलाई पाठ्यक्रम)",
    
    view_overview: "सशक्तिकरण केंद्र",
    view_behna: "लाड़ली बहना योजना",
    view_shg: "स्वयं सहायता समूह (SHG)",
    view_health: "महिला स्वास्थ्य केंद्र"
  }
};

let currentLang = localStorage.getItem('mp_lang') || 'en';
let currentTheme = localStorage.getItem('mp_theme') || 'dark';
let savingsChart, courseEnrollChart;

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initSidebar();
  initBackgroundSlider();
  createParticles();
  initSectionSwitcher();
  initCharts();
  initFloatingAssistant();
});

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

// --- Language Switcher ---
function initLanguage() {
  setLanguage(currentLang);

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'hi' : 'en';
      setLanguage(nextLang);
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

  const translatables = document.querySelectorAll('[data-translate]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (WOMEN_TRANSLATIONS[lang] && WOMEN_TRANSLATIONS[lang][key]) {
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', WOMEN_TRANSLATIONS[lang][key]);
      } else {
        el.innerHTML = WOMEN_TRANSLATIONS[lang][key];
      }
    }
  });

  document.title = (lang === 'en' ? "Women Empowerment Dashboard" : "महिला सशक्तिकरण डैशबोर्ड") + " | MP Citizen Portal 2.0";
}

// --- Collapsible Sidebar ---
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  
  if (sidebar && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      const icon = toggleBtn.querySelector('i');
      icon.className = sidebar.classList.contains('collapsed') ? 'fas fa-bars' : 'fas fa-arrow-left';
      
      setTimeout(() => {
        if (savingsChart) savingsChart.resize();
        if (courseEnrollChart) courseEnrollChart.resize();
      }, 400);
    });
  }
}

// --- Background Slideshow ---
function initBackgroundSlider() {
  const slides = document.querySelectorAll('.db-bg-slider .db-bg-slide');
  if (slides.length === 0) return;
  let currentSlide = 0;
  slides[0].classList.add('active');
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 9500);
}

// --- Particles Generator ---
function createParticles() {
  const container = document.querySelector('.db-particles');
  if (!container) return;
  const count = 15;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'db-particle';
    const size = Math.random() * 4 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 6}s`;
    particle.style.animationDuration = `${Math.random() * 6 + 10}s`;
    container.appendChild(particle);
  }
}

// --- Dynamic SPA tab toggler ---
function initSectionSwitcher() {
  const links = document.querySelectorAll('.sidebar-link');
  const sections = document.querySelectorAll('.db-section');
  const titleDisplay = document.getElementById('header-view-title');

  links.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.dataset.target;
      if (!target) return;

      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      sections.forEach(sec => sec.classList.remove('active'));
      const activeSection = document.getElementById(`${target}-section`);
      if (activeSection) {
        activeSection.classList.add('active');
      }

      if (titleDisplay) {
        const transKey = `view_${target}`;
        titleDisplay.innerHTML = WOMEN_TRANSLATIONS[currentLang][transKey] || target;
      }
      
      if (window.innerWidth <= 992) {
        document.getElementById('sidebar').classList.add('collapsed');
      }
    });
  });
}

// --- Chart.js Savings Progression & Course enrollments ---
function initCharts() {
  const saveCtx = document.getElementById('savingsGrowthChart');
  const courseCtx = document.getElementById('courseEnrollmentChart');

  if (!saveCtx || !courseCtx) return;

  const isDark = currentTheme === 'dark';
  const textColor = isDark ? '#9ca3af' : '#475569';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(15, 23, 42, 0.05)';

  if (savingsChart) savingsChart.destroy();
  if (courseEnrollChart) courseEnrollChart.destroy();

  const months = currentLang === 'en'
    ? ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    : ['फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई'];

  savingsChart = new Chart(saveCtx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'SHG Savings (₹)',
        data: [15000, 22000, 28000, 34000, 41000, 42500],
        borderColor: '#ec4899',
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: '#ec4899'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: textColor } },
        y: { grid: { color: gridColor }, ticks: { color: textColor, stepSize: 10000 } }
      }
    }
  });

  const catLabels = currentLang === 'en'
    ? ['Sewing & Tailoring', 'Computer Literacy', 'Food Processing', 'Toy Making']
    : ['सिलाई एवं कढ़ाई', 'कंप्यूटर साक्षरता', 'खाद्य प्रसंस्करण', 'खिलौना निर्माण'];

  courseEnrollChart = new Chart(courseCtx, {
    type: 'doughnut',
    data: {
      labels: catLabels,
      datasets: [{
        data: [40, 30, 20, 10],
        backgroundColor: ['#ec4899', '#d946ef', '#6366f1', '#10b981'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: { color: textColor, font: { size: 10 } }
        }
      }
    }
  });
}

// --- Floating assistant chat responses ---
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
    });
  }

  if (closeBtn && windowBox) {
    closeBtn.addEventListener('click', () => windowBox.classList.remove('active'));
  }

  if (msgBoard) {
    msgBoard.innerHTML = `<div class="chat-bubble bot">${STUDENT_TRANSLATIONS[currentLang] ? STUDENT_TRANSLATIONS[currentLang]['bot_greeting'] : WOMEN_TRANSLATIONS[currentLang]['bot_greeting']}</div>`; // wait, let's use the local women translations greeting directly
  }

  // Fixing above card header:
  if (msgBoard) {
    msgBoard.innerHTML = `<div class="chat-bubble bot">${WOMEN_TRANSLATIONS[currentLang]['bot_greeting']}</div>`;
  }

  if (form && msgInput && msgBoard) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = msgInput.value.trim();
      if (!val) return;

      appendChatMessage('user', val);
      msgInput.value = '';

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
        loaderBubble.remove();
        let replyText = '';
        const lowercaseVal = val.toLowerCase();

        if (lowercaseVal.includes('behna') || lowercaseVal.includes('ladli') || lowercaseVal.includes('बहना')) {
          replyText = currentLang === 'en'
            ? "Your July monthly Ladli Behna Yojana installment of ₹1,250 has been successfully credited via DBT."
            : "आपकी लाड़ली बहना योजना की जुलाई की ₹1,250 की मासिक किस्त आपके डीबीटी खाते में सफलतापूर्वक भेज दी गई है।";
        } else if (lowercaseVal.includes('group') || lowercaseVal.includes('shg') || lowercaseVal.includes('समूह')) {
          replyText = currentLang === 'en'
            ? "Your Self Help Group 'Narmada Sangathan' currently holds ₹42,500 in collective savings. The next internal credit meeting is on July 12."
            : "आपके स्वयं सहायता समूह 'नर्मदा संगठन' में वर्तमान में ₹42,500 की कुल बचत है। अगली आंतरिक बैठक 12 जुलाई को है।";
        } else if (lowercaseVal.includes('course') || lowercaseVal.includes('tailor') || lowercaseVal.includes('सिलाई')) {
          replyText = currentLang === 'en'
            ? "Free Tailoring and Digital Literacy courses are starting on July 15. You can enroll directly from the 'Free Vocational Courses' card!"
            : "निःशुल्क सिलाई और डिजिटल साक्षरता पाठ्यक्रम 15 जुलाई से शुरू हो रहे हैं। आप 'निःशुल्क व्यावसायिक पाठ्यक्रम' कार्ड से सीधे नामांकन कर सकते हैं!";
        } else if (lowercaseVal.includes('loan') || lowercaseVal.includes('finance') || lowercaseVal.includes('ऋण')) {
          replyText = currentLang === 'en'
            ? "Your interest-free micro-credit loan of ₹10,000 is approved. Payout confirmation will be sent to your registered phone."
            : "आपका ₹10,000 का ब्याज मुक्त सूक्ष्म ऋण स्वीकृत हो गया है। भुगतान की पुष्टि आपके पंजीकृत फोन पर भेजी जाएगी।";
        } else {
          replyText = currentLang === 'en'
            ? "Thank you for asking. You can check Ladli Behna payout timelines or join self-help groups directly from your sidebar tabs."
            : "पूछने के लिए धन्यवाद। आप साइडबार टैब से सीधे लाड़ली बहना भुगतान समयसीमा देख सकती हैं या स्वयं सहायता समूहों में शामिल हो सकती हैं।";
        }

        appendChatMessage('bot', replyText);
      }, 1000);
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

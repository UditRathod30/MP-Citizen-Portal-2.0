/* 
 * MP Citizen Portal 2.0 - Student Dashboard Logic
 * Author: Senior Frontend Architect
 */

const STUDENT_TRANSLATIONS = {
  en: {
    auth_portal_title: "MP Citizen Portal 2.0",
    nav_overview: "<i class='fas fa-graduation-cap'></i> <span class='sidebar-link-text'>Academic Hub</span>",
    nav_dte: "<i class='fas fa-calendar-days'></i> <span class='sidebar-link-text'>MPDTE Center</span>",
    nav_mptaas: "<i class='fas fa-award'></i> <span class='sidebar-link-text'>MPTAAS Portal</span>",
    nav_locker: "<i class='fas fa-folder-open'></i> <span class='sidebar-link-text'>DigiLocker Docs</span>",
    
    // Overview
    welcome_greeting: "Welcome, Rajesh Kumar",
    welcome_desc: "Track your exams enrollment, state scholarships status, and apply for upcoming internship opportunities.",
    lbl_verified: "Student Profile Verified",
    lbl_citizen_id: "Enrollment ID",
    
    // Statistics
    stat_submitted: "Exam Forms",
    stat_approved: "Active Schemes",
    stat_review: "GPA Score",
    stat_action: "Action Required",
    
    // Charts
    chart_line_title: "Academic Performance Progress (SGPA Trend)",
    chart_pie_title: "Curriculum Hours Distribution",
    
    // Custom Student Views Headers
    lbl_exam_results: "Semester Grade Sheets (CGPA Log)",
    lbl_internships: "CM Youth Internship Vacancies",
    lbl_careers: "AI Career Guidance Advice",
    btn_apply: "Apply",
    
    // Career Guidances
    career_title1: "Cloud Solution Architect Associate",
    career_desc1: "Based on your scores in Advanced Networks and Cloud Computing, this path is highly recommended.",
    career_title2: "Data Science Research Internship",
    career_desc2: "Aligned with your database management project milestones and Python semester credits.",
    
    // Chat bot replies
    bot_greeting: "Hello Rajesh! I am MP-AI. Ask me anything about DTE counseling, MPTAAS disbursements, or internship vacancies.",
    chat_placeholder: "Type a query... (e.g. check scholarship, when is counseling)",
    
    view_overview: "Academic Hub",
    view_dte: "MPDTE Counseling Center",
    view_mptaas: "MPTAAS Scholarship Status",
    view_locker: "DigiLocker Integration"
  },
  hi: {
    auth_portal_title: "एमपी नागरिक पोर्टल 2.0",
    nav_overview: "<i class='fas fa-graduation-cap'></i> <span class='sidebar-link-text'>अकादमिक केंद्र</span>",
    nav_dte: "<i class='fas fa-calendar-days'></i> <span class='sidebar-link-text'>एमपीडीटीई केंद्र</span>",
    nav_mptaas: "<i class='fas fa-award'></i> <span class='sidebar-link-text'>एमपीटिएएएस पोर्टल</span>",
    nav_locker: "<i class='fas fa-folder-open'></i> <span class='sidebar-link-text'>डीजीलॉकर दस्तावेज़</span>",
    
    // Overview
    welcome_greeting: "स्वागत है, राजेश कुमार",
    welcome_desc: "अपने परीक्षा नामांकन, राज्य छात्रवृत्ति की स्थिति को ट्रैक करें और आगामी इंटर्नशिप अवसरों के लिए आवेदन करें।",
    lbl_verified: "छात्र प्रोफाइल सत्यापित",
    lbl_citizen_id: "नामांकन आईडी",
    
    // Statistics
    stat_submitted: "परीक्षा फॉर्म",
    stat_approved: "सक्रिय योजनाएं",
    stat_review: "जीपीए स्कोर",
    stat_action: "कार्रवाई आवश्यक",
    
    // Charts
    chart_line_title: "अकादमिक प्रदर्शन प्रगति (एसजीपीए रुझान)",
    chart_pie_title: "पाठ्यक्रम घंटे वितरण",
    
    // Custom Student Views Headers
    lbl_exam_results: "सेमेस्टर ग्रेड शीट (सीजीपीए लॉग)",
    lbl_internships: "मुख्यमंत्री युवा इंटर्नशिप रिक्तियां",
    lbl_careers: "एआई करियर मार्गदर्शन सलाह",
    btn_apply: "आवेदन करें",
    
    // Career Guidances
    career_title1: "क्लाउड सॉल्यूशन आर्किटेक्ट एसोसिएट",
    career_desc1: "उन्नत नेटवर्क और क्लाउड कंप्यूटिंग में आपके स्कोर के आधार पर, इस मार्ग की अत्यधिक अनुशंसा की जाती है।",
    career_title2: "डेटा साइंस रिसर्च इंटर्नशिप",
    career_desc2: "आपके डेटाबेस प्रबंधन परियोजना मील के पत्थर और पायथन सेमेस्टर क्रेडिट के साथ संरेखित।",
    
    // Chat bot replies
    bot_greeting: "नमस्ते राजेश! मैं एमपी-एआई हूँ। मुझसे डीटीई काउंसलिंग, एमपीटिएएएस छात्रवृत्ति या इंटर्नशिप रिक्तियों के बारे में कुछ भी पूछें।",
    chat_placeholder: "प्रश्न टाइप करें... (जैसे छात्रवृत्ति की जांच करें, काउंसलिंग कब है)",
    
    view_overview: "अकादमिक केंद्र",
    view_dte: "एमपीडीटीई काउंसलिंग केंद्र",
    view_mptaas: "एमपीटिएएएस छात्रवृत्ति स्थिति",
    view_locker: "डीजीलॉकर एकीकरण"
  }
};

let currentLang = localStorage.getItem('mp_lang') || 'en';
let currentTheme = localStorage.getItem('mp_theme') || 'dark';
let gpaChart, curriculumChart;

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
    if (STUDENT_TRANSLATIONS[lang] && STUDENT_TRANSLATIONS[lang][key]) {
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', STUDENT_TRANSLATIONS[lang][key]);
      } else {
        el.innerHTML = STUDENT_TRANSLATIONS[lang][key];
      }
    }
  });

  document.title = (lang === 'en' ? "Student Dashboard" : "छात्र डैशबोर्ड") + " | MP Citizen Portal 2.0";
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
        if (gpaChart) gpaChart.resize();
        if (curriculumChart) curriculumChart.resize();
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
  }, 9000);
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
        titleDisplay.innerHTML = STUDENT_TRANSLATIONS[currentLang][transKey] || target;
      }
      
      if (window.innerWidth <= 992) {
        document.getElementById('sidebar').classList.add('collapsed');
      }
    });
  });
}

// --- Chart.js Academic Performance Visuals ---
function initCharts() {
  const gpaCtx = document.getElementById('gpaTrendChart');
  const curCtx = document.getElementById('curriculumChart');

  if (!gpaCtx || !curCtx) return;

  const isDark = currentTheme === 'dark';
  const textColor = isDark ? '#9ca3af' : '#475569';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(15, 23, 42, 0.05)';

  if (gpaChart) gpaChart.destroy();
  if (curriculumChart) curriculumChart.destroy();

  // Semester labels
  const semesters = currentLang === 'en'
    ? ['Sem I', 'Sem II', 'Sem III', 'Sem IV', 'Sem V', 'Sem VI']
    : ['सेमेस्टर I', 'सेमेस्टर II', 'सेमेस्टर III', 'सेमेस्टर IV', 'सेमेस्टर V', 'सेमेस्टर VI'];

  gpaChart = new Chart(gpaCtx, {
    type: 'line',
    data: {
      labels: semesters,
      datasets: [{
        label: 'SGPA',
        data: [7.8, 8.2, 8.0, 8.5, 8.9, 9.1],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: '#3b82f6'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: textColor } },
        y: { grid: { color: gridColor }, ticks: { color: textColor, min: 6, max: 10 } }
      }
    }
  });

  const catLabels = currentLang === 'en'
    ? ['Lectures', 'Lab Practicals', 'Projects Work', 'Self Study']
    : ['लेक्चर', 'लैब प्रैक्टिकल', 'प्रोजेक्ट वर्क', 'सेल्फ स्टडी'];

  curriculumChart = new Chart(curCtx, {
    type: 'doughnut',
    data: {
      labels: catLabels,
      datasets: [{
        data: [45, 25, 18, 12],
        backgroundColor: ['#3b82f6', '#06b6d4', '#6366f1', '#10b981'],
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
    msgBoard.innerHTML = `<div class="chat-bubble bot">${STUDENT_TRANSLATIONS[currentLang]['bot_greeting']}</div>`;
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

        if (lowercaseVal.includes('scholarship') || lowercaseVal.includes('mptaas') || lowercaseVal.includes('छात्रवृत्ति')) {
          replyText = currentLang === 'en'
            ? "Your MPTAAS post-matric scholarship registration is verified. Next installment of ₹24,000 is scheduled for disbursement on July 20, 2026."
            : "आपका एमपीटिएएएस पोस्ट-मैट्रिक छात्रवृत्ति पंजीकरण सत्यापित है। ₹24,000 की अगली किस्त 20 जुलाई, 2026 को वितरित होने वाली है।";
        } else if (lowercaseVal.includes('counseling') || lowercaseVal.includes('dte') || lowercaseVal.includes('काउंसलिंग')) {
          replyText = currentLang === 'en'
            ? "MPDTE Choice Filling for B.Tech Round 1 counseling will start on July 10, 2026. Keep your Class 12th marksheet ready in DigiLocker."
            : "बी.टेक राउंड 1 काउंसलिंग के लिए एमपीडीटीई चॉइस फिलिंग 10 जुलाई, 2026 को शुरू होगी। डीजीलॉकर में अपनी 12वीं की अंकतालिका तैयार रखें।";
        } else if (lowercaseVal.includes('internship') || lowercaseVal.includes('intern') || lowercaseVal.includes('इंटर्नशिप')) {
          replyText = currentLang === 'en'
            ? "There are 3 new IT/Development vacancies under CM Youth Internship portal matching your Python credentials. You can apply directly from the Vacancies grid!"
            : "मुख्यमंत्री युवा इंटर्नशिप पोर्टल के तहत आपके पायथन क्रेडेंशियल से मेल खाने वाली 3 नई आईटी/डेवलपमेंट रिक्तियां हैं। आप सीधे रिक्तियों ग्रिड से आवेदन कर सकते हैं!";
        } else if (lowercaseVal.includes('results') || lowercaseVal.includes('marksheet') || lowercaseVal.includes('अंकतालिका')) {
          replyText = currentLang === 'en'
            ? "Your Class X and Class XII verified marksheets are available under your DigiLocker. Click 'DigiLocker Docs' to view them."
            : "आपकी कक्षा 10वीं और 12वीं की सत्यापित अंकतालिकाएं आपके डीजीलॉकर के अंतर्गत उपलब्ध हैं। उन्हें देखने के लिए 'डीजीलॉकर दस्तावेज़' पर क्लिक करें।";
        } else {
          replyText = currentLang === 'en'
            ? "Thank you for asking. You can check MPTAAS verification records under 'MPTAAS Portal' or view counseling schedules in the DTE tab."
            : "पूछने के लिए धन्यवाद। आप 'एमपीटिएएएस पोर्टल' के तहत सत्यापन रिकॉर्ड देख सकते हैं या डीटीई टैब में काउंसलिंग कार्यक्रम देख सकते हैं।";
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

/* 
 * MP Citizen Portal 2.0 - Farmer Dashboard Logic
 * Author: Senior Frontend Architect
 */

const FARMER_TRANSLATIONS = {
  en: {
    auth_portal_title: "MP Citizen Portal 2.0",
    nav_overview: "<i class='fas fa-tractor'></i> <span class='sidebar-link-text'>Agriculture Hub</span>",
    nav_pmkisan: "<i class='fas fa-hand-holding-hand'></i> <span class='sidebar-link-text'>PM Kisan Status</span>",
    nav_soil: "<i class='fas fa-seedling'></i> <span class='sidebar-link-text'>Soil Health</span>",
    nav_news: "<i class='fas fa-newspaper'></i> <span class='sidebar-link-text'>Agri News</span>",
    
    // Overview
    welcome_greeting: "Namaste, Rajesh Kumar",
    welcome_desc: "Access your crop subsidies, check Mandi market prices, claim crop insurance, and get AI-weather advisories.",
    lbl_verified: "Farmer Profile Verified",
    lbl_citizen_id: "Kisan Credit Card ID",
    
    // Statistics
    stat_submitted: "Subsidy Claims",
    stat_approved: "Sanctioned Loans",
    stat_review: "Soil Health pH",
    stat_action: "Action Required",
    
    // Charts
    chart_line_title: "Soyabean Price Fluctuation (6 Months in ₹/Quintal)",
    chart_pie_title: "Crop Sowing Distribution",
    
    // Voice Assistant
    voice_title: "Kisan Voice Assistant",
    voice_prompt: "Click mic and say: 'weather', 'soyabean price', or 'crop insurance'",
    voice_listening: "Listening... Speak now",
    voice_unsupported: "Speech recognition not supported in this browser.",
    
    // Custom Headers
    lbl_mandi_prices: "Mandi Quintal Rates (Live)",
    lbl_weather: "Weather Advisory & Climate",
    lbl_soil_report: "Soil Mineral Health Analysis",
    lbl_agri_news: "MP Agriculture News Bulletins",
    
    // Chatbot
    bot_greeting: "Namaste Rajesh! I am MP-AI. Ask me about subsidy schemes, Mandi wheat rates, or soil health testing.",
    chat_placeholder: "Type a query... (e.g. check PM Kisan, Mandi rates)",
    
    view_overview: "Agriculture Hub",
    view_pmkisan: "PM Kisan Samman Nidhi",
    view_soil: "Soil Health Card",
    view_news: "Agriculture News"
  },
  hi: {
    auth_portal_title: "एमपी नागरिक पोर्टल 2.0",
    nav_overview: "<i class='fas fa-tractor'></i> <span class='sidebar-link-text'>कृषि केंद्र</span>",
    nav_pmkisan: "<i class='fas fa-hand-holding-hand'></i> <span class='sidebar-link-text'>पीएम किसान स्थिति</span>",
    nav_soil: "<i class='fas fa-seedling'></i> <span class='sidebar-link-text'>मृदा स्वास्थ्य</span>",
    nav_news: "<i class='fas fa-newspaper'></i> <span class='sidebar-link-text'>कृषि समाचार</span>",
    
    // Overview
    welcome_greeting: "नमस्ते, राजेश कुमार",
    welcome_desc: "अपनी फसल सब्सिडी का लाभ उठाएं, मंडी भाव जांचें, फसल बीमा का दावा करें और एआई-मौसम सलाह प्राप्त करें।",
    lbl_verified: "किसान प्रोफाइल सत्यापित",
    lbl_citizen_id: "किसान क्रेडिट कार्ड आईडी",
    
    // Statistics
    stat_submitted: "सब्सिडी दावे",
    stat_approved: "स्वीकृत ऋण",
    stat_review: "मृदा पीएच",
    stat_action: "कार्रवाई आवश्यक",
    
    // Charts
    chart_line_title: "सोयाबीन भाव का उतार-चढ़ाव (6 महीने ₹/क्विंटल में)",
    chart_pie_title: "फसल बुवाई वितरण",
    
    // Voice Assistant
    voice_title: "किसान वॉयस असिस्टेंट",
    voice_prompt: "माइक दबाकर बोलें: 'मौसम', 'सोयाबीन भाव', या 'फसल बीमा'",
    voice_listening: "सुन रहा हूँ... बोलिए",
    voice_unsupported: "इस ब्राउज़र में स्पीच रिकग्निशन समर्थित नहीं है।",
    
    // Custom Headers
    lbl_mandi_prices: "मंडी प्रति क्विंटल दरें (लाइव)",
    lbl_weather: "मौसम सलाह एवं जलवायु",
    lbl_soil_report: "मृदा खनिज स्वास्थ्य विश्लेषण",
    lbl_agri_news: "एमपी कृषि समाचार बुलेटिन",
    
    // Chatbot
    bot_greeting: "नमस्ते राजेश! मैं एमपी-एआई हूँ। मुझसे सब्सिडी योजनाओं, गेहूं के मंडी भाव या मृदा स्वास्थ्य परीक्षण के बारे में पूछें।",
    chat_placeholder: "प्रश्न टाइप करें... (जैसे पीएम किसान की जांच करें, मंडी भाव)",
    
    view_overview: "कृषि केंद्र",
    view_pmkisan: "पीएम किसान सम्मान निधि",
    view_soil: "मृदा स्वास्थ्य कार्ड",
    view_news: "कृषि समाचार"
  }
};

let currentLang = localStorage.getItem('mp_lang') || 'en';
let currentTheme = localStorage.getItem('mp_theme') || 'dark';
let priceChart, cropDistChart;

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initSidebar();
  initBackgroundSlider();
  createParticles();
  initSectionSwitcher();
  initCharts();
  initVoiceAssistant();
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
      
      // Update voice instructions prompt
      const promptEl = document.getElementById('voice-ass-prompt');
      if (promptEl) {
        promptEl.textContent = FARMER_TRANSLATIONS[nextLang]['voice_prompt'];
      }
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
    if (FARMER_TRANSLATIONS[lang] && FARMER_TRANSLATIONS[lang][key]) {
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', FARMER_TRANSLATIONS[lang][key]);
      } else {
        el.innerHTML = FARMER_TRANSLATIONS[lang][key];
      }
    }
  });

  document.title = (lang === 'en' ? "Farmer Dashboard" : "किसान डैशबोर्ड") + " | MP Citizen Portal 2.0";
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
        if (priceChart) priceChart.resize();
        if (cropDistChart) cropDistChart.resize();
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
        titleDisplay.innerHTML = FARMER_TRANSLATIONS[currentLang][transKey] || target;
      }
      
      if (window.innerWidth <= 992) {
        document.getElementById('sidebar').classList.add('collapsed');
      }
    });
  });
}

// --- Chart.js Soyabean Prices & Crops Dist ---
function initCharts() {
  const priceCtx = document.getElementById('priceTrendChart');
  const distCtx = document.getElementById('cropDistChart');

  if (!priceCtx || !distCtx) return;

  const isDark = currentTheme === 'dark';
  const textColor = isDark ? '#9ca3af' : '#475569';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(15, 23, 42, 0.05)';

  if (priceChart) priceChart.destroy();
  if (cropDistChart) cropDistChart.destroy();

  const months = currentLang === 'en'
    ? ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    : ['फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई'];

  priceChart = new Chart(priceCtx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Soyabean ₹/Quintal',
        data: [4200, 4400, 4350, 4600, 4800, 4780],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: '#10b981'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: textColor } },
        y: { grid: { color: gridColor }, ticks: { color: textColor, stepSize: 200 } }
      }
    }
  });

  const catLabels = currentLang === 'en'
    ? ['Soyabean', 'Wheat', 'Gram', 'Rice']
    : ['सोयाबीन', 'गेहूं', 'चना', 'धान'];

  cropDistChart = new Chart(distCtx, {
    type: 'doughnut',
    data: {
      labels: catLabels,
      datasets: [{
        data: [50, 25, 15, 10],
        backgroundColor: ['#10b981', '#f97316', '#06b6d4', '#6366f1'],
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

// --- Voice Assistant Web Speech API Configs ---
function initVoiceAssistant() {
  const micBtn = document.getElementById('voice-mic-btn');
  const transcriptEl = document.getElementById('voice-transcript');
  const replyEl = document.getElementById('voice-reply');

  if (!micBtn) return;

  // Check speech recognition support
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    micBtn.disabled = true;
    if (transcriptEl) transcriptEl.textContent = FARMER_TRANSLATIONS[currentLang]['voice_unsupported'];
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  // Dynamic language code setting based on toggle
  recognition.lang = currentLang === 'en' ? 'en-US' : 'hi-IN';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  micBtn.addEventListener('click', () => {
    if (micBtn.classList.contains('listening')) {
      recognition.stop();
    } else {
      recognition.lang = currentLang === 'en' ? 'en-US' : 'hi-IN';
      recognition.start();
    }
  });

  recognition.onstart = () => {
    micBtn.classList.add('listening');
    transcriptEl.textContent = FARMER_TRANSLATIONS[currentLang]['voice_listening'];
    replyEl.textContent = '';
  };

  recognition.onend = () => {
    micBtn.classList.remove('listening');
  };

  recognition.onerror = (e) => {
    transcriptEl.textContent = "Error: " + e.error;
    micBtn.classList.remove('listening');
  };

  recognition.onresult = (e) => {
    const resultText = e.results[0][0].transcript;
    transcriptEl.textContent = `"${resultText}"`;
    processVoiceCommand(resultText);
  };
}

function processVoiceCommand(command) {
  const replyEl = document.getElementById('voice-reply');
  let replyText = '';
  let speakText = '';
  const cleanCmd = command.toLowerCase().trim();

  if (cleanCmd.includes('weather') || cleanCmd.includes('climate') || cleanCmd.includes('मौसम') || cleanCmd.includes('जलवायु')) {
    if (currentLang === 'en') {
      replyText = "Indore weather is currently clear and 32°C. Ideal moisture levels for crop sowing.";
      speakText = "Indore weather is currently clear and 32 degrees Celsius. Ideal moisture levels for crop sowing.";
    } else {
      replyText = "इंदौर में मौसम अभी साफ है और तापमान 32°C है। फसल बुवाई के लिए आदर्श नमी स्तर।";
      speakText = "इंदौर में मौसम अभी साफ है और तापमान 32 डिग्री सेल्सियस है। फसल बुवाई के लिए आदर्श नमी स्तर।";
    }
  } else if (cleanCmd.includes('soyabean') || cleanCmd.includes('price') || cleanCmd.includes('rate') || cleanCmd.includes('सोयाबीन') || cleanCmd.includes('भाव') || cleanCmd.includes('दाम')) {
    if (currentLang === 'en') {
      replyText = "Live Mandi Quintal rate for Soyabean is ₹4,800 in Indore, and ₹4,750 in Bhopal Mandi.";
      speakText = "Live Mandi Quintal rate for Soyabean is 4 thousand 800 rupees in Indore, and 4 thousand 750 rupees in Bhopal Mandi.";
    } else {
      replyText = "इंदौर मंडी में सोयाबीन का लाइव मंडी भाव ₹4,800 और भोपाल मंडी में ₹4,750 प्रति क्विंटल है।";
      speakText = "इंदौर मंडी में सोयाबीन का लाइव मंडी भाव 4 हजार 800 रुपये और भोपाल मंडी में 4 हजार 750 रुपये प्रति क्विंटल है।";
    }
  } else if (cleanCmd.includes('insurance') || cleanCmd.includes('claim') || cleanCmd.includes('बीमा') || cleanCmd.includes('दावा')) {
    if (currentLang === 'en') {
      replyText = "Your PM Fasal Bima crop damage claim is Approved. Relief funds release under treasury process.";
      speakText = "Your PM Fasal Bima crop damage claim is Approved. Relief funds release under treasury process.";
    } else {
      replyText = "फसल नुकसान के लिए आपका पीएम फसल बीमा दावा स्वीकृत हो गया है। राशि जल्द ही आपके खाते में भेजी जाएगी।";
      speakText = "फसल नुकसान के लिए आपका पीएम फसल बीमा दावा स्वीकृत हो गया है। राशि जल्द ही आपके खाते में भेजी जाएगी।";
    }
  } else {
    if (currentLang === 'en') {
      replyText = "Command not recognized. Try saying: 'weather', 'soyabean price', or 'insurance claim'.";
      speakText = "Command not recognized. Please try again.";
    } else {
      replyText = "आदेश समझ नहीं आया। बोलकर देखें: 'मौसम', 'सोयाबीन भाव', या 'फसल बीमा'।";
      speakText = "आदेश समझ नहीं आया। कृपया दोबारा प्रयास करें।";
    }
  }

  // Set visual text
  replyEl.innerHTML = `<i class='fas fa-volume-high'></i> ${replyText}`;

  // Speak response out loud using Web Speech Synthesis TTS
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop any current sound
    const utterance = new SpeechSynthesisUtterance(speakText);
    utterance.lang = currentLang === 'en' ? 'en-US' : 'hi-IN';
    
    // Choose appropriate voice speed
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }
}

// --- Floating Assistant chatbot configurations ---
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
    msgBoard.innerHTML = `<div class="chat-bubble bot">${FARMER_TRANSLATIONS[currentLang]['bot_greeting']}</div>`;
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

        if (lowercaseVal.includes('kisan') || lowercaseVal.includes('samman') || lowercaseVal.includes('पीएम किसान')) {
          replyText = currentLang === 'en'
            ? "Your 17th installment of PM Kisan Samman Nidhi of ₹2,000 has been credited successfully via DBT."
            : "आपकी पीएम किसान सम्मान निधि की 2,000 रुपये की 17वीं किस्त आपके खाते में सफलतापूर्वक भेज दी गई है।";
        } else if (lowercaseVal.includes('mandi') || lowercaseVal.includes('soyabean') || lowercaseVal.includes('भाव')) {
          replyText = currentLang === 'en'
            ? "Today's Mandi rate for Soyabean is ₹4,800/quintal in Indore and ₹4,750/quintal in Bhopal."
            : "आज इंदौर मंडी में सोयाबीन का भाव ₹4,800/क्विंटल और भोपाल मंडी में ₹4,750/क्विंटल है।";
        } else if (lowercaseVal.includes('subsidy') || lowercaseVal.includes('solar') || lowercaseVal.includes('सब्सिडी')) {
          replyText = currentLang === 'en'
            ? "Solar Pump Subsidy registration is open. Government is offering up to 90% financial subsidy under PM Kusum Yojana."
            : "सोलर पंप सब्सिडी पंजीकरण खुला है। सरकार पीएम कुसुम योजना के तहत 90% तक वित्तीय सब्सिडी दे रही है।";
        } else if (lowercaseVal.includes('soil') || lowercaseVal.includes('health') || lowercaseVal.includes('मिट्टी')) {
          replyText = currentLang === 'en'
            ? "Your Soil Health report shows Nitrogen is deficient. We recommend adding 25kg Urea per acre for Wheat crops."
            : "आपकी मृदा स्वास्थ्य रिपोर्ट दर्शाती है कि नाइट्रोजन की कमी है। हम गेहूं की फसल के लिए प्रति एकड़ 25 किलो यूरिया डालने की सलाह देते हैं।";
        } else {
          replyText = currentLang === 'en'
            ? "Thank you for asking. You can check market prices or weather details by speaking into the Voice Assistant microphone."
            : "पूछने के लिए धन्यवाद। आप वॉयस असिस्टेंट माइक्रोफ़ोन में बोलकर मंडी भाव या मौसम की स्थिति की जांच कर सकते हैं।";
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

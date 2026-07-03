/* 
 * MP Citizen Portal 2.0 - AI Search & Voice Assistant Interactivity
 * Author: Senior Frontend Architect & AI Integration Specialist
 */

// Search Autocomplete Suggestion Database (Bilingual)
const AUTOCOMPLETE_DB = {
  en: [
    { text: "Apply for Domicile Certificate", category: "Citizen Services", target: "#services-directory" },
    { text: "Birth Certificate Registration", category: "Municipal Services", target: "#services-directory" },
    { text: "Khasra Khatauni Land Records", category: "Land Records", target: "#quick-actions" },
    { text: "CM Helpline 181 Grievance", category: "Helpline", target: "#quick-actions" },
    { text: "Ladli Behna Yojana Scheme Details", category: "Welfare Schemes", target: "#featured" },
    { text: "Solar Pump Subsidy Registration", category: "Farmer Services", target: "#services-directory" },
    { text: "Post-Matric Scholarship Status", category: "Student Services", target: "#services-directory" },
    { text: "MP Tourism Hotel Booking", category: "Tourism Services", target: "#services-directory" },
    { text: "Single Window Business License", category: "Business Services", target: "#services-directory" },
    { text: "Register Trade License", category: "Municipal Services", target: "#services-directory" }
  ],
  hi: [
    { text: "मूल निवासी प्रमाण पत्र के लिए आवेदन", category: "नागरिक सेवाएं", target: "#services-directory" },
    { text: "जन्म प्रमाण पत्र पंजीकरण", category: "नगर पालिका सेवाएं", target: "#services-directory" },
    { text: "खसरा खतौनी भू-अभिलेख", category: "भूमि अभिलेख", target: "#quick-actions" },
    { text: "सीएम हेल्पलाइन 181 शिकायत", category: "हेल्पलाइन", target: "#quick-actions" },
    { text: "लाड़ली बहना योजना विवरण", category: "कल्याणकारी योजनाएं", target: "#featured" },
    { text: "सोलर पंप सब्सिडी पंजीकरण", category: "किसान सेवाएं", target: "#services-directory" },
    { text: "पोस्ट-मैट्रिक छात्रवृत्ति की स्थिति", category: "छात्र सेवाएं", target: "#services-directory" },
    { text: "एमपी पर्यटन होटल बुकिंग", category: "पर्यटन सेवाएं", target: "#services-directory" },
    { text: "एकल खिड़की व्यापार लाइसेंस", category: "व्यापार सेवाएं", target: "#services-directory" },
    { text: "व्यापार लाइसेंस पंजीकरण", category: "नगर पालिका सेवाएं", target: "#services-directory" }
  ]
};

// Chatbot Automated Responses
const CHATBOT_RESPONSES = {
  en: {
    greeting: "Namaste! I am MP-AI, your digital assistant. How can I help you navigate Madhya Pradesh services today?",
    default: "Thank you for asking. You can access that service directly through our services index or by typing in the search bar. Let me know if you need step-by-step assistance!",
    keywords: [
      { keys: ["ration", "food", "ration card"], response: "To apply for a Ration Card, visit the Food Civil Supplies portal. You will need: Aadhaar Card, Income certificate, and family member details. Would you like me to open the application link?" },
      { keys: ["land", "khasra", "khatauni", "bhurabh"], response: "You can download certified copies of Khasra & Khatauni via the Bhurabh link under Quick Actions. Simply search with your district, tehsil, and village name." },
      { keys: ["scholarship", "student", "laptop"], response: "e-Scholarships for post-matric students are open for application. Please verify your Aadhaar linked bank account for direct benefit transfer (DBT)." },
      { keys: ["helpline", "grievance", "complaint", "cm"], response: "For complaints, dial CM Helpline at 181 or file it online under our Quick Actions card. Most queries are resolved within 7 working days." },
      { keys: ["ladli", "behna", "women"], response: "Under the Ladli Behna Yojana, eligible women receive direct financial transfers. Verify your details using your Samagra Family ID." }
    ]
  },
  hi: {
    greeting: "नमस्ते! मैं एमपी-एआई हूँ, आपका डिजिटल सहायक। आज मैं मध्य प्रदेश सरकार की सेवाओं के उपयोग में आपकी क्या मदद कर सकता हूँ?",
    default: "पूछने के लिए धन्यवाद। आप हमारे सेवा सूचकांक के माध्यम से या खोज बार में टाइप करके सीधे उस सेवा तक पहुँच सकते हैं। यदि आपको चरण-दर-चरण सहायता की आवश्यकता है तो मुझे बताएं!",
    keywords: [
      { keys: ["राशन", "राशन कार्ड", "खाद्य"], response: "नया राशन कार्ड बनाने के लिए खाद्य विभाग के पोर्टल पर जाएं। आवश्यक दस्तावेज: आधार कार्ड, आय प्रमाण पत्र और परिवार के सदस्यों का विवरण। क्या आप लिंक चाहते हैं?" },
      { keys: ["भूमि", "खसरा", "खतौनी", "नक्शा", "भूलेख"], response: "आप त्वरित कार्रवाई अनुभाग के तहत भूलेख लिंक से खसरा-खतौनी प्रति डाउनलोड कर सकते हैं। बस अपने जिला, तहसील और ग्राम का चयन करें।" },
      { keys: ["छात्रवृत्ति", "स्कॉलरशिप", "लैपटॉप", "पढ़ाई"], response: "पोस्ट-मैट्रिक छात्रों के लिए छात्रवृत्ति आवेदन खुले हैं। कृपया सीधे लाभ हस्तांतरण (DBT) के लिए अपने बैंक खाते से जुड़े आधार की जांच कर लें।" },
      { keys: ["शिकायत", "हेल्पलाइन", "सीएम", "181"], response: "शिकायत दर्ज करने के लिए 181 सीएम हेल्पलाइन पर कॉल करें या त्वरित कार्रवाई कार्ड के तहत ऑनलाइन शिकायत दर्ज करें। समाधान आमतौर पर 7 कार्य दिवसों में होता है।" },
      { keys: ["लाड़ली", "बहना", "महिला"], response: "लाड़ली बहना योजना के अंतर्गत पात्र महिलाओं को प्रत्यक्ष वित्तीय सहायता प्रदान की जाती है। अपनी पात्रता जानने के लिए समग्र आईडी का उपयोग करें।" }
    ]
  }
};

let currentLanguage = localStorage.getItem('mp_lang') || 'en';

// Listen for global language changes
window.addEventListener('langChanged', (e) => {
  currentLanguage = e.detail.lang;
  resetChatbot();
});

document.addEventListener("DOMContentLoaded", () => {
  initSearchAutocomplete();
  initVoiceSearch();
  initChatbot();
});

// --- Search Autocomplete Logic ---
function initSearchAutocomplete() {
  const searchInput = document.getElementById('hero-search-input');
  const navSearchInput = document.getElementById('nav-search-input');
  const dropdown = document.getElementById('search-dropdown');

  const handleSearchInput = (inputEl) => {
    const val = inputEl.value.trim().toLowerCase();
    
    if (val.length < 2) {
      dropdown.classList.remove('active');
      return;
    }

    const list = AUTOCOMPLETE_DB[currentLanguage] || AUTOCOMPLETE_DB.en;
    const matches = list.filter(item => 
      item.text.toLowerCase().includes(val) || 
      item.category.toLowerCase().includes(val)
    );

    if (matches.length > 0) {
      renderSuggestions(matches, inputEl);
    } else {
      dropdown.classList.remove('active');
    }
  };

  if (searchInput) {
    searchInput.addEventListener('input', () => handleSearchInput(searchInput));
    searchInput.addEventListener('focus', () => handleSearchInput(searchInput));
  }

  if (navSearchInput) {
    navSearchInput.addEventListener('input', () => handleSearchInput(navSearchInput));
    navSearchInput.addEventListener('focus', () => handleSearchInput(navSearchInput));
  }

  // Close dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.hero-search-container') && !e.target.closest('.nav-search')) {
      dropdown.classList.remove('active');
    }
  });
}

function renderSuggestions(matches, inputEl) {
  const dropdown = document.getElementById('search-dropdown');
  dropdown.innerHTML = '';

  const groupTitle = document.createElement('div');
  groupTitle.className = 'suggestion-group-title';
  groupTitle.textContent = currentLanguage === 'en' ? 'AI Recommended Services' : 'एआई अनुशंसित सेवाएं';
  dropdown.appendChild(groupTitle);

  matches.slice(0, 5).forEach(match => {
    const item = document.createElement('div');
    item.className = 'suggestion-item';
    
    item.innerHTML = `
      <span class="suggestion-text">${match.text}</span>
      <span class="suggestion-category">${match.category}</span>
    `;

    item.addEventListener('click', () => {
      inputEl.value = match.text;
      dropdown.classList.remove('active');
      
      // Smooth scroll to the target section
      const targetSec = document.querySelector(match.target);
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: 'smooth' });
        // Optional glow effect on section
        targetSec.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.4)';
        setTimeout(() => {
          targetSec.style.boxShadow = 'none';
        }, 2000);
      }
    });

    dropdown.appendChild(item);
  });

  // Position the dropdown below the active input field
  const rect = inputEl.getBoundingClientRect();
  dropdown.style.top = `${inputEl.offsetHeight + 10}px`;
  dropdown.classList.add('active');
}

// --- Voice Search Interactivity ---
function initVoiceSearch() {
  const micBtn = document.getElementById('voice-search-btn');
  const modal = document.getElementById('voice-modal');
  const closeBtn = document.getElementById('voice-close-btn');
  const transcriptEl = document.getElementById('voice-transcript');
  const statusEl = document.getElementById('voice-status');

  const voicePrompts = {
    en: [
      { text: "Listening...", time: 0 },
      { text: "... 'apply for ration card'", time: 1500 },
      { text: "Understood: 'Apply for Ration Card'", time: 3000 }
    ],
    hi: [
      { text: "सुन रहा हूँ...", time: 0 },
      { text: "... 'राशन कार्ड के लिए आवेदन करें'", time: 1500 },
      { text: "सफल: 'राशन कार्ड के लिए आवेदन करें'", time: 3000 }
    ]
  };

  if (micBtn && modal) {
    micBtn.addEventListener('click', () => {
      modal.classList.add('active');
      statusEl.textContent = currentLanguage === 'en' ? 'Speak now. MP-AI is processing your voice...' : 'अब बोलें। एमपी-एआई आपकी आवाज़ सुन रहा है...';
      transcriptEl.textContent = '';
      
      const sequence = voicePrompts[currentLanguage] || voicePrompts.en;

      // Simulate transcription delays
      sequence.forEach(step => {
        setTimeout(() => {
          if (modal.classList.contains('active')) {
            transcriptEl.textContent = step.text;
            
            // On final step, perform action
            if (step.text.includes('Understood') || step.text.includes('सफल')) {
              setTimeout(() => {
                modal.classList.remove('active');
                
                // Fill search bar and filter services
                const searchField = document.getElementById('hero-search-input');
                if (searchField) {
                  searchField.value = currentLanguage === 'en' ? 'Apply for Ration Card' : 'नए राशन कार्ड के लिए आवेदन करें';
                  
                  // Auto scroll to services directory and show Citizens tab
                  const servicesDir = document.getElementById('services-directory');
                  if (servicesDir) {
                    servicesDir.scrollIntoView({ behavior: 'smooth' });
                    // Trigger click on citizens tab
                    const citizensTab = document.querySelector('.tab-btn[data-filter="citizens"]');
                    if (citizensTab) {
                      citizensTab.click();
                    }
                  }
                }
              }, 1200);
            }
          }
        }, step.time);
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }
}

// --- Chatbot Assistant ("MP-AI") Interactivity ---
function initChatbot() {
  const triggerBtn = document.getElementById('assistant-trigger');
  const chatWindow = document.getElementById('chatbot-window');
  const closeBtn = document.getElementById('chat-close');
  const chatForm = document.getElementById('chat-input-form');
  const chatInput = document.getElementById('chat-message-input');

  if (triggerBtn && chatWindow) {
    triggerBtn.addEventListener('click', () => {
      chatWindow.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
      chatWindow.classList.remove('active');
    });

    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = chatInput.value.trim();
      if (!msg) return;

      appendMessage(msg, 'user');
      chatInput.value = '';

      // Simulate AI Bot thinking and reply
      showTypingIndicator();
      
      setTimeout(() => {
        removeTypingIndicator();
        const reply = getAIResponse(msg);
        appendMessage(reply, 'bot');
      }, 1500);
    });

    // Load initial greeting
    resetChatbot();
  }
}

function resetChatbot() {
  const messagesContainer = document.getElementById('chat-messages');
  if (messagesContainer) {
    messagesContainer.innerHTML = '';
    const greeting = CHATBOT_RESPONSES[currentLanguage]?.greeting || CHATBOT_RESPONSES.en.greeting;
    appendMessage(greeting, 'bot');
  }
}

function appendMessage(text, sender) {
  const messagesContainer = document.getElementById('chat-messages');
  if (!messagesContainer) return;

  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  bubble.textContent = text;
  messagesContainer.appendChild(bubble);

  // Scroll to bottom
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
  const messagesContainer = document.getElementById('chat-messages');
  if (!messagesContainer) return;

  const indicator = document.createElement('div');
  indicator.className = 'chat-bubble bot typing-indicator-wrapper';
  indicator.innerHTML = `
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  messagesContainer.appendChild(indicator);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.querySelector('.typing-indicator-wrapper');
  if (indicator) {
    indicator.remove();
  }
}

function getAIResponse(userMsg) {
  const query = userMsg.toLowerCase();
  const db = CHATBOT_RESPONSES[currentLanguage] || CHATBOT_RESPONSES.en;

  // Search keywords matches
  for (let rule of db.keywords) {
    for (let key of rule.keys) {
      if (query.includes(key)) {
        return rule.response;
      }
    }
  }

  return db.default;
}

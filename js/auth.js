/* 
 * MP Citizen Portal 2.0 - Authentication Script
 * Author: Senior Frontend Architect
 */

// Shared Translation Database (Bilingual English and Hindi)
const AUTH_TRANSLATIONS = {
  en: {
    auth_portal_title: "MP Citizen Portal 2.0",
    btn_back_home: "<i class='fas fa-arrow-left'></i> Back to Home",
    login_title: "Welcome Back",
    login_subtitle: "Secure gateway to Madhya Pradesh Digital Services",
    tab_email: "Email Login",
    tab_mobile: "Mobile Login",
    label_email: "Email Address",
    label_password: "Password",
    label_confirm_password: "Confirm Password",
    label_fullname: "Full Name",
    label_mobile: "Mobile Number",
    chk_remember: "Remember Me",
    link_forgot: "Forgot Password?",
    btn_login: "Login Securely",
    btn_register: "Create Account",
    btn_send_otp: "Send Verification OTP",
    banner_otp_warning: "<i class='fas fa-shield-halved'></i> <span class='auth-safety-text'><strong>CM Helpline 181 Security Alert:</strong> Never share your verification OTP with anyone, including government representatives.</span>",
    no_account: "Don't have an account?",
    link_register: "Register Here",
    have_account: "Already have an account?",
    link_login: "Login Here",
    register_title: "Create Portal Account",
    register_subtitle: "Join millions of citizens accessing digital state services",
    chk_terms: "I accept the Portal Terms & Conditions",
    forgot_title: "Recover Password",
    forgot_subtitle: "Enter email or mobile to receive recovery options",
    btn_reset: "Send Reset Instructions",
    otp_title: "OTP Verification",
    otp_subtitle: "Enter the 6-digit code sent to your registered device",
    otp_sent_to: "Verification code sent to: <strong id='otp-target'>your registered device</strong>",
    otp_timer_lbl: "Resend OTP in: <span class='otp-timer-count' id='timer-val'>60</span>s",
    link_resend: "Resend OTP",
    btn_verify: "Verify & Access Portal",
    loading_validate: "Verifying credentials...",
    loading_otp: "Sending verification code...",
    loading_register: "Creating secure profile...",
    loading_verify_otp: "Verifying OTP code...",
    success_login: "Login Successful",
    success_register: "Registration Successful",
    success_otp: "Verification Successful",
    success_redirect: "Redirecting to portal...",
    success_code_sent: "Code Sent Successfully",
    validation_email: "Please enter a valid email address",
    validation_password_empty: "Password is required",
    validation_password_weak: "Password must be stronger",
    validation_password_match: "Passwords do not match",
    validation_mobile: "Enter a valid 10-digit mobile number starting with 6-9",
    validation_name: "Full Name must be at least 3 characters",
    validation_terms: "You must accept the terms & conditions"
  },
  hi: {
    auth_portal_title: "एमपी नागरिक पोर्टल 2.0",
    btn_back_home: "<i class='fas fa-arrow-left'></i> मुख्य पृष्ठ पर जाएं",
    login_title: "आपका स्वागत है",
    login_subtitle: "मध्य प्रदेश डिजिटल सेवाओं का सुरक्षित प्रवेश द्वार",
    tab_email: "ईमेल लॉगिन",
    tab_mobile: "मोबाइल लॉगिन",
    label_email: "ईमेल पता",
    label_password: "पासवर्ड",
    label_confirm_password: "पासवर्ड की पुष्टि करें",
    label_fullname: "पूरा नाम",
    label_mobile: "मोबाइल नंबर",
    chk_remember: "मुझे याद रखें",
    link_forgot: "पासवर्ड भूल गए?",
    btn_login: "सुरक्षित लॉगिन करें",
    btn_register: "खाता बनाएं",
    btn_send_otp: "सत्यापन ओटीपी भेजें",
    banner_otp_warning: "<i class='fas fa-shield-halved'></i> <span class='auth-safety-text'><strong>सीएम हेल्पलाइन 181 सुरक्षा चेतावनी:</strong> किसी भी व्यक्ति, यहाँ तक कि सरकारी प्रतिनिधियों के साथ भी अपना सत्यापन ओटीपी साझा न करें।</span>",
    no_account: "खाता नहीं है?",
    link_register: "यहाँ पंजीकरण करें",
    have_account: "पहले से खाता है?",
    link_login: "यहाँ लॉगिन करें",
    register_title: "पोर्टल खाता बनाएं",
    register_subtitle: "डिजिटल राज्य सेवाओं का लाभ उठाने वाले लाखों नागरिकों में शामिल हों",
    chk_terms: "मैं पोर्टल के नियमों और शर्तों को स्वीकार करता हूँ",
    forgot_title: "पासवर्ड पुनः प्राप्त करें",
    forgot_subtitle: "पुनर्प्राप्ति विकल्प प्राप्त करने के लिए ईमेल या मोबाइल दर्ज करें",
    btn_reset: "रीसेट निर्देश भेजें",
    otp_title: "ओटीपी सत्यापन",
    otp_subtitle: "अपने पंजीकृत उपकरण पर भेजा गया 6-अंकीय कोड दर्ज करें",
    otp_sent_to: "सत्यापन कोड भेजा गया: <strong id='otp-target'>आपके पंजीकृत उपकरण पर</strong>",
    otp_timer_lbl: "ओटीपी पुनः भेजें: <span class='otp-timer-count' id='timer-val'>60</span> सेकंड में",
    link_resend: "ओटीपी पुनः भेजें",
    btn_verify: "सत्यापित करें और प्रवेश करें",
    loading_validate: "साख सत्यापित की जा रही है...",
    loading_otp: "सत्यापन कोड भेजा जा रहा है...",
    loading_register: "सुरक्षित प्रोफ़ाइल बनाई जा रही है...",
    loading_verify_otp: "ओटीपी कोड सत्यापित किया जा रहा है...",
    success_login: "लॉगिन सफल रहा",
    success_register: "पंजीकरण सफल रहा",
    success_otp: "सत्यापन सफल रहा",
    success_redirect: "पोर्टल पर भेजा जा रहा है...",
    success_code_sent: "कोड सफलतापूर्वक भेजा गया",
    validation_email: "कृपया एक वैध ईमेल पता दर्ज करें",
    validation_password_empty: "पासवर्ड आवश्यक है",
    validation_password_weak: "पासवर्ड और मजबूत होना चाहिए",
    validation_password_match: "पासवर्ड मेल नहीं खाते",
    validation_mobile: "6-9 से शुरू होने वाला 10-अंकीय वैध मोबाइल नंबर दर्ज करें",
    validation_name: "पूरा नाम कम से कम 3 वर्णों का होना चाहिए",
    validation_terms: "आपको नियमों और शर्तों को स्वीकार करना होगा"
  }
};

// Global State Variables (Read theme and lang from portal standard)
let currentLang = localStorage.getItem('mp_lang') || 'en';
let currentTheme = localStorage.getItem('mp_theme') || 'dark';

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initBackgroundSlider();
  createParticles();
  initLoginTabs();
  initPasswordStrength();
  initPasswordToggle();
  initOTPInputs();
  initOTPTimer();
  displayOTPTarget();
  initValidationListeners();
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

// --- Language Management ---
function initLanguage() {
  setLanguage(currentLang);

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'hi' : 'en';
      setLanguage(nextLang);
      
      // If password strength validation is active, re-calculate it to update language of strength label
      const passwordInput = document.getElementById('reg-password');
      if (passwordInput && passwordInput.value) {
        passwordInput.dispatchEvent(new Event('input'));
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

  // Scan and translate components
  const translatables = document.querySelectorAll('[data-translate]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (AUTH_TRANSLATIONS[lang] && AUTH_TRANSLATIONS[lang][key]) {
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', AUTH_TRANSLATIONS[lang][key]);
      } else {
        el.innerHTML = AUTH_TRANSLATIONS[lang][key];
      }
    }
  });

  // Re-run URL target translation on OTP page if present
  displayOTPTarget();
}

// --- Background Slideshow ---
function initBackgroundSlider() {
  const slides = document.querySelectorAll('.auth-bg-slider .auth-bg-slide');
  if (slides.length === 0) return;

  let currentSlide = 0;
  slides[0].classList.add('active');

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 7500); // Shift every 7.5 seconds
}

// --- Particle Background generator ---
function createParticles() {
  const container = document.querySelector('.auth-particles');
  if (!container) return;

  const count = 20;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'auth-particle';

    const size = Math.random() * 5 + 3; // 3px to 8px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.animationDuration = `${Math.random() * 7 + 10}s`; // 10s to 17s

    container.appendChild(particle);
  }
}

// --- Login Tab Switcher ---
function initLoginTabs() {
  const tabs = document.querySelectorAll('.auth-tab');
  const emailForm = document.getElementById('login-email-form');
  const mobileForm = document.getElementById('login-mobile-form');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const mode = tab.getAttribute('data-tab');
      if (mode === 'email') {
        emailForm.style.display = 'block';
        mobileForm.style.display = 'none';
      } else {
        emailForm.style.display = 'none';
        mobileForm.style.display = 'block';
      }
    });
  });
}

// --- Password Visibility Toggle ---
function initPasswordToggle() {
  const toggles = document.querySelectorAll('.auth-password-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const input = toggle.parentNode.querySelector('.auth-input-control');
      const icon = toggle.querySelector('i');
      if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
      } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
      }
    });
  });
}

// --- Password Strength Meter (Register Page) ---
function initPasswordStrength() {
  const passwordInput = document.getElementById('reg-password');
  const progress = document.querySelector('.strength-meter-progress');
  const textLabel = document.querySelector('.strength-meter-text span:last-child');

  if (!passwordInput || !progress) return;

  passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let score = 0;

    if (!val) {
      progress.style.width = '0%';
      progress.className = 'strength-meter-progress';
      textLabel.textContent = '';
      return;
    }

    // Complexity Rules
    if (val.length >= 6) score++;
    if (val.length >= 10) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    progress.className = 'strength-meter-progress';
    let labelText = '';
    let colorClass = '';
    let widthPercent = '';

    switch (score) {
      case 1:
      case 2:
        labelText = currentLang === 'en' ? 'Weak' : 'कमजोर';
        colorClass = 'strength-weak';
        widthPercent = '25%';
        break;
      case 3:
        labelText = currentLang === 'en' ? 'Medium' : 'मध्यम';
        colorClass = 'strength-medium';
        widthPercent = '50%';
        break;
      case 4:
        labelText = currentLang === 'en' ? 'Good' : 'अच्छा';
        colorClass = 'strength-good';
        widthPercent = '75%';
        break;
      case 5:
        labelText = currentLang === 'en' ? 'Strong' : 'मजबूत';
        colorClass = 'strength-strong';
        widthPercent = '100%';
        break;
      default:
        labelText = currentLang === 'en' ? 'Very Weak' : 'बहुत कमजोर';
        colorClass = 'strength-weak';
        widthPercent = '15%';
    }

    progress.style.width = widthPercent;
    progress.classList.add(colorClass);
    textLabel.textContent = labelText;
  });
}

// --- OTP Multi-box Form Controls ---
function initOTPInputs() {
  const boxes = document.querySelectorAll('.otp-digit-box');
  if (boxes.length === 0) return;

  boxes.forEach((box, index) => {
    // Only accept numeric inputs
    box.addEventListener('input', (e) => {
      const val = box.value;
      
      // Enforce single digit
      if (val.length > 1) {
        box.value = val.substring(val.length - 1);
      }

      // Move to next field
      if (box.value && index < boxes.length - 1) {
        boxes[index + 1].focus();
      }
    });

    box.addEventListener('keydown', (e) => {
      // Key handlers: Backspace backtracks focus
      if (e.key === 'Backspace' && !box.value && index > 0) {
        boxes[index - 1].focus();
      }
    });

    // Paste handler for 6-digit codes
    box.addEventListener('paste', (e) => {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData('text').trim();
      if (text && text.length === 6 && /^\d+$/.test(text)) {
        for (let i = 0; i < boxes.length; i++) {
          boxes[i].value = text[i];
        }
        boxes[boxes.length - 1].focus();
      }
    });
  });
}

// --- OTP Verification Timer countdown ---
function initOTPTimer() {
  const timerVal = document.getElementById('timer-val');
  const resendBtn = document.getElementById('resend-otp-btn');
  const timerWrapper = document.getElementById('timer-wrapper');
  if (!timerVal || !resendBtn || !timerWrapper) return;

  let countdown = 60;
  resendBtn.style.display = 'none';
  timerWrapper.style.display = 'block';

  const countdownInterval = setInterval(() => {
    countdown--;
    timerVal.textContent = countdown;

    if (countdown <= 0) {
      clearInterval(countdownInterval);
      timerWrapper.style.display = 'none';
      resendBtn.style.display = 'inline-block';
    }
  }, 1000);

  // Bind resend click handler
  if (!resendBtn.dataset.bound) {
    resendBtn.dataset.bound = "true";
    resendBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert(currentLang === 'en' ? 'Verification OTP has been resent to your device.' : 'सत्यापन ओटीपी आपके डिवाइस पर पुनः भेज दिया गया है।');
      
      // Clear OTP boxes
      document.querySelectorAll('.otp-digit-box').forEach(box => box.value = '');
      
      // Restart countdown
      initOTPTimer();
    });
  }
}

// --- Display OTP Target Obfuscation ---
function displayOTPTarget() {
  const targetLabel = document.getElementById('otp-target');
  if (!targetLabel) return;

  const urlParams = new URLSearchParams(window.location.search);
  let target = urlParams.get('to') || '';

  if (!target) {
    targetLabel.textContent = currentLang === 'en' ? 'your device' : 'आपके डिवाइस पर';
    return;
  }

  if (target.includes('@')) {
    // Obfuscate Email
    const parts = target.split('@');
    const name = parts[0];
    const obfName = name[0] + '***' + name[name.length - 1];
    target = obfName + '@' + parts[1];
  } else {
    // Obfuscate Phone
    // Strip prefix if any
    let cleaned = target.replace(/\D/g, '');
    if (cleaned.length > 10) {
      cleaned = cleaned.substring(cleaned.length - 10);
    }
    target = '+91 ******' + cleaned.substring(6);
  }

  targetLabel.textContent = target;
}

// --- Live Validation Form Event Bindings ---
function initValidationListeners() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    // Prevent default standard action and invoke animated simulation
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSubmission(form);
    });

    // Add blur listeners for real-time validation checks
    const inputs = form.querySelectorAll('.auth-input-control');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        validateField(input);
      });
      input.addEventListener('input', () => {
        // Clear invalid classes when typing
        const group = input.parentNode;
        if (group.classList.contains('invalid')) {
          group.classList.remove('invalid');
        }
      });
    });
  });
}

// --- Field Level Validation Rules ---
function validateField(input) {
  const group = input.parentNode;
  const val = input.value.trim();
  const type = input.getAttribute('id');
  const msgEl = group.querySelector('.auth-validation-msg');
  
  let isValid = true;
  let errorMsgKey = '';

  if (input.hasAttribute('required') && !val) {
    isValid = false;
    errorMsgKey = 'validation_password_empty'; // Generic fallback
  } else if (val) {
    if (type === 'login-email' || type === 'reg-email' || type === 'forgot-target') {
      // If checking forgot password target, it could be email or mobile
      if (type === 'forgot-target') {
        const isEmail = val.includes('@');
        const isMobile = /^[6-9]\d{9}$/.test(val);
        if (!isEmail && !isMobile) {
          isValid = false;
          errorMsgKey = 'validation_email'; // Simple fallback
        }
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) {
          isValid = false;
          errorMsgKey = 'validation_email';
        }
      }
    } else if (type === 'login-mobile' || type === 'reg-mobile') {
      const mobileRegex = /^[6-9]\d{9}$/;
      if (!mobileRegex.test(val)) {
        isValid = false;
        errorMsgKey = 'validation_mobile';
      }
    } else if (type === 'reg-name') {
      if (val.length < 3) {
        isValid = false;
        errorMsgKey = 'validation_name';
      }
    } else if (type === 'reg-password') {
      if (val.length < 6) {
        isValid = false;
        errorMsgKey = 'validation_password_weak';
      }
    } else if (type === 'reg-password-confirm') {
      const pword = document.getElementById('reg-password').value;
      if (val !== pword) {
        isValid = false;
        errorMsgKey = 'validation_password_match';
      }
    }
  }

  // Update UI State classes
  if (!isValid && errorMsgKey) {
    group.classList.add('invalid');
    group.classList.remove('valid');
    if (msgEl) {
      msgEl.textContent = AUTH_TRANSLATIONS[currentLang][errorMsgKey];
    }
  } else {
    group.classList.remove('invalid');
    if (val) {
      group.classList.add('valid');
    } else {
      group.classList.remove('valid');
    }
    if (msgEl) {
      msgEl.textContent = '';
    }
  }

  return isValid;
}

// --- Submit Simulation Orchestration ---
function handleFormSubmission(form) {
  // Validate all fields inside the form first
  let isFormValid = true;
  const inputs = form.querySelectorAll('.auth-input-control');
  inputs.forEach(input => {
    const isFieldValid = validateField(input);
    if (!isFieldValid) {
      isFormValid = false;
    }
  });

  // Additional Checkbox Validations (Terms)
  const termsCheckbox = form.querySelector('#reg-terms');
  if (termsCheckbox && !termsCheckbox.checked) {
    isFormValid = false;
    alert(AUTH_TRANSLATIONS[currentLang]['validation_terms']);
    return;
  }

  if (!isFormValid) {
    // Focus first invalid element
    const firstInvalid = form.querySelector('.auth-form-group.invalid .auth-input-control');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  // Determine submission action and message keys
  const formId = form.getAttribute('id');
  let loadingTextKey = 'loading_validate';
  let successTextKey = 'success_login';
  let redirectUrl = 'dashboard.html';

  if (formId === 'login-email-form') {
    loadingTextKey = 'loading_validate';
    successTextKey = 'success_login';
    redirectUrl = 'dashboard.html';
  } else if (formId === 'login-mobile-form') {
    const phoneVal = document.getElementById('login-mobile').value;
    loadingTextKey = 'loading_otp';
    successTextKey = 'success_code_sent';
    redirectUrl = `otp-verification.html?to=${encodeURIComponent(phoneVal)}&flow=login`;
  } else if (formId === 'register-form') {
    const phoneVal = document.getElementById('reg-mobile').value;
    loadingTextKey = 'loading_register';
    successTextKey = 'success_register';
    redirectUrl = `otp-verification.html?to=${encodeURIComponent(phoneVal)}&flow=register`;
  } else if (formId === 'forgot-form') {
    const targetVal = document.getElementById('forgot-target').value;
    loadingTextKey = 'loading_otp';
    successTextKey = 'success_code_sent';
    redirectUrl = `otp-verification.html?to=${encodeURIComponent(targetVal)}&flow=forgot`;
  } else if (formId === 'otp-form') {
    // Validate OTP inputs (6 numbers must be entered)
    const boxes = document.querySelectorAll('.otp-digit-box');
    let otpCode = '';
    boxes.forEach(box => otpCode += box.value.trim());
    if (otpCode.length !== 6) {
      alert(currentLang === 'en' ? 'Please enter a 6-digit OTP code.' : 'कृपया 6-अंकीय ओटीपी कोड दर्ज करें।');
      return;
    }

    loadingTextKey = 'loading_verify_otp';
    successTextKey = 'success_otp';
    
    // Check if registering vs loggin in
    const urlParams = new URLSearchParams(window.location.search);
    const flow = urlParams.get('flow');
    if (flow === 'forgot') {
      redirectUrl = 'login.html'; // Redirect to login to sign in with new password
    } else {
      redirectUrl = 'dashboard.html'; // Direct to citizen dashboard
    }
  }

  // Active overlay loader
  const overlay = document.getElementById('auth-overlay');
  const spinner = document.getElementById('auth-spinner');
  const overlayText = document.getElementById('auth-loader-text');
  const successBox = document.getElementById('auth-success-box');
  const successTitle = document.getElementById('auth-success-title');
  const successDesc = document.getElementById('auth-success-desc');

  if (!overlay || !overlayText) return;

  // Set loading state
  overlayText.textContent = AUTH_TRANSLATIONS[currentLang][loadingTextKey];
  spinner.style.display = 'block';
  successBox.style.display = 'none';
  overlay.classList.add('active');

  // Step 1: Simulate loading wait (1.5 seconds)
  setTimeout(() => {
    // Step 2: Show success animations (1.5 seconds)
    spinner.style.display = 'none';
    overlayText.textContent = '';
    
    successTitle.textContent = AUTH_TRANSLATIONS[currentLang][successTextKey];
    successDesc.textContent = AUTH_TRANSLATIONS[currentLang]['success_redirect'];
    successBox.style.display = 'flex';

    setTimeout(() => {
      // Step 3: Redirect to destination
      window.location.href = redirectUrl;
    }, 1600);

  }, 1400);
}

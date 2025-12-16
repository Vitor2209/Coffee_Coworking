/* =============================================
   MONTIS COFFEE HOUSE - Main JavaScript
   Visual-First Website with Vanilla JS
   ============================================= */

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  en: {
    // Navigation
    navHome: 'Home',
    navMenu: 'Menu',
    navCoworking: 'Coworking',
    navLocation: 'Location',
    navAbout: 'About',
    navContact: 'Contact',
    headerCta: 'Join Waitlist',
    
    // Hero
    heroTagline: 'Opening Soon in London',
    heroSlogan: 'Highland coffee, low noise.',
    heroDescription: 'From the Brazilian highlands to a calm workspace in London. A sanctuary for focused minds and coffee connoisseurs.',
    heroBtnPrimary: 'Join the Opening List',
    heroBtnSecondary: 'Discover More',
    heroScroll: 'Scroll',
    
    // Experience Section
    expTagline: 'The Experience',
    expTitle: 'Crafted for the Discerning',
    expDesc: 'Every detail considered. Every moment intentional.',
    expCard1Title: 'Single Origin',
    expCard1Desc: 'Highland beans from Minas Gerais',
    expCard2Title: 'Quiet Zones',
    expCard2Desc: 'Designed for deep focus',
    expCard3Title: 'Craft Methods',
    expCard3Desc: 'Pour-over, siphon, cold brew',
    expCard4Title: 'Premium Space',
    expCard4Desc: 'Luxury meets productivity',
    
    // Signature Section
    sigTagline: 'Signature Selection',
    sigTitle: 'Our Coffee',
    sigDesc: 'Carefully curated beans roasted to perfection.',
    viewMenu: 'View Full Menu',
    
    // Coworking Section
    coworkTagline: 'Work in Comfort',
    coworkTitle: 'Coworking Reimagined',
    coworkDesc: 'A quiet haven where exceptional coffee meets focused productivity. Two distinct zones designed for how you work best.',
    coworkBtn: 'Explore Coworking',
    focusZone: 'Focus Zone',
    focusDesc: 'Silent workspace for deep concentration',
    meetZone: 'Meet Zone',
    meetDesc: 'Flexible area for calls and collaboration',
    
    // Location Section
    locTagline: 'Find Us',
    locTitle: 'Coming to London',
    locDesc: 'Opening soon in one of London\'s most vibrant neighbourhoods.',
    locBtn: 'Get Directions',
    
    // Newsletter
    newsTitle: 'Be the First to Know',
    newsDesc: 'Join our exclusive waitlist for early access, special offers, and opening updates.',
    newsPlaceholder: 'Your email address',
    newsBtn: 'Subscribe',
    newsSuccess: 'Thank you! You\'re on the list.',
    
    // Footer
    footerSlogan: 'Highland coffee, low noise.',
    footerLinks: 'Quick Links',
    footerHours: 'Opening Hours',
    footerSocial: 'Follow Us',
    footerCopyright: '\u00a9 2025 Montis Coffee House. All rights reserved.',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
    hoursTBA: 'Opening hours to be announced',
    
    // Menu Page
    menuHeroTitle: 'Our Menu',
    menuHeroDesc: 'From the highlands of Brazil to your cup.',
    menuCat1: 'Espresso Bar',
    menuCat2: 'Filter Coffee',
    menuCat3: 'Cold Drinks',
    menuCat4: 'Tea & Infusions',
    
    // Coworking Page
    coworkHeroTitle: 'Coworking',
    coworkHeroDesc: 'Where productivity meets tranquility.',
    howTitle: 'How It Works',
    step1: 'Visit',
    step1Desc: 'Walk in during opening hours',
    step2: 'Choose',
    step2Desc: 'Pick Focus or Meet Zone',
    step3: 'Work',
    step3Desc: 'Enjoy coffee and productivity',
    amenities: 'Amenities',
    amenity1: 'High-Speed WiFi',
    amenity2: 'Power Outlets',
    amenity3: 'Standing Desks',
    amenity4: 'Phone Booths',
    
    // Location Page
    locationHeroTitle: 'Location',
    locationHeroDesc: 'Find your way to Montis.',
    transportTitle: 'Getting Here',
    accessTitle: 'Accessibility',
    accessDesc: 'Step-free access, accessible facilities, and assistance available.',
    
    // About Page
    aboutHeroTitle: 'About Montis',
    aboutHeroDesc: 'Our story, vision, and values.',
    storyTitle: 'Our Story',
    storyP1: 'Montis Coffee House was born from a simple idea: to bring the tranquility of Brazilian mountain coffee farms to the urban rhythm of London.',
    storyP2: 'The name \"Montis\" comes from Latin for mountain, reflecting our connection to the highland coffee regions of Minas Gerais, Brazil.',
    valuesTitle: 'Our Values',
    value1: 'Quality',
    value1Desc: 'Excellence in every cup',
    value2: 'Calm',
    value2Desc: 'Peaceful environments',
    value3: 'Craft',
    value3Desc: 'Artisanal dedication',
    value4: 'Community',
    value4Desc: 'Meaningful connections',
    
    // Contact Page
    contactHeroTitle: 'Contact Us',
    contactHeroDesc: 'We\'d love to hear from you.',
    formName: 'Name',
    formEmail: 'Email',
    formSubject: 'Subject',
    formMessage: 'Message',
    formSubmit: 'Send Message',
    formSuccess: 'Thank you for your message!',
    businessTitle: 'Business Enquiries',
    businessDesc: 'For partnerships and press:',
    
    // Privacy & Terms
    privacyTitle: 'Privacy Policy',
    termsTitle: 'Terms of Service',
    lastUpdated: 'Last updated: July 2025'
  },
  pt: {
    // Navigation
    navHome: 'In\u00edcio',
    navMenu: 'Card\u00e1pio',
    navCoworking: 'Coworking',
    navLocation: 'Localiza\u00e7\u00e3o',
    navAbout: 'Sobre',
    navContact: 'Contato',
    headerCta: 'Lista de Espera',
    
    // Hero
    heroTagline: 'Em Breve em Londres',
    heroSlogan: 'Caf\u00e9 de altitude, ambiente silencioso.',
    heroDescription: 'Das montanhas brasileiras para um espa\u00e7o de trabalho calmo em Londres. Um ref\u00fagio para mentes focadas e apreciadores de caf\u00e9.',
    heroBtnPrimary: 'Entre na Lista',
    heroBtnSecondary: 'Saiba Mais',
    heroScroll: 'Role',
    
    // Experience Section
    expTagline: 'A Experi\u00eancia',
    expTitle: 'Feito para os Exigentes',
    expDesc: 'Cada detalhe considerado. Cada momento intencional.',
    expCard1Title: 'Single Origin',
    expCard1Desc: 'Gr\u00e3os de altitude de Minas Gerais',
    expCard2Title: 'Zonas Silenciosas',
    expCard2Desc: 'Projetadas para foco profundo',
    expCard3Title: 'M\u00e9todos Artesanais',
    expCard3Desc: 'Coado, sif\u00e3o, cold brew',
    expCard4Title: 'Espa\u00e7o Premium',
    expCard4Desc: 'Luxo encontra produtividade',
    
    // Signature Section
    sigTagline: 'Sele\u00e7\u00e3o Especial',
    sigTitle: 'Nosso Caf\u00e9',
    sigDesc: 'Gr\u00e3os cuidadosamente selecionados e torrados \u00e0 perfei\u00e7\u00e3o.',
    viewMenu: 'Ver Card\u00e1pio',
    
    // Coworking Section
    coworkTagline: 'Trabalhe com Conforto',
    coworkTitle: 'Coworking Reimaginado',
    coworkDesc: 'Um ref\u00fagio silencioso onde caf\u00e9 excepcional encontra produtividade focada. Duas zonas distintas para seu melhor trabalho.',
    coworkBtn: 'Explore o Coworking',
    focusZone: 'Zona de Foco',
    focusDesc: 'Espa\u00e7o silencioso para concentra\u00e7\u00e3o',
    meetZone: 'Zona de Reuni\u00f5es',
    meetDesc: '\u00c1rea flex\u00edvel para chamadas',
    
    // Location Section
    locTagline: 'Encontre-nos',
    locTitle: 'Em Breve em Londres',
    locDesc: 'Abrindo em breve em um dos bairros mais vibrantes de Londres.',
    locBtn: 'Como Chegar',
    
    // Newsletter
    newsTitle: 'Seja o Primeiro a Saber',
    newsDesc: 'Entre na lista de espera para acesso antecipado e ofertas especiais.',
    newsPlaceholder: 'Seu e-mail',
    newsBtn: 'Inscrever',
    newsSuccess: 'Obrigado! Voc\u00ea est\u00e1 na lista.',
    
    // Footer
    footerSlogan: 'Caf\u00e9 de altitude, ambiente silencioso.',
    footerLinks: 'Links R\u00e1pidos',
    footerHours: 'Hor\u00e1rio',
    footerSocial: 'Siga-nos',
    footerCopyright: '\u00a9 2025 Montis Coffee House. Todos os direitos reservados.',
    footerPrivacy: 'Pol\u00edtica de Privacidade',
    footerTerms: 'Termos de Servi\u00e7o',
    hoursTBA: 'Hor\u00e1rio a ser anunciado',
    
    // Menu Page
    menuHeroTitle: 'Nosso Card\u00e1pio',
    menuHeroDesc: 'Das montanhas do Brasil para sua x\u00edcara.',
    menuCat1: 'Espresso Bar',
    menuCat2: 'Caf\u00e9 Filtrado',
    menuCat3: 'Bebidas Geladas',
    menuCat4: 'Ch\u00e1s & Infus\u00f5es',
    
    // Coworking Page
    coworkHeroTitle: 'Coworking',
    coworkHeroDesc: 'Onde produtividade encontra tranquilidade.',
    howTitle: 'Como Funciona',
    step1: 'Visite',
    step1Desc: 'Apare\u00e7a durante o hor\u00e1rio',
    step2: 'Escolha',
    step2Desc: 'Zona de Foco ou Reuni\u00f5es',
    step3: 'Trabalhe',
    step3Desc: 'Aproveite caf\u00e9 e produtividade',
    amenities: 'Comodidades',
    amenity1: 'WiFi de Alta Velocidade',
    amenity2: 'Tomadas',
    amenity3: 'Mesas de P\u00e9',
    amenity4: 'Cabines Telef\u00f4nicas',
    
    // Location Page
    locationHeroTitle: 'Localiza\u00e7\u00e3o',
    locationHeroDesc: 'Encontre o caminho para a Montis.',
    transportTitle: 'Como Chegar',
    accessTitle: 'Acessibilidade',
    accessDesc: 'Acesso sem degraus e assist\u00eancia dispon\u00edvel.',
    
    // About Page
    aboutHeroTitle: 'Sobre a Montis',
    aboutHeroDesc: 'Nossa hist\u00f3ria, vis\u00e3o e valores.',
    storyTitle: 'Nossa Hist\u00f3ria',
    storyP1: 'A Montis Coffee House nasceu de uma ideia simples: trazer a tranquilidade das fazendas de caf\u00e9 das montanhas brasileiras para o ritmo urbano de Londres.',
    storyP2: 'O nome \"Montis\" vem do latim para montanha, refletindo nossa conex\u00e3o com as regi\u00f5es cafeeiras de altitude de Minas Gerais.',
    valuesTitle: 'Nossos Valores',
    value1: 'Qualidade',
    value1Desc: 'Excel\u00eancia em cada x\u00edcara',
    value2: 'Calma',
    value2Desc: 'Ambientes tranquilos',
    value3: 'Artesanato',
    value3Desc: 'Dedica\u00e7\u00e3o artesanal',
    value4: 'Comunidade',
    value4Desc: 'Conex\u00f5es significativas',
    
    // Contact Page
    contactHeroTitle: 'Contato',
    contactHeroDesc: 'Adorar\u00edamos ouvir voc\u00ea.',
    formName: 'Nome',
    formEmail: 'E-mail',
    formSubject: 'Assunto',
    formMessage: 'Mensagem',
    formSubmit: 'Enviar',
    formSuccess: 'Obrigado pela mensagem!',
    businessTitle: 'Parcerias',
    businessDesc: 'Para parcerias e imprensa:',
    
    // Privacy & Terms
    privacyTitle: 'Pol\u00edtica de Privacidade',
    termsTitle: 'Termos de Servi\u00e7o',
    lastUpdated: '\u00daltima atualiza\u00e7\u00e3o: Julho 2025'
  }
};

// ============================================
// STATE
// ============================================
let currentLang = localStorage.getItem('montis-lang') || 'en';

// ============================================
// DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initHeader();
  initMobileMenu();
  initScrollAnimations();
  initForms();
  highlightActiveNav();
});

// ============================================
// LANGUAGE SYSTEM
// ============================================
function initLanguage() {
  setLanguage(currentLang);
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('montis-lang', lang);
  
  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}

function t(key) {
  return translations[currentLang]?.[key] || translations.en[key] || key;
}

// ============================================
// HEADER
// ============================================
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (!toggle || !nav) return;
  
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close menu on link click
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right, .stagger');
  
  if (animatedElements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => observer.observe(el));
}

// ============================================
// FORMS
// ============================================
function initForms() {
  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
  }
  
  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const emailInput = form.querySelector('input[type="email"]');
  const successEl = form.querySelector('.form-success');
  
  const email = emailInput.value.trim();
  
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  // Save to localStorage (simulated backend)
  const subscribers = JSON.parse(localStorage.getItem('montis-subscribers') || '[]');
  if (!subscribers.includes(email)) {
    subscribers.push(email);
    localStorage.setItem('montis-subscribers', JSON.stringify(subscribers));
  }
  
  // Show success
  form.reset();
  if (successEl) {
    successEl.classList.add('show');
    setTimeout(() => successEl.classList.remove('show'), 5000);
  }
}

function handleContactSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const successEl = form.querySelector('.form-success');
  
  // Basic validation
  const name = form.querySelector('#name')?.value.trim();
  const email = form.querySelector('#email')?.value.trim();
  const message = form.querySelector('#message')?.value.trim();
  
  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }
  
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  // Simulate submission
  form.reset();
  if (successEl) {
    successEl.classList.add('show');
    setTimeout(() => successEl.classList.remove('show'), 5000);
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ============================================
// NAVIGATION
// ============================================
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  const filename = currentPath.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === filename || (filename === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/**
 * ============================================
 * SHAILENDRA PATEL POLITICAL PORTFOLIO
 * JavaScript - All Interactions & Animations
 * ============================================
 */

(function() {
  'use strict';

  // ==========================================
  // DOM ELEMENT REFERENCES
  // ==========================================
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollToTopBtn = document.getElementById('scrollToTop');
  const langToggle = document.getElementById('langToggle');
  const contactForm = document.getElementById('contactForm');
  const popupOverlay = document.getElementById('popupOverlay');
  const successPopup = document.getElementById('successPopup');
  const popupClose = document.getElementById('popupClose');

  // ==========================================
  // STATE
  // ==========================================
  let currentLang = localStorage.getItem('site-lang') || 'hi';
  let lastScrollY = window.scrollY;

  // ==========================================
  // NAVBAR SCROLL BEHAVIOR
  // ==========================================
  function handleNavbarScroll() {
    const currentScrollY = window.scrollY;
    const heroHeight = window.innerHeight;

    // Background change after hero
    if (currentScrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Hide on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
  }

  // ==========================================
  // SMOOTH SCROLL
  // ==========================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navHeight = navbar.offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Close mobile menu if open
          closeMobileMenu();
        }
      });
    });
  }

  // ==========================================
  // MOBILE MENU
  // ==========================================
  function openMobileMenu() {
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('active');
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileMenuOverlay.classList.add('active');
    mobileMenuOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('active');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenuOverlay.classList.remove('active');
    mobileMenuOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initMobileMenu() {
    hamburger.addEventListener('click', () => {
      if (mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // ==========================================
  // ACTIVE NAVIGATION HIGHLIGHT
  // ==========================================
  function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  // ==========================================
  // SCROLL-TRIGGERED ANIMATIONS
  // ==========================================
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -15% 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add delay if specified
          const delay = parseFloat(entry.target.dataset.delay) || 0;
          
          if (delay > 0) {
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, delay * 1000);
          } else {
            entry.target.classList.add('animated');
          }

          // Unobserve after animation triggers (one-time)
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
  }

  // ==========================================
  // COUNTER ANIMATION
  // ==========================================
  function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter-number[data-target]');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
  }

  function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const suffix = element.dataset.suffix || '';
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    if (target === 0) return; // For "अनेक" text counter

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo easing
      const easeProgress = 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * target);

      element.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + suffix;
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // ==========================================
  // LANGUAGE TOGGLE
  // ==========================================
  function initLanguageToggle() {
    // Apply saved language on load
    applyLanguage(currentLang);

    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'hi' ? 'en' : 'hi';
      localStorage.setItem('site-lang', currentLang);
      applyLanguage(currentLang);
    });
  }

  function applyLanguage(lang) {
    const toggleText = langToggle.querySelector('.lang-text');
    toggleText.textContent = lang === 'hi' ? 'EN' : 'HI';

    // Update all elements with data-hi and data-en
    document.querySelectorAll('[data-hi][data-en]').forEach(el => {
      // Add transition
      el.classList.add('lang-transition');

      // Update content based on element type
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = el.getAttribute(`data-${lang}-placeholder`) || el.getAttribute(`data-${lang}`);
      } else {
        el.textContent = el.getAttribute(`data-${lang}`);
      }

      // Remove transition class after animation
      setTimeout(() => {
        el.classList.remove('lang-transition');
      }, 300);
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';

    window.dispatchEvent(new CustomEvent('site-lang-changed', { detail: { lang } }));
    if (window.Gallery && window.Gallery.onLanguageChange) {
      window.Gallery.onLanguageChange();
    }
  }

  // ==========================================
  // SCROLL TO TOP
  // ==========================================
  function initScrollToTop() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================
  // CONTACT FORM
  // ==========================================
  function initContactForm() {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById('formName').value.trim();
      const mobile = document.getElementById('formMobile').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      // Basic validation
      if (!name || !mobile || !message) {
        return;
      }

      // Validate mobile (10 digits)
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(mobile)) {
        alert(currentLang === 'hi' ? 'कृपया सही मोबाइल नंबर दर्ज करें' : 'Please enter a valid mobile number');
        return;
      }

      // Show success popup
      showSuccessPopup();

      // Reset form
      contactForm.reset();
    });
  }

  function showSuccessPopup() {
    popupOverlay.classList.add('active');
    popupOverlay.setAttribute('aria-hidden', 'false');
    successPopup.classList.add('active');
    successPopup.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function hideSuccessPopup() {
    popupOverlay.classList.remove('active');
    popupOverlay.setAttribute('aria-hidden', 'true');
    successPopup.classList.remove('active');
    successPopup.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initPopup() {
    popupClose.addEventListener('click', hideSuccessPopup);
    popupOverlay.addEventListener('click', hideSuccessPopup);

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && successPopup.classList.contains('active')) {
        hideSuccessPopup();
      }
    });
  }

  // ==========================================
  // HERO ANIMATIONS ON LOAD
  // ==========================================
  function initHeroAnimations() {
    const heroElements = document.querySelectorAll('.hero .animate-on-scroll');

    heroElements.forEach(el => {
      const delay = parseFloat(el.dataset.delay) || 0;
      setTimeout(() => {
        el.classList.add('animated');
      }, delay * 1000);
    });
  }

  // ==========================================
  // PARALLAX EFFECT (About image)
  // ==========================================
  function initParallax() {
    const aboutImage = document.querySelector('.about-image');
    if (!aboutImage) return;

    const aboutSection = document.getElementById('about');

    window.addEventListener('scroll', () => {
      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const translateY = (scrollProgress - 0.5) * -30;
        aboutImage.style.transform = `translateY(${translateY}px)`;
      }
    }, { passive: true });
  }

  // ==========================================
  // TIMELINE LINE ANIMATION
  // ==========================================
  function initTimelineAnimation() {
    const timelineLine = document.querySelector('.timeline-line');
    if (!timelineLine) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          timelineLine.style.transform = 'translateX(-50%) scaleY(1)';
          timelineLine.style.transformOrigin = 'top';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(document.querySelector('.timeline'));

    // Set initial state
    timelineLine.style.transform = 'translateX(-50%) scaleY(0)';
    timelineLine.style.transition = 'transform 1.5s ease';
  }

  // ==========================================
  // NAVBAR HIDE/SHOW ON SCROLL
  // ==========================================
  function initNavbarHideShow() {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleNavbarScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ==========================================
  // FORM INPUT FOCUS EFFECTS
  // ==========================================
  function initFormEffects() {
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');

    formInputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
      });

      input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
      });
    });
  }

  // ==========================================
  // CLICK OUTSIDE MOBILE MENU
  // ==========================================
  function initClickOutside() {
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
          closeMobileMenu();
        }
      }
    });
  }

  // ==========================================
  // KEYBOARD NAVIGATION FOR MOBILE MENU
  // ==========================================
  function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  }

  // ==========================================
  // SERVICE WORKER (Offline support hint)
  // ==========================================
  function initServiceWorker() {
    if ('serviceWorker' in navigator) {
      // Service worker can be added here for PWA support
      // Currently commented out as it's optional
      // navigator.serviceWorker.register('/sw.js');
    }
  }

  // ==========================================
  // INITIALIZE ALL
  // ==========================================
  // ==========================================
  // IMAGE FALLBACK FOR MISSING ASSETS
  // ==========================================
  function initImageFallbacks() {
    document.querySelectorAll('.about-image').forEach(img => {
      img.addEventListener('error', function onError() {
        this.removeEventListener('error', onError);
        this.style.display = 'none';
        const parent = this.closest('.about-image-wrapper');
        if (parent) parent.classList.add('img-missing');
      }, { once: true });
    });
  }

  function init() {
    initNavbarHideShow();
    initSmoothScroll();
    initMobileMenu();
    initActiveNavHighlight();
    initScrollAnimations();
    initCounterAnimation();
    initLanguageToggle();
    initScrollToTop();
    initContactForm();
    initPopup();
    initHeroAnimations();
    initParallax();
    initTimelineAnimation();
    initFormEffects();
    initClickOutside();
    initKeyboardNav();
    initImageFallbacks();
    initServiceWorker();
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

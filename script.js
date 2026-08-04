// ============================================
// PT Briba Real Estate - Interactions
// ============================================

(function() {
  'use strict';

  // ----------------------------------------
  // Elements
  // ----------------------------------------
  const navbar = document.getElementById('navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('mobile-menu');
  const navBackdrop = document.getElementById('nav-backdrop');
  const navClose = document.querySelector('.nav-close');
  const navLinks = document.querySelectorAll('.nav-link');
  const hero = document.getElementById('hero');

  // ----------------------------------------
  // State
  // ----------------------------------------
  let menuOpen = false;
  let lastWidth = window.innerWidth;

  // ----------------------------------------
  // Hero-aware Navbar
  // ----------------------------------------
  function updateNavbar() {
    if (menuOpen) return;

    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY < heroBottom * 0.5) {
      navbar.classList.add('hero-mode');
      navbar.classList.remove('scrolled');
    } else {
      navbar.classList.remove('hero-mode');
      navbar.classList.add('scrolled');
    }
  }

  // ----------------------------------------
  // Mobile Navigation Toggle
  // ----------------------------------------
  function openMenu() {
    menuOpen = true;
    navMenu.classList.add('active');
    navBackdrop.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    navbar.classList.remove('hero-mode');
    navbar.classList.add('scrolled');
  }

  function closeMenu() {
    menuOpen = false;
    navMenu.classList.remove('active');
    navBackdrop.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    navToggle.focus();
    updateNavbar();
  }

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      if (menuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (navClose) {
    navClose.addEventListener('click', closeMenu);
  }

  // Close menu when clicking backdrop
  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMenu);
  }

  // Close menu when clicking nav links
  navLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuOpen) {
      closeMenu();
    }
  });

  // Close menu when resizing to desktop
  window.addEventListener('resize', function() {
    const currentWidth = window.innerWidth;
    if (lastWidth <= 768 && currentWidth > 768) {
      if (menuOpen) {
        closeMenu();
      }
    }
    lastWidth = currentWidth;
  });

  // ----------------------------------------
  // Scroll Event
  // ----------------------------------------
  window.addEventListener('scroll', function() {
    updateNavbar();
  }, { passive: true });

  // Initial check
  updateNavbar();

  // ----------------------------------------
  // Scroll Animation (Intersection Observer)
  // ----------------------------------------
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.08
    });

    fadeElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    fadeElements.forEach(function(el) {
      el.classList.add('visible');
    });
  }

  // ----------------------------------------
  // Smooth Scroll for Anchor Links
  // ----------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#hero') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

})();

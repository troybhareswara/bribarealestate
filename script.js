/**
 * Briba Real Estate - Landing Page JavaScript
 * Mobile navigation, scroll animations, navbar effects
 */

(function() {
  'use strict';

  // ===================================
  // Mobile Navigation
  // ===================================

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('mobile-menu');
  const navBackdrop = document.getElementById('nav-backdrop');
  const navClose = document.querySelector('.nav-close');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  function openMobileNav() {
    navToggle.classList.add('active');
    navMenu.classList.add('active');
    navBackdrop.classList.add('active');
    document.body.classList.add('nav-open');
    navToggle.setAttribute('aria-expanded', 'true');
    navMenu.setAttribute('aria-hidden', 'false');
  }

  function closeMobileNav() {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    navBackdrop.classList.remove('active');
    document.body.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('aria-hidden', 'true');
  }

  // Toggle on hamburger click
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      if (navMenu.classList.contains('active')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  // Close on backdrop click
  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileNav);
  }

  // Close on X button click
  if (navClose) {
    navClose.addEventListener('click', closeMobileNav);
  }

  // Close on link click
  navLinks.forEach(function(link) {
    link.addEventListener('click', closeMobileNav);
  });

  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
      closeMobileNav();
    }
  });

  // ===================================
  // Navbar Scroll Effect
  // ===================================

  const navbar = document.getElementById('navbar');

  if (navbar) {
    let lastScrollY = 0;
    const scrollThreshold = 50;

    function handleNavbarScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      lastScrollY = currentScrollY;
    }

    // Throttle scroll handler for performance
    let scrollTicking = false;
    window.addEventListener('scroll', function() {
      if (!scrollTicking) {
        window.requestAnimationFrame(function() {
          handleNavbarScroll();
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    });

    // Check initial state
    handleNavbarScroll();
  }

  // ===================================
  // Scroll Reveal Animations
  // ===================================

  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0) {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      };

      const fadeObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      fadeElements.forEach(function(el) {
        fadeObserver.observe(el);
      });

    } else {
      // Fallback: just show all elements immediately
      fadeElements.forEach(function(el) {
        el.classList.add('visible');
      });
    }
  }

})();

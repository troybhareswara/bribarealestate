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
    // Simple scroll handler
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ===================================
  // Scroll Reveal Animations
  // ===================================

  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0) {
    // Simple IntersectionObserver - like eliteoperates.com
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeElements.forEach(el => revealObserver.observe(el));
  }

})();

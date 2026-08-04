# Briba Real Estate Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create modern luxury black & white landing page CSS and JavaScript for Briba Real Estate villa rental website.

**Architecture:** Two files approach — `styles.css` for all styling with CSS custom properties for theming, and `script.js` for interactive functionality (mobile nav, scroll animations, navbar scroll effect). Mobile-first responsive design.

**Tech Stack:** Vanilla CSS (no framework), Vanilla JavaScript (no library), CSS Grid/Flexbox for layout, Intersection Observer API for scroll animations.

---

## Global Constraints

- Font: Cormorant Garamond (headings) + Lato (body) via Google Fonts
- Color: Black (#000), White (#FFF), Gray scale (#F5F5F5 to #171717)
- Button style: Outlined with hover invert
- Animation: Subtle fade-in on scroll, 0.3s-0.6s transitions
- Breakpoints: 640px (tablet), 1024px (desktop)

---

## File Structure

| File | Responsibility |
|------|---------------|
| `styles.css` | All styling, layout, typography, animations, responsive |
| `script.js` | Mobile nav toggle, scroll animations (Intersection Observer), navbar scroll effect |

---

## Task 1: CSS Foundation & Variables

**Files:**
- Create: `styles.css`

**Interfaces:**
- Produces: CSS custom properties, reset, base typography, button styles

- [ ] **Step 1: Create styles.css with reset and CSS variables**

```css
/* ===================================
   CSS Reset & Custom Properties
   =================================== */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* Colors */
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #E5E5E5;
  --color-gray-300: #D4D4D4;
  --color-gray-500: #737373;
  --color-gray-700: #404040;
  --color-gray-900: #171717;

  /* Typography */
  --font-heading: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Spacing */
  --section-padding: 60px;
  --container-max: 1200px;
  --container-padding: 1.5rem;

  /* Transitions */
  --transition-fast: 0.3s ease;
  --transition-medium: 0.6s ease;
}

@media (min-width: 1024px) {
  :root {
    --section-padding: 80px;
    --container-padding: 2rem;
  }
}
```

- [ ] **Step 2: Add base styles (html, body, typography)**

```css
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-gray-700);
  background-color: var(--color-white);
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
  color: var(--color-gray-900);
  line-height: 1.2;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
}

p {
  margin-bottom: 1rem;
}

p:last-child {
  margin-bottom: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

ul {
  list-style: none;
}

@media (min-width: 1024px) {
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.5rem;
  }
}
```

- [ ] **Step 3: Add button styles (outlined, hover invert)**

```css
/* ===================================
   Buttons
   =================================== */

.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  border: 1px solid var(--color-black);
  background: transparent;
  color: var(--color-black);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn:hover {
  background: var(--color-black);
  color: var(--color-white);
}

.btn-large {
  padding: 1rem 2.5rem;
  font-size: 1rem;
}
```

- [ ] **Step 4: Add container and section base styles**

```css
/* ===================================
   Layout Utilities
   =================================== */

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

section {
  padding: var(--section-padding) 0;
}

/* Section divider under headings */
.section-divider {
  width: 60px;
  height: 1px;
  background-color: var(--color-gray-300);
  margin: 1.5rem auto 2rem;
}

/* Fade-in animation base */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--transition-medium), transform var(--transition-medium);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 5: Add Navbar styles (sticky, desktop, mobile)**

```css
/* ===================================
   Navigation
   =================================== */

#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem var(--container-padding);
  background: var(--color-white);
  transition: box-shadow var(--transition-fast);
}

#navbar.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.nav-logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav-logo-text img {
  height: 40px;
  width: auto;
}

.nav-logo-full {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--color-gray-900);
}

/* Desktop Nav Links */
.nav-desktop-links {
  display: none;
  gap: 2.5rem;
}

.nav-desktop-links a {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gray-700);
  position: relative;
  padding: 0.25rem 0;
  transition: color var(--transition-fast);
}

.nav-desktop-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-black);
  transition: width var(--transition-fast);
}

.nav-desktop-links a:hover {
  color: var(--color-black);
}

.nav-desktop-links a:hover::after {
  width: 100%;
}

/* Mobile Toggle */
.nav-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.nav-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-black);
  transition: all var(--transition-fast);
}

.nav-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Menu */
.nav-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  max-width: 320px;
  height: 100vh;
  background: var(--color-white);
  padding: 2rem;
  transition: right var(--transition-fast);
  display: flex;
  flex-direction: column;
  z-index: 1001;
}

.nav-menu.active {
  right: 0;
}

.nav-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-gray-200);
}

.nav-menu-logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.nav-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--color-gray-700);
}

.nav-menu .nav-link {
  display: block;
  padding: 1rem 0;
  font-family: var(--font-body);
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gray-700);
  border-bottom: 1px solid var(--color-gray-100);
  transition: color var(--transition-fast);
}

.nav-menu .nav-link:hover {
  color: var(--color-black);
}

.nav-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-fast);
  z-index: 1000;
}

.nav-backdrop.active {
  opacity: 1;
  visibility: visible;
}

/* Desktop: show desktop nav, hide mobile toggle */
@media (min-width: 1024px) {
  .nav-desktop-links {
    display: flex;
  }

  .nav-toggle {
    display: none;
  }

  .nav-menu,
  .nav-backdrop {
    display: none;
  }

  .nav-logo-text img {
    height: 50px;
  }
}
```

- [ ] **Step 6: Add Hero section styles**

```css
/* ===================================
   Hero Section
   =================================== */

#hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: var(--color-white);
  padding: 0 var(--container-padding);
}

.hero-logo-text img {
  height: 80px;
  width: auto;
  margin: 0 auto 2rem;
  filter: brightness(0) invert(1);
}

.hero-content h1 {
  color: var(--color-white);
  margin-bottom: 0.5rem;
}

.hero-sub {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-content .btn {
  border-color: var(--color-white);
  color: var(--color-white);
}

.hero-content .btn:hover {
  background: var(--color-white);
  color: var(--color-black);
}

@media (min-width: 1024px) {
  .hero-logo-text img {
    height: 120px;
  }
}
```

- [ ] **Step 7: Add About section styles**

```css
/* ===================================
   About Section
   =================================== */

#about {
  background: var(--color-white);
  text-align: center;
}

#about h2 {
  margin-bottom: 1.5rem;
}

#about .container {
  max-width: 800px;
}

#about p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-gray-700);
}

#about .section-divider {
  margin-bottom: 3rem;
}
```

- [ ] **Step 8: Add Villas section styles (3-column grid, cards, hover)**

```css
/* ===================================
   Villas Section
   =================================== */

#villas {
  background: var(--color-gray-100);
}

#villas h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

#villas .section-divider {
  margin-bottom: 3rem;
}

.villas-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.villa-card {
  background: var(--color-white);
  overflow: hidden;
}

.villa-image {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.villa-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.villa-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  transition: background 0.4s ease;
}

.villa-number {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-white);
  opacity: 0.8;
  line-height: 1;
}

.villa-card:hover .villa-image img {
  transform: scale(1.05);
}

.villa-card:hover .villa-image-overlay {
  background: rgba(0, 0, 0, 0.4);
}

.villa-card {
  transition: box-shadow 0.4s ease;
}

.villa-card:hover {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.villa-card-content {
  padding: 1.5rem;
}

.villa-card-content h3 {
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}

.villa-card-content p {
  font-size: 0.95rem;
  color: var(--color-gray-500);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

@media (min-width: 640px) {
  .villas-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .villas-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .villa-card-content {
    padding: 2rem;
  }

  .villa-card-content h3 {
    font-size: 1.5rem;
  }
}
```

- [ ] **Step 9: Add Services section styles (auto-fit grid, icons)**

```css
/* ===================================
   Services Section
   =================================== */

#services {
  background: var(--color-white);
}

#services h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

#services .section-divider {
  margin-bottom: 3rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 2rem 1rem;
  text-align: center;
  transition: background var(--transition-fast);
}

.service-item svg {
  width: 32px;
  height: 32px;
  stroke: var(--color-gray-700);
  transition: stroke var(--transition-fast);
}

.service-item span {
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-gray-700);
}

.service-item:hover {
  background: var(--color-gray-100);
}

.service-item:hover svg {
  stroke: var(--color-black);
}

.service-item:hover span {
  color: var(--color-black);
}

@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .service-item svg {
    width: 40px;
    height: 40px;
  }

  .service-item span {
    font-size: 0.95rem;
  }
}
```

- [ ] **Step 10: Add Nyanyi teaser section styles**

```css
/* ===================================
   Nyanyi Teaser Section
   =================================== */

#nyanyi {
  position: relative;
  padding: 80px 0;
  overflow: hidden;
}

.nyanyi-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.nyanyi-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nyanyi-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
}

.nyanyi-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.nyanyi-text h2 {
  margin-bottom: 0.5rem;
}

.nyanyi-tagline {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-style: italic;
  color: var(--color-gray-500);
  margin-bottom: 2rem;
}

.nyanyi-text p {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-gray-700);
  margin-bottom: 1.5rem;
}

.nyanyi-text p:last-of-type {
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  #nyanyi {
    padding: 120px 0;
  }

  .nyanyi-tagline {
    font-size: 1.5rem;
  }
}
```

- [ ] **Step 11: Add Contact section styles**

```css
/* ===================================
   Contact Section
   =================================== */

#contact {
  background: var(--color-gray-100);
}

#contact h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

#contact .section-divider {
  margin-bottom: 3rem;
}

.contact-intro {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: var(--color-gray-700);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  background: var(--color-white);
  border: 1px solid var(--color-gray-200);
  transition: all var(--transition-fast);
}

.contact-item svg {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  fill: var(--color-gray-700);
  stroke: var(--color-gray-700);
}

.contact-item div {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-item span:first-child {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gray-500);
}

.contact-item span:last-child {
  font-size: 1rem;
  color: var(--color-gray-900);
}

.contact-item:hover {
  border-color: var(--color-black);
  background: var(--color-white);
}

.contact-item:hover svg {
  fill: var(--color-black);
  stroke: var(--color-black);
}

#contact .container:last-child {
  text-align: center;
}

@media (min-width: 640px) {
  .contact-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .contact-item svg {
    width: 36px;
    height: 36px;
  }
}
```

- [ ] **Step 12: Add Footer styles**

```css
/* ===================================
   Footer
   =================================== */

footer {
  background: var(--color-black);
  color: var(--color-white);
  padding: 3rem 0;
  text-align: center;
}

footer .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.footer-logo-text {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1;
}

footer p {
  font-size: 0.85rem;
  color: var(--color-gray-500);
  margin: 0;
}

.back-to-top {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gray-500);
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-gray-700);
  transition: all var(--transition-fast);
}

.back-to-top:hover {
  color: var(--color-white);
  border-color: var(--color-white);
}
```

- [ ] **Step 13: Add scroll animation stagger delays for grid items**

```css
/* ===================================
   Scroll Animation Delays
   =================================== */

/* Stagger fade-in for grid items */
.villas-grid .villa-card:nth-child(1) { transition-delay: 0ms; }
.villas-grid .villa-card:nth-child(2) { transition-delay: 100ms; }
.villas-grid .villa-card:nth-child(3) { transition-delay: 200ms; }

.services-grid .service-item:nth-child(1) { transition-delay: 0ms; }
.services-grid .service-item:nth-child(2) { transition-delay: 50ms; }
.services-grid .service-item:nth-child(3) { transition-delay: 100ms; }
.services-grid .service-item:nth-child(4) { transition-delay: 150ms; }
.services-grid .service-item:nth-child(5) { transition-delay: 200ms; }
.services-grid .service-item:nth-child(6) { transition-delay: 250ms; }
.services-grid .service-item:nth-child(7) { transition-delay: 300ms; }

.contact-grid .contact-item:nth-child(1) { transition-delay: 0ms; }
.contact-grid .contact-item:nth-child(2) { transition-delay: 100ms; }
.contact-grid .contact-item:nth-child(3) { transition-delay: 200ms; }
```

- [ ] **Step 14: Add body scroll lock class for mobile nav**

```css
/* ===================================
   Body Scroll Lock (for mobile nav)
   =================================== */

body.nav-open {
  overflow: hidden;
}
```

- [ ] **Step 15: Commit styles.css**

```bash
git add styles.css
git commit -m "feat: add complete styles.css with modern luxury black & white design

- CSS custom properties for colors, fonts, spacing
- Sticky navbar with scroll effect
- Mobile hamburger menu with slide-in overlay
- Hero section with full-height background
- Villa cards with zoom overlay hover effect
- Services grid with icon hover states
- Scroll fade-in animations with staggered delays
- Responsive breakpoints for mobile/tablet/desktop
- All section styles: About, Villas, Services, Nyanyi, Contact, Footer

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: JavaScript Functionality

**Files:**
- Create: `script.js`

**Interfaces:**
- Consumes: DOM elements (#navbar, .nav-toggle, .nav-menu, .nav-backdrop, .fade-in)
- Produces: Interactive navigation, scroll animations, navbar scroll effect

- [ ] **Step 1: Create script.js with mobile navigation toggle**

```javascript
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
  navToggle.addEventListener('click', function() {
    if (navMenu.classList.contains('active')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  // Close on backdrop click
  navBackdrop.addEventListener('click', closeMobileNav);

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
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMobileNav();
    }
  });

})();
```

- [ ] **Step 2: Add navbar scroll effect (add .scrolled class)**

```javascript
(function() {
  'use strict';

  // ===================================
  // Navbar Scroll Effect
  // ===================================

  const navbar = document.getElementById('navbar');
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

})();
```

- [ ] **Step 3: Add scroll animation with Intersection Observer**

```javascript
(function() {
  'use strict';

  // ===================================
  // Scroll Reveal Animations
  // ===================================

  // Check if Intersection Observer is supported
  if ('IntersectionObserver' in window) {
    const fadeElements = document.querySelectorAll('.fade-in');

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
    document.querySelectorAll('.fade-in').forEach(function(el) {
      el.classList.add('visible');
    });
  }

})();
```

- [ ] **Step 4: Commit script.js**

```bash
git add script.js
git commit -m "feat: add script.js with interactive functionality

- Mobile navigation toggle (hamburger, slide-in menu, backdrop close)
- Navbar scroll effect (add .scrolled class on scroll > 50px)
- Scroll reveal animations using Intersection Observer API
- Throttled scroll handler for performance
- Escape key and link click handlers for accessibility
- Fallback for browsers without IntersectionObserver

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Testing

**Files:**
- Test: Open `index.html` in browser, verify visual and interactive elements

- [ ] **Step 1: Verify all sections render correctly**
  - Hero: full-height background image with overlay, centered content
  - About: centered text, section divider
  - Villas: 3-column grid (desktop), cards with hover effect
  - Services: 4-column grid (desktop), icons visible
  - Nyanyi: background image with light overlay
  - Contact: 3 contact items + large CTA button
  - Footer: black background, logo, copyright, back-to-top

- [ ] **Step 2: Test mobile navigation**
  - Resize browser to mobile width (< 1024px)
  - Click hamburger icon → menu slides in from right
  - Click backdrop → menu closes
  - Click X button → menu closes
  - Click nav link → menu closes and scrolls to section
  - Press Escape key → menu closes

- [ ] **Step 3: Test scroll behaviors**
  - Scroll down → navbar gets shadow (scrolled class)
  - Scroll to About section → fade-in animation triggers
  - Scroll through all sections → animations trigger as elements enter viewport

- [ ] **Step 4: Test hover states**
  - Villa cards: image zooms, overlay darkens
  - Buttons: inverts from outlined to filled
  - Nav links: underline animates from left
  - Service items: background highlight, icon color changes
  - Contact items: border color changes

- [ ] **Step 5: Test responsive breakpoints**
  - Mobile (< 640px): single column layouts
  - Tablet (640px - 1023px): 2-column villa grid
  - Desktop (≥ 1024px): full 3-column villas, 4-column services, desktop nav visible

- [ ] **Step 6: Test accessibility**
  - All images have alt text
  - Nav links have proper focus states
  - Buttons are keyboard accessible
  - ARIA labels present on interactive elements

---

## Summary

| Task | File | Lines (est.) | Focus |
|------|------|--------------|-------|
| 1 | styles.css | ~400 | Complete styling system |
| 2 | script.js | ~100 | Interactive functionality |
| 3 | Testing | - | Manual browser testing |

**Total estimated time:** 30-45 minutes

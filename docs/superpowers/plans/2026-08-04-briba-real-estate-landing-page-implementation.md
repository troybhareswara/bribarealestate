# PT Briba Real Estate Landing Page Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a black & white luxury landing page for PT Briba Real Estate — 3 villa cards, services, Nyanyi teaser, contact, scroll animations, mobile responsive.

**Architecture:** Single-page static site — HTML + CSS + vanilla JS. No build tools, no frameworks. Mobile-first responsive design with scroll-triggered fade-in animations.

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript, Google Fonts (Cormorant Garamond + Lato)

## Global Constraints

- Fonts: Cormorant Garamond (headings), Lato (body)
- Colors: #000000 primary, #FFFFFF background, #333333 body text
- Breakpoints: 768px (tablet), 1024px (desktop)
- Airbnb links: Villa 1 = `https://www.airbnb.com/rooms/1589485809328757219`, Villa 2 = `https://www.airbnb.com/rooms/1281611453844261890`, Villa 3 = `https://www.airbnb.com/rooms/1346703468716424163`
- Contact: WhatsApp `+62 853 3783 5809`, Email `Bribarealestate@gmail.com`, Instagram `@bribarealestate`
- Logo: `images/FullLogo-2.jpg` (already exists)
- Villa photos: placeholder gradient boxes (client to replace)

---

## File Structure

```
bribarealestate/
├── index.html       ← all HTML sections
├── styles.css       ← all styles
├── script.js        ← scroll animations + mobile nav
├── images/
│   └── FullLogo-2.jpg  ← logo (existing)
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-08-04-briba-real-estate-landing-page-design.md
```

---

## Task Checklist

- [ ] **Task 1: Create index.html with all 8 sections**
- [ ] **Task 2: Create styles.css with full styling**
- [ ] **Task 3: Create script.js for animations and mobile nav**
- [ ] **Task 4: Copy logo to project and verify all assets**
- [ ] **Task 5: Test in browser (open index.html)**

---

## Task 1: Create index.html with all 8 sections

**Files:**
- Create: `index.html`

**Content:** Full HTML document with all sections in order:

1. **`<head>`** — charset UTF-8, viewport meta, Google Fonts links (Cormorant Garamond + Lato), link to `styles.css`, page title "PT Briba Real Estate"

2. **`<nav>`** — sticky, id="navbar"
   - Left: `<img src="images/FullLogo-2.jpg" alt="PT Briba Real Estate" class="nav-logo">`
   - Right: anchor links — `#about`, `#villas`, `#services`, `#nyanyi`, `#contact`
   - Mobile: hamburger button (`.nav-toggle`) + overlay menu

3. **`<header id="hero">`** — full viewport height, flex centered
   - Large logo image (same `images/FullLogo-2.jpg`, class `hero-logo`)
   - `<h1>` tagline: "Timeless Luxury, Balinese Soul"
   - `<a href="#villas" class="btn">` → "Explore Villas"

4. **`<section id="about">`**
   - `<h2>` → "Our Story"
   - `<p>` → ~2-3 sentence paragraph: Mixed Indonesian family business, 3 villas 20 years, 2 years ago renovation, switched to daily rental Airbnb, service & comfort for guests #1 priority.

5. **`<section id="villas">`**
   - `<h2>` → "Our Villas"
   - 3 cards in a grid (`.villas-grid`):
     - Card 1: placeholder div (`.villa-placeholder`), `<h3>` "Villa Vintage Berawa 1", `<p>` "Description", `<a href="..." class="btn">View on Airbnb</a>`
     - Card 2: same structure, "Villa Vintage Berawa 2"
     - Card 3: same structure, "Villa Vintage Berawa 3"

6. **`<section id="services">`**
   - `<h2>` → "Guest Services"
   - 6 items in grid (`.services-grid`):
     - Airport Pickup (plane icon SVG)
     - Motorcycle Rental (bike icon SVG)
     - Birthday Decoration (gift icon SVG)
     - Pool Decoration (pool/waves icon SVG)
     - Baby Cot Available (crib icon SVG)
     - Extra Beds (bed icon SVG)
   - Each item: inline SVG icon + `<span>` service name

7. **`<section id="nyanyi">`**
   - `<h2>` → "Coming Soon — Nyanyi"
   - `<p class="nyanyi-tagline">` → "A New Chapter in Bali Living"
   - `<p>` → description paragraph about Nyanyi project
   - Decorative geometric placeholder (CSS-only shapes)
   - `<a href="wa.me/6285337835809" class="btn">Inquire Now</a>`

8. **`<section id="contact">`**
   - `<h2>` → "Get in Touch"
   - WhatsApp: icon + "+62 853 3783 5809" + link to wa.me
   - Email: icon + "Bribarealestate@gmail.com" + mailto link
   - Instagram: icon + "@bribarealestate" + link to instagram.com/bribarealestate
   - `<a href="wa.me/6285337835809" class="btn">Chat with Us on WhatsApp</a>`

9. **`<footer>`**
   - Small logo
   - `<p>` → "© 2026 PT Briba Real Estate. All rights reserved."

---

## Task 2: Create styles.css with full styling

**Files:**
- Create: `styles.css`

**Content:**

1. **Reset & Base**
   - `* { box-sizing: border-box; margin: 0; padding: 0; }`
   - Body: font-family Lato, #333333, background #FFFFFF, line-height 1.6

2. **Typography**
   - `h1, h2, h3` → Cormorant Garamond, #000000
   - `h1` → 3.5rem, `h2` → 2.5rem, `h3` → 1.5rem
   - `p` → Lato 300 weight, #333333

3. **Utilities**
   - `.container` → max-width 1200px, margin auto, padding 0 2rem
   - `.btn` → black bg, white text, Lato 500 uppercase, letter-spacing 2px, padding 14px 32px, no border-radius, opacity 1 → 0.85 on hover, transition 0.3s

4. **Navigation** (`#navbar`)
   - Position fixed, top 0, full width, z-index 1000
   - Default: transparent bg, white text (over hero)
   - Scrolled (class `.scrolled`): white bg, black text, box-shadow
   - Flex layout: logo left, links right
   - Mobile: `.nav-toggle` hidden on desktop, hamburger icon

5. **Hero** (`#hero`)
   - Min-height 100vh, flex centered, flex-direction column
   - `.hero-logo` → max-width 400px, margin bottom 2rem
   - `.hero-tagline` → Cormorant Garamond, centered
   - CTA button centered below

6. **Section styling**
   - All sections: padding 100px 0
   - `h2` → centered, bottom margin 3rem

7. **About** (`#about`)
   - Max-width 700px, margin auto, text-align center

8. **Villas** (`#villas`)
   - `.villas-grid` → CSS Grid, 3 columns (1 on mobile, 2 on tablet, 3 on desktop)
   - `.villa-card` → white bg, shadow 0 4px 20px rgba(0,0,0,0.06), padding 0 0 2rem
   - `.villa-placeholder` → 300px height, gray gradient background (placeholder for real photo)
   - `.villa-card:hover` → translateY(-4px), deeper shadow
   - Card content: h3 centered, p centered, btn centered

9. **Services** (`#services`)
   - `.services-grid` → CSS Grid, 3×2 (desktop), 2×3 (tablet), 1×6 (mobile)
   - `.service-item` → text-align center, padding 2rem
   - SVG icons: 40×40px, #000000, hover opacity 0.6
   - Service name: Lato, uppercase, letter-spacing

10. **Nyanyi** (`#nyanyi`)
    - Background: #f5f5f5 (light gray) or subtle gradient
    - Centered content, max-width 600px
    - Geometric shapes: CSS-only circles/squares (::before/::after) as decorative placeholder
    - Tagline styled differently (larger, italic)

11. **Contact** (`#contact`)
    - Centered, max-width 500px
    - `.contact-item` → flex, icon + text, margin-bottom 1.5rem
    - SVG icons: 24×24px

12. **Footer**
    - Background #000000, white text, text-align center, padding 3rem
    - Small logo at top

13. **Mobile Navigation Overlay**
    - `.nav-menu` → fixed top 0 right -100%, width 80%, height 100vh, black bg, white text
    - Class `.active` → right 0, transition 0.3s
    - Close button (×) top right
    - Links stacked vertically, large tap targets

14. **Responsive Breakpoints**
    - `@media (max-width: 768px)` — 1 column villas, hamburger nav, reduced font sizes
    - `@media (max-width: 1024px)` — 2 column villas

15. **Scroll Animation Classes**
    - `.fade-in` → opacity 0, transform translateY(30px), transition opacity 0.6s ease-out, transform 0.6s ease-out
    - `.fade-in.visible` → opacity 1, transform translateY(0)

---

## Task 3: Create script.js for animations and mobile nav

**Files:**
- Create: `script.js`

**Content:**

1. **Mobile Navigation Toggle**
```javascript
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navClose = document.querySelector('.nav-close');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('active');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('active');
});
```

2. **Navbar Scroll Effect**
```javascript
const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
```

3. **Scroll Animation (Intersection Observer)**
```javascript
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));
```

4. **Smooth scroll for anchor links**
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu if open
      navMenu.classList.remove('active');
    }
  });
});
```

5. **Add fade-in class to sections in HTML** — Update index.html to add `class="fade-in"` to:
   - About section content (the paragraph)
   - Each villa card
   - Each service item
   - Nyanyi section content
   - Contact section content

---

## Task 4: Copy logo to project and verify all assets

**Files:**
- Copy: `/Users/troybhareswara/images/FullLogo-2.jpg` → `images/FullLogo-2.jpg` in bribarealestate project
- Verify: `images/FullLogo-2.jpg` exists in project

**Note:** The logo is currently in a separate `images/` folder at the user's home directory. Copy it to the bribarealestate project's images folder.

---

## Task 5: Test in browser

**Action:**
- Open `index.html` in a browser
- Verify:
  - Logo displays correctly
  - Navigation is sticky and changes on scroll
  - Hero section centered with tagline and CTA
  - All 8 sections visible
  - Villa cards with placeholder images
  - Services grid with icons
  - Nyanyi teaser with decorative shapes
  - Contact links functional (WhatsApp, email, Instagram)
  - Mobile hamburger menu works
  - Scroll animations trigger on scroll
  - Fully responsive on mobile (test with dev tools)

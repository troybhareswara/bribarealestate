# Briba Real Estate — Landing Page Design Spec

**Date:** 2026-08-04
**Status:** Approved

---

## Overview

Landing page modern luxury black & white untuk PT Briba Real Estate — villa rental di Bali. Fokus pada elegance, simplicity, dan premium feel yang timeless.

---

## Visual Design

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-black` | `#000000` | Primary text, borders, fills |
| `--color-white` | `#FFFFFF` | Background, inverted text |
| `--color-gray-100` | `#F5F5F5` | Subtle backgrounds |
| `--color-gray-200` | `#E5E5E5` | Dividers, borders |
| `--color-gray-300` | `#D4D4D4` | Disabled states |
| `--color-gray-500` | `#737373` | Secondary text |
| `--color-gray-700` | `#404040` | Body text |
| `--color-gray-900` | `#171717` | Headings (slightly softer than pure black) |

### Typography

| Element | Font | Weight | Style |
|---------|------|--------|-------|
| Hero heading | Cormorant Garamond | 700 | Bold, all caps, wide tracking |
| Section headings | Cormorant Garamond | 600 | Normal case, letter-spacing: 0.1em |
| Body text | Lato | 300-400 | Regular, comfortable line-height (1.7) |
| Nav links | Lato | 400 | Uppercase, letter-spacing: 0.05em |

**Font sizes:**
- Hero: 4rem (desktop), 2.5rem (mobile)
- Section headings: 2.5rem
- Body: 1rem
- Small/labels: 0.875rem

### Buttons

**Outlined Style (default):**
```css
.btn {
  border: 1px solid var(--color-black);
  background: transparent;
  color: var(--color-black);
  padding: 0.75rem 2rem;
  transition: all 0.3s ease;
}

.btn:hover {
  background: var(--color-black);
  color: var(--color-white);
}
```

**Sizes:**
- Default: standard padding
- `.btn-large`: larger padding, more presence

---

## Layout & Structure

### Container
- Max-width: 1200px
- Centered with auto margins
- Padding: 1.5rem (mobile), 2rem (desktop)

### Section Spacing
- Vertical padding: 80px (desktop), 60px (mobile)
- Heading + divider + content layout

### Navbar
- **Position:** Sticky (stays at top on scroll)
- **Background:** White with subtle shadow on scroll
- **Desktop:** Logo left, links right, horizontal
- **Mobile:** Logo left, hamburger right, slide-in overlay menu

### Grids

**Villas Section:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 2rem

**Services Section:**
- Auto-fit grid, min 200px per item
- Gap: 1.5rem

---

## Components

### Navigation

**Desktop Nav:**
- Logo (text + image)
- Links: About, Villas, Services, Contact
- Clean underline on hover

**Mobile Nav:**
- Hamburger icon (3 lines)
- Slide-in from right
- Full-height overlay
- Close button (X)
- Links stacked vertically

### Hero Section
- Full viewport height (100vh)
- Background image with dark overlay (50% opacity)
- Centered content: logo, heading, subheading, CTA button
- **No scroll indicator** (user approved removal)

### Villa Cards

**Structure:**
- Image container (4:3 aspect ratio)
- Number badge (01, 02, 03) top-left corner
- Content area: title, description, CTA button

**Hover Effect:**
- Image scales to 1.05
- Overlay darkens (opacity 0.3 → 0.5)
- Card gets subtle box-shadow
- Transition: 0.4s ease

### Service Items

**Structure:**
- SVG icon (24x24)
- Label text below
- Centered layout

**Animation:**
- Fade-in from below on scroll
- Staggered 100ms between items

### Contact Items

**Structure:**
- Icon left, text right (horizontal)
- Two-line text: label + value

**Hover:**
- Subtle background highlight
- Icon color shift

### Section Dividers

- Thin horizontal line below headings
- Width: 60px
- Color: var(--color-gray-300)
- Centered

### Footer
- Simple centered layout
- Logo text "B"
- Copyright text
- Back-to-top link

---

## Animations & Interactions

### Scroll Reveal
```css
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- Triggered when element enters viewport
- Staggered delay for grid items (100ms each)

### Hover States
- All interactive elements: 0.3s ease transition
- Buttons: background/color swap
- Cards: image scale + shadow
- Links: underline or color shift

### Navbar Scroll Behavior
- Add `.scrolled` class when scrollY > 50
- Apply subtle shadow
- Smooth transition

---

## JavaScript Functionality

### Mobile Navigation
- Toggle menu open/close on hamburger click
- Close on backdrop click
- Close on link click
- Body scroll lock when menu open

### Scroll Animations
- Intersection Observer for fade-in reveals
- Threshold: 0.1 (trigger early)
- Once: true (only animate once)

### Navbar Scroll Effect
- Listen to scroll event
- Add/remove `.scrolled` class

### Smooth Scroll
- Native CSS `scroll-behavior: smooth`
- Or JS fallback for older browsers

---

## Responsive Breakpoints

```css
/* Mobile first */
@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

- Mobile: single column, stacked layout
- Tablet: 2 columns where applicable
- Desktop: full layout as designed

---

## Accessibility

- Semantic HTML (nav, header, main, section, article, footer)
- ARIA labels on interactive elements
- Focus states for keyboard navigation
- Alt text on all images
- Sufficient color contrast (WCAG AA)

---

## Files to Create

1. `styles.css` — all styles
2. `script.js` — all JavaScript functionality

---

## Summary

Modern luxury black & white aesthetic dengan:
- Cormorant Garamond headings + Lato body
- Outlined buttons dengan hover invert
- Sticky navbar dengan scroll effect
- Subtle fade-in animations
- Elegant dividers
- Zoom overlay hover pada villa cards
- Balanced spacing (~80px sections)

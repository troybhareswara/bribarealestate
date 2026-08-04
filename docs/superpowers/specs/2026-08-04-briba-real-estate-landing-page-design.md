# PT Briba Real Estate — Landing Page Design Spec

**Date:** 2026-08-04
**Project:** Black & White Luxury Landing Page for PT Briba Real Estate

---

## 1. Concept & Vision

A minimal editorial, black & white luxury landing page for PT Briba Real Estate — an established Balinese family business offering 3 premium daily-rent villas. The page tells the 20-year heritage story with elegance and restraint, showcasing villas as curated retreats and building trust through transparency. Every element should feel refined, timeless, and premium — like a luxury lifestyle magazine spread.

---

## 2. Design Language

### Aesthetic Direction
Minimal Editorial — generous whitespace, restrained typography, clean lines. Luxury through simplicity, not embellishment.

### Color Palette
| Role | Value |
|---|---|
| Primary / Text | `#000000` (pure black) |
| Background | `#FFFFFF` (pure white) |
| Body text | `#333333` (softer reading black) |
| Borders / Dividers | `rgba(0,0,0,0.1)` |
| Card shadow | `0 4px 20px rgba(0,0,0,0.06)` |

### Typography
| Element | Font | Weight |
|---|---|---|
| Headings (H1–H3) | Cormorant Garamond | 400–600 |
| Body / UI text | Lato | 300–400 |
| Buttons | Lato | 500, uppercase, letter-spacing: 2px |

### Motion & Animation
- Scroll-triggered fade-in animations (elements slide up slightly while fading in)
- Smooth, subtle — duration ~600ms, ease-out timing
- No jarring or playful animations — all motion should feel refined

### Visual Assets
- **Logo:** `images/FullLogo-2.jpg` (provided by client)
- **Villa photos:** Placeholder images (client will provide real photos later)
- **Icons:** Minimal line icons for services (SVG inline)
- **Nyanyi teaser:** Styled placeholder section (no image required)

---

## 3. Layout & Structure

### Page Sections (top to bottom)

1. **Navigation** — Sticky top nav
   - Small logo (left)
   - Anchor links: About, Villas, Services, Nyanyi, Contact (right)
   - Transparent on hero, white background on scroll

2. **Hero** — Full viewport height, centered
   - Large centered logo
   - Tagline: "Timeless Luxury, Balinese Soul"
   - CTA button: "Explore Villas" (scrolls to villas section)
   - Clean, minimal — no background image

3. **About** — Centered text section
   - Section title: "Our Story"
   - Paragraph: 20-year family legacy, renovation, daily rental model, service-first philosophy
   - Elegant, readable, not too long

4. **Villas** — 3-column grid (1 column on mobile)
   - Section title: "Our Villas"
   - 3 cards: Villa Vintage Berawa 1, 2, 3
   - Each card: placeholder image, villa name, brief tagline, "View on Airbnb" button linking to respective Airbnb URL
   - Card hover: subtle lift with shadow

5. **Services** — Icon + text grid
   - Section title: "Guest Services"
   - 6 service items in a responsive grid (3×2 on desktop, 2×3 on tablet, 1×6 on mobile):
     - Airport Pickup
     - Motorcycle Rental
     - Birthday Decoration
     - Pool Decoration
     - Baby Cot Available
     - Extra Beds
   - Simple SVG icons, service name below

6. **Nyanyi Teaser** — Centered section with styled background
   - Section title: "Coming Soon — Nyanyi"
   - Tagline: "A New Chapter in Bali Living"
   - Description: Residential complex with swimming pool, coffee shops, and more — launching this year
   - Visual placeholder: decorative geometric shapes or gradient background
   - CTA button: "Inquire Now" (opens WhatsApp)

7. **Contact** — Centered section
   - Section title: "Get in Touch"
   - Contact details: WhatsApp, Email, Instagram
   - Each with icon + link
   - CTA button: "Chat with Us on WhatsApp" (direct WhatsApp link)
   - Instagram: @bribarealestate

8. **Footer**
   - Small logo
   - Copyright: "© 2026 PT Briba Real Estate. All rights reserved."

---

## 4. Component Inventory

### Navigation Bar
- **Default:** Transparent background, white text (over hero)
- **Scrolled:** White background, black text, subtle shadow
- **Mobile:** Hamburger menu → slide-in overlay

### Hero CTA Button
- **Default:** Solid black background, white text
- **Hover:** Slight opacity change (0.85)

### Villa Card
- **Default:** White background, subtle shadow, placeholder image
- **Hover:** Shadow deepens, slight translateY(-4px) lift
- Image placeholder: gray gradient box (client will replace with real photos)

### Service Item
- **Default:** Icon + label, centered
- **Hover:** Icon darkens slightly

### CTA Button (all variants)
- Solid black background, white text
- Uppercase, letter-spaced
- Hover: opacity 0.85
- Border radius: 0 (sharp corners for luxury feel)

### WhatsApp / Social Links
- Icon + text
- Underline on hover
- WhatsApp opens in new tab

---

## 5. Airbnb Links (Client-provided)

| Villa | Airbnb URL |
|---|---|
| Villa Vintage Berawa 1 | https://www.airbnb.com/rooms/1589485809328757219 |
| Villa Vintage Berawa 2 | https://www.airbnb.com/rooms/1281611453844261890 |
| Villa Vintage Berawa 3 | https://www.airbnb.com/rooms/1346703468716424163 |

---

## 6. Contact Details (Client-provided)

| Channel | Value |
|---|---|
| WhatsApp | +62 853 3783 5809 |
| Email | Bribarealestate@gmail.com |
| Instagram | @bribarealestate |

---

## 7. Technical Approach

- **Stack:** Pure HTML, CSS, JavaScript (no frameworks, no build tools)
- **File structure:**
  - `index.html` — single page
  - `styles.css` — all styles
  - `script.js` — scroll animations and mobile nav toggle
  - `images/FullLogo-2.jpg` — logo (existing)
- **Fonts:** Google Fonts (Cormorant Garamond + Lato)
- **Responsive:** Mobile-first, breakpoints at 768px and 1024px
- **No external JS libraries** — vanilla JS only for animations and mobile menu
- **Images:** Placeholder gradient boxes for villa photos (client to provide replacements)

---

## 8. Scope Notes

- Villa photos are placeholders only — client will provide real images
- No backend, no form submissions — contact is via WhatsApp/email/instagram links
- Nyanyi teaser is a placeholder — client can update with real project details when available

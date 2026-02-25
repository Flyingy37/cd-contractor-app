# Contractor - Construction Project Management Suite

A professional landing page for a Tel Aviv-based Construction Project Manager. This project positions the brand as a high-end "Project Management" authority, focusing on luxury renovations and large-scale construction oversight in central Israel.

## Project Overview

The "Contractor" platform is a comprehensive service hub that bridges the gap between architectural vision and on-site execution. It features a robust portfolio, dynamic service modules, and a conversion-optimized user experience tailored for the Tel Aviv market.

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Icons:** lucide-react (SVG icon library)
- **Animations:** Native IntersectionObserver API (no external dependencies)
- **SEO:** Schema.org JSON-LD (HomeAndConstructionBusiness + Service types)
- **Version Control:** GitHub

## Key Features

- **Hero Section:** Full-screen with trust badge, stats row, and dual CTA buttons
- **Services Grid:** 6 service cards with hover animations and colored icon accents
- **Portfolio:** Filterable project cards (Renovation / Construction / Commercial)
- **Testimonials:** Review cards with Google rating strip
- **Contact Form:** Async submit with loading state and success confirmation
- **Floating WhatsApp Button:** Fixed position with drop-shadow and hover scale
- **Mobile CTA Bar:** Sticky bottom bar (mobile only), auto-hides when contact section is visible
- **Scroll Animations:** FadeIn component using IntersectionObserver
- **Responsive Design:** Optimized for mobile, tablet, and desktop

## SEO Strategy

Local authority SEO for the Tel Aviv construction market:

1. **Keywords:** "קבלן שיפוצים בתל אביב", "שיפוץ דירה במרכז", "קבלן רשום", "ניהול פרויקטים בנייה"
2. **Structured Data:** Two JSON-LD schemas — `HomeAndConstructionBusiness` (with priceRange, geo, openingHours) and `Service` (with OfferCatalog)
3. **Meta Tags:** Title, description, and keywords via Next.js Metadata API
4. **Performance:** No emoji scripts, SVG icons, Tailwind purge, zero runtime CSS-in-JS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Repository Structure

```text
contractor-app/
├── app/
│   ├── layout.tsx           # Root layout, JSON-LD schemas, metadata
│   ├── page.tsx             # Page composition
│   └── globals.css          # Tailwind v4 theme tokens (color palette)
└── components/
    ├── Navbar.tsx            # Scroll-aware, active section tracking
    ├── Hero.tsx              # Full-screen hero with stats
    ├── Services.tsx          # Service cards + stats counters
    ├── Portfolio.tsx         # Filterable project grid
    ├── Testimonials.tsx      # Review cards + Google rating
    ├── Contact.tsx           # Async contact form
    ├── CtaStrip.tsx          # Mid-page CTA banner
    ├── Footer.tsx            # Links, social icons, contact info
    ├── FloatingButtons.tsx   # WhatsApp + back-to-top
    ├── MobileCtaBar.tsx      # Mobile sticky bottom CTA
    └── FadeIn.tsx            # Scroll animation wrapper
```

---

Created as part of the 5-Unit Data Analysis and Web Development Track - 2026.

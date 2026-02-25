import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "קונטרקטור - שיפוץ ובנייה בתל אביב",
  description: "קבלן שיפוצים מומלץ בתל אביב המתמחה בשיפוץ דירות, בנייה חדשה וניהול פרויקטים במרכז. 15 שנות ניסיון ו-98% שביעות רצון.",
  keywords: ["קבלן שיפוצים בתל אביב", "שיפוץ דירה במרכז", "קבלן רשום", "מחיר שיפוץ דירה", "קונטרקטור שיפוץ"],
  viewport: "width=device-width, initial-scale=1",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "קונטרקטור - ניהול פרויקטים ושיפוצים בתל אביב",
  "description": "מנהל פרויקטים וקבלן שיפוצים מומחה בתל אביב. פיקוח אתר, סנכרון קבלני משנה ועמידה בלוחות זמנים. 15 שנות ניסיון ו-98% שביעות רצון.",
  "url": "https://mycontractor.co.il",
  "keywords": "קבלן שיפוצים בתל אביב, שיפוץ דירה במרכז, קבלן רשום, מחיר שיפוץ דירה, ניהול פרויקטים בנייה",
  "telephone": "050-1234567",
  "priceRange": "₪₪₪",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "תל אביב",
    "addressRegion": "מרכז",
    "addressCountry": "IL",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.0853,
    "longitude": 34.7818,
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    "opens": "08:00",
    "closes": "18:00",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Project Management for Construction and Renovation",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "קונטרקטור - ניהול פרויקטים ושיפוצים",
    "description": "מנהל פרויקטים מומחה בבנייה ושיפוצים בתל אביב, המעניק ליווי מקצועי, פיקוח אתר וניהול קבלני משנה.",
  },
  "areaServed": "Tel Aviv and Central District",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Project Management Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Construction Supervision & Coordination",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

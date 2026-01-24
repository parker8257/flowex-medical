"use client";

import { siteConfig } from "@/config/site";

export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description.pl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PL",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description: "Automatyzacja procesów dla gabinetów medycznych i salonów beauty. Rezerwacje 24/7, inteligentne przypomnienia, zbieranie opinii.",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.2297,
      longitude: 21.0122,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "15",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Business Process Automation",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    areaServed: {
      "@type": "Country",
      name: "Poland",
    },
    description: "Kompleksowa automatyzacja dla gabinetów medycznych i salonów beauty: rezerwacje 24/7, chatboty AI, przypomnienia, zbieranie opinii, zarządzanie fakturami.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PLN",
      lowPrice: "699",
      highPrice: "5000",
      offerCount: "3",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Ile kosztuje wdrożenie automatyzacji?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Setup zaczyna się od 4,000 PLN dla planu Starter. Miesięczny abonament od 699 PLN. Oferujemy darmową konsultację, podczas której wycenimy Twój projekt.",
        },
      },
      {
        "@type": "Question",
        name: "Jak długo trwa wdrożenie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typowe wdrożenie trwa 7-14 dni. Proste automatyzacje możemy uruchomić nawet w 48 godzin. Od kontaktu do działającego systemu: 2-3 tygodnie.",
        },
      },
      {
        "@type": "Question",
        name: "Czy dane pacjentów są bezpieczne?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak. Stosujemy szyfrowanie TLS 1.3, AES-256. Jesteśmy w pełni zgodni z RODO/GDPR. Podpisujemy DPA z każdym klientem.",
        },
      },
      {
        "@type": "Question",
        name: "Czy muszę znać się na technice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nie. Wszystko konfigurujemy za Ciebie. Po wdrożeniu otrzymujesz prosty interface i szkolenie w 1 godzinę.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

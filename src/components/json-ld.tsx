import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sunriselandscapegc.com",
    name: COMPANY.name,
    image: "https://sunriselandscapegc.com/images/landing_page_white_background-2304w.png",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Marysville",
      addressRegion: "WA",
      postalCode: "98270",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.0518,
      longitude: -122.1771,
    },
    url: "https://sunriselandscapegc.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: `${area.city}, ${area.state}`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Landscaping & Contracting Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
        },
      })),
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

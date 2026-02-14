import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Professional landscaping, hardscaping, concrete work, retaining walls, pavers, drainage, pool restoration, excavation, and material delivery services in North Snohomish County, WA.",
  openGraph: {
    title: "Our Services | Sunrise Landscape General Contractor",
    description: "Comprehensive landscaping and general contracting services for residential and commercial properties in North Snohomish County.",
    images: [{ url: "/og-banner.png", width: 1200, height: 630, alt: "Sunrise Landscape General Contractor Inc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Sunrise Landscape General Contractor",
    description: "Comprehensive landscaping and general contracting services for residential and commercial properties in North Snohomish County.",
    images: ["/og-banner.png"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

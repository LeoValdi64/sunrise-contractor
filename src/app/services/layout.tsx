import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Professional landscaping, hardscaping, concrete work, retaining walls, pavers, drainage, pool restoration, excavation, and material delivery services in North Snohomish County, WA.",
  openGraph: {
    title: "Our Services | Sunrise Landscape General Contractor",
    description: "Comprehensive landscaping and general contracting services for residential and commercial properties in North Snohomish County.",
    images: [{ url: "/images/new+landscaping+design-1920w.jpg" }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

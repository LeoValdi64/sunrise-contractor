import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Professional landscaping, hardscaping, concrete work, retaining walls, pavers, drainage, pool restoration, excavation, and material delivery services in North Snohomish County, WA.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

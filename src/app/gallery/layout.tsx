import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "Browse our portfolio of completed landscaping, hardscaping, retaining wall, pool restoration, and excavation projects across Snohomish County, WA.",
  openGraph: {
    title: "Project Gallery | Sunrise Landscape General Contractor",
    description: "Browse our portfolio of completed landscaping, hardscaping, retaining wall, pool restoration, and excavation projects across Snohomish County, WA.",
    images: [{ url: "/og-banner.png", width: 1200, height: 630, alt: "Sunrise Landscape General Contractor Inc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Gallery | Sunrise Landscape General Contractor",
    description: "Browse our portfolio of completed landscaping, hardscaping, retaining wall, pool restoration, and excavation projects across Snohomish County, WA.",
    images: ["/og-banner.png"],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

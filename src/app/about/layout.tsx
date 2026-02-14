import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Sunrise Landscape General Contractor Inc — locally owned and operated in Marysville, WA. 12+ years serving North Snohomish County with professional landscaping and contracting services.",
  openGraph: {
    title: "About Us | Sunrise Landscape General Contractor",
    description: "Locally owned and operated in Marysville, WA. 12+ years of professional landscaping and general contracting in North Snohomish County.",
    images: [{ url: "/og-banner.png", width: 1200, height: 630, alt: "Sunrise Landscape General Contractor Inc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Sunrise Landscape General Contractor",
    description: "Locally owned and operated in Marysville, WA. 12+ years of professional landscaping and general contracting in North Snohomish County.",
    images: ["/og-banner.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

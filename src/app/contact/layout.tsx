import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Sunrise Landscape General Contractor Inc for a free estimate. Call (425) 903-7666 or fill out our online form. Serving Marysville, Everett, Arlington, Lake Stevens, and North Snohomish County.",
  openGraph: {
    title: "Contact Us | Sunrise Landscape General Contractor",
    description: "Get a free estimate for your landscaping or contracting project. Call (425) 903-7666 or request a quote online.",
    images: [{ url: "/images/Excavation+project-1920w.jpg" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Sunrise Landscape General Contractor Inc for a free estimate. Call (425) 903-7666 or fill out our online form. Serving Marysville, Everett, Arlington, Lake Stevens, and North Snohomish County.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

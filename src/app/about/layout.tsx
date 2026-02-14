import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Sunrise Landscape General Contractor Inc — locally owned and operated in Marysville, WA. 12+ years serving North Snohomish County with professional landscaping and contracting services.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

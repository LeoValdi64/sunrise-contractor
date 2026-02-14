import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "Browse our portfolio of completed landscaping, hardscaping, retaining wall, pool restoration, and excavation projects across Snohomish County, WA.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

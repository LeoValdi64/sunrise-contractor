import type { Metadata } from "next";
import { Anton, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingButtons } from "@/components/floating-buttons";
import { LocalBusinessJsonLd } from "@/components/json-ld";

const anton = Anton({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunrise.cornerintel.com"),
  title: {
    default: "Sunrise Landscape General Contractor Inc | Marysville, WA",
    template: "%s | Sunrise Landscape General Contractor",
  },
  description:
    "Professional landscaping, hardscaping, concrete, retaining walls, pool restoration, and excavation services in Marysville, WA and North Snohomish County. Licensed & insured. Free estimates. Call (425) 903-7666.",
  keywords: [
    "landscaping Marysville WA",
    "general contractor Snohomish County",
    "retaining walls Everett WA",
    "hardscaping Arlington WA",
    "pool restoration Washington",
    "concrete work Lake Stevens",
    "drainage systems",
    "excavation contractor",
    "pavers walkways",
    "landscape design",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sunrise Landscape General Contractor Inc",
    title: "Sunrise Landscape General Contractor Inc",
    description:
      "Professional landscaping, hardscaping, and general contracting services in Marysville, WA and Snohomish County. 12+ years experience. Licensed & insured. Free estimates.",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Sunrise Landscape General Contractor Inc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunrise Landscape General Contractor Inc",
    description:
      "Professional landscaping, hardscaping, and general contracting services in Marysville, WA and Snohomish County. Licensed & insured. Free estimates.",
    images: ["/og-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body
        className={`${anton.variable} ${openSans.variable} font-[family-name:var(--font-body)] antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}

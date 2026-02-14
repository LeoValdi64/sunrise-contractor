import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCTA } from "@/components/mobile-cta";
import { LocalBusinessJsonLd } from "@/components/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunriselandscapegc.com"),
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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sunrise Landscape General Contractor Inc",
    title: "Sunrise Landscape General Contractor Inc | Marysville, WA",
    description:
      "Professional landscaping and general contracting services in North Snohomish County. 12+ years experience. Free estimates.",
    images: [
      {
        url: "/images/landing_page_white_background-2304w.png",
        width: 2304,
        height: 1200,
        alt: "Sunrise Landscape General Contractor Inc",
      },
    ],
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
    <html lang="en">
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}

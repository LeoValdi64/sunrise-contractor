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
        url: "/images/%232_Sunrise-Landscape-General-Contrator-Inc.png",
        width: 800,
        height: 400,
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
        className={`${anton.variable} ${openSans.variable} font-[family-name:var(--font-body)] antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}

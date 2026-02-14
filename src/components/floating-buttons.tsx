"use client";

import { Phone, Scissors, Mail, Heart } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";

export function FloatingButtons() {
  return (
    <>
      {/* Desktop floating side buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1">
        <Link
          href="/contact-us"
          className="bg-brand-purple hover:bg-brand-purple-light text-white p-3 rounded-l-lg transition-colors"
          aria-label="Contact us"
        >
          <Phone className="h-5 w-5" />
        </Link>
        <Link
          href="/landscape"
          className="bg-brand-purple hover:bg-brand-purple-light text-white p-3 rounded-l-lg transition-colors"
          aria-label="Services"
        >
          <Scissors className="h-5 w-5" />
        </Link>
        <a
          href={`mailto:${COMPANY.email}`}
          className="bg-brand-purple hover:bg-brand-purple-light text-white p-3 rounded-l-lg transition-colors"
          aria-label="Email us"
        >
          <Mail className="h-5 w-5" />
        </a>
        <Link
          href="/photo-gallery"
          className="bg-brand-purple hover:bg-brand-purple-light text-white p-3 rounded-l-lg transition-colors"
          aria-label="Gallery"
        >
          <Heart className="h-5 w-5" />
        </Link>
      </div>

      {/* Purple "Call Us Today!" CTA button - bottom right */}
      <a
        href={COMPANY.phoneHref}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-light text-white px-5 py-3.5 rounded-full shadow-2xl transition-colors font-bold text-sm"
        aria-label="Call us today"
      >
        <Phone className="h-5 w-5 animate-pulse" />
        <span className="hidden sm:inline">Call Us Today!</span>
        <span className="sm:hidden">Call Now</span>
      </a>
    </>
  );
}

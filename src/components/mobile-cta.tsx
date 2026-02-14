"use client";

import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function MobileCTA() {
  return (
    <a
      href={COMPANY.phoneHref}
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 bg-brand-green text-white px-5 py-3.5 rounded-full shadow-2xl hover:bg-brand-green-light transition-colors"
      aria-label="Call us"
    >
      <Phone className="h-5 w-5 animate-pulse" />
      <span className="font-semibold text-sm">Call Now</span>
    </a>
  );
}

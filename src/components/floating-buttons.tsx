"use client";

import { Phone, Scissors, Mail, Heart } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";
import Script from "next/script";

const sideButtons = [
  { href: "/contact", icon: Phone, label: "Call Us", isExternal: false },
  { href: "/services", icon: Scissors, label: "Services", isExternal: false },
  { href: `mailto:${COMPANY.email}`, icon: Mail, label: "Email Us", isExternal: true },
  { href: "/gallery", icon: Heart, label: "Gallery", isExternal: false },
];

export function FloatingButtons() {
  return (
    <>
      {/* Desktop floating side buttons with tooltips */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1">
        {sideButtons.map((btn) => {
          const Icon = btn.icon;
          const content = (
            <div className="group relative">
              <div className="bg-brand-purple hover:bg-brand-purple-light text-white p-3 rounded-l-lg transition-all duration-200 cursor-pointer">
                <Icon className="h-5 w-5" />
              </div>
              {/* Tooltip */}
              <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-lg">
                {btn.label}
                {/* Arrow */}
                <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
              </span>
            </div>
          );

          return btn.isExternal ? (
            <a key={btn.label} href={btn.href} aria-label={btn.label}>
              {content}
            </a>
          ) : (
            <Link key={btn.label} href={btn.href} aria-label={btn.label}>
              {content}
            </Link>
          );
        })}
      </div>

      {/* GoHighLevel AI Voice Agent Widget */}
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6993a0ff0b200700fcb1cd4d"
        strategy="lazyOnload"
      />
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-green text-brand-cream text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>Licensed & Insured | Marysville, WA</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${COMPANY.email}`} className="hover:text-brand-brown-light transition-colors">
              {COMPANY.email}
            </a>
            <a href={COMPANY.phoneHref} className="flex items-center gap-1.5 font-semibold hover:text-brand-brown-light transition-colors">
              <Phone className="h-3.5 w-3.5" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-cream-dark shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src={COMPANY.logo}
                alt={COMPANY.name}
                width={200}
                height={60}
                className="h-12 md:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                link.label === "Services" ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1",
                        pathname.startsWith("/services")
                          ? "text-brand-green bg-brand-cream"
                          : "text-brand-dark hover:text-brand-green hover:bg-brand-cream/50"
                      )}
                    >
                      {link.label}
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} />
                    </Link>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-brand-cream-dark overflow-hidden"
                        >
                          {SERVICES.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-brand-dark hover:bg-brand-cream hover:text-brand-green transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              <service.icon className="h-4 w-4 text-brand-green" />
                              {service.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-brand-green bg-brand-cream"
                        : "text-brand-dark hover:text-brand-green hover:bg-brand-cream/50"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* CTA + Mobile menu */}
            <div className="flex items-center gap-3">
              <Button asChild className="hidden md:inline-flex bg-brand-green hover:bg-brand-green-light text-white">
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-4 w-4 mr-2" />
                  Free Estimate
                </a>
              </Button>

              {/* Mobile menu */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-white p-0">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-brand-cream-dark">
                      <Image
                        src={COMPANY.logo}
                        alt={COMPANY.name}
                        width={180}
                        height={54}
                        className="h-10 w-auto"
                      />
                    </div>
                    <div className="flex-1 overflow-y-auto py-4">
                      {NAV_LINKS.map((link) => (
                        link.label === "Services" ? (
                          <div key={link.href}>
                            <Link
                              href={link.href}
                              className="block px-6 py-3 text-base font-medium text-brand-dark hover:bg-brand-cream transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              Services
                            </Link>
                            <div className="pl-4">
                              {SERVICES.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="flex items-center gap-3 px-6 py-2 text-sm text-muted-foreground hover:text-brand-green hover:bg-brand-cream/50 transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  <service.icon className="h-4 w-4" />
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-6 py-3 text-base font-medium text-brand-dark hover:bg-brand-cream transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        )
                      ))}
                    </div>
                    <div className="p-6 border-t border-brand-cream-dark space-y-3">
                      <Button asChild className="w-full bg-brand-green hover:bg-brand-green-light text-white">
                        <a href={COMPANY.phoneHref}>
                          <Phone className="h-4 w-4 mr-2" />
                          {COMPANY.phone}
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/contact" onClick={() => setMobileOpen(false)}>
                          Request a Quote
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

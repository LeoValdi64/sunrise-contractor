"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { COMPANY, NAV_LINKS_LEFT, NAV_LINKS_RIGHT, NAV_LINKS, LANDSCAPE_DROPDOWN } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [landscapeOpen, setLandscapeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navTop, setNavTop] = useState(0);
  const lastScrollY = useRef(0);
  const orangeBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const barHeight = orangeBarRef.current?.offsetHeight ?? 40;

      // Position nav below orange bar when near top
      if (currentScrollY < barHeight) {
        setNavTop(barHeight - currentScrollY);
      } else {
        setNavTop(0);
      }

      // Compact mode when scrolled past 80px
      setScrolled(currentScrollY > 80);

      lastScrollY.current = currentScrollY;
    };

    // Set initial offset
    const barHeight = orangeBarRef.current?.offsetHeight ?? 40;
    setNavTop(barHeight);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Orange top bar - static, scrolls away naturally */}
      <div ref={orangeBarRef} className="bg-brand-orange text-white text-sm py-2.5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="hidden md:block font-medium">
            Serving Marysville and surrounding areas
          </span>
          <span className="md:hidden text-xs font-medium">Marysville & surrounding areas</span>
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 font-bold hover:text-white/90 transition-colors"
          >
            <span className="hidden sm:inline">Call Us Today!</span>
            <Phone className="h-4 w-4" />
            {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* Main navigation bar - fixed, hides on scroll down / shows on scroll up */}
      <header
        style={{ top: `${navTop}px` }}
        className={cn(
          "fixed left-0 w-full z-50 bg-white shadow-md transition-all duration-200",
        )}
      >
        <div className="container mx-auto px-4">
          <nav className={cn(
            "flex items-center justify-between transition-all duration-200",
            scrolled ? "h-14 lg:h-16" : "h-20 lg:h-24"
          )}>
            {/* Left nav links (desktop) */}
            <div className="hidden lg:flex items-center gap-1 flex-1">
              {NAV_LINKS_LEFT.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setLandscapeOpen(true)}
                    onMouseLeave={() => setLandscapeOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "px-4 py-2 rounded-md text-sm font-semibold uppercase tracking-wide transition-colors inline-flex items-center gap-1",
                        pathname === link.href || pathname.startsWith("/services/")
                          ? "text-brand-orange"
                          : "text-brand-dark hover:text-brand-orange"
                      )}
                    >
                      {link.label}
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", landscapeOpen && "rotate-180")} />
                    </Link>
                    <AnimatePresence>
                      {landscapeOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                        >
                          {LANDSCAPE_DROPDOWN.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-5 py-3 text-sm font-medium text-brand-dark hover:bg-brand-orange hover:text-white transition-colors"
                              onClick={() => setLandscapeOpen(false)}
                            >
                              {item.label}
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
                      "px-4 py-2 rounded-md text-sm font-semibold uppercase tracking-wide transition-colors",
                      pathname === link.href
                        ? "text-brand-orange"
                        : "text-brand-dark hover:text-brand-orange"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Centered logo */}
            <Link href="/" className="flex items-center justify-center shrink-0 lg:mx-8">
              <Image
                src={COMPANY.logo}
                alt={COMPANY.name}
                width={220}
                height={80}
                className={cn("w-auto transition-all duration-200", scrolled ? "h-10 lg:h-12" : "h-16 lg:h-20")}
                priority
              />
            </Link>

            {/* Right nav links (desktop) */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-end">
              {NAV_LINKS_RIGHT.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-semibold uppercase tracking-wide transition-colors",
                    pathname === link.href
                      ? "text-brand-orange"
                      : "text-brand-dark hover:text-brand-orange"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-brand-dark">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-gray-100">
                    <Image
                      src={COMPANY.logo}
                      alt={COMPANY.name}
                      width={180}
                      height={54}
                      className="h-12 w-auto"
                    />
                  </div>
                  <div className="flex-1 overflow-y-auto py-4">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "block px-6 py-3.5 text-base font-semibold uppercase tracking-wide transition-colors",
                          pathname === link.href
                            ? "text-brand-orange bg-orange-50"
                            : "text-brand-dark hover:text-brand-orange hover:bg-orange-50/50"
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                    {/* Landscape sub-items in mobile */}
                    <div className="px-6 py-2">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Landscape Services</p>
                      {LANDSCAPE_DROPDOWN.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 pl-4 text-sm text-gray-600 hover:text-brand-orange transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 border-t border-gray-100 space-y-3">
                    <Button asChild className="w-full bg-brand-purple hover:bg-brand-purple-light text-white font-bold">
                      <a href={COMPANY.phoneHref}>
                        <Phone className="h-4 w-4 mr-2" />
                        Call Us Today!
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                      <Link href="/contact" onClick={() => setMobileOpen(false)}>
                        Request a Quote
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </header>
    </>
  );
}

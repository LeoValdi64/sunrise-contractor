"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight, Phone, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { GALLERY_IMAGES, BEFORE_AFTER_PAIRS, COMPANY } from "@/lib/constants";

const categories = ["All", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];

function AnimatedSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(
    () =>
      activeCategory === "All"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((i) => (i! + 1) % filteredImages.length);
  }, [lightboxIndex, filteredImages.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((i) => (i! - 1 + filteredImages.length) % filteredImages.length);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <Image
          src="/images/stone+pathways-1920w.jpg"
          alt="Project gallery"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/50" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-white mb-4 uppercase">
              Project Gallery
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Browse our portfolio of completed projects across Snohomish County. From retaining walls to pool restorations, see the quality of our work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Transformations"
            title="Before & After"
            description="Drag the slider to reveal the dramatic difference our work makes."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {BEFORE_AFTER_PAIRS.map((pair) => (
              <AnimatedSection key={pair.title}>
                <BeforeAfterSlider
                  before={pair.before}
                  after={pair.after}
                  beforeAlt={`${pair.title} - Before`}
                  afterAlt={`${pair.title} - After`}
                />
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-lg">{pair.title}</h3>
                  <p className="text-sm text-muted-foreground">{pair.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Our Work"
            title="Project Photos"
          />

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                    : "bg-white text-brand-dark hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => {
                // Alternate heights for masonry effect
                const isLarge = i % 5 === 0 || i % 7 === 0;
                return (
                  <motion.div
                    key={img.src}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: i * 0.02 }}
                    className={`relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid ${
                      isLarge ? "aspect-[3/4]" : "aspect-square"
                    }`}
                    onClick={() => setLightboxIndex(i)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <span className="text-white text-sm font-medium">{img.alt}</span>
                      <span className="text-white/70 text-xs mt-1">{img.category}</span>
                      <ZoomIn className="absolute top-4 right-4 h-5 w-5 text-white/80" />
                    </div>
                    {img.beforeAfter && (
                      <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${
                        img.beforeAfter === "before" ? "bg-red-500 text-white" : "bg-green-500 text-white"
                      }`}>
                        {img.beforeAfter === "before" ? "Before" : "After"}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white mb-4 uppercase">
              Like What You See?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Let us bring the same quality craftsmanship to your property. Get a free estimate today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple-light text-white font-bold">
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-5 w-5 mr-2" />
                  {COMPANY.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-10"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation - Previous */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Navigation - Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full mx-16 aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Caption & counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white text-sm bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                {filteredImages[lightboxIndex].alt}
                <span className="text-white/60 ml-3">
                  {lightboxIndex + 1} / {filteredImages.length}
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

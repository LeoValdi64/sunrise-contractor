"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { GALLERY_IMAGES, BEFORE_AFTER_PAIRS } from "@/lib/constants";

const categories = ["All", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];

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
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Gallery</h1>
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
              <div key={pair.title}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-brand-cream">
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-brand-green text-white"
                    : "bg-white text-brand-dark hover:bg-brand-cream-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                  onClick={() => setLightboxIndex(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                    <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                      <span className="text-white text-xs font-medium bg-brand-green/80 px-2 py-1 rounded">
                        {img.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <p className="absolute bottom-4 left-4 text-white text-sm bg-black/50 px-3 py-1.5 rounded">
                {filteredImages[lightboxIndex].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

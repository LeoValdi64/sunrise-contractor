"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ label, title, description, centered = true, light = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {label && (
        <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-wider mb-2">
          {label}
        </span>
      )}
      <h2 className={`font-[family-name:var(--font-heading)] text-3xl md:text-4xl uppercase tracking-wide ${light ? "text-white" : "text-brand-dark"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-gray-300" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

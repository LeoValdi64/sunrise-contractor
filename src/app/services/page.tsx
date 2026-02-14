"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { COMPANY, SERVICES } from "@/lib/constants";
import { useRef } from "react";

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

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <Image
          src="/images/new+landscaping+design-1920w.jpg"
          alt="Professional landscaping services"
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
              Our Services
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive landscaping and general contracting services for residential and commercial properties throughout Snohomish County.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.05}>
                <Link href={`/services/${service.slug}`}>
                  <Card className="group h-full bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.highlight && (
                        <span className="absolute top-3 right-3 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                          Unique Service
                        </span>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2.5 bg-orange-50 rounded-lg group-hover:bg-brand-orange/10 transition-colors">
                          <service.icon className="h-6 w-6 text-brand-orange" />
                        </div>
                        <h2 className="font-bold text-xl text-brand-dark">{service.title}</h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                      <ul className="space-y-1.5 mb-5">
                        {service.features.slice(0, 4).map((f) => (
                          <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-sm font-semibold text-brand-purple group-hover:text-brand-purple-light transition-colors">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-orange">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white mb-4 uppercase">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              No problem! Give us a call or request a quote online. We&apos;ll visit your property and recommend the best solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple-light text-white font-bold">
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-5 w-5 mr-2" />
                  {COMPANY.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-orange font-bold">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

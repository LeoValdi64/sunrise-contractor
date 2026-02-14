"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { QuoteForm } from "@/components/quote-form";
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export function AreaPageClient({ slug }: { slug: string }) {
  const area = SERVICE_AREAS.find((a) => a.slug === slug)!;
  const otherAreas = SERVICE_AREAS.filter((a) => a.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <Image
          src="/images/new+landscaping+design-1920w.jpg"
          alt={`Landscaping services in ${area.city}, ${area.state}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-brand-brown-light mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">{area.city}, {area.state} {area.zip}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Landscaping & Contractor Services in {area.city}, WA
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              {area.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services available */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div {...fadeInUp}>
                <SectionHeading
                  label={`Services in ${area.city}`}
                  title={`What We Offer in ${area.city}, ${area.state}`}
                  centered={false}
                />
                <p className="text-brand-dark leading-relaxed mb-8">
                  Sunrise Landscape General Contractor Inc provides comprehensive landscaping and general contracting services to homeowners and businesses in {area.city}, {area.state}. Our team serves {area.city} and surrounding communities with the same dedication to quality, reliability, and craftsmanship that has made us a trusted name across North Snohomish County for over {COMPANY.yearsExperience} years.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {SERVICES.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div key={service.slug} {...fadeInUp}>
                      <Link href={`/services/${service.slug}`}>
                        <Card className="group h-full bg-white hover:shadow-lg transition-all hover:border-brand-green/20">
                          <CardContent className="p-5">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="p-2 bg-brand-cream rounded-lg">
                                <Icon className="h-5 w-5 text-brand-green" />
                              </div>
                              <h3 className="font-bold text-brand-dark">{service.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {service.shortDescription}
                            </p>
                            <span className="text-sm font-semibold text-brand-green group-hover:text-brand-green-light transition-colors inline-flex items-center">
                              {service.title} in {area.city}
                              <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Why choose us for this area */}
              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">
                  Why {area.city} Homeowners Choose Sunrise
                </h2>
                <div className="space-y-3">
                  {[
                    `Local expertise — we know ${area.city}'s soil, climate, and building requirements`,
                    "Licensed, bonded, and fully insured contractor",
                    "Free on-site estimates with detailed project proposals",
                    "Own fleet of heavy equipment for timely project completion",
                    "12+ years serving North Snohomish County communities",
                    "One-stop shop for landscaping, hardscaping, concrete, and excavation",
                    `Pool & spa restoration available in ${area.city} — a rare local service`,
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 shrink-0" />
                      <span className="text-sm text-brand-dark">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div {...fadeInUp}>
                <Card className="bg-white shadow-lg sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-brand-dark mb-2">
                      Get a Free Estimate in {area.city}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Tell us about your project and we&apos;ll provide a detailed, no-obligation quote.
                    </p>
                    <QuoteForm />
                  </CardContent>
                </Card>
              </motion.div>

              <Card className="bg-brand-green text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">Call Us Today</h3>
                  <p className="text-sm text-white/80 mb-4">Fast, friendly service for {area.city} residents</p>
                  <Button asChild className="w-full bg-brand-brown hover:bg-brand-brown-light text-white">
                    <a href={COMPANY.phoneHref}>
                      <Phone className="h-4 w-4 mr-2" />
                      {COMPANY.phone}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Nearby Areas"
            title="We Also Serve"
          />
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="flex items-center gap-2 px-5 py-3 bg-brand-cream rounded-full text-sm font-medium text-brand-dark hover:bg-brand-green hover:text-white transition-colors"
              >
                <MapPin className="h-3.5 w-3.5" />
                {a.city}, {a.state}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

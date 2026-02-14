"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { COMPANY, TESTIMONIALS } from "@/lib/constants";
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

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <Image
          src="/images/Excavation+project-1920w.jpg"
          alt="Contact Sunrise Landscape"
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
              Contact Us
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to start your project? Get in touch for a free, no-obligation estimate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-2">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-brand-dark mb-2">Request a Free Estimate</h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and we&apos;ll get back to you within 24 hours. All fields marked with * are required.
                  </p>
                  <QuoteForm />
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact info sidebar */}
            <AnimatedSection delay={0.1} className="space-y-6">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-bold text-brand-dark">Get In Touch</h3>

                  <div className="space-y-4">
                    <a
                      href={COMPANY.phoneHref}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-brand-orange/5 transition-colors group"
                    >
                      <div className="p-2 bg-brand-orange rounded-lg shrink-0">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-dark group-hover:text-brand-orange transition-colors">Phone</p>
                        <p className="text-sm text-muted-foreground">{COMPANY.phone}</p>
                        <p className="text-xs text-brand-purple mt-1 font-medium">Tap to call</p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-brand-orange/5 transition-colors group"
                    >
                      <div className="p-2 bg-brand-orange rounded-lg shrink-0">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-dark group-hover:text-brand-orange transition-colors">Email</p>
                        <p className="text-sm text-muted-foreground break-all">{COMPANY.email}</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="p-2 bg-brand-orange rounded-lg shrink-0">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-dark">Location</p>
                        <p className="text-sm text-muted-foreground">{COMPANY.address}</p>
                        <p className="text-xs text-muted-foreground mt-1">Serving a 60-mile radius</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="p-2 bg-brand-orange rounded-lg shrink-0">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-dark">Business Hours</p>
                        <div className="text-sm text-muted-foreground mt-1 space-y-0.5">
                          <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                          <p>Saturday: 7:00 AM - 6:00 PM</p>
                          <p className="text-brand-dark font-medium">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="bg-white shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86017.38747705!2d-122.23!3d48.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548558e04b8e6d89%3A0x7e49d583a5e37ebb!2sMarysville%2C%20WA!5e0!3m2!1sen!1sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Marysville, WA service area map"
                    className="absolute inset-0"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Based in Marysville, WA — Serving North Snohomish County
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonial highlight */}
      <section className="py-16 bg-brand-navy">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Don't Just Take Our Word"
            title="What Clients Say"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="bg-brand-navy-light border border-white/10 rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <p className="text-gray-200 leading-relaxed mb-4 flex-1 text-sm">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

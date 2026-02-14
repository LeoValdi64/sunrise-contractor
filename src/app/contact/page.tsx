"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteForm } from "@/components/quote-form";
import { COMPANY } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

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
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to start your project? Get in touch for a free, no-obligation estimate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div {...fadeInUp} className="lg:col-span-2">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-brand-dark mb-2">Request a Free Estimate</h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and we&apos;ll get back to you within 24 hours. All fields marked with * are required.
                  </p>
                  <QuoteForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div {...fadeInUp} className="space-y-6">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-bold text-brand-dark">Get In Touch</h3>

                  <div className="space-y-4">
                    <a
                      href={COMPANY.phoneHref}
                      className="flex items-start gap-4 p-4 bg-brand-cream rounded-lg hover:bg-brand-cream-dark transition-colors group"
                    >
                      <div className="p-2 bg-brand-green rounded-lg shrink-0">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-dark group-hover:text-brand-green transition-colors">Phone</p>
                        <p className="text-sm text-muted-foreground">{COMPANY.phone}</p>
                        <p className="text-xs text-brand-green mt-1">Click to call</p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-start gap-4 p-4 bg-brand-cream rounded-lg hover:bg-brand-cream-dark transition-colors group"
                    >
                      <div className="p-2 bg-brand-green rounded-lg shrink-0">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-dark group-hover:text-brand-green transition-colors">Email</p>
                        <p className="text-sm text-muted-foreground break-all">{COMPANY.email}</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 bg-brand-cream rounded-lg">
                      <div className="p-2 bg-brand-green rounded-lg shrink-0">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-dark">Location</p>
                        <p className="text-sm text-muted-foreground">{COMPANY.address}</p>
                        <p className="text-xs text-muted-foreground mt-1">Serving a 60-mile radius</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-brand-cream rounded-lg">
                      <div className="p-2 bg-brand-green rounded-lg shrink-0">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-dark">Business Hours</p>
                        <p className="text-sm text-muted-foreground">{COMPANY.hours}</p>
                        <p className="text-sm text-muted-foreground">{COMPANY.hoursClosed}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map placeholder */}
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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

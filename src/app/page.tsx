"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Shield,
  Clock,
  Award,
  Star,
  MapPin,
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { ServiceAreaChecker } from "@/components/service-area-checker";
import {
  COMPANY,
  SERVICES,
  SERVICE_AREAS,
  TESTIMONIALS,
  BEFORE_AFTER_PAIRS,
} from "@/lib/constants";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 },
  },
  viewport: { once: true },
};

export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((i) => (i + 1) % TESTIMONIALS.length);
  };
  const prevTestimonial = () => {
    setTestimonialIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center">
        <Image
          src="/images/curved+retaining+wall-1920w.jpg"
          alt="Professional retaining wall installation by Sunrise Landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-brand-brown/90 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Serving North Snohomish County Since 2012
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transform Your
              <span className="text-brand-brown-light"> Outdoor Space</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Professional landscaping, hardscaping, concrete work, and excavation
              services. From retaining walls to pool restoration — we bring your
              vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-green hover:bg-brand-green-light text-white text-lg px-8 py-6"
              >
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-5 w-5 mr-2" />
                  Get Free Estimate
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <Link href="/services">
                  Our Services
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-brand-green text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-white/20">
            {[
              { icon: Shield, label: "Licensed & Insured", sub: "Full coverage for your peace of mind" },
              { icon: Clock, label: "Free Estimates", sub: "No obligation consultations" },
              { icon: Award, label: "12+ Years Experience", sub: "Trusted by hundreds of homeowners" },
            ].map((item) => (
              <motion.div
                key={item.label}
                {...fadeInUp}
                className="flex items-center justify-center gap-4 px-6"
              >
                <item.icon className="h-10 w-10 text-brand-brown-light shrink-0" />
                <div>
                  <p className="font-bold text-lg">{item.label}</p>
                  <p className="text-sm text-white/70">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            description="From landscape design to heavy excavation, we handle every aspect of your outdoor project with precision and care."
          />
          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.map((service, i) => (
              <motion.div key={service.slug} {...fadeInUp} transition={{ delay: i * 0.05, duration: 0.5 }}>
                <Link href={`/services/${service.slug}`}>
                  <Card className="group h-full bg-white hover:shadow-xl transition-all duration-300 border-transparent hover:border-brand-green/20 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {service.highlight && (
                        <span className="absolute top-3 right-3 bg-brand-brown text-white text-xs font-bold px-3 py-1 rounded-full">
                          Unique Service
                        </span>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-brand-cream rounded-lg">
                          <service.icon className="h-5 w-5 text-brand-green" />
                        </div>
                        <h3 className="font-bold text-lg text-brand-dark">{service.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center text-sm font-semibold text-brand-green group-hover:text-brand-green-light transition-colors">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BEFORE/AFTER GALLERY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="See the Difference"
            title="Before & After"
            description="Drag the slider to see the dramatic transformations we deliver for our clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {BEFORE_AFTER_PAIRS.map((pair) => (
              <motion.div key={pair.title} {...fadeInUp}>
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
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white">
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-brand-green">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            {[
              { value: `${COMPANY.projectsCompleted}+`, label: "Projects Completed" },
              { value: `${COMPANY.yearsExperience}+`, label: "Years Experience" },
              { value: `${COMPANY.citiesServed}`, label: "Cities Served" },
            ].map((stat) => (
              <motion.div key={stat.label} {...fadeInUp}>
                <p className="text-5xl md:text-6xl font-bold text-brand-brown-light">{stat.value}</p>
                <p className="text-lg mt-2 text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <SectionHeading
                label="Why Sunrise?"
                title="Why Choose Us"
                centered={false}
              />
              <div className="space-y-5">
                {[
                  "Locally owned & operated — we know Snohomish County",
                  "Licensed, bonded & fully insured for your protection",
                  "One of the only contractors offering pool restoration in the area",
                  "Own fleet of heavy equipment for fast, efficient work",
                  "Free detailed estimates with transparent pricing",
                  "12+ years of proven results and satisfied customers",
                  "From design to completion — one team handles it all",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 shrink-0" />
                    <p className="text-brand-dark">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className="bg-brand-green hover:bg-brand-green-light text-white">
                  <Link href="/about">
                    Learn About Our Team
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="relative">
              <Image
                src="/images/Sunrise+Landscape+Contractor+trucks-1920w.jpg"
                alt="Sunrise Landscape contractor fleet"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-brown text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold">{COMPANY.yearsExperience}+</p>
                <p className="text-sm">Years in Business</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Coverage Area"
            title="Areas We Serve"
            description="Proudly serving communities across North Snohomish County and beyond — within a 60 mile radius of Marysville, WA."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {SERVICE_AREAS.map((area) => (
              <motion.div key={area.slug} {...fadeInUp}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="flex items-center gap-2 p-4 bg-brand-cream rounded-lg hover:bg-brand-cream-dark transition-colors group"
                >
                  <MapPin className="h-4 w-4 text-brand-green shrink-0" />
                  <span className="font-medium text-sm text-brand-dark group-hover:text-brand-green transition-colors">
                    {area.city}, {area.state}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="max-w-md mx-auto text-center">
            <p className="text-sm text-muted-foreground mb-4">Not sure if we serve your area?</p>
            <ServiceAreaChecker />
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from homeowners across Snohomish County."
            light
          />

          <div className="max-w-3xl mx-auto relative">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-dark-light border border-white/10 rounded-2xl p-8 md:p-10"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: TESTIMONIALS[testimonialIndex].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-brown text-brand-brown" />
                ))}
              </div>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                &ldquo;{TESTIMONIALS[testimonialIndex].text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-white">{TESTIMONIALS[testimonialIndex].name}</p>
                <p className="text-sm text-gray-400">{TESTIMONIALS[testimonialIndex].location}</p>
              </div>
            </motion.div>

            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === testimonialIndex ? "bg-brand-brown" : "bg-white/30"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/new+landscaping+design-1920w.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation estimate. We&apos;ll visit your property,
              discuss your vision, and provide a detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-brown hover:bg-brand-brown-light text-white text-lg px-8 py-6"
              >
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-5 w-5 mr-2" />
                  {COMPANY.phone}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <Link href="/contact">
                  Request a Quote Online
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
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
  ClipboardList,
  Pencil,
  Hammer,
  Sparkles,
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
import { useState, useRef } from "react";

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

const PROCESS_STEPS = [
  {
    icon: ClipboardList,
    title: "Consultation",
    description: "We visit your property, listen to your vision, and assess the site conditions.",
    step: "01",
  },
  {
    icon: Pencil,
    title: "Design",
    description: "Our team creates a detailed plan with materials, timeline, and transparent pricing.",
    step: "02",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Our experienced crews execute the project with precision and regular updates.",
    step: "03",
  },
  {
    icon: Sparkles,
    title: "Enjoy",
    description: "We do a final walkthrough to ensure everything meets your expectations.",
    step: "04",
  },
];

function AnimatedSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center wave-separator overflow-hidden">
        <Image
          src="/hero-original.jpg"
          alt="Beautiful outdoor living space with pergola and manicured lawn by Sunrise Landscape"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        <div className="relative flex flex-col items-center text-center px-4 py-10 md:py-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-4 md:mb-6 uppercase drop-shadow-lg">
              Transform Your
              <span className="block text-brand-orange drop-shadow-lg">Outdoor Space</span>
            </h1>
            <p className="text-base md:text-xl text-gray-100 mb-6 md:mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              Professional landscaping, hardscaping, concrete work, and excavation
              services. From retaining walls to pool restoration — we bring your
              vision to life.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto pb-4 md:pb-0"
          >
            <Button
              asChild
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange-light text-white text-lg px-8 py-6 font-bold shadow-lg"
            >
              <Link href="/contact-us">
                Get Free Estimate
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-brand-purple hover:bg-brand-purple-light text-white text-lg px-8 py-6 font-bold shadow-lg"
            >
              <a href={COMPANY.phoneHref}>
                <Phone className="h-5 w-5 mr-2" />
                Call Now: {COMPANY.phone}
              </a>
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
      </section>

      {/* TRUST BAR */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-gray-200">
            {[
              { icon: Shield, label: "Licensed & Insured", sub: "Full coverage for your peace of mind" },
              { icon: Clock, label: "Free Estimates", sub: "No obligation consultations" },
              { icon: Award, label: "12+ Years Experience", sub: "Trusted by hundreds of homeowners" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <div className="flex items-center justify-center gap-4 px-6">
                  <div className="p-2.5 bg-orange-50 rounded-xl">
                    <item.icon className="h-8 w-8 text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-brand-dark">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-gray-50 wave-separator wave-separator-navy">
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
                  <Card className="group h-full bg-white hover:shadow-xl transition-all duration-300 border-transparent hover:border-brand-orange/20 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service.highlight && (
                        <span className="absolute top-3 right-3 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                          Unique Service
                        </span>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-orange-50 rounded-lg group-hover:bg-brand-orange/10 transition-colors">
                          <service.icon className="h-5 w-5 text-brand-orange" />
                        </div>
                        <h3 className="font-bold text-lg text-brand-dark">{service.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center text-sm font-semibold text-brand-purple group-hover:text-brand-purple-light transition-colors">
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
      <section className="py-20 bg-brand-navy wave-separator">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="See the Difference"
            title="Before & After"
            description="Drag the slider to see the dramatic transformations we deliver for our clients."
            light
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
                  <h3 className="font-bold text-lg text-white">{pair.title}</h3>
                  <p className="text-sm text-gray-400">{pair.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-brand-navy font-bold">
              <Link href="/photo-gallery">
                View Full Gallery
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS / TIMELINE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="How It Works"
            title="Our Process"
            description="From initial consultation to project completion, here's what to expect when you work with us."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {PROCESS_STEPS.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.15}>
                <div className="relative text-center group">
                  {/* Connector line */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-orange/40 to-brand-orange/10" />
                  )}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-brand-orange/10 rounded-2xl mb-4 group-hover:bg-brand-orange/20 transition-colors">
                    <step.icon className="h-8 w-8 text-brand-orange" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-brand-navy text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-brand-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: `${COMPANY.projectsCompleted}+`, label: "Projects Completed" },
              { value: `${COMPANY.yearsExperience}+`, label: "Years Experience" },
              { value: `${COMPANY.citiesServed}`, label: "Cities Served" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <p className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl text-brand-orange uppercase">{stat.value}</p>
                <p className="text-lg mt-2 text-gray-300">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50 wave-separator wave-separator-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
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
                    <CheckCircle className="h-5 w-5 text-brand-orange mt-0.5 shrink-0" />
                    <p className="text-brand-dark">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className="bg-brand-purple hover:bg-brand-purple-light text-white font-bold">
                  <Link href="/contact-us">
                    Get a Free Estimate
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="relative">
              <Image
                src="/images/Sunrise+Landscape+Contractor+trucks-1920w.jpg"
                alt="Sunrise Landscape contractor fleet"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-orange text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="font-[family-name:var(--font-heading)] text-3xl">{COMPANY.yearsExperience}+</p>
                <p className="text-sm">Years in Business</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Grid layout with star ratings */}
      <section className="py-20 bg-brand-navy">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from homeowners across Snohomish County."
            light
          />

          {/* Desktop: Grid of 3, Mobile: Carousel */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.1}>
                <div className="bg-brand-navy-light border border-white/10 rounded-2xl p-6 h-full flex flex-col hover:border-brand-orange/30 transition-colors">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <p className="text-gray-200 leading-relaxed mb-4 flex-1 text-sm">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden max-w-lg mx-auto relative">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-navy-light border border-white/10 rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: TESTIMONIALS[testimonialIndex].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-orange text-brand-orange" />
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
                      i === testimonialIndex ? "bg-brand-orange" : "bg-white/30"
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

      {/* SERVICE AREAS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Coverage Area"
            title="Areas We Serve"
            description="Proudly serving communities across North Snohomish County and beyond — within a 60 mile radius of Marysville, WA."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {SERVICE_AREAS.map((area, i) => (
              <AnimatedSection key={area.slug} delay={i * 0.05}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-brand-orange hover:text-white transition-colors group shadow-sm"
                >
                  <MapPin className="h-4 w-4 text-brand-orange group-hover:text-white shrink-0" />
                  <span className="font-medium text-sm text-brand-dark group-hover:text-white transition-colors">
                    {area.city}, {area.state}
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="max-w-md mx-auto text-center">
            <p className="text-sm text-muted-foreground mb-4">Not sure if we serve your area?</p>
            <ServiceAreaChecker />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-brand-orange relative overflow-hidden">
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
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white mb-4 uppercase">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation estimate. We&apos;ll visit your property,
              discuss your vision, and provide a detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-purple hover:bg-brand-purple-light text-white text-lg px-8 py-6 font-bold shadow-lg"
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
                className="border-white text-white hover:bg-white hover:text-brand-orange text-lg px-8 py-6 font-bold"
              >
                <Link href="/contact-us">
                  Request a Quote Online
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

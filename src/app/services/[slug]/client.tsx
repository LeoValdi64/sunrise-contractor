"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  ClipboardList,
  Pencil,
  Hammer,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { QuoteForm } from "@/components/quote-form";
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants";
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

const PROCESS_STEPS = [
  { icon: ClipboardList, title: "Consultation", description: "Free on-site assessment" },
  { icon: Pencil, title: "Design", description: "Detailed plan & quote" },
  { icon: Hammer, title: "Build", description: "Expert execution" },
  { icon: Sparkles, title: "Enjoy", description: "Final walkthrough" },
];

export function ServicePageClient({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug)!;
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <Image
          src={service.heroImage}
          alt={`${service.title} services`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/50" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-brand-orange/80 rounded-xl backdrop-blur-sm">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-white uppercase">
                {service.title}
              </h1>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl">
              {service.shortDescription}
            </p>
            {service.highlight && (
              <span className="inline-block mt-4 bg-brand-purple text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                Exclusive Service — Few Contractors Offer This
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <p className="text-lg leading-relaxed text-brand-dark mb-8">
                  {service.description}
                </p>

                <h2 className="text-2xl font-bold text-brand-dark mb-6">What We Offer</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-brand-orange mt-0.5 shrink-0" />
                      <span className="text-sm text-brand-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Mid-content CTA Banner */}
              <AnimatedSection>
                <div className="bg-brand-navy rounded-2xl p-8 mb-10 text-center">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white mb-2 uppercase">
                    Get a Free {service.title} Estimate
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    Call us today or request a quote online. No obligation, no pressure.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild className="bg-brand-purple hover:bg-brand-purple-light text-white font-bold">
                      <a href={COMPANY.phoneHref}>
                        <Phone className="h-4 w-4 mr-2" />
                        {COMPANY.phone}
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                      <Link href="/contact-us">Request a Quote</Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              {/* Gallery */}
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">Project Photos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.images.map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl group">
                      <Image
                        src={img}
                        alt={`${service.title} project ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Service Areas */}
              <AnimatedSection className="mt-10">
                <h2 className="text-2xl font-bold text-brand-dark mb-4">
                  {service.title} Service Areas
                </h2>
                <p className="text-muted-foreground mb-4">
                  We provide professional {service.title.toLowerCase()} services throughout North Snohomish County:
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className="px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-dark hover:bg-brand-orange hover:text-white transition-colors shadow-sm"
                    >
                      {area.city}, {area.state}
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quote form */}
              <AnimatedSection>
                <Card className="bg-white shadow-lg sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Get a Free Estimate</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </p>
                    <QuoteForm preselectedService={service.slug} />
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Quick contact */}
              <Card className="bg-brand-orange text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">Prefer to Talk?</h3>
                  <p className="text-sm text-white/80 mb-4">Call us for a quick consultation</p>
                  <Button asChild className="w-full bg-brand-purple hover:bg-brand-purple-light text-white">
                    <a href={COMPANY.phoneHref}>
                      <Phone className="h-4 w-4 mr-2" />
                      {COMPANY.phone}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Related services sidebar */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-brand-dark mb-4">Related Services</h3>
                  <div className="space-y-3">
                    {otherServices.map((s) => {
                      const OtherIcon = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="p-2 bg-orange-50 rounded-lg shrink-0 group-hover:bg-brand-orange/10 transition-colors">
                            <OtherIcon className="h-4 w-4 text-brand-orange" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-sm text-brand-dark group-hover:text-brand-orange transition-colors truncate">{s.title}</p>
                          </div>
                          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="How It Works"
            title="Our Process"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {PROCESS_STEPS.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-2xl mb-3">
                    <step.icon className="h-7 w-7 text-brand-orange" />
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-brand-navy text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-brand-dark">{step.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Explore More"
            title="Other Services"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s) => {
              const OtherIcon = s.icon;
              return (
                <Link key={s.slug} href={`/services/${s.slug}`}>
                  <Card className="group h-full hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={s.heroImage}
                        alt={s.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <OtherIcon className="h-4 w-4 text-brand-orange" />
                        <h3 className="font-bold text-brand-dark">{s.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{s.shortDescription}</p>
                      <div className="mt-3 flex items-center text-sm font-medium text-brand-purple group-hover:text-brand-purple-light transition-colors">
                        Learn More
                        <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-orange">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white mb-4 uppercase">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Contact us today for a free, no-obligation estimate on your {service.title.toLowerCase()} project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple-light text-white font-bold">
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-5 w-5 mr-2" />
                  {COMPANY.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-orange font-bold">
                <Link href="/contact-us">
                  Request a Quote Online
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

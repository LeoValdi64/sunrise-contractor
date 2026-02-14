"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
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
        <div className="absolute inset-0 bg-black/70" />
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
              <div className="p-3 bg-brand-green/80 rounded-xl">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{service.title}</h1>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl">
              {service.shortDescription}
            </p>
            {service.highlight && (
              <span className="inline-block mt-4 bg-brand-brown text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                Exclusive Service — Few Contractors Offer This
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.div {...fadeInUp}>
                <p className="text-lg leading-relaxed text-brand-dark mb-8">
                  {service.description}
                </p>

                <h2 className="text-2xl font-bold text-brand-dark mb-6">What We Offer</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 shrink-0" />
                      <span className="text-sm text-brand-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">Project Photos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.images.map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={img}
                        alt={`${service.title} project ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Service Areas */}
              <motion.div {...fadeInUp} className="mt-10">
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
                      className="px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-dark hover:bg-brand-green hover:text-white transition-colors"
                    >
                      {area.city}, {area.state}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quote form */}
              <motion.div {...fadeInUp}>
                <Card className="bg-white shadow-lg sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Get a Free Estimate</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </p>
                    <QuoteForm preselectedService={service.slug} />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick contact */}
              <Card className="bg-brand-green text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">Prefer to Talk?</h3>
                  <p className="text-sm text-white/80 mb-4">Call us for a quick consultation</p>
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

      {/* Other Services */}
      <section className="py-16 bg-white">
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
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <OtherIcon className="h-4 w-4 text-brand-green" />
                        <h3 className="font-bold text-brand-dark">{s.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{s.shortDescription}</p>
                      <div className="mt-3 flex items-center text-sm font-medium text-brand-green">
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
    </>
  );
}

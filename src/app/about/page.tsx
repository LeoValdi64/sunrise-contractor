"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle, Truck, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <Image
          src="/images/Sunrise+Landscape+Contractor+trucks-1920w.jpg"
          alt="Sunrise Landscape team and equipment"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Locally owned and operated in Marysville, WA — proudly serving North Snohomish County for over 12 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <SectionHeading
                label="Our Story"
                title="Built on Hard Work & Quality"
                centered={false}
              />
              <div className="space-y-4 text-brand-dark leading-relaxed">
                <p>
                  Sunrise Landscape General Contractor Inc was founded with a simple mission: deliver exceptional outdoor construction and landscaping services with honesty, craftsmanship, and respect for our clients&apos; vision.
                </p>
                <p>
                  Based in Marysville, Washington, we&apos;ve spent over 12 years building a reputation throughout North Snohomish County as the go-to contractor for everything from landscape design and retaining walls to concrete work and pool restoration.
                </p>
                <p>
                  What started as a small operation has grown into a full-service landscape and general contracting company with our own fleet of heavy equipment, an experienced crew, and a commitment to completing every project on time and on budget.
                </p>
                <p>
                  We&apos;re one of the only contractors in the area offering <strong>pool and spa restoration services</strong>, giving homeowners a trusted local option for bringing their pools back to life.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="grid grid-cols-2 gap-4">
              <Image
                src="/images/Sunrise-2BLandscape-2Btrucks-1920w.jpg"
                alt="Sunrise Landscape fleet"
                width={400}
                height={300}
                className="rounded-xl shadow-lg object-cover w-full h-48"
                sizes="25vw"
              />
              <Image
                src="/images/curved+retaining+walls-1920w.jpg"
                alt="Retaining wall project"
                width={400}
                height={300}
                className="rounded-xl shadow-lg object-cover w-full h-48 mt-8"
                sizes="25vw"
              />
              <Image
                src="/images/Pool+After-1920w.jpg"
                alt="Pool restoration completed"
                width={400}
                height={300}
                className="rounded-xl shadow-lg object-cover w-full h-48"
                sizes="25vw"
              />
              <Image
                src="/images/new+garden+beds-1920w.jpg"
                alt="Garden bed installation"
                width={400}
                height={300}
                className="rounded-xl shadow-lg object-cover w-full h-48 mt-8"
                sizes="25vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="What Drives Us"
            title="Our Core Values"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Integrity",
                description: "Transparent pricing, honest timelines, and straightforward communication on every project.",
              },
              {
                icon: Award,
                title: "Quality",
                description: "We never cut corners. Every project is built to last with premium materials and expert craftsmanship.",
              },
              {
                icon: Users,
                title: "Community",
                description: "We live and work in Snohomish County. Your neighbors are our neighbors, and your property matters to us.",
              },
              {
                icon: Truck,
                title: "Reliability",
                description: "Our own fleet of equipment means we show up on time, every time — no waiting on subcontractors.",
              },
            ].map((value) => (
              <motion.div key={value.title} {...fadeInUp}>
                <Card className="h-full text-center bg-brand-cream border-none">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 bg-brand-green/10 rounded-xl mb-4">
                      <value.icon className="h-8 w-8 text-brand-green" />
                    </div>
                    <h3 className="font-bold text-lg text-brand-dark mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Our Fleet"
            title="Equipment & Capabilities"
            description="We own and maintain a full fleet of heavy equipment, allowing us to handle projects of any size efficiently."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: "/images/Sunrise+Landscape+Contractor+trucks-1920w.jpg",
                alt: "Contractor trucks",
                label: "Work Trucks",
              },
              {
                src: "/images/Sunrise+Landscape+dumptruck-1920w.jpg",
                alt: "Dump truck",
                label: "Dump Trucks",
              },
              {
                src: "/images/Sunrise-2BLandscape-2Btrucks-1920w.jpg",
                alt: "Equipment fleet",
                label: "Full Fleet",
              },
            ].map((item) => (
              <motion.div key={item.label} {...fadeInUp} className="relative group overflow-hidden rounded-xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-bold text-lg">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading
            label="The Sunrise Difference"
            title="What Sets Us Apart"
          />
          <div className="space-y-4">
            {[
              "Over 12 years of experience in landscaping and general contracting",
              "Licensed, bonded, and fully insured — WA State General Contractor",
              "One of the only contractors in the area offering pool & spa restoration",
              "Own fleet of excavators, dump trucks, and heavy equipment",
              "Complete project management from design to final walkthrough",
              "Serving 8+ cities across North Snohomish County and beyond",
              "Hundreds of completed projects and satisfied homeowners",
              "Free, detailed estimates with no pressure",
            ].map((item) => (
              <motion.div key={item} {...fadeInUp} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 shrink-0" />
                <span className="text-brand-dark">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            label="Where We Work"
            title="Serving North Snohomish County"
          />
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mb-8">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="px-4 py-2 bg-brand-cream rounded-full text-sm font-medium hover:bg-brand-green hover:text-white transition-colors"
              >
                {area.city}, {area.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Get in touch today for a free estimate. We&apos;d love to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-brown hover:bg-brand-brown-light text-white">
              <a href={COMPANY.phoneHref}>
                <Phone className="h-5 w-5 mr-2" />
                {COMPANY.phone}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

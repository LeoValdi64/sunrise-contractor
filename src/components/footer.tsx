import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="space-y-4">
            <Image
              src={COMPANY.logo}
              alt={COMPANY.name}
              width={200}
              height={60}
              className="h-14 w-auto brightness-200"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              Professional landscaping and general contracting services serving North Snohomish County and surrounding areas. Licensed, insured, and committed to quality.
            </p>
            <div className="space-y-2 text-sm">
              <a href={COMPANY.phoneHref} className="flex items-center gap-2 hover:text-brand-brown-light transition-colors">
                <Phone className="h-4 w-4 text-brand-green-light" />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-brand-brown-light transition-colors">
                <Mail className="h-4 w-4 text-brand-green-light" />
                {COMPANY.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-green-light shrink-0" />
                {COMPANY.address}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-green-light shrink-0" />
                {COMPANY.hours}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm hover:text-brand-brown-light transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-sm hover:text-brand-brown-light transition-colors"
                  >
                    {area.city}, {area.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-brand-brown-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-brand-brown-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-brand-brown-light transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm hover:text-brand-brown-light transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-brand-brown-light transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-brand-brown-light transition-colors">
                  Free Estimate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Serving Marysville, Everett, Arlington, Lake Stevens & surrounding areas
          </p>
        </div>
      </div>
    </footer>
  );
}

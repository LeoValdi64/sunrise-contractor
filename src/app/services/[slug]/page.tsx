import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, COMPANY } from "@/lib/constants";
import { ServicePageClient } from "./client";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} Services in Marysville, WA`,
    description: `${service.shortDescription} Professional ${service.title.toLowerCase()} services in Marysville, Everett, Arlington, and North Snohomish County. Call ${COMPANY.phone} for a free estimate.`,
    openGraph: {
      title: `${service.title} | Sunrise Landscape General Contractor`,
      description: service.shortDescription,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Pass only the slug — the client component will look up the full service data
  return <ServicePageClient slug={slug} />;
}

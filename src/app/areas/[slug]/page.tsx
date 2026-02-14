import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_AREAS, SERVICES, COMPANY } from "@/lib/constants";
import { AreaPageClient } from "./client";

export function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  if (!area) return {};

  const serviceList = SERVICES.map((s) => s.title).join(", ");

  return {
    title: `Landscaping & Contractor Services in ${area.city}, ${area.state}`,
    description: `Professional landscaping, hardscaping, concrete, retaining walls, and excavation services in ${area.city}, ${area.state}. ${serviceList}. Call ${COMPANY.phone} for a free estimate.`,
    openGraph: {
      title: `Landscaping Services in ${area.city}, WA | Sunrise Landscape`,
      description: `Serving ${area.city} with professional landscaping and contracting services. Free estimates available.`,
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  return <AreaPageClient slug={slug} />;
}

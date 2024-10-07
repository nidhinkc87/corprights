import { getServiceBySlug, getServicesByLimit } from "@/api/service";

import ServiceSection from "@/components/pages/ServiceSection";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const count = process?.env?.NEXT_STATIC_PATH_COUNT;

  const limit = count ? parseInt(count) : 6;

  const { data } = await getServicesByLimit(1, limit);

  return data?.map((page: Service) => ({
    slug: page?.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const { data } = await getServiceBySlug(slug);

  if (data?.length === 0) notFound();

  return <ServiceSection service={data?.[0]} />;
}

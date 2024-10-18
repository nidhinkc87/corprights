import {
  getServiceBySlug,
  getServicesByLimit,
  getServiceSEOBySlug,
} from "@/api/service";

import ServiceSection from "@/components/pages/ServiceSection";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const res = await getServiceSEOBySlug(params.slug);

  if (!res?.data || res?.data?.length === 0) return {};
  const metaData: Metadata = {
    title: res?.data?.[0].meta_title,
    description: res?.data?.[0].meta_description,
  };
  return metaData;
};

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

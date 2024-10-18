import {
  getLicenseBySlug,
  getLicensesByLimit,
  getLicenseSEOBySlug,
} from "@/api/license";

import LicenseSection from "@/components/pages/LicenseSection";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const res = await getLicenseSEOBySlug(params.slug);

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

  const { data } = await getLicensesByLimit(1, limit);

  return data?.map((page: License) => ({
    slug: page?.slug,
  }));
}

export default async function LicensePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const { data } = await getLicenseBySlug(slug);

  if (data?.length === 0) notFound();

  return <LicenseSection license={data?.[0]} />;
}

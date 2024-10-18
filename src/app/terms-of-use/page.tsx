import { getSEOByPath } from "@/api/seo";
import TermsOfUse from "@/components/pages/TermsOfUse";

import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const res = await getSEOByPath("terms-of-use");

  if (!res?.data || res?.data?.length === 0) return {};
  const seo = res?.data?.[0];
  return { title: seo?.meta_title, description: seo?.meta_description };
};

export default function TermsOfUsePage() {
  return <TermsOfUse />;
}

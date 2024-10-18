import { getSEOByPath } from "@/api/seo";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const res = await getSEOByPath("privacy-policy");

  if (!res?.data || res?.data?.length === 0) return {};
  const seo = res?.data?.[0];
  return { title: seo?.meta_title, description: seo?.meta_description };
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}

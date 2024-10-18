import { getSEOByPath } from "@/api/seo";
import CalculatorSection from "@/components/pages/CalculatorSection";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const res = await getSEOByPath("cost-calculator");

  if (!res?.data || res?.data?.length === 0) return {};
  const seo = res?.data?.[0];
  return { title: seo?.meta_title, description: seo?.meta_description };
};

export default function CostCalculatorPage() {
  return <CalculatorSection />;
}

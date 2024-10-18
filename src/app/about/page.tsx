import { getAboutPage } from "@/api/about";
import { getSEOByPath } from "@/api/seo";
import About from "@/components/pages/About";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const res = await getSEOByPath("about");

  if (!res?.data || res?.data?.length === 0) return {};
  const seo = res?.data?.[0];
  return { title: seo?.meta_title, description: seo?.meta_description };
};

export default async function Page() {
  const aboutPage = await getAboutPage();

  return <About about={aboutPage?.data as AboutPage} />;
}

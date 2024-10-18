import Index from "@/components/pages/Index";
import { getHomePageData } from "@/api/home";
import { Metadata } from "next";
import { getSEOByPath } from "@/api/seo";

export const generateMetadata = async (): Promise<Metadata> => {
  const res = await getSEOByPath("home");

  if (!res?.data || res?.data?.length === 0) return {};
  const seo = res?.data?.[0];
  return { title: seo?.meta_title, description: seo?.meta_description };
};

export default async function Page() {
  const homeData = await getHomePageData();

  return <Index homePage={homeData?.data as HomePageAttributes} />;
}

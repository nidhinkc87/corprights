import Index from "@/components/pages/Index";
import { getHomePageData } from "@/api/home";

export default async function Page() {
  const homeData = await getHomePageData();

  return <Index homePage={homeData?.data as HomePageAttributes} />;
}

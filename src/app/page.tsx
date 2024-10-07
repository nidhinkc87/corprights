import { getHomePageData } from "@/api/home";
import Index from "@/components/pages/Index";

export default async function Page() {
  const homeData = await getHomePageData();

  return <Index homePage={homeData?.data as HomePageAttributes} />;
}

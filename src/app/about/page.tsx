import { getAboutPage } from "@/api/about";
import About from "@/components/pages/About";

export default async function Page() {
  const aboutPage = await getAboutPage();

  return <About about={aboutPage?.data as AboutPage} />;
}

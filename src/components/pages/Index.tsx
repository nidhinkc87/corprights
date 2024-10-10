import Awards from "@/components/sections/pages/home/Awards";
import BrochureBanner from "@/components/sections/pages/home/BrochureBanner";
import CostCalculator from "@/components/sections/pages/home/CostCalculator";
import Faq from "@/components/sections/pages/home/Faq";
import FeatureCardSection from "@/components/sections/pages/home/FeatureCardSection";
import GlobalClients from "@/components/sections/pages/home/GlobalClients";
import Hero from "@/components/sections/pages/home/Hero";
import HighlightTitle from "@/components/ui/HighlightTitle";
import Image from "next/image";
import LatestBlogs from "@/components/sections/pages/home/LatestBlogs";
import Overview from "@/components/sections/pages/home/Overview";
import ScheduleSection from "../sections/pages/home/ScheduleSection";
import Services from "@/components/sections/pages/home/Services";
import dynamic from "next/dynamic";
import { getStrapiURL } from "@/api";
import heroBg from "@/assets/home/bg/light-gradient.png";

const Testimonials = dynamic(
  () => import("@/components/sections/pages/home/Testimonials"),
  {
    ssr: false,
  }
);

interface IndexProps {
  homePage: HomePage;
}

function Index({ homePage }: IndexProps) {
  const heroTitle = (
    <h1>
      <HighlightTitle
        title={homePage?.banner?.title}
        highlightText={homePage?.banner?.highlight_text}
      />
    </h1>
  );

  return (
    <>
      <div className="relative pt-[72px] xl:pt-[105px]">
        <Hero
          title={heroTitle}
          description={homePage?.banner?.description}
          bannerImg={getStrapiURL(homePage?.banner?.image?.url)}
          buttonLink={homePage?.banner?.button_link}
          buttonText={homePage?.banner?.button_text}
        />

        <Overview
          opportunityCount={homePage?.opportunity_count}
          opportunityPercent={homePage?.opportunity_percent}
          opportunityTimes={homePage?.opportunity_times}
        />

        <Image
          src={heroBg}
          alt="hero-background-image"
          className="hidden md:block absolute w-full h-full bottom-0 -z-10"
        />
      </div>

      <GlobalClients />

      {homePage?.feature_cards && homePage?.feature_cards?.length > 0 && (
        <FeatureCardSection features={homePage?.feature_cards} />
      )}

      {homePage?.services && homePage?.services?.length > 0 && (
        <Services services={homePage?.services} />
      )}

      <CostCalculator />

      <ScheduleSection />

      {homePage?.faqs && homePage?.faqs.length > 0 && (
        <Faq faqs={homePage?.faqs} />
      )}

      <BrochureBanner />

      <Testimonials />

      {homePage?.awards && homePage?.awards?.length > 0 && (
        <Awards awards={homePage?.awards} />
      )}

      {homePage?.blogs && homePage?.blogs?.length > 0 && (
        <LatestBlogs blogs={homePage?.blogs} />
      )}
    </>
  );
}

export default Index;

import dynamic from "next/dynamic";
import Image from "next/image";

import heroBanner from "@/assets/home/bg/home-banner.jpg";
import heroBg from "@/assets/home/bg/light-gradient.png";
import BrochureBanner from "@/components/sections/pages/home/BrochureBanner";
import CostCalculator from "@/components/sections/pages/home/CostCalculator";
import Faq from "@/components/sections/pages/home/Faq";
import FeatureCardSection from "@/components/sections/pages/home/FeatureCardSection";
import GlobalClients from "@/components/sections/pages/home/GlobalClients";
import Hero from "@/components/sections/pages/home/Hero";
import Overview from "@/components/sections/pages/home/Overview";
import Services from "@/components/sections/pages/home/Services";

const Testimonials = dynamic(
  () => import("@/components/sections/pages/home/Testimonials"),
  {
    ssr: false,
  }
);

function Index() {
  return (
    <>
      <div className="relative">
        <Hero
          title={heroTitle}
          description="Your Partner in Success: Quality Service, Trusted Expertise"
          bannerImg={heroBanner}
        />

        <Overview />

        <Image
          src={heroBg}
          alt="hero-background-image"
          className="hidden md:block absolute w-full h-full bottom-0 -z-10"
        />
      </div>

      <GlobalClients />

      <FeatureCardSection />

      <Services />

      <CostCalculator />

      <Faq />

      <BrochureBanner />

      <Testimonials />
    </>
  );
}

const heroTitle = (
  <h1>
    Simplify Your Business Formation in{" "}
    <span className="text-transparent bg-clip-text bg-primary-gradient">
      Saudi Arabia.
    </span>
  </h1>
);

export default Index;

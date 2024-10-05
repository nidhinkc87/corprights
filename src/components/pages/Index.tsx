import Image from "next/image";
import React from "react";

import heroBanner from "@/assets/home/bg/home-banner.jpg";
import heroBg from "@/assets/home/bg/light-gradient.png";
import BrochureBanner from "@/components/sections/Home/BrochureBanner";
import CostCalculator from "@/components/sections/Home/CostCalculator";
import Faq from "@/components/sections/Home/Faq";
import FeatureCardSection from "@/components/sections/Home/FeatureCardSection";
import GlobalClients from "@/components/sections/Home/GlobalClients";
import Hero from "@/components/sections/Home/Hero";
import Overview from "@/components/sections/Home/Overview";

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

      <CostCalculator />

      <Faq />

      <BrochureBanner />
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

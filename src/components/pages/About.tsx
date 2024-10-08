import dynamic from "next/dynamic";

import Hero from "@/components/sections/about/Hero";
import Overview from "@/components/sections/about/Overview";
import WhyUs from "@/components/sections/about/WhyUs";

const ImageSlider = dynamic(
  () => import("@/components/sections/about/ImageSlider")
);
interface AboutProps {
  about: AboutPage;
}

const About = ({ about }: AboutProps) => {
  return (
    <>
      <Hero banner={about?.banner} phone={about?.phone} />

      <Overview />

      {about?.slider && about?.slider?.length > 0 && (
        <ImageSlider slides={about?.slider} />
      )}

      <WhyUs />
    </>
  );
};

export default About;

import dynamic from "next/dynamic";

import Hero from "@/components/sections/about/Hero";
import OurValues from "@/components/sections/about/OurValues";
import Overview from "@/components/sections/about/Overview";
import Roadmap from "@/components/sections/about/Roadmap";
import WhyUs from "@/components/sections/about/WhyUs";
import Teams from "@/components/sections/about/Teams";
import ClientsAndRecognition from "@/components/sections/about/ClientsAndRecognition";
import Testimonials from "@/components/sections/pages/home/Testimonials";

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

      <OurValues />

      <Roadmap />

      <Teams />

      <ClientsAndRecognition />

      <Testimonials />
    </>
  );
};

export default About;

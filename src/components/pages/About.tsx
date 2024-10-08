import Hero from "@/components/sections/about/Hero";

interface AboutProps {
  about: AboutPage;
}

const About = ({ about }: AboutProps) => {
  return (
    <>
      <Hero banner={about?.banner} phone={about?.phone} />
    </>
  );
};

export default About;

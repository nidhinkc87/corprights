import { BackgroundImage } from "@/components/ui/BackgroundImage";
import { Button } from "@/components/ui/Button";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface HeroProps {
  title: React.ReactNode;
  description: string;
  bannerImg: StaticImageData | string;
  buttonText: string;
  buttonLink: string;
}

const Hero = ({
  title,
  description,
  bannerImg,
  buttonText,
  buttonLink,
}: HeroProps) => {
  return (
    <section className="pt-[89px] lg:pt-[106px] container mx-auto relative">
      <BackgroundImage src={bannerImg} alt="hero-banner">
        <div className="grid">
          <div className="container">
            <div className="lg:max-w-xl xl:max-w-4xl mx-auto text-center self-center pt-52 pb-48 2xl:pt-[137px] 2xl:pb-[213px]">
              {title}

              <p className="text-base md:text-3xl font-normal text-gray-200 mt-7 capitalize">
                {description}
              </p>

              <Button className="mx-auto mt-10 px-8">
                <Link href={buttonLink}>{buttonText}</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full bg-black/60 -z-[1]"></div>
      </BackgroundImage>
    </section>
  );
};

export default Hero;

import { getStrapiURL } from "@/api";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider = ({ slides }: ImageSliderProps) => {
  return (
    <section className="overflow-hidden pb-16 xl:pb-[76px]">
      <Marquee autoFill>
        {slides?.map((slide, index) => (
          <div
            className="w-[390px] h-[262px] xl:w-[560px] xl:h-[400px] mx-[5px] overflow-hidden relative"
            key={`image-slide-${index}`}
          >
            <Image
              src={getStrapiURL(slide?.image?.url)}
              alt={slide?.title}
              fill
              className="w-full object-cover"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ImageSlider;

"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ServiceMarqueeItem from "./ServiceMarqueeItem";

interface ServicesMarqueeProps {
  services: Service[];
}
const ServicesMarquee = ({ services }: ServicesMarqueeProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [slidesToShow, setSlidesToShow] = useState<Service[]>(services);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || services.length === 0) return;

    const calculateSlides = () => {
      const singleSlideHeight =
        slider.children[0]?.getBoundingClientRect().height || 0;

      const containerHeight =
        slider.parentElement?.getBoundingClientRect().height || 0;

      const totalSlidesHeight = singleSlideHeight * services.length;

      if (singleSlideHeight > 0 && containerHeight > 0) {
        if (totalSlidesHeight <= containerHeight) {
          const slidesNeeded = Math.ceil(containerHeight / singleSlideHeight);

          const duplicatedSlides = [];

          while (duplicatedSlides.length < slidesNeeded + services.length) {
            duplicatedSlides.push(...services);
          }

          setSlidesToShow(duplicatedSlides);
        } else {
          setSlidesToShow(services);
        }
      }
    };

    // Use ResizeObserver to detect when the element sizes change
    const observer = new ResizeObserver(calculateSlides);
    observer.observe(slider);

    return () => {
      if (slider) observer.unobserve(slider);
    };
  }, [services]);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      let startPosition = 0;

      const animate = () => {
        startPosition -= 1;

        slider.style.transform = `translateY(${startPosition}px)`;

        if (startPosition <= -slider.scrollHeight / 2) {
          startPosition = 0;
        }

        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        ref={sliderRef}
        className="space-y-3 "
        initial={{ translateY: 0 }}
        animate={{ translateY: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 50,
        }}
      >
        {slidesToShow.map((service, index) => (
          <ServiceMarqueeItem
            key={`service-slide-${index}`}
            service={service}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesMarquee;

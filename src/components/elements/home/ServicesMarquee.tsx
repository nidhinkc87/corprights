"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ServiceMarqueeItem from "./ServiceMarqueeItem";

interface ServicesMarqueeProps {
  services: Service[];
}
const ServicesMarquee = ({ services }: ServicesMarqueeProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

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
        className="space-y-3"
        initial={{ translateY: 0 }}
        animate={{ translateY: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 50,
        }}
      >
        {services.concat(services).map((service, index) => (
          <ServiceMarqueeItem
            key={`service-slide-${index}`}
            service={service}
          />
        ))}
      </motion.div>
      /
    </div>
  );
};

export default ServicesMarquee;

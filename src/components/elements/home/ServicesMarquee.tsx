"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ServiceMarqueeItem from "./ServiceMarqueeItem";

import modalHero from "@/assets/home/modal-header.jpg";

const services = [
  {
    name: "Venture Capital and Incubator",
    image: modalHero,
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi penatibus ut diam congue volutpat ipsum diam tristique magna. Commodo nunc pellentesque facilisi posuere convallis ac at aliquet cras. Purus a sagittis urna euismod curabitur eget nascetur sed metus. Mauris aliquam scelerisque diam quis arcu id facilisis pellentesque tincidunt. Vestibulum et dignissim ut arcu. Turpis consectetur mi in tellus imperdiet tincidunt. Ac bibendum sed adipiscing tellus. Pellentesque eu. Lorem ipsum dolor sit amet consectetur. Morbi penatibus ut diam congue volutpat ipsum diam tristique magna. Commodo nunc pellentesque facilisi posuere convallis ac at aliquet cras. Purus a sagittis urna euismod curabitur eget nascetur sed metus. Mauris aliquam scelerisque diam quis arcu id facilisis pellentesque tincidunt. Vestibulum et dignissim ut arcu. Turpis consectetur mi in tellus imperdiet tincidunt. Ac bibendum sed adipiscing tellus. Pellentesque eu.",
  },
  {
    name: "Business Setup",
    image: modalHero,
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi penatibus ut diam congue volutpat ipsum diam tristique magna. Commodo nunc pellentesque facilisi posuere convallis ac at aliquet cras. Purus a sagittis urna euismod curabitur eget nascetur sed metus. Mauris aliquam scelerisque diam quis arcu id facilisis pellentesque tincidunt. Vestibulum et dignissim ut arcu. Turpis consectetur mi in tellus imperdiet tincidunt. Ac bibendum sed adipiscing tellus. Pellentesque eu. Lorem ipsum dolor sit amet consectetur. Morbi penatibus ut diam congue volutpat ipsum diam tristique magna. Commodo nunc pellentesque facilisi posuere convallis ac at aliquet cras. Purus a sagittis urna euismod curabitur eget nascetur sed metus. Mauris aliquam scelerisque diam quis arcu id facilisis pellentesque tincidunt. Vestibulum et dignissim ut arcu. Turpis consectetur mi in tellus imperdiet tincidunt. Ac bibendum sed adipiscing tellus. Pellentesque eu.",
  },
  {
    name: "Business License",
    image: modalHero,
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi penatibus ut diam congue volutpat ipsum diam tristique magna. Commodo nunc pellentesque facilisi posuere convallis ac at aliquet cras. Purus a sagittis urna euismod curabitur eget nascetur sed metus. Mauris aliquam scelerisque diam quis arcu id facilisis pellentesque tincidunt. Vestibulum et dignissim ut arcu. Turpis consectetur mi in tellus imperdiet tincidunt. Ac bibendum sed adipiscing tellus. Pellentesque eu. Lorem ipsum dolor sit amet consectetur. Morbi penatibus ut diam congue volutpat ipsum diam tristique magna. Commodo nunc pellentesque facilisi posuere convallis ac at aliquet cras. Purus a sagittis urna euismod curabitur eget nascetur sed metus. Mauris aliquam scelerisque diam quis arcu id facilisis pellentesque tincidunt. Vestibulum et dignissim ut arcu. Turpis consectetur mi in tellus imperdiet tincidunt. Ac bibendum sed adipiscing tellus. Pellentesque eu.",
  },
  {
    name: "GRO Services",
    image: modalHero,
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi penatibus ut diam congue volutpat ipsum diam tristique magna. Commodo nunc pellentesque facilisi posuere convallis ac at aliquet cras. Purus a sagittis urna euismod curabitur eget nascetur sed metus. Mauris aliquam scelerisque diam quis arcu id facilisis pellentesque tincidunt. Vestibulum et dignissim ut arcu. Turpis consectetur mi in tellus imperdiet tincidunt. Ac bibendum sed adipiscing tellus. Pellentesque eu. Lorem ipsum dolor sit amet consectetur. Morbi penatibus ut diam congue volutpat ipsum diam tristique magna. Commodo nunc pellentesque facilisi posuere convallis ac at aliquet cras. Purus a sagittis urna euismod curabitur eget nascetur sed metus. Mauris aliquam scelerisque diam quis arcu id facilisis pellentesque tincidunt. Vestibulum et dignissim ut arcu. Turpis consectetur mi in tellus imperdiet tincidunt. Ac bibendum sed adipiscing tellus. Pellentesque eu.",
  },
  {
    name: "Employee Management",
    image: modalHero,
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi penatibus ut diam congue volutpat ipsum diam tristique magna. Commodo nunc pellentesque facilisi posuere convallis ac at aliquet cras. Purus a sagittis urna euismod curabitur eget nascetur sed metus. Mauris aliquam scelerisque diam quis arcu id facilisis pellentesque tincidunt. Vestibulum et dignissim ut arcu. Turpis consectetur mi in tellus imperdiet tincidunt. Ac bibendum sed adipiscing tellus. Pellentesque eu. Lorem ipsum dolor sit amet consectetur. Morbi penatibus ut diam congue volutpat ipsum diam tristique magna. Commodo nunc pellentesque facilisi posuere convallis ac at aliquet cras. Purus a sagittis urna euismod curabitur eget nascetur sed metus. Mauris aliquam scelerisque diam quis arcu id facilisis pellentesque tincidunt. Vestibulum et dignissim ut arcu. Turpis consectetur mi in tellus imperdiet tincidunt. Ac bibendum sed adipiscing tellus. Pellentesque eu.",
  },
];

const ServicesMarquee = () => {
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

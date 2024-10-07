import Image from "next/image";
import React from "react";

import { getStrapiURL } from "@/api";
import networkVector from "@/assets/home/network-vector.png";

interface FeatureCardSectionProps {
  features: FeatureCard[];
}

const FeatureCardSection = ({ features }: FeatureCardSectionProps) => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 xl:mb-14">
          <Image src={networkVector} alt="network-image" className="mx-auto" />
        </div>

        <div className="mx-auto text-center mb-8 xl:mb-12 2xl:mb-20">
          <h2 className="xl:max-w-3xl mx-auto">
            Expand your business Network in{" "}
            <span className="text-transparent bg-clip-text bg-primary-gradient">
              Saudi Arabia
            </span>
          </h2>

          <p className="text-xl xl:text-3xl font-normal text-gray-400 xl:max-w-5xl mx-auto mt-4">
            We&apos;re your on-the-ground partner in Saudi Arabia. Our team of
            local business experts help you set up and grow. Explore the unique
            advantages of establishing your business in Saudi Arabia. Discover
            how Saudi&;apos;s Business environment and strategic location can
            boost your business growth.
          </p>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-3 lg:gap-4">
          {features.map((feature, index) => (
            <div key={`feature-card-${index}`}>
              <div className="mb-6 md:mb-8 ">
                <Image
                  src={getStrapiURL(feature?.image?.url)}
                  alt={feature?.image?.alternativeText ?? feature?.image?.name}
                  width={414}
                  height={403}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="w-full object-cover"
                />
              </div>

              <div>
                <h6 className="text-3xl max-lg:leading-[27.75px] lg:text-4xl font-bold text-dark">
                  {feature?.title}
                </h6>

                <p className="text-sm lg:text-xl font-normal text-gray-400 pt-2">
                  {feature?.description}
                </p>

                <div className="flex gap-4 pt-4">
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.53866 1.18848C2.53866 0.614848 2.07364 0.149829 1.50002 0.149829C0.926386 0.149829 0.461368 0.614848 0.461368 1.18848H2.53866ZM1.50002 15.3141H0.461368V16.3527H1.50002V15.3141ZM21.3456 16.0485C21.7512 15.6429 21.7512 14.9853 21.3456 14.5796L14.7356 7.96973C14.33 7.56412 13.6724 7.56412 13.2668 7.96973C12.8612 8.37535 12.8612 9.03299 13.2668 9.4386L19.1423 15.3141L13.2668 21.1896C12.8612 21.5952 12.8612 22.2528 13.2668 22.6584C13.6724 23.064 14.33 23.064 14.7356 22.6584L21.3456 16.0485ZM0.461368 1.18848V15.3141H2.53866V1.18848H0.461368ZM1.50002 16.3527H20.6111V14.2754H1.50002V16.3527Z"
                      fill="url(#paint0_linear_5791_10749)"
                    />

                    <defs>
                      <linearGradient
                        id="paint0_linear_5791_10749"
                        x1="1.50002"
                        y1="15.3141"
                        x2="19.1404"
                        y2="16.9591"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />

                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p className="text-transparent bg-clip-text bg-primary-gradient font-extrabold text-xl lg:text-3xl lg:leading-[28px] xl:max-w-sm">
                    {feature?.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardSection;

import Image from "next/image";
import Img from "@/assets/home/logo-vector.png";
import React from "react";
import investSaudi from "@/assets/home/invest-saudi.png";
import review from "@/assets/home/review.png";
import visionSaudiLogo from "@/assets/home/vision-saudi-logo.png";

interface OverviewProps {
  opportunityCount: number;
  opportunityTimes: number;
  opportunityPercent: number;
}

const Overview = ({
  opportunityCount,
  opportunityPercent,
  opportunityTimes,
}: OverviewProps) => {
  return (
    <section className="pt-12 xl:pt-24 2xl:pt-[104px] 2xl:pb-16 relative">
      <div className="container mx-auto">
        <div className="flex gap-12 2xl:gap-[72px] justify-between mb-10 2xl:mb-16">
          <div className="hidden md:block w-1/2">
            <Image
              src={Img}
              alt="overview-image"
              className="w-full"
              placeholder="blur"
            />
          </div>

          <div className="mb-10 space-y-6">
            <p className="text-base xl:text-3xl font-light text-dark">
              Corprights - one of the leading business management consultancies
              in Saudi Arabia, combines global expertise with Saudi roots to
              transform the business, finance, tax, and legal landscape for
              foreign direct investment. We simplify business formation and
              provide end-to-end support tailored to your unique needs, ensuring
              accessibility, professionalism, and quality at every step. As
              trusted advisors to founders in 20+ countries, Corprights is the
              strategic business partner that offers everything you need to
              launch, operate, and grow your business in Saudi Arabia&apos;s
              dynamic market.
            </p>

            <p className="text-base xl:text-3xl font-light text-dark">
              From company formation to business legal services in KSA, we guide
              the clients through a wide range of consulting services. Our
              expert advisory empowers and optimizes the business workflow and
              ensures compliance with Saudi laws and regulations to achieve
              operational excellence, strategic growth and sustainability in
              their businesses.
            </p>

            <div className="flex gap-5 xl:gap-12">
              <div className="">
                <Image
                  src={visionSaudiLogo}
                  alt="vision-saudi-logo"
                  className="mix-blend-multiply"
                />
              </div>

              <div className="">
                <Image
                  src={investSaudi}
                  alt="invest saudi logo"
                  className="mix-blend-multiply"
                />
              </div>

              <div className="">
                <Image
                  src={review}
                  alt="google review"
                  className="mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="">
            <h6 className="text-9xl 2xl:text-10xl font-righteous text-transparent bg-clip-text bg-primary-gradient">
              {opportunityCount}+
            </h6>

            <p className="text-base xl:text-3xl font-bold text-dark mt-3">
              Company Formations
            </p>

            <p className="text-[10px] md:text-xl font-normal text-gray-400 mt-1">
              Across Gulf Countries
            </p>
          </div>

          <div className="">
            <h6 className="text-9xl 2xl:text-10xl font-righteous text-transparent bg-clip-text bg-primary-gradient">
              {opportunityTimes}x
            </h6>

            <p className="text-base xl:text-3xl font-bold text-dark mt-3">
              Years of Experience
            </p>

            <p className="text-[10px] md:text-xl font-normal text-gray-400 mt-1">
              Global Expertise with Saudi Roots
            </p>
          </div>

          <div className="">
            <h6 className="text-9xl 2xl:text-10xl font-righteous text-transparent bg-clip-text bg-primary-gradient">
              {opportunityPercent}+
            </h6>

            <p className="text-base xl:text-3xl font-bold text-dark mt-3">
              Professionals
            </p>

            <p className="text-[10px] md:text-xl font-normal text-gray-400 mt-1">
              Chartered Accountants & Lawyers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

import React from "react";
import Img from "@/assets/home/logo-vector.png";
import Image from "next/image";
import visionSaudiLogo from "@/assets/home/vision-saudi-logo.png";
import investSaudi from "@/assets/home/invest-saudi.png";
import review from "@/assets/home/review.png";

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

          <div>
            <p className="text-base xl:text-3xl font-light text-dark mb-10">
              Lorem ipsum dolor sit amet consectetur. Elementum et amet
              suspendisse viverra egestas sapien vivamus tristique hac. Nisl et
              amet facilisis morbi eu. Massa blandit quis aliquam ut odio
              viverra donec arcu. Elementum quam mauris tempor habitasse aliquet
              proin euismod mauris risus. Quam risus turpis elementum arcu
              tincidunt scelerisque euismod at. Felis orci pharetra egestas est.
              Porta nec etiam aenean tempus elementum integer elementum et.
              Elementum tincidunt neque mauris neque. Tincidunt nam tortor sed
              sed semper.
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
                  alt=""
                  className="mix-blend-multiply"
                />
              </div>

              <div className="">
                <Image src={review} alt="" className="mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="">
            <h6 className="text-9xl 2xl:text-10xl font-righteous text-transparent bg-clip-text bg-primary-gradient">
              {opportunityCount}
            </h6>

            <p className="text-base xl:text-3xl font-bold text-dark mt-3">
              Hyper Qualified Opportunities
            </p>

            <p className="text-[10px] md:text-xl font-normal text-gray-400 mt-1">
              Hyper Qualified Opportunities
            </p>
          </div>

          <div className="">
            <h6 className="text-9xl 2xl:text-10xl font-righteous text-transparent bg-clip-text bg-primary-gradient">
              {opportunityTimes}x
            </h6>

            <p className="text-base xl:text-3xl font-bold text-dark mt-3">
              Hyper Qualified Opportunities
            </p>

            <p className="text-[10px] md:text-xl font-normal text-gray-400 mt-1">
              Hyper Qualified Opportunities
            </p>
          </div>

          <div className="">
            <h6 className="text-9xl 2xl:text-10xl font-righteous text-transparent bg-clip-text bg-primary-gradient">
              {opportunityPercent}%
            </h6>

            <p className="text-base xl:text-3xl font-bold text-dark mt-3">
              Hyper Qualified Opportunities
            </p>

            <p className="text-[10px] md:text-xl font-normal text-gray-400 mt-1">
              Hyper Qualified Opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

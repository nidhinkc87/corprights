import Image from "next/image";
import bgVector from "@/assets/about/vector.png";
import iconImage from "@/assets/about/icons/values.svg";

const OurValues = () => {
  return (
    <section className="pt-16 xl:pt-24 2xl:pt-[134px] relative">
      <Image
        src={bgVector}
        alt="our-values-bg"
        width={459}
        height={552}
        placeholder="blur"
        className="absolute left-0 top-1/2  -translate-y-1/2 hidden lg:block lg:w-[340px] lg:h-[438px] 2xl:w-[459px] 2xl:h-[552] -z-[1] pointer-events-none"
      />

      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-10  lg:gap-x-8 lg:grid-cols-[minmax(0,0.67fr)_2fr] 2xl:gap-x-[72px]">
          <div></div>

          <div>
            <p className="text-xl font-normal text-primary mb-2">
              What we value
            </p>

            <h3 className="xl:max-w-xl">
              Our values are the catalyst for all of our endeavors
            </h3>

            <p className="text-base xl:text-2xl font-normal text-gray-400 mt-3 xl:mt-4">
              Corprights wants to be the first choice for any business planning
              to expand or restructure globally. We dream of becoming an
              International Business Consultant handling business setups across
              all countries.
            </p>

            <div className="mt-16">
              <div className="border border-gray-100 grid md:grid-cols-2">
                <div className="p-6 md:border-r border-b border-gray-100">
                  <Image
                    src={iconImage}
                    alt="mission-icon"
                    className="pointer-events-none"
                  />

                  <h6 className="text-3xl lg:text-4xl font-bold text-dark mt-5">
                    Mission
                  </h6>

                  <p className="text-base xl:text-2xl font-normal text-gray-400 mt-3">
                    We help businesses succeed by giving them practical advice
                    and harnessing the latest technology.
                  </p>
                </div>

                <div className="p-6 border-b border-gray-100">
                  <Image
                    src={iconImage}
                    alt="vision-icon"
                    className="pointer-events-none"
                  />

                  <h6 className="text-3xl lg:text-4xl font-bold text-dark mt-5">
                    Vision
                  </h6>

                  <p className="text-base xl:text-2xl font-normal text-gray-400 mt-3">
                    We help businesses succeed by giving them practical advice
                    and harnessing the latest technology.
                  </p>
                </div>

                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
                  <Image
                    src={iconImage}
                    alt="icon"
                    className="pointer-events-none"
                  />

                  <h6 className="text-3xl lg:text-4xl font-bold text-dark mt-5">
                    Our Core Values
                  </h6>

                  <p className="text-base xl:text-2xl font-normal text-gray-400 mt-3">
                    We help businesses succeed by giving them practical advice
                    and harnessing the latest technology.
                  </p>
                </div>

                <div className="p-6">
                  <Image
                    src={iconImage}
                    alt="icon"
                    className="pointer-events-none"
                  />

                  <h6 className="text-3xl lg:text-4xl font-bold text-dark mt-5">
                    What we delivers
                  </h6>

                  <p className="text-base xl:text-2xl font-normal text-gray-400 mt-3">
                    We help businesses succeed by giving them practical advice
                    and harnessing the latest technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;

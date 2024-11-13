import { BackgroundImage } from "@/components/ui/BackgroundImage";
import BgImg from "@/assets/about/bg/why-us.jpg";

const WhyUs = () => {
  return (
    <section className="relative py-16 xl:py-24 2xl:py-[198px]">
      <BackgroundImage
        src={BgImg}
        alt="why us bg-img"
        imageClass="object-center !object-fill max-lg:!object-cover max-lg:!object-right"
      >
        <div className="container">
          <div className="">
            <h2 className="text-white">
              Why choose{" "}
              <span className="text-transparent bg-clip-text bg-primary-gradient">
                Corprights{" "}
              </span>
              in Saudi Arabia
            </h2>

            <p className="text-xl md:text-3xl font-normal text-gray-200 mt-7 lg:max-w-lg xl:max-w-4xl">
              In today&apos;s rapidly evolving business landscape in KSA,
              organizations need skillful guidance to navigate challenges and
              unlock new opportunities. At Corprights, we provide end-to-end
              transparent solutions that help you achieve remarkable business
              growth.
            </p>

            <p className="text-xl md:text-3xl font-normal text-gray-200 mt-4 xl:mt-9 lg:max-w-lg xl:max-w-4xl">
              We streamline corporate governance across Saudi and have deep
              knowledge about the local as well as international market. A
              personalized client-centric approach is taken to analyze the
              business activities in each sector which helps to understand
              commercial needs and risk areas of business. We focus on improving
              the operational efficiency at reduced costs. Thus our
              collaborative and strategic services help to grow your business.
            </p>

            <div className="mt-10 flex flex-col md:flex-row gap-2 md:gap-[10px] mx-auto">
              <div className="flex-1 border border-dark p-5 xl:p-6 flex gap-5 lg:gap-6 items-start bg-[#181818]">
                <div>
                  <svg
                    width="20"
                    height="26"
                    viewBox="0 0 20 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="14.2856"
                      y1="5.71411"
                      x2="14.2856"
                      y2="17.1427"
                      stroke="url(#paint0_linear_5917_12808)"
                      strokeWidth="1.63265"
                    />
                    <line
                      x1="19.9998"
                      y1="11.4281"
                      x2="8.57121"
                      y2="11.4281"
                      stroke="url(#paint1_linear_5917_12808)"
                      strokeWidth="1.63265"
                    />
                    <line
                      x1="7.14278"
                      y1="19.9998"
                      x2="7.14278"
                      y2="25.714"
                      stroke="url(#paint2_linear_5917_12808)"
                      strokeWidth="0.816324"
                    />
                    <line
                      x1="10"
                      y1="22.8569"
                      x2="4.28573"
                      y2="22.8569"
                      stroke="url(#paint3_linear_5917_12808)"
                      strokeWidth="0.816324"
                    />
                    <line
                      x1="2.85714"
                      y1="-0.000244123"
                      x2="2.85714"
                      y2="5.71403"
                      stroke="url(#paint4_linear_5917_12808)"
                      strokeWidth="0.816324"
                    />
                    <line
                      x1="5.71436"
                      y1="2.85665"
                      x2="8.48413e-05"
                      y2="2.85665"
                      stroke="url(#paint5_linear_5917_12808)"
                      strokeWidth="0.816324"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_5917_12808"
                        x1="12.4692"
                        y1="5.71411"
                        x2="7.29675"
                        y2="12.2803"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_5917_12808"
                        x1="19.9998"
                        y1="9.61182"
                        x2="13.4336"
                        y2="4.43933"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_5917_12808"
                        x1="5.73462"
                        y1="19.9998"
                        x2="3.9205"
                        y2="24.6056"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_5917_12808"
                        x1="10"
                        y1="21.4487"
                        x2="5.39414"
                        y2="19.6346"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_5917_12808"
                        x1="1.44897"
                        y1="-0.000244163"
                        x2="-0.365149"
                        y2="4.60562"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_5917_12808"
                        x1="5.71436"
                        y1="1.44849"
                        x2="1.10849"
                        y2="-0.365638"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="space-y-4 xl:space-y-5">
                  <p className="font-bold text-xl lg:text-4xl text-transparent bg-clip-text bg-primary-gradient">
                    Lorem ipsum dolor sit
                  </p>

                  <p className="text-sm xl:text-xl font-normal text-gray-100">
                    Lorem ipsum dolor sit amet consectetur. Lectus sed tempus
                    enim lorem.
                  </p>
                </div>
              </div>

              <div className="flex-1 border border-dark p-5 xl:p-6 flex gap-5 lg:gap-6 items-start bg-[#181818]">
                <div>
                  <svg
                    width="20"
                    height="26"
                    viewBox="0 0 20 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="14.2856"
                      y1="5.71411"
                      x2="14.2856"
                      y2="17.1427"
                      stroke="url(#paint0_linear_5917_12808)"
                      strokeWidth="1.63265"
                    />
                    <line
                      x1="19.9998"
                      y1="11.4281"
                      x2="8.57121"
                      y2="11.4281"
                      stroke="url(#paint1_linear_5917_12808)"
                      strokeWidth="1.63265"
                    />
                    <line
                      x1="7.14278"
                      y1="19.9998"
                      x2="7.14278"
                      y2="25.714"
                      stroke="url(#paint2_linear_5917_12808)"
                      strokeWidth="0.816324"
                    />
                    <line
                      x1="10"
                      y1="22.8569"
                      x2="4.28573"
                      y2="22.8569"
                      stroke="url(#paint3_linear_5917_12808)"
                      strokeWidth="0.816324"
                    />
                    <line
                      x1="2.85714"
                      y1="-0.000244123"
                      x2="2.85714"
                      y2="5.71403"
                      stroke="url(#paint4_linear_5917_12808)"
                      strokeWidth="0.816324"
                    />
                    <line
                      x1="5.71436"
                      y1="2.85665"
                      x2="8.48413e-05"
                      y2="2.85665"
                      stroke="url(#paint5_linear_5917_12808)"
                      strokeWidth="0.816324"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_5917_12808"
                        x1="12.4692"
                        y1="5.71411"
                        x2="7.29675"
                        y2="12.2803"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_5917_12808"
                        x1="19.9998"
                        y1="9.61182"
                        x2="13.4336"
                        y2="4.43933"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_5917_12808"
                        x1="5.73462"
                        y1="19.9998"
                        x2="3.9205"
                        y2="24.6056"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_5917_12808"
                        x1="10"
                        y1="21.4487"
                        x2="5.39414"
                        y2="19.6346"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_5917_12808"
                        x1="1.44897"
                        y1="-0.000244163"
                        x2="-0.365149"
                        y2="4.60562"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_5917_12808"
                        x1="5.71436"
                        y1="1.44849"
                        x2="1.10849"
                        y2="-0.365638"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="space-y-4 xl:space-y-5">
                  <p className="font-bold text-xl lg:text-4xl text-transparent bg-clip-text bg-primary-gradient">
                    Lorem ipsum dolor sit
                  </p>

                  <p className="text-sm xl:text-xl font-normal text-gray-100">
                    Lorem ipsum dolor sit amet consectetur. Lectus sed tempus
                    enim lorem.
                  </p>
                </div>
              </div>

              <div className="flex-1 border border-dark p-5 xl:p-6 flex gap-5 lg:gap-6 items-start bg-[#181818]">
                <div>
                  <svg
                    width="20"
                    height="26"
                    viewBox="0 0 20 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="14.2856"
                      y1="5.71411"
                      x2="14.2856"
                      y2="17.1427"
                      stroke="url(#paint0_linear_5917_12808)"
                      strokeWidth="1.63265"
                    />
                    <line
                      x1="19.9998"
                      y1="11.4281"
                      x2="8.57121"
                      y2="11.4281"
                      stroke="url(#paint1_linear_5917_12808)"
                      strokeWidth="1.63265"
                    />
                    <line
                      x1="7.14278"
                      y1="19.9998"
                      x2="7.14278"
                      y2="25.714"
                      stroke="url(#paint2_linear_5917_12808)"
                      strokeWidth="0.816324"
                    />
                    <line
                      x1="10"
                      y1="22.8569"
                      x2="4.28573"
                      y2="22.8569"
                      stroke="url(#paint3_linear_5917_12808)"
                      strokeWidth="0.816324"
                    />
                    <line
                      x1="2.85714"
                      y1="-0.000244123"
                      x2="2.85714"
                      y2="5.71403"
                      stroke="url(#paint4_linear_5917_12808)"
                      strokeWidth="0.816324"
                    />
                    <line
                      x1="5.71436"
                      y1="2.85665"
                      x2="8.48413e-05"
                      y2="2.85665"
                      stroke="url(#paint5_linear_5917_12808)"
                      strokeWidth="0.816324"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_5917_12808"
                        x1="12.4692"
                        y1="5.71411"
                        x2="7.29675"
                        y2="12.2803"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_5917_12808"
                        x1="19.9998"
                        y1="9.61182"
                        x2="13.4336"
                        y2="4.43933"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_5917_12808"
                        x1="5.73462"
                        y1="19.9998"
                        x2="3.9205"
                        y2="24.6056"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_5917_12808"
                        x1="10"
                        y1="21.4487"
                        x2="5.39414"
                        y2="19.6346"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_5917_12808"
                        x1="1.44897"
                        y1="-0.000244163"
                        x2="-0.365149"
                        y2="4.60562"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_5917_12808"
                        x1="5.71436"
                        y1="1.44849"
                        x2="1.10849"
                        y2="-0.365638"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#017275" />
                        <stop offset="1" stopColor="#2BB162" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="space-y-4 xl:space-y-5">
                  <p className="font-bold text-xl lg:text-4xl text-transparent bg-clip-text bg-primary-gradient">
                    Lorem ipsum dolor sit
                  </p>

                  <p className="text-sm xl:text-xl font-normal text-gray-100">
                    Lorem ipsum dolor sit amet consectetur. Lectus sed tempus
                    enim lorem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </section>
  );
};

export default WhyUs;

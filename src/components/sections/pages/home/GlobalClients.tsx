import React from "react";

import ClientsMarquee from "@/components/elements/home/ClientsMarquee";

const GlobalClients = () => {
  return (
    <section className="py-16 xl:py-24 overflow-hidden">
      <div className="container">
        <div className="mx-auto text-center">
          <h2>
            Global{" "}
            <span className="text-transparent bg-clip-text bg-primary-gradient">
              Clients Served
            </span>
          </h2>

          <p className="text-xl xl:text-3xl font-normal text-gray-400 xl:max-w-2xl mx-auto mt-4">
            Lorem ipsum dolor sit amet consectetur. Urna sed elementum morbi
            amet. Nec sociis fusce ullamcorper blandit vitae diam.
          </p>
        </div>
      </div>

      <div className="mt-10 xl:mt-[70px]">
        <div className="w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ClientsMarquee />
          {/* <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Facebook"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Disney"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Airbnb"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Apple"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Spark"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Samsung"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Quora"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Sass"
                style={{ filter: "invert(1)" }}
              />
            </li>
          </ul>

          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_Image]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Facebook"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Disney"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Airbnb"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Apple"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Spark"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Samsung"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Quora"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-[121.16px] xl:w-[245.56px]">
              <Image
                src={clientLogo}
                alt="Sass"
                style={{ filter: "invert(1)" }}
              />
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default GlobalClients;

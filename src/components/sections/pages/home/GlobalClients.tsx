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
        </div>
      </div>
    </section>
  );
};

export default GlobalClients;

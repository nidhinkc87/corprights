import ClientsMarquee from "@/components/elements/home/ClientsMarquee";
import React from "react";

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
            Corprights welcomes the world to KSA, partnering with organizations
            of all sizes and various diverse industries.
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

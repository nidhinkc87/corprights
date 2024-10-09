import React from "react";

import OurClients from "@/components/elements/about/OurClients";
import Recognitions from "@/components/elements/about/Recognitions";

const ClientsAndRecognition = () => {
  return (
    <section className="bg-foreground py-[56px] lg:py-24 2xl:py-[200px] text-gray-100">
      <OurClients />

      <div className="container py-16 xl:py-[120px]">
        <div className="flex flex-wrap justify-center relative before:content-[''] before:absolute before:w-[338px] before:lg:w-[575px] before:h-px before:left-1/2 before:-translate-x-1/2 before:top-0 before:bg-gradient-to-r before:from-transparent before:via-[#2AB061] before:to-transparent"></div>

        <Recognitions />
      </div>
    </section>
  );
};

export default ClientsAndRecognition;

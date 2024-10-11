import React from "react";

import OurClients from "@/components/elements/about/OurClients";
import Recognitions from "@/components/elements/about/Recognitions";

const ClientsAndRecognition = () => {
  return (
    <section className="bg-foreground py-[56px] lg:py-24 2xl:py-[200px] text-gray-100">
      <OurClients />

      <Recognitions />
    </section>
  );
};

export default ClientsAndRecognition;

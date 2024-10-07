import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import serviceImg from "@/assets/home/bg/service.png";
import ServicesMarquee from "@/components/elements/home/ServicesMarquee";

interface ServicesProps {
  services: Service[];
}

function Services({ services }: ServicesProps) {
  return (
    <section className="py-16 xl:py-24 2xl:py-[130px] relative">
      <Image
        src={serviceImg}
        alt=""
        className="hidden md:block absolute bottom-0"
      />

      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-14">
          <div className="lg:w-1/2">
            <div>
              <p className="text-xl font-bold text-primary mb-2">Services</p>

              <h2 className="xl:max-w-lg">We help businesses grow</h2>

              <p className="text-xl xl:text-3xl font-normal text-gray-400 mt-3 xl:mt-7">
                Our methodology is highly adaptable, drawing upon the wealth of
                expertise spanning various sectors within our extensive Pidge
                network.
              </p>

              <p className="text-xl xl:text-3xl font-normal text-gray-400 mt-4 xl:mt-7">
                Proudly sector-agnostic, Corprights caters to businesses of all
                industries, sectors, and sizes, ensuring a personalized approach
                to every interaction. We&apos;re committed to delivering
                hyper-qualified leads that truly align with your objectives.
              </p>

              <p className="md:font-bold text-xl xl:text-3xl text-dark mt-4 xl:mt-8">
                Ready to elevate your organization&apos;s growth?
              </p>
            </div>

            <Button className="btn-primary mt-9 px-8 h-10">Book a demo</Button>
          </div>

          <div className="lg:w-1/2">
            <div className="w-full flex flex-col max-h-[375.21px] xl:max-h-[554px] flex-nowrap [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
              <ServicesMarquee services={services} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

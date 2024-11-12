import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServicesMarquee from "@/components/elements/home/ServicesMarquee";
import serviceImg from "@/assets/home/bg/service.png";

interface ServicesProps {
  services: Service[];
}

function Services({ services }: ServicesProps) {
  return (
    <section className="py-16 xl:py-24 2xl:py-[130px] relative">
      <Image
        src={serviceImg}
        alt="pattern"
        className="hidden md:block absolute bottom-0 pointer-events-none"
      />

      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-14">
          <div className="lg:w-1/2">
            <div>
              <p className="text-xl font-bold text-primary mb-2">Services</p>

              <h2 className="xl:max-w-lg capitalize">
                All You Need to Start and Run Your Business
              </h2>

              <p className="text-xl xl:text-3xl font-normal text-gray-400 mt-3 xl:mt-7">
                {p1}
              </p>

              <p className="text-xl xl:text-3xl font-normal text-gray-400 mt-4 xl:mt-7">
                {p2}
              </p>

              <p className="md:font-bold text-xl xl:text-3xl text-dark mt-4 xl:mt-8">
                Ready for a New Way of Doing Business in KSA?
              </p>
            </div>

            <Link href="/contact-us">
              <Button className="btn-primary mt-9 px-8 h-10">
                Consult Now
              </Button>
            </Link>
          </div>

          <div className="lg:w-1/2">
            <div className="w-full flex flex-col h-full max-h-[375.21px] xl:max-h-[554px] flex-nowrap [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
              <ServicesMarquee services={services} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

const p1 = `
Corprights offers comprehensive, all-in-one solutions for
businesses in Saudi Arabia and beyond, covering every need from
business setup and tax filing to visa processing and corporate
advisory. We ensure seamless operations and business compliance
with services that include accounting & bookkeeping, audit
support, PRO/GRO services, and trademark registration. Whether
you're starting a new business, expanding, or winding down
operations, our experts handle the complexities hassle-free so
you can focus on growth.`;

const p2 = `
From business setup assistance to virtual office addresses and
banking support, Corprights is dedicated to providing
streamlined business solutions that combine innovation with
personal attention. We provide expert guidance on IP protection
in Saudi Arabia and have in-depth knowledge on IP laws to
safeguard your business from all types of infringements. Major
IP services comprise of patent registration, trademark
registration, and copyright registration. With deep local market
knowledge and global expertise, we empower entrepreneurs and
businesses of all sizes, making Corprights your ideal partner
for business success in Saudi Arabia.
`;

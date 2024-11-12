import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import costCalculator from "@/assets/home/cost-calculator.png";

const CostCalculator = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-[1fr_minmax(0,0.8fr)] lg:gap-x-20">
          <div className="self-center">
            <div>
              <p className="text-xl font-bold text-primary mb-2">
                Cost Calculator
              </p>

              <h2 className="xl:max-w-2xl">
                How much does it cost to open a business in{" "}
                <span className="text-primary">Saudi Arabia</span> ?
              </h2>

              <p className="text-xl xl:text-3xl font-normal text-gray-400 mt-4 xl:mt-7">
                The business setup cost calculator helps you to give an estimate
                for the type of business you want to start in Saudi Arabia.
              </p>

              <Link href="/cost-calculator">
                <Button className="mt-10 px-8">Cost Calculator</Button>
              </Link>
            </div>
          </div>

          <div>
            <Image
              src={costCalculator}
              alt="cost-calculator-img"
              width={538}
              height={519}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw,50vw"
              className="w-full object-cover pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;

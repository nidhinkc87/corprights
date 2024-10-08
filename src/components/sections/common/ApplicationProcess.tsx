"use client";

import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface ApplicationProcessProps {
  process: Process;
}

const ApplicationProcess = ({ process }: ApplicationProcessProps) => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const lineRef = useRef<HTMLDivElement | null>(null);

  const greenLineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const totalSteps = process?.cards?.length;

    stepRefs.current.forEach((stepElement, index) => {
      if (stepElement) {
        gsap.set(stepElement, { opacity: 0, y: 20, filter: "blur(5px)" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stepElement,
            start: "top center+=100",
            end: "bottom center-=100",
            onEnter: () => {
              gsap.to(greenLineRef.current, {
                height: `${((index + 1) * 100) / totalSteps}%`,
                ease: "none",
              });
            },
            onLeaveBack: () => {
              gsap.to(greenLineRef.current, {
                height: `${(index * 100) / totalSteps}%`,
                ease: "none",
              });
            },
          },
        });

        tl.to(stepElement, {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power2.out",
        });
      }
    });
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto mt-16">
      <div className="text-center xl:max-w-xl mx-auto mb-6">
        <h3>{process?.title}</h3>

        <p className="text-xl font-normal text-gray-400 mt-3 xl:mt-4">
          {process?.description}
        </p>
      </div>

      <div className="relative flex flex-col items-center">
        <div
          ref={lineRef}
          className="absolute top-0 left-1/2 w-0.5 dashed transform -translate-x-1/2 h-full z-0"
          style={{ borderLeft: "2px dashed rgba(112, 111, 111, 0.2)" }}
        ></div>

        <div
          ref={greenLineRef}
          className="absolute top-0 left-1/2 w-0.5 bg-[#2BB162] transform -translate-x-1/2 h-[5%] z-1"
          style={{ borderLeft: "0.5px solid #2BB162" }}
        ></div>

        {process?.cards?.map((step, index) => (
          <div
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            key={step.id}
            className={`relative flex items-center my-6 ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } w-full`}
          >
            <div
              className="absolute left-1/2 transform -translate-x-1/2 bg-primary w-[18px] h-[18px] rounded-full z-0"
              style={{ top: "25px" }}
            ></div>

            <div className="w-1/2 p-6 relative z-0">
              <div
                className={`order-2 md:order-1 flex flex-col ${
                  index % 2 !== 0
                    ? "md:text-end md:items-end"
                    : "md:items-start md:text-start"
                }`}
              >
                <div className="h-6 w-6 bg-primary-gradient text-center mb-6 ">
                  <span className="text-white font-bold text-base">
                    {index + 1}
                  </span>
                </div>

                <h6 className="text-xl lg:text-3xl xl:text-4xl font-bold text-dark ">
                  {step?.title}
                </h6>

                <p className="text-xl font-normal text-gray-400 mt-3 xl:mt-4 ">
                  {step?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationProcess;

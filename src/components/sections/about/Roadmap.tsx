"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import BgImg from "@/assets/about/bg/roadmap.png";
import { BackgroundImage } from "@/components/ui/BackgroundImage";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible";
import { cn } from "@/lib/utils";
import { getRoadMap } from "@/api/roadmap";
import Markdown from "react-markdown";

const Roadmap = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const [roadMap, setRoadMap] = useState<RoadMap[]>();

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const refs = sectionRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));

            setVisibleIndex(index);
          }
        });
      },
      { threshold: 0.4 }
    );

    refs?.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs?.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const fetchRoadMaps = async () => {
      try {
        const { data } = await getRoadMap();
        if (!data) return;
        setRoadMap(data as RoadMap[]);
      } catch (error) {
        console.log("error ", error);
      }
    };

    fetchRoadMaps();
  }, []);

  return (
    <section className="relative py-16 xl:py-24  2xl:py-[160px]">
      <div className="lg:hidden container">
        <h3 className="mb-6 text-left">The Roadmap</h3>

        {roadMap?.map((tab, i) => (
          <Collapsible
            key={`mobile-tab-${i}`}
            className="mb-4"
            defaultOpen={i === 0}
          >
            <CollapsibleTrigger className="w-full text-left py-2 flex justify-between items-center [&[data-state=open]>svg]:rotate-180">
              <div>
                <h5 className="text-3xl lg:text-5xl font-bold text-dark">
                  {tab.year}
                </h5>
                <p className="text-xl font-normal text-gray-400">
                  {tab.subtitle}
                </p>
              </div>

              <ChevronDown className="w-6 h-6 shrink-0 transition-transform duration-200" />
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="py-4 space-y-4">
                <div
                  className={cn(
                    "prose-md md:prose-base xl:prose-xl font-normal text-gray-400 prose-a:no-underline prose-a:text-primary/85 hover:prose-a:text-primary",
                    "text-base xl:text-2xl font-normal"
                  )}
                >
                  <Markdown>{tab?.content}</Markdown>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>

      <div className="max-lg:hidden">
        <BackgroundImage
          src={BgImg}
          alt="roadmap-background-image"
          imageClass="top-0 !object-contain"
        >
          <div className="container grid lg:grid-cols-[.8fr,1.5fr] lg:gap-14 xl:gap-[70px]">
            <div className="lg:border-r border-gray-100 lg:pr-14 xl:pr-24">
              <div className="sticky top-[90px]">
                <h3 className="mb-[88px] text-center">The Roadmap</h3>
                <div id="tabs" className="space-y-10">
                  {roadMap?.map((tab, i) => (
                    <div
                      key={`roadmap-tabs-${i}`}
                      data-tab={`tab-${i}`}
                      data-index={i}
                      className={cn(
                        "tab-item text-center transition-opacity duration-300",
                        visibleIndex === i ? "opacity-100" : "opacity-30"
                      )}
                    >
                      <h5 className="text-3xl md:text-5xl font-bold text-dark">
                        {tab.year}
                      </h5>

                      <p className="text-xl font-normal text-gray-400">
                        {tab.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div id="content" className="">
              {roadMap?.map((tab, i) => (
                <div
                  key={`roadmap-tab-contents-${i}`}
                  data-index={i}
                  ref={(el) => {
                    sectionRefs.current[i] = el;
                  }}
                  className="tab-content space-y-8"
                >
                  <div className="text-xl text-gray-400 prose-sm md:prose-md lg:prose-lg  font-normal prose-a:no-underline prose-a:text-primary/85 hover:prose-a:text-primary ">
                    <Markdown>{tab.content}</Markdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BackgroundImage>
      </div>
    </section>
  );
};

export default Roadmap;

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

const Roadmap = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

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

  return (
    <section className="relative py-16 xl:py-24  2xl:py-[160px]">
      <div className="lg:hidden container">
        <h3 className="mb-6 text-left">The Roadmap</h3>

        {roadmapTabs.map((tab, i) => (
          <Collapsible
            key={`mobile-tab-${i}`}
            className="mb-4"
            defaultOpen={i === 0}
          >
            <CollapsibleTrigger className="w-full text-left py-2 flex justify-between items-center [&[data-state=open]>svg]:rotate-180">
              <div>{tab}</div>

              <ChevronDown className="w-6 h-6 shrink-0 transition-transform duration-200" />
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="py-4 space-y-4">{roadmapTabContents[i]}</div>
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
                  {roadmapTabs.map((tab, i) => (
                    <div
                      key={`roadmap-tabs-${i}`}
                      data-tab={`tab-${i}`}
                      data-index={i}
                      className={cn(
                        "tab-item text-center transition-opacity duration-300",
                        visibleIndex === i ? "opacity-100" : "opacity-30"
                      )}
                    >
                      {tab}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div id="content" className="">
              {roadmapTabContents.map((tab, i) => (
                <div
                  key={`roadmap-tab-contents-${i}`}
                  data-index={i}
                  ref={(el) => {
                    sectionRefs.current[i] = el;
                  }}
                  className="tab-content space-y-8"
                >
                  {tab}
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

const tabContents1 = (
  <>
    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Tab1
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue dui
      sed quam semper pharetra. Proin dapibus turpis congue lorem sollicitudin,
      vitae facilisis lorem sollicitudin. Suspendisse potenti. Morbi egestas
      neque eros, maximus interdum neque viverra ut. Mauris ante ligula, porta
      sed ligula id, ornare maximus nunc. Vestibulum efficitur egestas enim, vel
      fringilla leo pretium ultricies. Suspendisse sed nibh eget urna
      scelerisque maximus. Donec semper ultricies bibendum. Maecenas rhoncus,
      nibh ac gravida sollicitudin, sapien dolor feugiat ipsum, a feugiat ante
      sem id libero. Phasellus venenatis nibh nisi, sit amet maximus nunc
      fringilla nec. In laoreet finibus dui, ac interdum augue pellentesque vel.
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Sed malesuada, lorem a pulvinar lobortis, leo ipsum vehicula tortor, eget
      luctus quam tortor non augue. Vivamus vitae pretium massa, vel tincidunt
      eros. Donec tincidunt tortor quis congue condimentum. Duis diam nisl,
      sagittis at accumsan non, tristique non dolor. Integer lacinia massa erat,
      in feugiat lacus imperdiet quis
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Vivamus et ultrices felis, quis molestie magna. Pellentesque sit amet dui
      quis eros dapibus porttitor quis in metus. Curabitur quam diam, convallis
      at quam bibendum, egestas mattis ante. In magna lorem, porttitor ut ex
      quis, placerat aliquet dui. Morbi non tincidunt odio. Nunc blandit
      convallis congue.
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue dui
      sed quam semper pharetra. Proin dapibus turpis congue lorem sollicitudin,
      vitae facilisis lorem sollicitudin. Suspendisse potenti. Morbi egestas
      neque eros, maximus interdum neque viverra ut. Mauris ante ligula, porta
      sed ligula id, ornare maximus nunc. Vestibulum efficitur egestas enim, vel
      fringilla leo pretium ultricies. Suspendisse sed nibh eget urna
      scelerisque maximus. Donec semper ultricies bibendum. Maecenas rhoncus,
      nibh ac gravida sollicitudin, sapien dolor feugiat ipsum, a feugiat ante
      sem id libero. Phasellus venenatis nibh nisi, sit amet maximus nunc
      fringilla nec. In laoreet finibus dui, ac interdum augue pellentesque vel.
    </p>
  </>
);

const tabContents2 = (
  <>
    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Tab2
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue dui
      sed quam semper pharetra. Proin dapibus turpis congue lorem sollicitudin,
      vitae facilisis lorem sollicitudin. Suspendisse potenti. Morbi egestas
      neque eros, maximus interdum neque viverra ut. Mauris ante ligula, porta
      sed ligula id, ornare maximus nunc. Vestibulum efficitur egestas enim, vel
      fringilla leo pretium ultricies. Suspendisse sed nibh eget urna
      scelerisque maximus. Donec semper ultricies bibendum. Maecenas rhoncus,
      nibh ac gravida sollicitudin, sapien dolor feugiat ipsum, a feugiat ante
      sem id libero. Phasellus venenatis nibh nisi, sit amet maximus nunc
      fringilla nec. In laoreet finibus dui, ac interdum augue pellentesque vel.
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Sed malesuada, lorem a pulvinar lobortis, leo ipsum vehicula tortor, eget
      luctus quam tortor non augue. Vivamus vitae pretium massa, vel tincidunt
      eros. Donec tincidunt tortor quis congue condimentum. Duis diam nisl,
      sagittis at accumsan non, tristique non dolor. Integer lacinia massa erat,
      in feugiat lacus imperdiet quis
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Vivamus et ultrices felis, quis molestie magna. Pellentesque sit amet dui
      quis eros dapibus porttitor quis in metus. Curabitur quam diam, convallis
      at quam bibendum, egestas mattis ante. In magna lorem, porttitor ut ex
      quis, placerat aliquet dui. Morbi non tincidunt odio. Nunc blandit
      convallis congue.
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue dui
      sed quam semper pharetra. Proin dapibus turpis congue lorem sollicitudin,
      vitae facilisis lorem sollicitudin. Suspendisse potenti. Morbi egestas
      neque eros, maximus interdum neque viverra ut. Mauris ante ligula, porta
      sed ligula id, ornare maximus nunc. Vestibulum efficitur egestas enim, vel
      fringilla leo pretium ultricies. Suspendisse sed nibh eget urna
      scelerisque maximus. Donec semper ultricies bibendum. Maecenas rhoncus,
      nibh ac gravida sollicitudin, sapien dolor feugiat ipsum, a feugiat ante
      sem id libero. Phasellus venenatis nibh nisi, sit amet maximus nunc
      fringilla nec. In laoreet finibus dui, ac interdum augue pellentesque vel.
    </p>
  </>
);

const tabContents3 = (
  <>
    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Tab3
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue dui
      sed quam semper pharetra. Proin dapibus turpis congue lorem sollicitudin,
      vitae facilisis lorem sollicitudin. Suspendisse potenti. Morbi egestas
      neque eros, maximus interdum neque viverra ut. Mauris ante ligula, porta
      sed ligula id, ornare maximus nunc. Vestibulum efficitur egestas enim, vel
      fringilla leo pretium ultricies. Suspendisse sed nibh eget urna
      scelerisque maximus. Donec semper ultricies bibendum. Maecenas rhoncus,
      nibh ac gravida sollicitudin, sapien dolor feugiat ipsum, a feugiat ante
      sem id libero. Phasellus venenatis nibh nisi, sit amet maximus nunc
      fringilla nec. In laoreet finibus dui, ac interdum augue pellentesque vel.
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Sed malesuada, lorem a pulvinar lobortis, leo ipsum vehicula tortor, eget
      luctus quam tortor non augue. Vivamus vitae pretium massa, vel tincidunt
      eros. Donec tincidunt tortor quis congue condimentum. Duis diam nisl,
      sagittis at accumsan non, tristique non dolor. Integer lacinia massa erat,
      in feugiat lacus imperdiet quis
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Vivamus et ultrices felis, quis molestie magna. Pellentesque sit amet dui
      quis eros dapibus porttitor quis in metus. Curabitur quam diam, convallis
      at quam bibendum, egestas mattis ante. In magna lorem, porttitor ut ex
      quis, placerat aliquet dui. Morbi non tincidunt odio. Nunc blandit
      convallis congue.
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue dui
      sed quam semper pharetra. Proin dapibus turpis congue lorem sollicitudin,
      vitae facilisis lorem sollicitudin. Suspendisse potenti. Morbi egestas
      neque eros, maximus interdum neque viverra ut. Mauris ante ligula, porta
      sed ligula id, ornare maximus nunc. Vestibulum efficitur egestas enim, vel
      fringilla leo pretium ultricies. Suspendisse sed nibh eget urna
      scelerisque maximus. Donec semper ultricies bibendum. Maecenas rhoncus,
      nibh ac gravida sollicitudin, sapien dolor feugiat ipsum, a feugiat ante
      sem id libero. Phasellus venenatis nibh nisi, sit amet maximus nunc
      fringilla nec. In laoreet finibus dui, ac interdum augue pellentesque vel.
    </p>
  </>
);

const tabContents4 = (
  <>
    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Tab4
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue dui
      sed quam semper pharetra. Proin dapibus turpis congue lorem sollicitudin,
      vitae facilisis lorem sollicitudin. Suspendisse potenti. Morbi egestas
      neque eros, maximus interdum neque viverra ut. Mauris ante ligula, porta
      sed ligula id, ornare maximus nunc. Vestibulum efficitur egestas enim, vel
      fringilla leo pretium ultricies. Suspendisse sed nibh eget urna
      scelerisque maximus. Donec semper ultricies bibendum. Maecenas rhoncus,
      nibh ac gravida sollicitudin, sapien dolor feugiat ipsum, a feugiat ante
      sem id libero. Phasellus venenatis nibh nisi, sit amet maximus nunc
      fringilla nec. In laoreet finibus dui, ac interdum augue pellentesque vel.
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Sed malesuada, lorem a pulvinar lobortis, leo ipsum vehicula tortor, eget
      luctus quam tortor non augue. Vivamus vitae pretium massa, vel tincidunt
      eros. Donec tincidunt tortor quis congue condimentum. Duis diam nisl,
      sagittis at accumsan non, tristique non dolor. Integer lacinia massa erat,
      in feugiat lacus imperdiet quis
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Vivamus et ultrices felis, quis molestie magna. Pellentesque sit amet dui
      quis eros dapibus porttitor quis in metus. Curabitur quam diam, convallis
      at quam bibendum, egestas mattis ante. In magna lorem, porttitor ut ex
      quis, placerat aliquet dui. Morbi non tincidunt odio. Nunc blandit
      convallis congue.
    </p>

    <p className="text-base lg:text-xl 2xl:text-3xl font-normal text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue dui
      sed quam semper pharetra. Proin dapibus turpis congue lorem sollicitudin,
      vitae facilisis lorem sollicitudin. Suspendisse potenti. Morbi egestas
      neque eros, maximus interdum neque viverra ut. Mauris ante ligula, porta
      sed ligula id, ornare maximus nunc. Vestibulum efficitur egestas enim, vel
      fringilla leo pretium ultricies. Suspendisse sed nibh eget urna
      scelerisque maximus. Donec semper ultricies bibendum. Maecenas rhoncus,
      nibh ac gravida sollicitudin, sapien dolor feugiat ipsum, a feugiat ante
      sem id libero. Phasellus venenatis nibh nisi, sit amet maximus nunc
      fringilla nec. In laoreet finibus dui, ac interdum augue pellentesque vel.
    </p>
  </>
);

const roadmapTabContents = [
  tabContents1,
  tabContents2,
  tabContents3,
  tabContents4,
];

const tab1 = (
  <>
    <h5 className="text-3xl lg:text-5xl font-bold text-dark">2021</h5>

    <p className="text-xl font-normal text-gray-400">Founded</p>
  </>
);

const tab2 = (
  <>
    <h5 className="text-3xl lg:text-5xl font-bold text-dark">2022</h5>

    <p className="text-xl font-normal text-gray-400">
      Lorem ipsum dolor sit amet consectetur.
    </p>
  </>
);

const tab3 = (
  <>
    <h5 className="text-3xl lg:text-5xl font-bold text-dark">2023</h5>

    <p className="text-xl font-normal text-gray-400">
      Proin ornare quam viverra, egestas
    </p>
  </>
);

const tab4 = (
  <>
    <h5 className="text-3xl lg:text-5xl font-bold text-dark">2024</h5>

    <p className="text-xl font-normal text-gray-400">
      lorem a pulvinar lobortis
    </p>
  </>
);

const roadmapTabs = [tab1, tab2, tab3, tab4];

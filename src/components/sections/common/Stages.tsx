"use client";

import StageContent from "./StageContent";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface StagesProps {
  stages: Stage[];
  className?: string;
}

export default function Stages({ stages, className }: StagesProps) {
  const [activeStage, setActiveStage] = useState(stages?.[0]?.id || 1);

  const handleStageClick = (id: number) => {
    setActiveStage(id);
  };

  return (
    <section className={cn("relative pb-16 2xl:pb-20", className)}>
      <div className="container">
        <div className="max-md:hidden mt-10 flex flex-col md:flex-row gap-4 md:gap-8 mx-auto py-[10px]">
          <div className="flex-none w-1/4">
            <h4>How it works</h4>

            <div className="relative flex flex-col mt-8 xl:mt-12 group">
              {stages?.map((stage, index) => (
                <div
                  key={stage.id}
                  className="grid grid-cols-[auto_1fr] gap-3 relative h-20 cursor-pointer stage"
                  id={`stage-${stage.id}`}
                  onClick={() => handleStageClick(stage.id)}
                >
                  {index !== stages.length - 1 && (
                    <div className="absolute w-[1px] border-l-[2.5px] border-gray-100 h-full inset-x-2 top-[11px] z-[-1]">
                      <div
                        className={cn(
                          "-ml-[2px] transition-[height] w-[2px]",
                          activeStage >= stage.id
                            ? "bg-primary h-full"
                            : "bg-gray-200 h-0"
                        )}
                      ></div>
                    </div>
                  )}

                  <div
                    className={cn(
                      "w-[18px] h-[18px] rounded-full",
                      activeStage >= stage.id ? "bg-primary" : "bg-gray-200"
                    )}
                  ></div>

                  <h6
                    className={cn(
                      "text-xl xl:text-2xl font-bold !leading-[1]",
                      activeStage >= stage.id ? "text-primary" : "text-gray-200"
                    )}
                  >
                    Stage {index + 1}
                  </h6>
                </div>
              ))}
            </div>
          </div>

          <div className="w-3/4">
            {stages?.map((stage, i) => (
              <StageContent
                key={stage?.id}
                stage={stage}
                active={stage?.id === activeStage}
                index={i + 1}
              />
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <h4>How it works</h4>

          {stages?.map((stage, i) => (
            <div
              key={stage?.id}
              className="relative flex flex-col gap-6 mt-8 xl:mt-12 group"
            >
              <div className="relative">
                <div
                  className="grid grid-cols-[auto_1fr] gap-3 cursor-pointer stage"
                  id="stage-1"
                >
                  <div className="absolute w-[1px] border-l-[2.5px] border-gray-100 h-full inset-x-2 z-[-1]">
                    <div className="bg-primary w-[2px] stage-left-border -ml-[2px] transition-[height]" />
                  </div>
                  <div>
                    <div className="bg-primary w-[18px] h-[18px] rounded-full" />
                  </div>
                  <h6 className="text-xl xl:text-2xl text-primary font-bold !leading-[1]">
                    Stage {i + 1}
                  </h6>
                </div>

                <div
                  id="stage-1-content"
                  className="block pl-8 mt-4 mb-8 stage-content-Mb"
                >
                  <StageContent stage={stage} index={i + 1} active />
                </div>
              </div>

              {/* <div className="relative">
              <div
                className="grid grid-cols-[auto_1fr] gap-3 cursor-pointer stage"
                id="stage-2"
              >
                <div className="absolute w-[1px] border-l-[2.5px] border-gray-100 h-full inset-x-2 z-[-1]">
                  <div
                    className="bg-primary w-[2px] h-0 -ml-[2px] transition-[height] stage-left-border"
                    data-stage-id={2}
                  ></div>
                </div>
                <div>
                  <div className="bg-primary w-[18px] h-[18px] rounded-full" />
                </div>
                <h6 className="text-xl xl:text-2xl text-gray-200 font-bold !leading-[1]">
                  Stage 2
                </h6>
              </div>
              <div
                id="stage-2-content"
                className="block pl-8 mt-4 mb-8 stage-content-Mb"
              >
                <div className="space-y-[26px] xl:space-y-14">
                  <h3 className="max-xl:text-2xl 2xl:leading-[58px]">
                    Lorem ipsum dolor sit amet consectetur. Sollicitudin nulla
                    at.
                  </h3>
                  <div className="grid md:grid-cols-2 gap-[26px] md:gap-x-10 md:gap-y-12">
                    <div>
                      <div className="flex items-center gap-x-[10px]">
                        <div className="w-6 h-6 text-center bg-primary-gradient">
                          <span className="text-base font-bold text-white">
                            1
                          </span>
                        </div>
                        <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl text-dark">
                          Lorem ipsum dolor sit
                        </h6>
                      </div>
                      <p className="mt-3 text-xl font-normal text-gray-400 xl:mt-4">
                        Lorem ipsum dolor sit amet consectetur. Mauris sed risus
                        viverra id non dolor praesent est. Natoque feugiat
                        euismod adipiscing interdum vitae tristique. Posuere
                        netus pellentesque pulvinar consequat.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-x-[10px]">
                        <div className="w-6 h-6 text-center bg-primary-gradient">
                          <span className="text-base font-bold text-white">
                            2
                          </span>
                        </div>
                        <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl text-dark">
                          Lorem ipsum dolor sit
                        </h6>
                      </div>
                      <p className="mt-3 text-xl font-normal text-gray-400 xl:mt-4">
                        Lorem ipsum dolor sit amet consectetur. Mauris sed risus
                        viverra id non dolor praesent est. Natoque feugiat
                        euismod adipiscing interdum vitae tristique. Posuere
                        netus pellentesque pulvinar consequat.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-x-[10px]">
                        <div className="w-6 h-6 text-center bg-primary-gradient">
                          <span className="text-base font-bold text-white">
                            3
                          </span>
                        </div>
                        <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl text-dark">
                          Lorem ipsum dolor sit
                        </h6>
                      </div>
                      <p className="mt-3 text-xl font-normal text-gray-400 xl:mt-4">
                        Lorem ipsum dolor sit amet consectetur. Mauris sed risus
                        viverra id non dolor praesent est. Natoque feugiat
                        euismod adipiscing interdum vitae tristique. Posuere
                        netus pellentesque pulvinar consequat.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-x-[10px]">
                        <div className="w-6 h-6 text-center bg-primary-gradient">
                          <span className="text-base font-bold text-white">
                            4
                          </span>
                        </div>
                        <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl text-dark">
                          Lorem ipsum dolor sit
                        </h6>
                      </div>
                      <p className="mt-3 text-xl font-normal text-gray-400 xl:mt-4">
                        Lorem ipsum dolor sit amet consectetur. Mauris sed risus
                        viverra id non dolor praesent est. Natoque feugiat
                        euismod adipiscing interdum vitae tristique. Posuere
                        netus pellentesque pulvinar consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="grid grid-cols-[auto_1fr] gap-3 cursor-pointer stage"
                id="stage-3"
              >
                <div className="absolute w-[1px] border-l-[2.5px] border-gray-100 h-full inset-x-2 z-[-1]">
                  <div
                    className="bg-primary w-[2px] h-0 -ml-[2px] transition-[height] stage-left-border"
                    data-stage-id={3}
                  ></div>
                </div>
                <div>
                  <div className="bg-primary w-[18px] h-[18px] rounded-full" />
                </div>
                <h6 className="text-xl xl:text-2xl text-gray-200 font-bold !leading-[1]">
                  Stage 3
                </h6>
              </div>
              <div
                id="stage-1-content"
                className="block pl-8 mt-4 mb-8 stage-content-Mb"
              >
                <div className="space-y-[26px] xl:space-y-14">
                  <h3 className="max-xl:text-2xl 2xl:leading-[58px]">
                    Lorem ipsum dolor sit amet consectetur. Sollicitudin nulla
                    at.
                  </h3>
                  <div className="grid md:grid-cols-2 gap-[26px] md:gap-x-10 md:gap-y-12">
                    <div>
                      <div className="flex items-center gap-x-[10px]">
                        <div className="w-6 h-6 text-center bg-primary-gradient">
                          <span className="text-base font-bold text-white">
                            1
                          </span>
                        </div>
                        <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl text-dark">
                          Lorem ipsum dolor sit
                        </h6>
                      </div>
                      <p className="mt-3 text-xl font-normal text-gray-400 xl:mt-4">
                        Lorem ipsum dolor sit amet consectetur. Mauris sed risus
                        viverra id non dolor praesent est. Natoque feugiat
                        euismod adipiscing interdum vitae tristique. Posuere
                        netus pellentesque pulvinar consequat.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-x-[10px]">
                        <div className="w-6 h-6 text-center bg-primary-gradient">
                          <span className="text-base font-bold text-white">
                            2
                          </span>
                        </div>
                        <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl text-dark">
                          Lorem ipsum dolor sit
                        </h6>
                      </div>
                      <p className="mt-3 text-xl font-normal text-gray-400 xl:mt-4">
                        Lorem ipsum dolor sit amet consectetur. Mauris sed risus
                        viverra id non dolor praesent est. Natoque feugiat
                        euismod adipiscing interdum vitae tristique. Posuere
                        netus pellentesque pulvinar consequat.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-x-[10px]">
                        <div className="w-6 h-6 text-center bg-primary-gradient">
                          <span className="text-base font-bold text-white">
                            3
                          </span>
                        </div>
                        <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl text-dark">
                          Lorem ipsum dolor sit
                        </h6>
                      </div>
                      <p className="mt-3 text-xl font-normal text-gray-400 xl:mt-4">
                        Lorem ipsum dolor sit amet consectetur. Mauris sed risus
                        viverra id non dolor praesent est. Natoque feugiat
                        euismod adipiscing interdum vitae tristique. Posuere
                        netus pellentesque pulvinar consequat.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-x-[10px]">
                        <div className="w-6 h-6 text-center bg-primary-gradient">
                          <span className="text-base font-bold text-white">
                            4
                          </span>
                        </div>
                        <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl text-dark">
                          Lorem ipsum dolor sit
                        </h6>
                      </div>
                      <p className="mt-3 text-xl font-normal text-gray-400 xl:mt-4">
                        Lorem ipsum dolor sit amet consectetur. Mauris sed risus
                        viverra id non dolor praesent est. Natoque feugiat
                        euismod adipiscing interdum vitae tristique. Posuere
                        netus pellentesque pulvinar consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="grid grid-cols-[auto_1fr] gap-3 cursor-pointer stage"
                id="stage-4"
              >
                <div className="absolute w-[1px] border-l-[2.5px] border-gray-100 h-full inset-x-2 z-[-1]">
                  <div
                    className="bg-primary w-[2px] h-0 -ml-[2px] transition-[height] stage-left-border"
                    data-stage-id={4}
                  ></div>
                </div>
                <div>
                  <div className="bg-primary w-[18px] h-[18px] rounded-full" />
                </div>
                <h6 className="text-xl xl:text-2xl text-gray-200 font-bold !leading-[1]">
                  Stage 4
                </h6>
              </div>
              <div
                id="stage-1-content"
                className="block pl-8 mt-4 mb-8 stage-content-Mb"
              >
                <div className="space-y-[26px] xl:space-y-14">
                  <h3 className="max-xl:text-2xl 2xl:leading-[58px]">
                    Lorem ipsum dolor sit amet consectetur. Sollicitudin nulla
                    at.
                  </h3>
                  <div className="grid md:grid-cols-2 gap-[26px] md:gap-x-10 md:gap-y-12">
                    <div>
                      <div className="flex items-center gap-x-[10px]">
                        <div className="w-6 h-6 text-center bg-primary-gradient">
                          <span className="text-base font-bold text-white">
                            1
                          </span>
                        </div>
                        <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl text-dark">
                          Lorem ipsum dolor sit
                        </h6>
                      </div>
                      <p className="mt-3 text-xl font-normal text-gray-400 xl:mt-4">
                        Lorem ipsum dolor sit amet consectetur. Mauris sed risus
                        viverra id non dolor praesent est. Natoque feugiat
                        euismod adipiscing interdum vitae tristique. Posuere
                        netus pellentesque pulvinar consequat.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-x-[10px]">
                        <div className="w-6 h-6 text-center bg-primary-gradient">
                          <span className="text-base font-bold text-white">
                            2
                          </span>
                        </div>
                        <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl text-dark">
                          Lorem ipsum dolor sit
                        </h6>
                      </div>
                      <p className="mt-3 text-xl font-normal text-gray-400 xl:mt-4">
                        Lorem ipsum dolor sit amet consectetur. Mauris sed risus
                        viverra id non dolor praesent est. Natoque feugiat
                        euismod adipiscing interdum vitae tristique. Posuere
                        netus pellentesque pulvinar consequat.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-x-[10px]">
                        <div className="w-6 h-6 text-center bg-primary-gradient">
                          <span className="text-base font-bold text-white">
                            3
                          </span>
                        </div>
                        <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl text-dark">
                          Lorem ipsum dolor sit
                        </h6>
                      </div>
                      <p className="mt-3 text-xl font-normal text-gray-400 xl:mt-4">
                        Lorem ipsum dolor sit amet consectetur. Mauris sed risus
                        viverra id non dolor praesent est. Natoque feugiat
                        euismod adipiscing interdum vitae tristique. Posuere
                        netus pellentesque pulvinar consequat.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-x-[10px]">
                        <div className="w-6 h-6 text-center bg-primary-gradient">
                          <span className="text-base font-bold text-white">
                            4
                          </span>
                        </div>
                        <h6 className="text-xl font-bold lg:text-3xl xl:text-4xl text-dark">
                          Lorem ipsum dolor sit
                        </h6>
                      </div>
                      <p className="mt-3 text-xl font-normal text-gray-400 xl:mt-4">
                        Lorem ipsum dolor sit amet consectetur. Mauris sed risus
                        viverra id non dolor praesent est. Natoque feugiat
                        euismod adipiscing interdum vitae tristique. Posuere
                        netus pellentesque pulvinar consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

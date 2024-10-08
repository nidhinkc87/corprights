import React from "react";

const Overview = () => {
  return (
    <section className="pt-[58px] xl:pt-[62px] pb-16 lg:pb-20 2xl:pb-[106px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 2xl:grid-cols-[1fr_minmax(0,0.8fr)] lg:gap-x-20">
          <div className="self-start">
            <div>
              <h3 className="xl:max-w-2xl text-3xl xl:text-5xl 2xl:text-6xl text-transparent bg-clip-text bg-primary-gradient">
                We&apos;re crafting the project planning tool for teams that
                care about quality.
              </h3>
            </div>
          </div>

          <div className="space-y-10 xl:space-y-14">
            <p className="text-base xl:text-2xl font-normal text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Elementum et amet
              suspendisse viverra egestas sapien vivamus tristique hac. Nisl et
              amet facilisis morbi eu. Massa blandit quis aliquam ut odio
              viverra donec arcu. Elementum quam mauris tempor habitasse aliquet
              proin euismod mauris risus. Quam risus turpis elementum arcu
              tincidunt scelerisque euismod at. Felis orci pharetra egestas est.
              Porta nec etiam aenean tempus elementum integer elementum et.
              Elementum tincidunt neque mauris neque. Tincidunt nam tortor sed
              sed semper.
            </p>

            <p className="text-base xl:text-2xl font-normal text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Elementum et amet
              suspendisse viverra egestas sapien vivamus tristique hac. Nisl et
              amet facilisis morbi eu. Massa blandit quis aliquam ut odio
              viverra donec arcu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

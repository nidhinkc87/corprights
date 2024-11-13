import React from "react";

const Overview = () => {
  return (
    <section className="pt-[58px] xl:pt-[62px] pb-16 lg:pb-20 2xl:pb-[106px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 2xl:grid-cols-[1fr_minmax(0,0.8fr)] lg:gap-x-20">
          <div className="self-start">
            <div>
              <h3 className="xl:max-w-2xl text-3xl xl:text-5xl 2xl:text-6xl text-transparent bg-clip-text bg-primary-gradient">
                Transform Your Business Journey with Corprights
              </h3>
            </div>
          </div>

          <div className="space-y-10 xl:space-y-14">
            <p className="text-base xl:text-2xl font-normal text-gray-400">
              Welcome to Corprights, a leading Business Management Consulting
              Company. With a strong presence in Saudi Arabia, we help to
              navigating the complexities of business regulations, finance, tax,
              and legal services. We are a professional firm dedicated to
              providing comprehensive and innovative solutions to help your
              business to grow and flourish in Saudi business market.
            </p>

            <p className="text-base xl:text-2xl font-normal text-gray-400">
              At Corprights, our team of seasoned experts skillfully combines
              the local market insights with global business, ensuring that our
              clients receive complete, impactful advisory services. We work
              with all kinds of organizations- ranging from start-ups to large
              corporations- providing expertise in every field such as strategic
              planning, intellectual property rights, corporate governance,
              financial consulting and etc. We are committed to foster long-term
              partnerships that results in a sustainable growth in your business
              in Saudi Arabia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

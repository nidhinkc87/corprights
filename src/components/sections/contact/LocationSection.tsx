import { BackgroundImage } from "@/components/ui/BackgroundImage";
import bg from "@/assets/bg/contact-bg.jpg";

const addresses = [
  {
    key: 1,
    title: "UAE",
    content: (
      <div>
        <p>
          Block C VL06-106, SRTI Park, University City, P.O Box 66636, Sharjah,
          UAE
        </p>
        <br />
        <a
          href="tel:+971527275214"
          target="_blank"
          className="hover:text-primary"
        >
          +971 52727 5214
        </a>
      </div>
    ),
  },
  {
    key: 2,
    title: "Jeddah",
    content: (
      <div>
        <p>
          Iwan Center, North Building, Above Starbucks, King Abdullah Branch Rd
          Al-Ruwais, Jeddah 23214
        </p>
        <br />
        <a
          href="tel:+966552784002"
          target="_blank"
          className="hover:text-primary"
        >
          +966 55 278 4002
        </a>
        <br />
      </div>
    ),
  },
  {
    key: 3,
    title: "Makkah",
    content: (
      <div>
        <p>
          Al-Sarraj Building , Above Pure Clinic, Al Shoqiyah, Dr Abdul Qadir
          Koshak St, Makkah 24353
        </p>
        <br />
        <a
          href="tel:+966550038903"
          target="_blank"
          className="hover:text-primary"
        >
          +966 55 003 8903
        </a>
        <br />
      </div>
    ),
  },
  {
    key: 4,
    title: "India",
    content: (
      <div>
        <p>
          17/1487 D, Second Floor, Erakh Sons Square, behind Malabar Gold and
          Diamonds Calicut, Kerala 673004, India
        </p>
        <br />
        <a
          href="tel:+919526119248"
          target="_blank"
          className="hover:text-primary"
        >
          +91 95261 19248
        </a>
        <br />
      </div>
    ),
  },
];

export default function LocationSection() {
  return (
    <BackgroundImage
      src={bg}
      alt="contact"
      className="py-16 lg:py-32 2xl:pt-[197px] 2xl:pb-[118px] relative"
      imageClass="lg:!h-[170%]"
    >
      <div className="container mb-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-16 2xl:gap-[103px]">
          <div className="lg:col-span-6">
            <div className="">
              <h2 className="text-white">
                Corprights{" "}
                <span className="text-transparent bg-clip-text bg-primary-gradient">
                  Worldwide
                </span>
              </h2>

              <p className="text-xl md:text-3xl font-normal text-gray-200 mt-7 lg:max-w-lg xl:max-w-4xl">
                We&apos;re your on-the-ground partner in Saudi Arabia. Our team
                of local business experts help you set up and grow. Explore the
                unique advantages of establishing your business in Saudi Arabia.
                Discover how Saudi&apos;s Business environment and strategic
                location can boost your business growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative z-10 lg:mt-56">
        <div className="flex flex-col lg:flex-row gap-2 xl:gap-[10px]">
          {addresses?.map((address) => (
            <div
              key={`address-${address?.key}`}
              className="flex-1 bg-white border border-gray-100 p-5 xl:p-6 flex gap-5 lg:gap-6 items-start"
            >
              <div>
                <svg
                  width={20}
                  height={26}
                  viewBox="0 0 20 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="14.2856"
                    y1="5.71411"
                    x2="14.2856"
                    y2="17.1427"
                    stroke="url(#paint0_linear_6069_15224)"
                    strokeWidth="1.63265"
                  />
                  <line
                    x1={20}
                    y1="11.4281"
                    x2="8.57146"
                    y2="11.4281"
                    stroke="url(#paint1_linear_6069_15224)"
                    strokeWidth="1.63265"
                  />
                  <line
                    x1="7.14254"
                    y1="19.9998"
                    x2="7.14254"
                    y2="25.714"
                    stroke="url(#paint2_linear_6069_15224)"
                    strokeWidth="0.816324"
                  />
                  <line
                    x1={10}
                    y1="22.8569"
                    x2="4.28573"
                    y2="22.8569"
                    stroke="url(#paint3_linear_6069_15224)"
                    strokeWidth="0.816324"
                  />
                  <line
                    x1="2.85689"
                    y1="-0.000244123"
                    x2="2.85689"
                    y2="5.71403"
                    stroke="url(#paint4_linear_6069_15224)"
                    strokeWidth="0.816324"
                  />
                  <line
                    x1="5.71436"
                    y1="2.85665"
                    x2="8.48413e-05"
                    y2="2.85665"
                    stroke="url(#paint5_linear_6069_15224)"
                    strokeWidth="0.816324"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_6069_15224"
                      x1="12.4692"
                      y1="5.71411"
                      x2="7.29675"
                      y2="12.2803"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#017275" />
                      <stop offset={1} stopColor="#2BB162" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_6069_15224"
                      x1={20}
                      y1="9.61182"
                      x2="13.4338"
                      y2="4.43933"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#017275" />
                      <stop offset={1} stopColor="#2BB162" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_6069_15224"
                      x1="5.73438"
                      y1="19.9998"
                      x2="3.92025"
                      y2="24.6056"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#017275" />
                      <stop offset={1} stopColor="#2BB162" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_6069_15224"
                      x1={10}
                      y1="21.4487"
                      x2="5.39414"
                      y2="19.6346"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#017275" />
                      <stop offset={1} stopColor="#2BB162" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_6069_15224"
                      x1="1.44873"
                      y1="-0.000244163"
                      x2="-0.365393"
                      y2="4.60562"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#017275" />
                      <stop offset={1} stopColor="#2BB162" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_6069_15224"
                      x1="5.71436"
                      y1="1.44849"
                      x2="1.10849"
                      y2="-0.365638"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#017275" />
                      <stop offset={1} stopColor="#2BB162" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="space-y-4">
                <p className="font-bold text-xl lg:text-4xl text-transparent bg-clip-text bg-primary-gradient">
                  {address?.title}
                </p>

                <div className="text-sm xl:text-xl font-normal text-dark">
                  {address?.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dark-gradient h-full absolute text-primary text-5xl top-0 w-full" />
    </BackgroundImage>
  );
}

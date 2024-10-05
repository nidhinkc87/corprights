import Image from "next/image";
import Marquee from "react-fast-marquee";

import scaleLogo from "@/assets/home/client.png";
import descriptLogo from "@/assets/home/descript-client-logo.png";
import mercuryLogo from "@/assets/home/mercury-client-logo.png";

const clientLogos = [
  {
    name: "mercury",
    image: mercuryLogo,
  },
  {
    name: "scale",
    image: scaleLogo,
  },
  {
    name: "descript",
    image: descriptLogo,
  },
];

const ClientsMarquee = () => {
  return (
    <Marquee autoFill>
      {clientLogos?.map((client, index) => (
        <div
          key={index}
          className="mx-8 rounded-xl overflow-hidden  w-[121.16px] xl:w-[245.56px] flex justify-center items-center"
        >
          <Image
            src={client.image}
            alt={client?.name}
            width={245.56}
            height={76.4}
            className="w-full invert"
            sizes="245.56px"
          />
        </div>
      ))}
    </Marquee>
  );
};
export default ClientsMarquee;

"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { getClientLogo } from "@/api/clients-logo";
import { getStrapiURL } from "@/api";

const ClientsMarquee = () => {
  const [clientLogos, setClientLogos] = useState<ClientLogo[]>();

  useEffect(() => {
    getClientLogo().then((res) => {
      setClientLogos(res.data);
    });
  }, []);

  if (clientLogos?.length === 0) {
    return <></>;
  }
  return (
    <Marquee autoFill>
      {clientLogos?.map((client, index) => (
        <div
          key={index}
          className="mx-8 rounded-xl overflow-hidden  w-[121.16px] xl:w-[245.56px] flex justify-center items-center"
        >
          <Image
            src={getStrapiURL(client.image.url)}
            alt={client?.title}
            width={245.56}
            height={76.4}
            className="w-full invert pointer-events-none"
            sizes="25vw"
          />
        </div>
      ))}
    </Marquee>
  );
};
export default ClientsMarquee;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getClientLogoByLimit } from "@/api/clients-logo";
import { getStrapiURL } from "@/api";
import Loading from "@/components/elements/common/Loading";

function OurClients() {
  const { ref, inView } = useInView();

  const [clients, setClients] = useState<ClientLogo[]>([]);

  const [paginationData, setPaginationData] = useState<Pagination>();

  const fetchClientLogos = async (page?: number, pageSize?: number) => {
    try {
      const { data, meta } = await getClientLogoByLimit(page, pageSize);

      if (!data) return;

      setPaginationData(meta?.pagination);

      const result =
        page && page > 1 ? [...clients, ...(data || [])] : [...(data || [])];

      setClients(result);
    } catch (err) {
      console.log(err);
    }
  };

  const LoadNextPage = async () => {
    const page = paginationData?.page;

    if (!page) return;

    if (page !== paginationData?.pageCount) {
      await fetchClientLogos(page + 1, paginationData?.pageSize);
    }
  };

  useEffect(() => {
    if (inView) {
      LoadNextPage();
    }
  }, [inView]);

  useEffect(() => {
    fetchClientLogos(1, 20);
  }, []);

  if (!clients || clients?.length === 0) {
    return <></>;
  }

  return (
    <div className="container">
      <h3 className="text-center">Building the Best teams.</h3>

      <p className="text-xl xl:text-3xl font-normal text-gray-100 mt-4 xl:mt-6 xl:max-w-5xl mx-auto text-center">
        From next-gen startups to established enterprises.
      </p>

      <div className="flex flex-wrap justify-center gap-9 xl:gap-14 2xl:gap-[27px] mt-10 xl:mt-16">
        {clients.map((client, i) => (
          <div
            key={`client-logo-${i}`}
            className="w-[44%] md:w-[19%] aspect-[202.5/63] relative"
          >
            <Image
              src={getStrapiURL(client?.image?.url)}
              fill
              sizes=""
              alt={client?.title}
              className="object-cover"
            />
          </div>
        ))}

        {paginationData?.page !== paginationData?.pageCount &&
          paginationData?.total != 0 && (
            <div ref={ref} className="w-full py-10 justify-center flex">
              <Loading className="h-7 w-7 border-black/70 border-r-black/20" />
            </div>
          )}
      </div>
    </div>
  );
}

export default OurClients;

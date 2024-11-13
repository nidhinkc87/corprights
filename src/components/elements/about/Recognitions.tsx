"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Loading from "@/components/elements/common/Loading";
import { getAwardByLimit } from "@/api/award";
import { getStrapiURL } from "@/api";
import { useInView } from "react-intersection-observer";

const Recognitions = () => {
  const { ref, inView } = useInView();

  const [awards, setAwards] = useState<Award[]>([]);

  const [paginationData, setPaginationData] = useState<Pagination>();

  const fetchAwards = async (page?: number, pageSize?: number) => {
    try {
      const { data, meta } = await getAwardByLimit(page, pageSize);

      if (!data) return;

      setPaginationData(meta?.pagination);

      const result =
        page && page > 1 ? [...awards, ...(data || [])] : [...(data || [])];

      setAwards(result);
    } catch (err) {
      console.log(err);
    }
  };

  const LoadNextPage = async () => {
    const page = paginationData?.page;

    if (!page) return;

    if (page !== paginationData?.pageCount) {
      await fetchAwards(page + 1, paginationData?.pageSize);
    }
  };

  useEffect(() => {
    if (inView) {
      LoadNextPage();
    }
  }, [inView]);

  useEffect(() => {
    fetchAwards(1, 20);
  }, []);

  if (!awards || awards?.length === 0) {
    return <></>;
  }

  return (
    <div className="container pt-16 xl:pt-[120px]">
      <div className="flex flex-wrap justify-center relative before:content-[''] before:absolute before:w-[338px] before:lg:w-[575px] before:h-px before:left-1/2 before:-translate-x-1/2 before:top-0 before:bg-gradient-to-r before:from-transparent before:via-[#2AB061] before:to-transparent"></div>

      <div className="container pt-16 xl:pt-[120px]">
        <h3 className="text-center">Awards & Recognitions</h3>
        <div className="flex flex-wrap justify-center gap-9 xl:gap-14 2xl:gap-[27px] mt-10 xl:mt-16">
          {awards?.map((award, i) => (
            <div
              key={`award-image-${i}`}
              className="w-[26%] md:w-[9%] aspect-square relative grayscale hover:grayscale-0 ease-linear duration-300"
            >
              <Image
                src={getStrapiURL(award?.image?.url)}
                alt={award?.title}
                fill
                className="w-full pointer-events-none"
              />
            </div>
          ))}
        </div>
        {paginationData?.page !== paginationData?.pageCount &&
          paginationData?.total != 0 && (
            <div ref={ref} className="w-full py-10 justify-center flex">
              <Loading className="h-7 w-7 border-black/70 border-r-black/20" />
            </div>
          )}
      </div>
    </div>
  );
};

export default Recognitions;

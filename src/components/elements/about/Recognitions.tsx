"use client";
import { getAwardByLimit } from "@/api/award";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Loading from "@/components/elements/common/Loading";
import { getStrapiURL } from "@/api";

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
  return (
    <div className="container">
      <h3 className="text-center">Awards & Recognitions</h3>

      <div className="flex flex-wrap justify-center gap-9 xl:gap-14 2xl:gap-[27px] mt-10 xl:mt-16">
        {awards?.map((award, i) => (
          <div
            key={`award-image-${i}`}
            className="w-[26%] md:w-[9%] aspect-square relative"
          >
            <Image
              src={getStrapiURL(award?.image?.url)}
              alt={award?.title}
              fill
              sizes=""
              className="w-full grayscale hover:grayscale-0 ease-linear duration-300"
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
  );
};

export default Recognitions;

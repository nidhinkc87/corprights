"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Loading from "@/components/elements/common/Loading";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { getLicensesByLimit } from "@/api/license";
import { useInView } from "react-intersection-observer";

export default function LicenseDropdown() {
  const { ref, inView } = useInView();

  const [licenses, setLicenses] = useState<License[]>([]);

  const [paginationData, setPaginationData] = useState<Pagination>();

  const fetchLicenses = async (page?: number, pageSize?: number) => {
    try {
      const { data, meta } = await getLicensesByLimit(page, pageSize);

      if (!data) return;

      setPaginationData(meta?.pagination);

      const result =
        page && page > 1 ? [...licenses, ...(data || [])] : [...(data || [])];

      setLicenses(result);
    } catch (err) {
      console.log(err);
    }
  };

  const LoadNextPage = async () => {
    const page = paginationData?.page;

    if (!page) return;

    if (page !== paginationData?.pageCount) {
      await fetchLicenses(page + 1, paginationData?.pageSize);
    }
  };

  useEffect(() => {
    if (inView) {
      LoadNextPage();
    }
  }, [inView]);

  useEffect(() => {
    fetchLicenses(1, 30);
  }, []);

  return (
    <li className="relative xl:py-8 group cursor-pointer">
      <span className="flex justify-between gap-x-2 items-center px-4 py-4 xl:py-2 text-xl md:text-base font-bold text-gray-400 group-hover:text-primary hover:bg-gray-100/10 ease-linear duration-300 rounded-[24px]">
        Licences
        <svg
          className="group-hover:rotate-180 ease-in-out duration-200"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-hover:fill-primary"
            d="M8.66652 11.2004C8.19985 11.2004 7.73318 11.0204 7.37985 10.6671L3.03318 6.32042C2.83985 6.12708 2.83985 5.80708 3.03318 5.61375C3.22652 5.42042 3.54652 5.42042 3.73985 5.61375L8.08652 9.96042C8.40652 10.2804 8.92652 10.2804 9.24652 9.96042L13.5932 5.61375C13.7865 5.42042 14.1065 5.42042 14.2999 5.61375C14.4932 5.80708 14.4932 6.12708 14.2999 6.32042L9.95318 10.6671C9.59985 11.0204 9.13318 11.2004 8.66652 11.2004Z"
            fill="#706F6F"
          />
        </svg>
      </span>

      <ul className="max-xl:ml-4 xl:absolute xl:pt-8 bg-white xl:p-6 w-max hidden group-hover:block">
        <ScrollArea className="max-h-72 w-48 overflow-y-auto">
          {licenses.map((license) => (
            <li
              key={`license-${license?.id}`}
              className="relative group/child cursor-pointer p-4 hover:bg-gray-100/10 ease-linear duration-300 rounded-[24px]"
            >
              <Link
                href={`/licenses/${license?.slug}`}
                className="text-base font-bold text-dark group-hover/child:text-primary ease-linear duration-300 py-4 rounded-[24px]"
              >
                {license?.title}
              </Link>
            </li>
          ))}

          {paginationData?.page !== paginationData?.pageCount &&
            paginationData?.total != 0 && (
              <div ref={ref} className="w-full py-56 justify-center flex">
                <Loading className="h-7 w-7 border-black/70 border-r-black/20" />
              </div>
            )}
        </ScrollArea>
      </ul>
    </li>
  );
}

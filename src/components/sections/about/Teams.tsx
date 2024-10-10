"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/elements/common/Loading";
import Markdown from "react-markdown";
import { getStrapiURL } from "@/api";
import { getTeamMembersByLimit } from "@/api/teams";
import { useInView } from "react-intersection-observer";

const Teams = () => {
  const { ref, inView } = useInView();

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  const [paginationData, setPaginationData] = useState<Pagination>();

  const fetchTeam = async (page?: number, pageSize?: number) => {
    try {
      const { data, meta } = await getTeamMembersByLimit(page, pageSize);

      if (!data) return;

      setPaginationData(meta?.pagination);

      const result =
        page && page > 1
          ? [...teamMembers, ...(data || [])]
          : [...(data || [])];

      setTeamMembers(result);
    } catch (err) {
      console.log(err);
    }
  };

  const LoadNextPage = async () => {
    const page = paginationData?.page;

    if (!page) return;

    if (page !== paginationData?.pageCount) {
      await fetchTeam(page + 1, paginationData?.pageSize);
    }
  };

  useEffect(() => {
    if (inView) {
      LoadNextPage();
    }
  }, [inView]);

  useEffect(() => {
    fetchTeam(1, 20);
  }, []);

  return (
    <section className="py-16 xl:py-24 2xl:py-[120px] relative bg-white">
      <div className="container">
        <h2 className="mx-auto text-center">Meet our leadership team</h2>

        <p className="text-xl xl:text-3xl font-normal text-gray-400 mt-4 xl:mt-6 xl:max-w-5xl mx-auto text-center">
          Our approach to Nearbound extends the concept of a trusted ecosystem
          to a global scale. We adopt the speed, efficiency and scale of digital
          solutions and combine it with the personal connections that are best
          delivered through traditional face to face relationships and
          interactions.
        </p>

        <div className="mt-10 xl:mt-16 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[18px] lg:gap-x-4 gap-y-7">
          {teamMembers?.map((member, index) => (
            <div key={index} className="space-y-8 ">
              <div className="relative w-full aspect-[304/332]">
                <Image
                  src={getStrapiURL(member?.image?.url)}
                  alt={member?.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>

              <Collapsible>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-dark text-xl xl:text-2xl font-bold">
                      {member?.name}
                    </p>

                    <p className="text-base xl:text-xl font-normal text-gray-400 pt-1">
                      {member?.designation}
                    </p>
                  </div>

                  <CollapsibleTrigger className=" w-8 h-8 rounded-full bg-gray-200/30 flex justify-center items-center">
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3334 7.5H1.66675C1.12008 7.5 0.666748 7.04667 0.666748 6.5C0.666748 5.95333 1.12008 5.5 1.66675 5.5H12.3334C12.8801 5.5 13.3334 5.95333 13.3334 6.5C13.3334 7.04667 12.8801 7.5 12.3334 7.5Z"
                        fill="#706F6F"
                      />
                      <path
                        d="M7 12.8332C6.45333 12.8332 6 12.3798 6 11.8332V1.1665C6 0.619837 6.45333 0.166504 7 0.166504C7.54667 0.166504 8 0.619837 8 1.1665V11.8332C8 12.3798 7.54667 12.8332 7 12.8332Z"
                        fill="#706F6F"
                      />
                    </svg>
                  </CollapsibleTrigger>
                </div>

                <CollapsibleContent>
                  <div className="mt-4 text-base xl:text-2xl font-normal text-gray-400 prose-sm lg:prose-md prose-a:no-underline prose-a:text-primary/85 hover:prose-a:text-primary ">
                    <Markdown>{member?.content}</Markdown>
                  </div>

                  <div className="mt-4">
                    <Link
                      href={member.linkedin ?? "#"}
                      className="text-base xl:text-2xl font-bold text-gray-400 hover:text-blue-600/90"
                    >
                      Linkedin
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
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
    </section>
  );
};

export default Teams;

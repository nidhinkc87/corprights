"use client";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import vector1 from "@/assets/home/bg/download-vector-1.png";
import vector2 from "@/assets/home/bg/download-vector-1.png";
import { getBrochure } from "@/api/brochure";
import { getStrapiURL } from "@/api";

const BrochureBanner = () => {
  const [brochure, setBrochure] = useState<Image>();

  useEffect(() => {
    const fetchBrochure = async () => {
      try {
        const { data } = await getBrochure();
        if (!data) return;
        const home = data as HomePage;
        setBrochure(home?.brochure);
      } catch (error) {
        console.log("error ", error);
      }
    };

    fetchBrochure();
  }, []);

  const downloadBrochure = () => {
    if (!brochure) return;

    const brochureUrl = getStrapiURL(brochure?.url);
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.target = "_blank";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section>
      <div className="container max-md:px-0">
        <div className="bg-primary-gradient md:mx-7 relative pt-24 pb-32">
          <Image
            src={vector1}
            alt="brochure-banner-bg-1"
            className="absolute left-0 bottom-0 -z-[1]"
          />

          <Image
            src={vector2}
            alt="brochure-banner-bg-1"
            className="absolute right-0 bottom-0 -z-[1]"
          />

          <div className="container">
            <div className="flex flex-col gap-4 xl:gap-5 text-center xl:max-w-4xl mx-auto text-white">
              <h2 className="">Ready to get started?</h2>

              <p className="text-base xl:text-3xl font-normal">
                Get personal learning recommendations. Subscribe Us for new
                courses, application notifications, downloads etc
              </p>

              <p className="text-base xl:text-xl font-bold">
                Get detailed about our business ideas. Download brochure now!
              </p>

              <Button
                variant="secondary"
                className="w-fit gap-3 px-8 mx-auto cursor-pointer"
                onClick={() => downloadBrochure()}
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15.2916C7.41667 15.2916 7.34167 15.275 7.25833 15.2416C7.025 15.15 6.875 14.9166 6.875 14.6666V9.66663C6.875 9.32496 7.15833 9.04163 7.5 9.04163C7.84167 9.04163 8.125 9.32496 8.125 9.66663V13.1583L8.725 12.5583C8.96667 12.3166 9.36667 12.3166 9.60833 12.5583C9.85 12.8 9.85 13.2 9.60833 13.4416L7.94167 15.1083C7.825 15.225 7.65833 15.2916 7.5 15.2916Z"
                    fill="#2BB162"
                  />
                  <path
                    d="M7.50003 15.2917C7.3417 15.2917 7.18337 15.2333 7.05837 15.1083L5.3917 13.4417C5.15003 13.2 5.15003 12.8 5.3917 12.5583C5.63337 12.3167 6.03337 12.3167 6.27503 12.5583L7.9417 14.225C8.18337 14.4667 8.18337 14.8667 7.9417 15.1083C7.8167 15.2333 7.65837 15.2917 7.50003 15.2917Z"
                    fill="#2BB162"
                  />
                  <path
                    d="M12.5 19.4583H7.49996C2.97496 19.4583 1.04163 17.525 1.04163 13V7.99996C1.04163 3.47496 2.97496 1.54163 7.49996 1.54163H11.6666C12.0083 1.54163 12.2916 1.82496 12.2916 2.16663C12.2916 2.50829 12.0083 2.79163 11.6666 2.79163H7.49996C3.65829 2.79163 2.29163 4.15829 2.29163 7.99996V13C2.29163 16.8416 3.65829 18.2083 7.49996 18.2083H12.5C16.3416 18.2083 17.7083 16.8416 17.7083 13V8.83329C17.7083 8.49163 17.9916 8.20829 18.3333 8.20829C18.675 8.20829 18.9583 8.49163 18.9583 8.83329V13C18.9583 17.525 17.025 19.4583 12.5 19.4583Z"
                    fill="#2BB162"
                  />
                  <path
                    d="M18.3333 9.45828H15C12.15 9.45828 11.0416 8.34995 11.0416 5.49995V2.16662C11.0416 1.91662 11.1916 1.68328 11.425 1.59162C11.6583 1.49162 11.925 1.54995 12.1083 1.72495L18.775 8.39162C18.95 8.56662 19.0083 8.84162 18.9083 9.07495C18.8083 9.30828 18.5833 9.45828 18.3333 9.45828ZM12.2916 3.67495V5.49995C12.2916 7.64995 12.85 8.20828 15 8.20828H16.825L12.2916 3.67495Z"
                    fill="#2BB162"
                  />
                </svg>
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureBanner;

"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  name: string;
  designation: string;
  profileImage: string | StaticImport;
  testimonial: string;
}

const TestimonialCard = ({
  name,
  designation,
  profileImage,
  testimonial,
}: TestimonialCardProps) => {
  return (
    <div className="border border-gray-100 p-5 md:p-6 shadow-card-20dp-sm md:shadow-card-20dp">
      <div className="flex gap-2 lg:gap-3 items-center">
        <div className="w-8 h-8 lg:w-[39px] lg:h-[39px] rounded-full overflow-hidden">
          <Image
            src={profileImage}
            alt={`${name}-profile-image`}
            width={39}
            height={39}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div>
          <p className="pb-1 text-lg xl:text-2xl font-bold text-dark">{name}</p>

          <p className="text-sm xl:text-xl text-gray-400">{designation}</p>
        </div>
      </div>

      <p className="pt-3 lg:pt-6 text-sm xl:text-xl text-gray-400">
        {testimonial}
      </p>
    </div>
  );
};

export default TestimonialCard;

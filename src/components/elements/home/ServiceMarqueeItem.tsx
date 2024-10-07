import { Dialog, DialogTrigger } from "@/components/ui/Dialog";
import React from "react";
import ServiceDetailDialog from "./ServiceDetailDialog";
import { getStrapiURL } from "@/api";

interface ServiceMarqueeItemProps {
  service: Service;
}

const ServiceMarqueeItem = ({ service }: ServiceMarqueeItemProps) => {
  return (
    <Dialog>
      <DialogTrigger className="p-4 xl:p-6 flex gap-[10px] items-center justify-between hover:bg-gray-100/20 ease-linear duration-300 cursor-pointer w-full">
        <p className="text-dark font-bold text-3xl xl:text-5xl capitalize">
          {service.title}
        </p>

        <svg
          className="w-5 xl:w-8"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9998 30.3337H11.9998C4.75984 30.3337 1.6665 27.2403 1.6665 20.0003V12.0003C1.6665 4.76033 4.75984 1.66699 11.9998 1.66699H19.9998C27.2398 1.66699 30.3332 4.76033 30.3332 12.0003V20.0003C30.3332 27.2403 27.2398 30.3337 19.9998 30.3337ZM11.9998 3.66699C5.85317 3.66699 3.6665 5.85366 3.6665 12.0003V20.0003C3.6665 26.147 5.85317 28.3337 11.9998 28.3337H19.9998C26.1465 28.3337 28.3332 26.147 28.3332 20.0003V12.0003C28.3332 5.85366 26.1465 3.66699 19.9998 3.66699H11.9998Z"
            fill="#4F4F4F"
          />

          <path
            d="M8.00008 24.9996C7.74675 24.9996 7.49342 24.9063 7.29342 24.7063C6.90675 24.3196 6.90675 23.6796 7.29342 23.2929L23.2934 7.29293C23.6801 6.90626 24.3201 6.90626 24.7068 7.29293C25.0934 7.6796 25.0934 8.3196 24.7068 8.70626L8.70675 24.7063C8.50675 24.9063 8.25342 24.9996 8.00008 24.9996Z"
            fill="#4F4F4F"
          />

          <path
            d="M23.9998 14.3333C23.4532 14.3333 22.9998 13.88 22.9998 13.3333V9H18.6665C18.1198 9 17.6665 8.54667 17.6665 8C17.6665 7.45333 18.1198 7 18.6665 7H23.9998C24.5465 7 24.9998 7.45333 24.9998 8V13.3333C24.9998 13.88 24.5465 14.3333 23.9998 14.3333Z"
            fill="#4F4F4F"
          />

          <path
            d="M13.3333 25.0003H8C7.45333 25.0003 7 24.547 7 24.0003V18.667C7 18.1203 7.45333 17.667 8 17.667C8.54667 17.667 9 18.1203 9 18.667V23.0003H13.3333C13.88 23.0003 14.3333 23.4537 14.3333 24.0003C14.3333 24.547 13.88 25.0003 13.3333 25.0003Z"
            fill="#4F4F4F"
          />

          <path
            d="M24.0001 24.9996C23.7468 24.9996 23.4934 24.9063 23.2934 24.7063L7.29342 8.70626C6.90675 8.3196 6.90675 7.6796 7.29342 7.29293C7.68008 6.90626 8.32009 6.90626 8.70675 7.29293L24.7068 23.2929C25.0934 23.6796 25.0934 24.3196 24.7068 24.7063C24.5068 24.9063 24.2534 24.9996 24.0001 24.9996Z"
            fill="#4F4F4F"
          />

          <path
            d="M8 14.3333C7.45333 14.3333 7 13.88 7 13.3333V8C7 7.45333 7.45333 7 8 7H13.3333C13.88 7 14.3333 7.45333 14.3333 8C14.3333 8.54667 13.88 9 13.3333 9H9V13.3333C9 13.88 8.54667 14.3333 8 14.3333Z"
            fill="#4F4F4F"
          />

          <path
            d="M23.9998 25.0003H18.6665C18.1198 25.0003 17.6665 24.547 17.6665 24.0003C17.6665 23.4537 18.1198 23.0003 18.6665 23.0003H22.9998V18.667C22.9998 18.1203 23.4532 17.667 23.9998 17.667C24.5465 17.667 24.9998 18.1203 24.9998 18.667V24.0003C24.9998 24.547 24.5465 25.0003 23.9998 25.0003Z"
            fill="#4F4F4F"
          />
        </svg>
      </DialogTrigger>

      <ServiceDetailDialog
        description={service?.description}
        image={getStrapiURL(service?.image?.url)}
        title={service?.title}
      />
    </Dialog>
  );
};

export default ServiceMarqueeItem;

import { X } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

import { DialogClose, DialogContent } from "@/components/ui/Dialog";

interface ServiceDetailDialogProps {
  title: string;
  description?: string;
  image: StaticImport | string;
}

const ServiceDetailDialog = ({
  title,
  description,
  image,
}: ServiceDetailDialogProps) => {
  return (
    <DialogContent className="sm:max-w-[674px] p-0">
      <div>
        <Image src={image} alt="" className="w-full" />
      </div>

      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 xl:p-10">
        <div className="sm:flex sm:items-start">
          <div className="">
            <h3
              className="text-3xl xl:text-5xl font-bold text-dark"
              id="modal-title"
            >
              {title}
            </h3>

            <div className="mt-4">
              <p className="text-xl text-gray-400">{description}</p>
            </div>
          </div>
        </div>
      </div>

      <DialogClose className="absolute w-10 h-10 rounded-full right-6 top-4 bg-[#B5B5B51A]/10 lg:bg-light/40 justify-center items-center flex">
        <X className="text-gray-700 w-5 h-5" />
      </DialogClose>
    </DialogContent>
  );
};

export default ServiceDetailDialog;

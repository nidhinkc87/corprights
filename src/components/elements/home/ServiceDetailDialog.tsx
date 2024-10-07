import { X } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

import { DialogClose, DialogContent } from "@/components/ui/Dialog";
import { ScrollArea } from "@/components/ui/ScrollArea";
import Markdown from "react-markdown";

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
      <div className="w-full h-[16.5rem] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
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

            <ScrollArea className="max-h-72 overflow-y-auto mt-4">
              <div className="text-xl text-gray-400 prose-sm lg:prose-md font-light prose-a:no-underline prose-a:text-primary/85 hover:prose-a:text-primary ">
                <Markdown>{description}</Markdown>
              </div>
            </ScrollArea>
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

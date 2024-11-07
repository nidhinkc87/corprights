"use client";

import "react-international-phone/style.css";

import { PhoneInput, PhoneInputProps } from "react-international-phone";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface CountryPhoneInputProps extends PhoneInputProps {
  onValueChange?: (phone: string, code: string) => void;
}

export default function CountryPhoneInput({
  onValueChange,
  className,
  ...props
}: CountryPhoneInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (
    phone: string,
    meta: {
      country: ParsedCountry;
      inputValue: string;
    }
  ) => {
    setInputValue(phone);
    onValueChange?.(phone, meta.country?.dialCode);
  };

  return (
    <div className="relative flex w-full items-center" data-lenis-prevent>
      <PhoneInput
        defaultCountry="in"
        className={cn(
          "flex h-10  w-full items-center space-x-1 ps-1 bg-input",
          "[&>div>button]:!rounded [&>div>button]:!border-none [&>div>button]:p-1 [&>div>button]:!bg-transparent",
          "[&>input]:!w-full [&>input]:!bg-transparent [&>input]:!border-none [&>input]:!font-normal [&>input]:!text-base [&>input]:!text-gray-600",
          "[&>div>ul]:!z-40",
          className
        )}
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter Phone Number"
        {...props}
      />
    </div>
  );
}

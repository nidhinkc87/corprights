"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

import { CalculatorFormProps } from "@/components/sections/calculator/CostCalculator";
import { Label } from "@/components/ui/Label";
import { useFormikContext } from "formik";

const options = [
  { key: 1, name: "Advertising", value: "advertising" },
  { key: 2, name: "IT Consultancy", value: "it-consultancy" },
  { key: 3, name: "Online Education", value: "online-education" },
  { key: 4, name: "Other", value: "other" },
];

export default function BusinessActivity() {
  const { values, setFieldValue, errors, touched } =
    useFormikContext<CalculatorFormProps>();

  return (
    <div className="tabs">
      <div className="w-full">
        <>
          <div className="relative">
            <Label
              htmlFor="business-activity"
              className="block text-xl font-bold  text-gray-400"
            >
              Which Business activity are you looking for?
            </Label>

            <div className="text-gray-200 relative mt-[18px]">
              <Select
                value={values?.business_activity}
                onValueChange={(val) => setFieldValue("business_activity", val)}
              >
                <SelectTrigger className="h-12" id="business-activity">
                  <SelectValue placeholder="Select your purpose…" />
                </SelectTrigger>

                <SelectContent className="bg-background border-none drop-shadow rounded-md">
                  <SelectGroup>
                    {options?.map((option) => (
                      <SelectItem
                        key={`business-${option?.key}`}
                        value={option?.value}
                      >
                        {option?.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {touched?.business_activity && errors?.business_activity && (
                <div className="text-red-500 text-base">
                  {errors?.business_activity}
                </div>
              )}
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

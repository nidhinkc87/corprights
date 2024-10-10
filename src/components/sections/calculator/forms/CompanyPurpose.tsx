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
  { key: 1, name: "Company Expansion", value: "company-expansion" },
  { key: 2, name: "New Company", value: "new-company" },
];

export default function CompanyPurpose() {
  const { values, setFieldValue, errors } =
    useFormikContext<CalculatorFormProps>();

  return (
    <div className="tabs">
      <div className="w-full">
        <>
          <div className="relative">
            <Label
              htmlFor="purpose"
              className="block text-xl font-bold  text-gray-400"
            >
              What is the purpose of your business in KSA?
            </Label>

            <div className="text-gray-200 relative mt-[18px]">
              <Select
                value={values?.company_purpose}
                onValueChange={(val) => setFieldValue("company_purpose", val)}
              >
                <SelectTrigger className="h-12" id="purpose">
                  <SelectValue placeholder="Select your purpose…" />
                </SelectTrigger>

                <SelectContent className="bg-background border-none drop-shadow rounded-md">
                  <SelectGroup>
                    {options?.map((option) => (
                      <SelectItem
                        key={`purpose-${option?.key}`}
                        value={option?.value}
                      >
                        {option?.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {errors?.company_purpose && (
                <div className="text-red-500 text-base">
                  {errors?.company_purpose}
                </div>
              )}
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

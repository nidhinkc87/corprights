"use client";

import { CalculatorFormProps } from "@/components/sections/calculator/CostCalculator";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useFormikContext } from "formik";

export default function Business() {
  const { values, handleChange, errors, touched } =
    useFormikContext<CalculatorFormProps>();

  return (
    <div className="tabs">
      <div className="w-full">
        <>
          <div className="relative">
            <Label
              htmlFor="business-name"
              className="block text-xl font-bold text-gray-400"
            >
              Do you have a business name in mind?
            </Label>

            <div className="relative mt-[18px]">
              <Input
                type="text"
                className="appearance-none w-full focus:outline-double outline-primary"
                name="business_name"
                id="business-name"
                placeholder="Enter business name"
                value={values?.business_name}
                onChange={handleChange}
              />

              {touched?.business_name && errors?.business_name && (
                <div className="text-red-500 text-base">
                  {errors?.business_name}
                </div>
              )}
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

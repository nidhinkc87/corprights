"use client";

import { CalculatorFormProps } from "@/components/sections/calculator/CostCalculator";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useFormikContext } from "formik";

const options = [
  {
    key: 1,
    name: "Ministry of commerce and Industry - WLL Company in Qatar mainland",
    value: "w-l-l-company-qatar",
  },
  {
    key: 2,
    name: "Qatar Financial Centre (QFC)",
    value: "qatar-financial-centre",
  },
  {
    key: 3,
    name: "Qatar free zone (QFZ)",
    value: "qatar-free-zone",
  },
  {
    key: 4,
    name: "Qatar science and technology",
    value: "qatar-science-and-technology",
  },
  {
    key: 5,
    name: "Not sure",
    value: "not-sure",
  },
];

export default function Jurisdiction() {
  const { setFieldValue, errors, touched, values } =
    useFormikContext<CalculatorFormProps>();

  return (
    <div className="tabs">
      <div className="w-full">
        <>
          <p className="block text-xl font-bold  text-gray-400">
            Select Jurisdiction
          </p>

          <div className="relative mt-[18px] space-y-[6px]">
            {options?.map((option) => (
              <div
                key={`jurisdiction-${option?.key}`}
                className="text-gray-200 relative flex gap-4 items-center py-[10px] cursor-pointer"
              >
                <Input
                  id={option?.value}
                  name="jurisdiction"
                  type="radio"
                  className="sr-only peer"
                  onChange={(e) =>
                    setFieldValue("jurisdiction", e.target?.value)
                  }
                  checked={option?.value == values?.jurisdiction}
                  value={option?.value}
                />

                <div className="peer-checked:bg-primary rounded-full">
                  <Label
                    htmlFor={option?.value}
                    className="w-[18px] h-[18px] rounded-full bg-gray-400/40 flex items-center justify-center"
                  >
                    <svg
                      width={10}
                      height={8}
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.35229 0.965918C9.57026 1.18389 9.57026 1.54248 9.35229 1.76045L4.07886 7.03389C3.96987 7.14287 3.82573 7.19912 3.68159 7.19912C3.53745 7.19912 3.39331 7.14287 3.28433 7.03389L0.647607 4.39717C0.429639 4.1792 0.429639 3.82061 0.647607 3.60264C0.865576 3.38467 1.22417 3.38467 1.44214 3.60264L3.68159 5.84209L8.55776 0.965918C8.77573 0.744434 9.13433 0.744434 9.35229 0.965918Z"
                        fill="white"
                      />
                    </svg>
                  </Label>
                </div>

                <Label
                  htmlFor={option?.value}
                  className="text-base font-bold text-gray-400 cursor-pointer peer-checked:text-dark"
                >
                  {option?.name}
                </Label>
              </div>
            ))}

            {touched?.jurisdiction && errors?.jurisdiction && (
              <div className="text-red-500 text-base">
                {errors?.jurisdiction}
              </div>
            )}
          </div>
        </>
      </div>
    </div>
  );
}

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
import CountryPhoneInput from "@/components/elements/common/CountryPhoneInput";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { useFormikContext } from "formik";

const options = [
  { key: 1, name: "United States", value: "united-states" },
  { key: 2, name: "Canada", value: "canada" },
];

export default function Contact() {
  const { values, setFieldValue, handleChange, errors, touched } =
    useFormikContext<CalculatorFormProps>();

  const handlePhoneChange = (val: string) => {
    setFieldValue("phone", val);
  };

  return (
    <div className="tabs">
      <div className="w-full">
        <>
          <p className="block text-xl font-bold  text-gray-400">
            Contact Details
          </p>

          <div className="relative mt-[18px]">
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Label
                  htmlFor="first-name"
                  className="block text-base font-bold  text-gray-200"
                >
                  First name
                </Label>

                <div className="mt-4">
                  <Input
                    type="text"
                    id="first-name"
                    placeholder="First name"
                    className="w-full"
                    name="first_name"
                    value={values?.first_name}
                    onChange={handleChange}
                  />

                  {touched?.first_name && errors?.first_name && (
                    <div className="text-red-500 text-base">
                      {errors?.first_name}
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <Label
                  htmlFor="last-name"
                  className="block text-base font-bold  text-gray-200"
                >
                  Last name
                </Label>

                <div className="mt-4">
                  <Input
                    type="text"
                    id="last-name"
                    placeholder="Last name"
                    className="w-full"
                    name="last_name"
                    value={values?.last_name}
                    onChange={handleChange}
                  />

                  {touched?.last_name && errors?.last_name && (
                    <div className="text-red-500 text-base">
                      {errors?.last_name}
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-6">
                <Label
                  htmlFor="email"
                  className="block text-base font-bold  text-gray-200"
                >
                  Email address
                </Label>

                <div className="mt-4">
                  <Input
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    className="w-full"
                    value={values?.email}
                    onChange={handleChange}
                  />

                  {touched?.email && errors?.email && (
                    <div className="text-red-500 text-base">
                      {errors?.email}
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-full">
                <Label
                  htmlFor="country"
                  className="block text-base font-bold text-gray-200"
                >
                  Phone number
                </Label>

                <div className="mt-4 relative">
                  <CountryPhoneInput
                    value={values.phone}
                    onValueChange={handlePhoneChange}
                    className="h-12"
                  />

                  {touched?.phone && errors?.phone && (
                    <div className="text-red-500 text-base">
                      {errors?.phone}
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-full">
                <Label
                  htmlFor="country"
                  className="block text-base font-bold text-gray-200"
                >
                  Nationality
                </Label>

                <div className="mt-4 relative">
                  <Select
                    onValueChange={(val) => setFieldValue("nationality", val)}
                    value={values?.nationality}
                  >
                    <SelectTrigger className="h-12" id="country">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>

                    <SelectContent className="bg-background border-none drop-shadow rounded-md">
                      <SelectGroup>
                        {options?.map((option) => (
                          <SelectItem
                            key={`nationality-${option?.key}`}
                            value={option?.value}
                          >
                            {option?.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  {touched?.nationality && errors?.nationality && (
                    <div className="text-red-500 text-base">
                      {errors?.nationality}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <Label
                  htmlFor="message"
                  className="block text-base font-bold text-gray-200"
                >
                  Message
                </Label>

                <div className="mt-4">
                  <Textarea
                    id="message"
                    name="message"
                    value={values?.message}
                    onChange={handleChange}
                    rows={6}
                  />

                  {touched?.message && errors?.message && (
                    <div className="text-red-500 text-base">
                      {errors?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

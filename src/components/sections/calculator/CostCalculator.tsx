"use client";

import * as Yup from "yup";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
} from "@/components/ui/AlertDialog";
import { Form, Formik } from "formik";

import Business from "@/components/sections/calculator/forms/Business";
import BusinessActivity from "@/components/sections/calculator/forms/BusinessActivity";
import { Button } from "@/components/ui/Button";
import CompanyPurpose from "@/components/sections/calculator/forms/CompanyPurpose";
import Contact from "@/components/sections/calculator/forms/Contact";
import Image from "next/image";
import Jurisdiction from "@/components/sections/calculator/forms/Jurisdiction";
import Link from "next/link";
import Office from "@/components/sections/calculator/forms/Office";
import Owners from "@/components/sections/calculator/forms/Owners";
import Visa from "@/components/sections/calculator/forms/Visa";
import { addCostCalculatorEnquiry } from "@/api/calculator";
import { cn } from "@/lib/utils";
import gif from "@/assets/gif/success.gif";
import { isPhoneValid } from "@/lib/phone";
import { toast } from "react-toastify";
import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Company Purpose",
    content: <CompanyPurpose />,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    title: "Business Activity",
    content: <BusinessActivity />,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    title: "Jurisdiction",
    content: <Jurisdiction />,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 4,
    title: "Owners",
    content: <Owners />,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 5,
    title: "Visa",
    content: <Visa />,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 6,
    title: "Office Space",
    content: <Office />,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 7,
    title: "Business Name",
    content: <Business />,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 8,
    title: "Contact Details",
    content: <Contact />,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];

export interface CalculatorFormProps {
  company_purpose: string;
  business_activity: string;
  jurisdiction: string;
  owners: string;
  visa_required: boolean;
  office_size: string;
  business_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  nationality: string | undefined;
  message: string;
}

const validationSchema = [
  Yup.object({
    company_purpose: Yup.string().required("Field is required"),
  }),
  Yup.object({
    business_activity: Yup.string().required("Field is required"),
  }),
  Yup.object({
    jurisdiction: Yup.string().required("Field is required"),
  }),
  Yup.object({
    owners: Yup.string().required("Field is required"),
  }),
  Yup.object({
    visa_required: Yup.string().required("Field is required"),
  }),
  Yup.object({
    office_size: Yup.string().required("Field is required"),
  }),
  Yup.object({
    business_name: Yup.string().required("Field is required"),
  }),
  Yup.object({
    first_name: Yup.string()
      .transform((value) => value.trim())
      .strict(true)
      .matches(/.*\S.*/, "Field is required")
      .min(1, "The field needs to be at least 1 char")
      .required("Field is required"),
    last_name: Yup.string()
      .transform((value) => value.trim())
      .strict(true)
      .matches(/.*\S.*/, "Field is required")
      .min(1, "The field needs to be at least 1 char")
      .required("Field is required"),
    email: Yup.string()
      .email("Invalid email address")
      ?.trim()
      .test("is-valid-email", "Invalid email address", (value) => {
        if (!value) return true;
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      })
      .required("Field is required"),
    phone: Yup.string()
      .test({
        name: "is-valid-contact",
        test(value, ctx) {
          if (!value) {
            return ctx.createError({
              message: "Phone is required",
            });
          }

          if (value) {
            if (!isPhoneValid(value)) {
              return ctx.createError({
                message: "Invalid phone number",
              });
            }
          }

          return true;
        },
      })
      .required("Phone is required"),
    nationality: Yup.string().required("Field is required"),
    message: Yup.string()
      .transform((value) => value.trim())
      .strict(true)
      .matches(/.*\S.*/, "Field is required")
      .required("Field is required"),
  }),
];

export default function CostCalculator() {
  const [currentStep, setCurrentStep] = useState(1);

  const [isOpen, setIsOpen] = useState(false);

  const initialValues = {
    company_purpose: "",
    business_activity: "",
    jurisdiction: "",
    owners: "",
    visa_required: true,
    office_size: "",
    business_name: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    nationality: "",
    message: "",
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleCalculatorFormSubmit = async (values: CalculatorFormProps) => {
    try {
      const response = await addCostCalculatorEnquiry(values);
      console.log(response, values);

      if (response?.error) {
        toast.error(response?.error ?? "Try again later");
        return false;
      }

      if (response?.data) {
        setIsOpen(true);

        return true;
      }

      return false;
    } catch (err) {
      console.error(err);

      toast.error("Try again later");
      return false;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[currentStep - 1]}
      onSubmit={async (values, helpers) => {
        if (currentStep === steps.length) {
          const response: boolean = await handleCalculatorFormSubmit(values);

          if (response) helpers?.resetForm();
        }
      }}
      enableReinitialize
    >
      {({ validateForm, handleSubmit, setTouched }) => (
        <Form onSubmit={handleSubmit}>
          <section className="pt-[89px] relative pb-16 ">
            <div className="container grid py-5 lg:py-16 2xl:pt-[103px] 2xl:pb-[90px]">
              <div className="grid lg:grid-cols-12 gap-6">
                <div className="lg:col-span-6">
                  <p className="text-xl font-bold text-primary mb-2">
                    Cost Calculator
                  </p>

                  <h4 className="font-bold pb-4">
                    Calculate Your{" "}
                    <span className="text-primary">Business Setup Cost</span>
                  </h4>

                  <p className="text-xl xl:text-3xl font-normal text-gray-400">
                    Get an estimated cost of your company setup in under a
                    minute with our interactive cost calculator
                  </p>

                  <div className="mt-9">
                    <div className="bg-white border border-gray-100 shadow-card-20dp px-6 py-5 lg:py-10 lg:px-12">
                      <div className="mb-5">
                        <h6 className="text-xl lg:text-3xl xl:text-4xl font-bold text-dark mb-5">
                          Calculate Your Business Setup Cost
                        </h6>

                        <p className="text-xl xl:text-3xl text-gray-400 font-normal">
                          Our friendly team would love to hear from you.
                        </p>
                      </div>

                      {steps?.[currentStep - 1]?.content}

                      <div className="mt-8 flex justify-between gap-x-[14px]">
                        <Button
                          className={`${
                            currentStep === 1 && "opacity-50 cursor-not-allowed"
                          } px-4 py-2 flex-1 bg-[#D7D7D7]`}
                          onClick={handlePrevious}
                          disabled={currentStep === 1}
                        >
                          Prev
                        </Button>

                        <Button
                          className="text-white px-4 py-2 flex-1"
                          type="submit"
                          onClick={async () => {
                            await setTouched({ company_purpose: true });

                            const errors = await validateForm();

                            if (
                              currentStep !== steps?.length &&
                              Object.keys(errors).length === 0
                            ) {
                              handleNext();
                            }
                          }}
                        >
                          {currentStep !== steps.length ? "Next" : "Submit"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 xl:pl-14 xl:ml-12 xl:border-l border-gray-100 hidden lg:block">
                  <div className="flex flex-col gap-y-9">
                    {steps?.map((step, i) => (
                      <div
                        key={step?.id}
                        className={cn(
                          "flex gap-4 items-center",
                          step?.id <= currentStep
                            ? ""
                            : "opacity-40 pl-4 border-l border-gray-100"
                        )}
                      >
                        <div
                          className={cn(
                            "bg-gray-300 w-[54px] h-11 font-normal text-xl text-white flex items-center justify-center",
                            step?.id <= currentStep && "bg-[#2BB162]"
                          )}
                        >
                          {i < 9 && "0"}
                          {i + 1}
                        </div>

                        <div>
                          <h6 className="text-dark font-bold text-2xl">
                            {step?.title}
                          </h6>

                          <p className="text-xl text-gray-400 font-normal">
                            {step?.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
              <AlertDialogContent>
                <div className="w-full flex flex-col items-center space-y-6">
                  <div className="relative aspect-square w-[18%] mt-6">
                    <Image src={gif} alt="success" className="mx-auto" fill />
                  </div>

                  <div className="flex flex-col items-center space-y-4 lg:space-y-6 w-full">
                    <h3 className="text-3xl xl:text-5xl font-semibold text-dark">
                      Thank you!
                    </h3>

                    <p className="text-xl text-gray-400 mx-auto">
                      Thank you for your response.
                      <br /> Our team will connect you soon.
                    </p>

                    <AlertDialogAction
                      asChild
                      className="bg-primary-50 mt-4 text-primary h-12 flex items-center justify-center text-center w-full px-6 py-4 text-base font-bold hover:bg-primary hover:text-background"
                    >
                      <Link href="/">Continue</Link>
                    </AlertDialogAction>
                  </div>
                </div>
              </AlertDialogContent>
            </AlertDialog>
          </section>
        </Form>
      )}
    </Formik>
  );
}

"use client";

import * as Yup from "yup";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
} from "@/components/ui/AlertDialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import CountryPhoneInput from "@/components/elements/common/CountryPhoneInput";
import Image from "next/image";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { addLead } from "@/api/lead";
import gif from "@/assets/gif/success.gif";
import { isPhoneValid } from "@/lib/phone";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useState } from "react";

interface ContactFormValues {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  service: string | undefined;
  message: string;
}

export default function ContactForm() {
  const [checked, setChecked] = useState<boolean | "indeterminate">(false);

  const [showConditionError, setShowConditionError] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const validationSchema = Yup.object({
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
    service: Yup.string().required("Field is required"),
    message: Yup.string()
      .transform((value) => value.trim())
      .strict(true)
      .matches(/.*\S.*/, "Field is required")
      .required("Field is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    } as ContactFormValues,
    validationSchema: validationSchema,
    onSubmit: (values: ContactFormValues) => {
      handleAddStudent(values);
    },
    enableReinitialize: true,
  });

  const handleAddStudent = async (values: ContactFormValues) => {
    if (checked !== true) {
      setShowConditionError(true);
      return;
    }

    try {
      const response = await addLead(values);

      if (response?.error) {
        toast.error(response?.error ?? "Try again later");
        return;
      }

      if (response?.data) {
        setIsOpen(true);

        setChecked(false);

        formik.resetForm();
      }
    } catch (err) {
      console.error(err);

      toast.error("Try again later");
    }
  };

  const handlePhoneChange = (val: string) => {
    formik?.setFieldValue("phone", val);
  };

  const handleserviceChange = (val: string) => {
    if (!val) return;

    formik.setFieldValue("service", val);
  };

  const handleCheckButton = (val: boolean | "indeterminate") => {
    setChecked(val);

    setShowConditionError(false);
  };

  return (
    <div className="bg-white border border-gray-100 shadow-card-20dp px-6 py-5 lg:py-10 lg:px-8 xl:px-12">
      <div className="pb-8 xl:pb-12">
        <h3>Get in touch</h3>

        <p className="text-xl xl:text-3xl text-gray-400 font-normal">
          Our friendly team would love to hear from you.
        </p>
      </div>

      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Label htmlFor="firstName">First name</Label>

              <div className="mt-4">
                <Input
                  type="text"
                  name="first_name"
                  id="firstName"
                  placeholder="First name"
                  value={formik?.values?.first_name}
                  onChange={formik?.handleChange}
                />

                {formik?.touched?.first_name && formik?.errors?.first_name ? (
                  <div className="text-red-500 text-sm mt-1.5 ps-0.5">
                    {formik?.errors?.first_name}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="sm:col-span-3">
              <Label htmlFor="lastName">Last name</Label>

              <div className="mt-4">
                <Input
                  type="text"
                  name="last_name"
                  id="lastName"
                  placeholder="Last name"
                  value={formik?.values?.last_name}
                  onChange={formik?.handleChange}
                />

                {formik?.touched?.last_name && formik?.errors?.last_name ? (
                  <div className="text-red-500 text-sm mt-1.5 ps-0.5">
                    {formik?.errors?.last_name}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="sm:col-span-6">
              <Label htmlFor="email">Email address</Label>

              <div className="mt-4">
                <Input
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formik?.values?.email}
                  onChange={formik?.handleChange}
                />

                {formik?.touched?.email && formik?.errors?.email ? (
                  <div className="text-red-500 text-sm mt-1.5 ps-0.5">
                    {formik?.errors?.email}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="sm:col-span-full">
              <Label htmlFor="phoneNumberInput">Phone number</Label>

              <div className="mt-4 relative">
                <CountryPhoneInput
                  value={formik?.values.phone}
                  onValueChange={handlePhoneChange}
                  className="h-12"
                />

                {formik?.touched.phone && formik?.errors.phone ? (
                  <div className="text-red-500 text-sm mt-1.5 ps-0.5">
                    {formik?.errors.phone}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="sm:col-span-full">
              <Label htmlFor="service">Select Service</Label>

              <div className="mt-4 relative">
                <Select
                  onValueChange={handleserviceChange}
                  value={formik?.values?.service?.toString()}
                >
                  <SelectTrigger className="h-12" id="service">
                    <SelectValue placeholder="select service" />
                  </SelectTrigger>

                  <SelectContent className="bg-background border-none drop-shadow rounded-md">
                    <SelectGroup>
                      <SelectItem value="service">Service</SelectItem>
                      <SelectItem value="license">License</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {formik?.touched.service && formik?.errors.service ? (
                  <div className="text-red-500 text-sm mt-1.5 ps-0.5">
                    {formik?.errors.service}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="col-span-full">
              <Label htmlFor="message">Message</Label>

              <div className="mt-4">
                <Textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formik?.values?.message}
                  onChange={formik?.handleChange}
                />

                {formik?.touched.message && formik?.errors.message ? (
                  <div className="text-red-500 text-sm mt-1.5 ps-0.5">
                    {formik?.errors.message}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-x-3">
              <Checkbox
                id="terms"
                name="terms"
                className="h-5 w-5"
                checked={checked}
                onCheckedChange={handleCheckButton}
              />

              <Label htmlFor="terms" className="cursor-pointer">
                You agree to our friendly privacy policy.
              </Label>
            </div>

            {showConditionError && (
              <p className="text-sm text-red-500 py-2">
                * Must accept privacy policy
              </p>
            )}
          </div>

          <div className="mt-8">
            <Button type="submit" className="w-full">
              Send message
            </Button>
          </div>
        </form>
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
                Thank you for contacting us!
                <br /> We&apos;ll reach out as soon as we can.
              </p>

              <AlertDialogCancel className="bg-primary-50 mt-4 text-primary h-12 flex items-center justify-center text-center w-full px-6 py-4 text-base font-bold hover:bg-primary hover:text-background">
                Done
              </AlertDialogCancel>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

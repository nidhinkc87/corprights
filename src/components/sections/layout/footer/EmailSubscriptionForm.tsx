"use client";
import { addEmailSubscription } from "@/api/email-subscription";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

const EmailSubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submitValue = { email: email };

    try {
      setIsSubmitting(true);
      const response = await addEmailSubscription(submitValue);
      if (response?.error) {
        toast.error(response?.error ?? "Try again later");
        setIsSubmitting(false);
        return;
      }

      if (response?.data) {
        toast.success("Subscription Successful!");

        setTimeout(() => {
          setIsSubmitting(false);
          setEmail("");
        }, 2000);
      }
    } catch (error) {
      setIsSubmitting(false);

      console.log("error ", error);

      toast.error("Try again later");
    }
  };

  return (
    <form
      className="h-12 border !outline-gray-300 outline-[2px] ps-5 pe-2 py-2 border-dark flex gap-2 items-center justify-between"
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        placeholder="Email"
        onChange={handleEmailChange}
        value={email}
        required
        className=" bg-transparent placeholder:text-gray-100  w-full h-full outline-none py-0 px-0 text-xl"
      />

      <Button
        type="submit"
        className="h-[34px]"
        disabled={!email || !isValidEmail || isSubmitting}
      >
        Get started
      </Button>
    </form>
  );
};

export default EmailSubscriptionForm;

"use client";
import { addEmailSubscription } from "@/api/email-subscription";
import { Button } from "@/components/ui/Button";
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
    <form className="h-12" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={handleEmailChange}
        value={email}
        required
        className="border !outline-gray-300 outline-[2px] border-dark bg-transparent placeholder:text-gray-100 px-5 py-2 w-full h-full"
      />

      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <Button
          type="submit"
          className="h-[34px]"
          disabled={!email || !isValidEmail || isSubmitting}
        >
          Get started
        </Button>
      </div>
    </form>
  );
};

export default EmailSubscriptionForm;

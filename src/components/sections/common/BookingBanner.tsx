import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner/contact.png";
import { cn } from "@/lib/utils";
import lines from "@/assets/lines/rounded.png";

interface BookingBannerProps {
  className?: string;
}

export default function BookingBanner({ className }: BookingBannerProps) {
  return (
    <section className={cn("pb-16 2xl:pb-20", className)}>
      <div className="container">
        <div className="border border-[#E2E8F0] bg-primary-gradient px-12 2xl:px-[101px] max-md:pb-0 py-[42px] 2xl:py-[86px] grid gap-12 md:grid-cols-12 relative">
          <div className="text-white md:col-span-6">
            <h3 className="2xl:text-[48px] font-bold">
              Get started in minutes
            </h3>

            <p className="mt-4 text-base font-normal xl:text-xl xl:mt-6">
              Lorem ipsum dolor sit amet consectetur. Suspendisse platea nisi
              ipsum morbi in. Venenatis tincidunt at in et bibendum eget blandit
              aliquet ornare. Tortor eu viverra.
            </p>

            <Button variant="secondary" className="mt-8 w-fit" asChild>
              <Link href="/contact-us">Book free strategy call</Link>
            </Button>
          </div>

          <Image src={lines} alt="lines" className="absolute bottom-0 end-0" />

          <Image
            src={banner}
            alt="contact banner"
            className="md:absolute md:end-10 lg:end-24 bottom-0 z-[2] w-auto h-full pt-8"
          />
        </div>
      </div>
    </section>
  );
}

import { BackgroundImage } from "@/components/ui/BackgroundImage";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getStrapiURL } from "@/api";

interface HeroSectionProps {
  banner: Banner;
  className?: string;
}

export default function HeroSection({ banner, className }: HeroSectionProps) {
  return (
    <BackgroundImage
      src={getStrapiURL(banner?.image?.url)}
      alt="service banner"
      className={cn(
        "pt-[72px] lg:pt-[106px]  bg-no-repeat bg-cover bg-top relative",
        className
      )}
    >
      <div className="container grid">
        <div className="lg:max-w-xl xl:max-w-3xl self-center text-center xl:text-start max-xl:mx-auto pt-32 pb-48 2xl:pt-[200px] 2xl:pb-[213px]">
          <h1 className="xl:text-[48px] xl:leading-[60px]">{banner?.title}</h1>

          <p className="text-base md:text-3xl font-normal text-primary-100 mt-7">
            {banner?.description}
          </p>

          <div className="mt-8 xl:mt-10">
            <Button
              variant="default"
              className="btn-primary px-14 max-xl:mx-auto"
            >
              <Link href={banner?.button_link ?? "/contact-us"}>
                {banner?.button_text}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
}

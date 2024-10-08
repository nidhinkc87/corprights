import Benefit from "@/components/sections/common/Benefit";
import BookingBanner from "@/components/sections/common/BookingBanner";
import BrochureBanner from "@/components/sections/pages/home/BrochureBanner";
import Faq from "@/components/sections/pages/home/Faq";
import HeroSection from "@/components/sections/common/HeroSection";
import Overview from "@/components/sections/common/Overview";
import RelatedCards from "@/components/sections/common/RelatedCards";
import Stages from "@/components/sections/common/Stages";

interface ServiceSectionProps {
  service: Service;
}

export default function ServiceSection({ service }: ServiceSectionProps) {
  return (
    <>
      <HeroSection banner={service?.banner} />

      <Overview overview={service?.overview} />

      <Benefit benefit={service?.benefit} />

      <Stages stages={service?.stage} />

      <BrochureBanner />

      {service?.related_services?.length > 0 && (
        <RelatedCards services={service?.related_services} />
      )}

      <BookingBanner className="pt-16 2xl:pt-20" />

      {service?.related_faqs?.length > 0 && (
        <Faq faqs={service?.related_faqs} />
      )}
    </>
  );
}

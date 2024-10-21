import Benefit from "@/components/sections/common/Benefit";
import BrochureBanner from "@/components/sections/pages/home/BrochureBanner";
import DocsSection from "@/components/sections/common/DocsSection";
import Eligibility from "@/components/sections/common/Eligibility";
import Faq from "@/components/sections/pages/home/Faq";
import HeroSection from "@/components/sections/common/HeroSection";
import Overview from "@/components/sections/common/Overview";
import RelatedCards from "@/components/sections/common/RelatedCards";
import RequirementSection from "@/components/sections/common/RequirementSection";
import Testimonials from "@/components/sections/pages/home/Testimonials";
import dynamic from "next/dynamic";

const ApplicationProcess = dynamic(
  () => import("@/components/sections/common/ApplicationProcess"),
  {
    ssr: false,
  }
);
interface LicenseSectionProps {
  license: License;
}

export default function LicenseSection({ license }: LicenseSectionProps) {
  return (
    <>
      <div className="relative">
        <HeroSection banner={license?.banner} />
      </div>

      <Overview overview={license?.overview} />

      <Benefit benefit={license?.benefit} />

      <Eligibility eligibility={license?.eligibility} />

      <ApplicationProcess process={license?.process} />

      <DocsSection docsData={license?.doc_requirement} />

      <RequirementSection requirement={license?.requirement} />

      {license?.related_licenses?.length > 0 && (
        <RelatedCards
          services={license?.related_licenses}
          isService={false}
          className="pb-16 2xl:pb-20"
        />
      )}

      <BrochureBanner />

      {license?.related_faqs?.length > 0 && (
        <Faq faqs={license?.related_faqs} />
      )}

      <Testimonials />
    </>
  );
}

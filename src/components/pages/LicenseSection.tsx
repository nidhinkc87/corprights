import Benefit from "@/components/sections/common/Benefit";
import DocsSection from "@/components/sections/common/DocsSection";
import DownloadBanner from "@/components/sections/common/DownloadBanner";
import Eligibility from "@/components/sections/common/Eligibility";
import HeroSection from "@/components/sections/common/HeroSection";
import Overview from "@/components/sections/common/Overview";
import RelatedCards from "@/components/sections/common/RelatedCards";
import RequirementSection from "@/components/sections/common/RequirementSection";
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
      <HeroSection banner={license?.banner} />

      <Overview overview={license?.overview} />

      <Benefit benefit={license?.benefit} />

      <Eligibility eligibility={license?.eligibility} />

      <ApplicationProcess process={license?.process} />

      <DocsSection docsData={license?.doc_requirement} />

      <RequirementSection requirement={license?.requirement} />

      {license?.related_licenses?.length > 0 && (
        <RelatedCards services={license?.related_licenses} isService={false} />
      )}

      <DownloadBanner docLink="" />

      {license?.related_faqs?.length > 0 && <>Faq</>}

      <>testimonials</>
    </>
  );
}

interface LicenseAttributes {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  image: Image;
  banner: Banner;
  overview: Overview;
  benefit: Benefit;
  requirement: Requirement;
  doc_requirement: DocRequirement;
  eligibility: Eligibility;
  process: Process;
  related_licenses: License[];
  related_faqs: Faq[];
  meta_title: string;
  meta_description: string;
}

type License = {} & LicenseAttributes;

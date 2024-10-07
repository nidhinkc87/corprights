interface LicenseAttributes {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  image: Image;
  banner: Banner;
  overview: Overview;
  benefit: Benefit;
  related_licenses: License[];
  related_faqs: Faq[];
}

type License = {} & LicenseAttributes;

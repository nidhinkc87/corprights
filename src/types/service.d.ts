interface ServiceAttributes {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  image: Image;
  banner: Banner;
  overview: Overview;
  benefit: Benefit;
  stage: Stage[];
  related_services: Service[];
  related_faqs: Faq[];
  meta_title: string;
  meta_description: string;
}

type Service = {} & ServiceAttributes;

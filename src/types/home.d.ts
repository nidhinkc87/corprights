interface HomePageAttributes extends EntityAttributes {
  id: number;
  documentId: string;
  banner: HomeBanner;
  opportunity_count: number;
  opportunity_times: number;
  opportunity_percent: number;
  feature_cards: FeatureCard[];
  faqs: Faq[];
  services: Service[];
  awards: Award[];
  blogs: Blog[];
}

type HomePage = {} & HomePageAttributes;

type HomeBanner = {
  title: string;
  highlight_text: string;
  description: string;
  image: Image;
  button_text: string;
  button_link: string;
};
type FeatureCard = {
  title: string;
  subtitle: string;
  description: string;
  image: Image;
};

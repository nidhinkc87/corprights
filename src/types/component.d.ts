type Banner = {
  id: number;
  title: string;
  description: string;
  image: Image;
  button_text: string;
  button_link: string;
};

type Overview = { id: number; title: string; content: string };

type Feature = { id: number; title: string; description: string };

type Benefit = { id: number; title: string; cards: Feature[] };

type Stage = { id: number; title: string; image: Image; cards: Feature[] };

type Requirement = {
  id: number;
  title: string;
  description: string;
  cards: Feature[];
};

type DocRequirement = {
  id: number;
  title: string;
  description: string;
  cards: Feature[];
};

type Eligibility = {
  id: number;
  description: string;
  feature: Phrase[];
};

type Phrase = {
  id: number;
  title: string;
};

type Process = {
  id: number;
  title: string;
  description: string;
  cards: Feature[];
};

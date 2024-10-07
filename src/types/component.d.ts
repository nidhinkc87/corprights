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

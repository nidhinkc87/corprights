interface FaqAttributes extends EntityAttributes {
  id: number;
  question: string;
  answer: string;
}

type Faq = {} & Entity<FaqAttributes>;

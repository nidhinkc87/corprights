interface FaqAttributes extends EntityAttributes {
  id: number;
  documentId: string;
  question: string;
  answer: string;
}

type Faq = {} & FaqAttributes;

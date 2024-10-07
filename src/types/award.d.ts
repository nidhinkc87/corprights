interface AwardAttributes extends EntityAttributes {
  id: number;
  documentId: string;
  title: string;
  image: Image;
}

type Award = {} & AwardAttributes;

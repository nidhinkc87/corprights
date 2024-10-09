interface RoadMapAttributes extends EntityAttributes {
  id: number;
  documentId: string;
  year: string;
  subtitle: string;
  content: string;
  order: number;
}

type RoadMap = {} & RoadMapAttributes;

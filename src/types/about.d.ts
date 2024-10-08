interface AboutPageAttributes extends EntityAttributes {
  id: number;
  documentId: string;
  banner: HomeBanner;
  phone: string;
  slider: Slide[];
}

type AboutPage = {} & AboutPageAttributes;

type Slide = {
  title: string;
  image: Image;
};

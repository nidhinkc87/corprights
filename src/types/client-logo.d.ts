interface ClientLogoAttributes extends EntityAttributes {
  image: Image;
  title: string;
}

type ClientLogo = {} & ClientLogoAttributes;

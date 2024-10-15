interface GlobalAttributes extends EntityAttributes {
  id: number;
  documentId: string;
  footer?: Footer;
}
type Global = {} & GlobalAttributes;

interface FooterLinks {
  title: string;
  path: string;
}

type Footer = {
  links?: FooterLinks[];
};

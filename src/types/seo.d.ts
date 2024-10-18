interface SEOAttributes extends EntityAttributes {
  id: number;
  documentId: string;
  title: string;
  path: string;
  meta_title: string;
  meta_description: string;
}
type SEO = {} & SEOAttributes;

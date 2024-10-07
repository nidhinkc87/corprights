interface BlogCategoryAttributes extends EntityAttributes {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  blogs: Blog[];
}

type BlogCategory = {} & BlogCategoryAttributes;

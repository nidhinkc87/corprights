interface BlogAttributes extends EntityAttributes {
  id: number;
  documentId: string;
  title: string;
  image: Image;
  slug: string;
  description: string;
  content: string;
  reading_time: number;
  posted_at: string;
  related_blogs: Blog[];
  blog_categories: BlogCategory[];
}

type Blog = {} & BlogAttributes;

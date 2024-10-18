import { fetchAPI } from ".";

export async function getBlogs(page?: number, pageSize?: number) {
  return await fetchAPI<Array<Blog>>(
    `/blogs`,
    {
      populate: ["blog_categories", "image"],
      sort: ["createdAt:desc"],
      pagination: {
        page: page ?? 1,
        pageSize: pageSize || 6,
      },
    },
    { next: { tags: ["blog"] } }
  );
}

export async function getBlogsByLimit(limit?: number) {
  return await fetchAPI<Array<Blog>>(
    `/blogs`,
    {
      populate: ["blog_categories", "image"],
      sort: ["createdAt:desc"],
      pagination: {
        page: 1,
        pageSize: limit || 6,
      },
    },
    { next: { tags: ["blog"] } }
  );
}

export async function getBlogBySlug(slug: string) {
  return await fetchAPI<Array<Blog>>(
    `/blogs`,
    {
      populate: [
        "image",
        "blog_categories",
        "related_blogs",
        "related_blogs.image",
        "related_blogs.blog_categories",
      ],

      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    { next: { tags: ["blog", "blog-category"] } }
  );
}

export async function getBlogSEOBySlug(slug: string) {
  return await fetchAPI<Array<Blog>>(
    `/blogs`,
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    { next: { tags: ["blog"] } }
  );
}

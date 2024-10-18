import { fetchAPI } from ".";

export async function getSEOByPath(path: string) {
  return await fetchAPI<Array<SEO>>(
    `/seo-pages`,
    {
      filters: {
        path: {
          $eq: path,
        },
      },
    },
    { next: { tags: ["seo-page"] } }
  );
}

import { fetchAPI } from ".";

export async function getLicensesByLimit(page?: number, limit?: number) {
  return await fetchAPI<Array<License>>(
    `/licenses`,
    {
      pagination: {
        page: page ?? 1,
        pageSize: limit ?? 6,
      },
    },
    {
      next: { tags: ["license"] },
    }
  );
}

export async function getLicenseBySlug(slug: string) {
  return await fetchAPI<Array<License>>(
    `/licenses`,
    {
      populate: {
        banner: {
          populate: {
            image: true,
          },
        },
        overview: true,
        benefit: {
          populate: {
            cards: true,
          },
        },
        requirement: {
          populate: {
            cards: true,
          },
        },
        doc_requirement: {
          populate: {
            cards: true,
          },
        },
        eligibility: {
          populate: { feature: true },
        },
        process: {
          populate: {
            cards: true,
          },
        },
        related_faqs: true,
        related_licenses: {
          populate: {
            image: true,
          },
        },
      },
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    { next: { tags: ["license"] } }
  );
}

export async function getLicenseSEOBySlug(slug: string) {
  return await fetchAPI<Array<License>>(
    `/licenses`,
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    { next: { tags: ["license"] } }
  );
}

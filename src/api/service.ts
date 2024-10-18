import { fetchAPI } from ".";

export async function getServicesByLimit(page?: number, limit?: number) {
  return await fetchAPI<Array<Service>>(
    `/services`,
    {
      pagination: {
        page: page ?? 1,
        pageSize: limit ?? 6,
      },
    },
    {
      next: { tags: ["service"] },
    }
  );
}

export async function getServiceBySlug(slug: string) {
  return await fetchAPI<Array<Service>>(
    `/services`,
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
        stage: {
          populate: {
            image: true,
            cards: true,
          },
        },
        related_faqs: true,
        related_services: {
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
    { next: { tags: ["service"] } }
  );
}

export async function getServiceSEOBySlug(slug: string) {
  return await fetchAPI<Array<Service>>(
    `/services`,
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    { next: { tags: ["service"] } }
  );
}

import { fetchAPI } from ".";

export async function getClientLogo() {
  return await fetchAPI<Array<ClientLogo>>(
    `/client-logos`,
    {
      populate: ["image"],
    },
    { next: { tags: ["client-logo"] } }
  );
}

export async function getClientLogoByLimit(page?: number, limit?: number) {
  return await fetchAPI<Array<ClientLogo>>(
    `/client-logos`,
    {
      populate: ["image"],
      pagination: {
        page: page ?? 1,
        pageSize: limit ?? 8,
      },
    },
    {
      next: { tags: ["client-logo"] },
    }
  );
}

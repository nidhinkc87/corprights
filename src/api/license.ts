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

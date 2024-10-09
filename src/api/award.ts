import { fetchAPI } from ".";

export async function getAwardByLimit(page?: number, limit?: number) {
  return await fetchAPI<Array<Award>>(
    `/awards`,
    {
      populate: ["image"],
      pagination: {
        page: page ?? 1,
        pageSize: limit ?? 20,
      },
    },
    {
      next: { tags: ["award"] },
    }
  );
}

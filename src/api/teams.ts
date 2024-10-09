import { fetchAPI } from ".";

export async function getTeamMembersByLimit(page?: number, limit?: number) {
  return await fetchAPI<Array<TeamMember>>(
    `/teams`,
    {
      populate: ["image"],
      pagination: {
        page: page ?? 1,
        pageSize: limit ?? 8,
      },
    },
    {
      next: { tags: ["team"] },
    }
  );
}

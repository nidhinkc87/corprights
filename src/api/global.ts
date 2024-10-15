import { fetchAPI } from ".";

export async function getGlobalData() {
  return await fetchAPI<Global>(
    `/global`,
    {
      populate: ["footer.links"],
    },
    { next: { tags: ["global"] } }
  );
}

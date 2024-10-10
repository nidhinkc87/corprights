import { fetchAPI } from ".";

export async function getBrochure() {
  return await fetchAPI<HomePage>(
    `/home`,
    {
      populate: ["brochure"],
    },
    { next: { tags: ["home", "service", "faq", "award", "blog"] } }
  );
}

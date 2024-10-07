import { fetchAPI } from ".";

export async function getHomePageData() {
  return await fetchAPI<HomePage>(
    `/home`,
    {
      populate: [
        "banner",
        "banner.image",
        "feature_cards",
        "feature_cards.image",
        "faqs",
        "awards",
        "awards.image",
        "blogs",
        "services",
        "services.image",
      ],
    },
    { next: { tags: ["home", "service", "faq", "award", "blog"] } }
  );
}

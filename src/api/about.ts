import { fetchAPI } from ".";

export async function getAboutPage() {
  return await fetchAPI<AboutPage>(
    `/about`,
    {
      populate: ["banner.image", "slider.image"],
    },
    { next: { tags: ["about"] } }
  );
}

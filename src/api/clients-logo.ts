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

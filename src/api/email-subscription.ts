import { fetchAPI } from ".";

const token = process.env.NEXT_PUBLIC_API_TOKEN;

export async function addEmailSubscription(data: {}) {
  return await fetchAPI(
    `/email-subscriptions`,
    {},
    {
      next: { tags: ["email-subscription"] },
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    }
  );
}

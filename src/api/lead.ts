import { fetchAPI } from ".";

export async function addLead(data: {}) {
  return await fetchAPI(
    `/leads`,
    {},
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    }
  );
}

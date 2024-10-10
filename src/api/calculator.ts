import { fetchAPI } from ".";

export async function addCostCalculatorEnquiry(data: {}) {
  return await fetchAPI(
    `/cost-calculator-enquiries`,
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

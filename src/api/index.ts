import { PLACEHOLDER } from "@/constants";
import qs from "qs";

export function getStrapiURL(path: string) {
  if (!path) return PLACEHOLDER;
  return `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {RequestInit} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI<T>(
  path: string,
  urlParamsObject = {},
  options?: RequestInit
) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call

  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    return { data: [], meta: undefined, error: response.statusText };
    // throw new Error(`An error occurred please try again`);
  }

  const data: StrapiResponse<T> = await response.json();
  return data;
}

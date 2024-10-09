import { fetchAPI } from ".";

export async function getRoadMap() {
  return await fetchAPI<RoadMap>(
    `/road-maps`,
    {
      sort: ["order:asc"],
    },
    { next: { tags: ["road-map"] } }
  );
}

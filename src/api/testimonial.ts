import { fetchAPI } from ".";

export async function getTestimonial() {
  return await fetchAPI<Array<Testimonial>>(
    `/testimonials`,
    {
      populate: ["profile_image"],
    },
    { next: { tags: ["testimonial"] } }
  );
}

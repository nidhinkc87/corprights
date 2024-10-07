"use client";
import TestimonialCard from "@/components/elements/home/TestimonialCard";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getTestimonial } from "@/api/testimonial";
import { getStrapiURL } from "@/api";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[] | undefined>();

  useEffect(() => {
    const fetchTestimonial = async () => {
      const testimonial = await getTestimonial();
      setTestimonials(testimonial.data);
    };

    fetchTestimonial();
  }, []);

  if (!testimonials || testimonials?.length === 0) return <></>;

  return (
    <section className="py-16 xl:py-24 2xl:py-[130px]">
      <div className="container">
        <h2 className="xl:max-w-3xl mx-auto text-center">
          Read what our clients are saying about us.
        </h2>

        <div className="mt-10 xl:mt-20">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="16px">
              {testimonials?.map((testimonial, index) => (
                <TestimonialCard
                  key={`testimonial-card-${index}`}
                  name={testimonial?.name}
                  designation={testimonial?.designation}
                  testimonial={testimonial?.testimonial}
                  profileImage={getStrapiURL(testimonial?.profile_image?.url)}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

interface TestimonialAttributes extends EntityAttributes {
  id: number;
  documentId: string;
  name: string;
  designation: string;
  disabled: boolean;
  profile_image: Image;
  testimonial: string;
}

type Testimonial = {} & TestimonialAttributes;

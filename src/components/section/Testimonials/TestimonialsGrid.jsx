import testimonials from "../../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialsGrid = () => {
  return (
    <div className="mt-20 grid gap-8 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
        />
      ))}
    </div>
  );
};

export default TestimonialsGrid;
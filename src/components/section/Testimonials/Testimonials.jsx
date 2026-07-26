import Container from "../../ui/Container";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsGrid from "./TestimonialsGrid";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-slate-950 py-28"
    >
      <Container>

        <TestimonialsHeader />

        <TestimonialsGrid />

      </Container>
    </section>
  );
};

export default Testimonials;
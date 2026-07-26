import Container from "../../ui/Container";
import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-slate-950 py-28"
    >
      <Container>
        <ServicesHeader />
        <ServicesGrid />
      </Container>
    </section>
  );
};

export default Services;
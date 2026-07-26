import Container from "../../ui/Container";
import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 py-28"
    >
      <Container>

        <AboutContent />

        <AboutCards />

      </Container>
    </section>
  );
};

export default About;
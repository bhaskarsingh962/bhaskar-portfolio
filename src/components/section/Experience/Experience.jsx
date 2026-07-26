import Container from "../../ui/Container";
import ExperienceHeader from "./ExperienceHeader";
import Timeline from "./Timeline";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-28"
    >
      <Container>

        <ExperienceHeader />

        <Timeline />

      </Container>
    </section>
  );
};

export default Experience;
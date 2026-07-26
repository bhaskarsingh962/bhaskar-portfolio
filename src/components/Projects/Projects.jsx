import Container from "../ui/Container";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-28"
    >
      <Container>

        <ProjectsHeader />

        <ProjectsGrid />

      </Container>
    </section>
  );
};

export default Projects;
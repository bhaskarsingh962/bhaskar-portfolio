import Hero from "../components/section/Hero";
import About from "../components/section/About/About";
import Experience from "../components/section/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Services from "../components/section/Services/Services";
import Testimonials from "../components/section/Testimonials/Testimonials";
import Achievements from "../components/section/Achievements/Achievements";
import Contact from "../components/section/Contact";


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Achievements />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
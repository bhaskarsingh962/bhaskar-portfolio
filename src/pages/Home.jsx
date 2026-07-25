import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const Home = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white">

      <Container className="flex min-h-screen flex-col items-center justify-center">

        <h1 className="text-center text-6xl font-bold">

          Building Modern

          <span className="text-blue-500">
            {" "}Web Experiences
          </span>

        </h1>

        <p className="mt-6 max-w-2xl text-center text-lg text-slate-400">

          I design and build scalable full-stack applications
          with React, Node.js, spring boot, next js and modern web technologies.

        </p>

        <Button className="mt-8">

          View Projects

        </Button>

      </Container>

    </section>
  );
};

export default Home;
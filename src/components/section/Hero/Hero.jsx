import { motion } from "framer-motion";

import Container from "../../ui/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 pt-32 pb-20"
    >
      <HeroBackground />

      <Container>
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            <HeroImage />
          </motion.div>
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
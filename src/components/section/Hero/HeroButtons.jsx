import { motion } from "framer-motion";
import GlowButton from "../../ui/GlowButton";

const HeroButtons = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: .7,
      }}
      href="#projects"
      className="mt-10 flex flex-wrap gap-5"
    >
      <a href="#projects">
        <GlowButton>
          View Projects
        </GlowButton>
      </a>

      <motion.a
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: .97,
        }}
        href="#contact"
        className="rounded-xl border border-slate-700 px-7 py-4 font-semibold text-white transition hover:border-blue-500"
      >
        Contact Me
      </motion.a>
    </motion.div>
  );
};

export default HeroButtons;
import { motion } from "framer-motion";

import hero from "../../../data/hero";

const TechStack = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1,
      }}
      className="mt-10 flex flex-wrap gap-3"
    >
      {hero.technologies.map((tech, index) => (
        <motion.span
          key={tech}
          whileHover={{
            y: -5,
            scale: 1.05,
          }}
          transition={{
            delay: index * 0.05,
          }}
          className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TechStack;
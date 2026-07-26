import { motion } from "framer-motion";
import aboutData from "../../../data/about";

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl"
    >
      <p className="text-blue-400 font-semibold">
        ABOUT ME
      </p>

      <h2 className="mt-4 text-5xl font-bold text-white">
        {aboutData.title}
      </h2>

      <h3 className="mt-4 text-2xl text-slate-300">
        {aboutData.subtitle}
      </h3>

      <p className="mt-8 text-lg leading-8 text-slate-400">
        {aboutData.description}
      </p>
    </motion.div>
  );
};

export default AboutContent;
import { motion } from "framer-motion";

const TimelineItem = ({ item }) => {
  return (
    <motion.div
      whileHover={{ x: 8 }}
      className="relative ml-8 rounded-2xl border border-slate-800 bg-slate-900 p-6"
    >
      <div className="absolute -left-11 top-8 h-4 w-4 rounded-full bg-blue-500" />

      <span className="text-sm text-blue-400">
        {item.duration}
      </span>

      <h3 className="mt-2 text-2xl font-bold text-white">
        {item.title}
      </h3>

      <p className="mt-1 text-slate-300">
        {item.company}
      </p>

      <p className="mt-5 leading-7 text-slate-400">
        {item.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
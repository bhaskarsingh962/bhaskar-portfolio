import { motion } from "framer-motion";

const JourneyCard = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition"
    >
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {description}
      </p>
    </motion.div>
  );
};

export default JourneyCard;
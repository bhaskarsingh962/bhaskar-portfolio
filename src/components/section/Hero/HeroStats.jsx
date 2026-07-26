import { motion } from "framer-motion";

import hero from "../../../data/hero";

const HeroStats = () => {
  return (
    <div className="mt-12 grid grid-cols-3 gap-5">
      {hero.stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4 + index * 0.2,
          }}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl"
        >
          <h3 className="text-3xl font-bold text-white">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroStats;
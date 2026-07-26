import { motion } from "framer-motion";

const AchievementCard = ({ achievement }) => {
  const Icon = achievement.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center"
    >
      <Icon className="mx-auto text-5xl text-blue-400" />

      <h2 className="mt-6 text-5xl font-bold text-white">
        {achievement.number}
      </h2>

      <p className="mt-3 text-slate-400">
        {achievement.title}
      </p>
    </motion.div>
  );
};

export default AchievementCard;
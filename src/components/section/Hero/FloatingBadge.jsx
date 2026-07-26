import { motion } from "framer-motion";

const FloatingBadge = ({
  text,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        delay,
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className={`absolute rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl shadow-lg ${className}`}
    >
      {text}
    </motion.div>
  );
};

export default FloatingBadge;
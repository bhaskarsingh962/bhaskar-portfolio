import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 1.5,
        }}
        className="absolute right-0 top-40 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[160px]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: .5,
          duration: 1.5,
        }}
        className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[170px]"
      />
    </>
  );
};

export default HeroBackground;
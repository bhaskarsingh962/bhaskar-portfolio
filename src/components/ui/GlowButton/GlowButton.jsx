import { motion } from "framer-motion";

const GlowButton = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={`
        rounded-xl
        bg-blue-600
        px-7
        py-4
        font-semibold
        text-white
        shadow-lg
        shadow-blue-600/30
        transition-all
        hover:bg-blue-500
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default GlowButton;
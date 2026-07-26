import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const ScrollIndicator = () => {
  return (
    <motion.a
      href="#about"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        y: [0, 10, 0],
      }}
      transition={{
        delay: 1.5,
        duration: 2,
        repeat: Infinity,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
    >
      <FaChevronDown size={22} />
    </motion.a>
  );
};

export default ScrollIndicator;
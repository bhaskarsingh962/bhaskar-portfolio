import { motion } from "framer-motion";

import GlassCard from "../../ui/GlassCard";
import hero from "../../../data/hero";

import profile from "../../../assets/images/profile.png";

import FloatingBadge from "./FloatingBadge";

const HeroImage = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative mx-auto w-full max-w-[340px]"
    >
      <FloatingBadge
        text="⚛ React"
        className="-left-25 top-10"
        delay={0.2}
      />

      <FloatingBadge
        text="🚀 Node.js"
        className="-right-25 top-28"
        delay={0.5}
      />

      <FloatingBadge
        text="🍃 Spring Boot"
        className="-left-30 bottom-24"
        delay={0.8}
      />

      <GlassCard>
        <motion.img
          whileHover={{
            scale: 1.03,
          }}
          transition={{
            duration: 0.3,
          }}
          src={profile}
          alt={hero.name}
          className="h-[430px] w-full rounded-[28px] object-cover"
        />
      </GlassCard>
    </motion.div>
  );
};

export default HeroImage;
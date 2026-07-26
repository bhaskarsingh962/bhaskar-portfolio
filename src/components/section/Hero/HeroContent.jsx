import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import hero from "../../../data/hero";

import GradientText from "../../ui/GradientText";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import TechStack from "./TechStack";

const HeroContent = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: .8,
      }}
    >
      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
        {hero.badge}
      </span>

      <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">
        {hero.greeting}

        <br />

        <GradientText>
          {hero.name}
        </GradientText>
      </h1>

      <h2 className="mt-8 text-2xl font-semibold text-slate-300">
        <Typewriter
          words={hero.roles}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={45}
        />
      </h2>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        {hero.description}
      </p>

      <HeroButtons />

      <HeroStats />

      <TechStack />
    </motion.div>
  );
};

export default HeroContent;
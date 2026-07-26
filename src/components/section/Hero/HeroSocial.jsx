import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import siteConfig from "../../../constants/siteConfig";

const HeroSocial = () => {
  return (
    <div className="mt-8 flex items-center gap-5">

      <a
        href={siteConfig.social.github}
        target="_blank"
        rel="noreferrer"
        className="text-2xl text-slate-400 transition hover:text-white"
      >
        <FaGithub />
      </a>

      <a
        href={siteConfig.social.linkedin}
        target="_blank"
        rel="noreferrer"
        className="text-2xl text-slate-400 transition hover:text-blue-400"
      >
        <FaLinkedin />
      </a>

      <a
        href={siteConfig.social.email}
        className="text-2xl text-slate-400 transition hover:text-red-400"
      >
        <FaEnvelope />
      </a>

    </div>
  );
};

export default HeroSocial;
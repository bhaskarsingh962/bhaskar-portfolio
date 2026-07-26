import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import siteConfig from "../../constants/siteConfig";
import IconButton from "../ui/IconButton";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <IconButton href={siteConfig.social.github}>
        <FaGithub />
      </IconButton>

      <IconButton href={siteConfig.social.linkedin}>
        <FaLinkedin />
      </IconButton>

      <IconButton href={siteConfig.social.email}>
        <MdEmail />
      </IconButton>
    </div>
  );
};

export default SocialLinks;
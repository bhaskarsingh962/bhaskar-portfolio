import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/bhaskarsingh962",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/bhaskar-singh96",
  },
  {
    icon: FaEnvelope,
    href: "mailto:bhaskarsingh91642@gmail.com",
  },
];

const FooterSocial = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white">
        Connect
      </h3>

      <div className="mt-6 flex gap-4">
        {socials.map(({ icon: Icon, href }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-slate-800 p-4 text-white transition hover:bg-blue-600"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;
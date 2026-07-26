const links = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Services",
  "Contact",
];

const FooterLinks = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white">
        Navigation
      </h3>

      <ul className="mt-6 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-slate-400 transition hover:text-blue-400"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
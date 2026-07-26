import navigation from "./navigation";

const NavLinks = () => {
  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className="font-medium text-slate-300 transition duration-300 hover:text-white"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
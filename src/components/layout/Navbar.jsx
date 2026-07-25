import siteConfig from "../../constants/siteConfig";
import Container from "../ui/Container";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">

        <h1 className="text-xl font-bold text-white">
          {siteConfig.shortName}.
        </h1>

        <nav>
          <ul className="flex gap-8 text-sm text-slate-300">

            <li className="cursor-pointer hover:text-white">
              Home
            </li>

            <li className="cursor-pointer hover:text-white">
              Projects
            </li>

            <li className="cursor-pointer hover:text-white">
              Services
            </li>

            <li className="cursor-pointer hover:text-white">
              Contact
            </li>

          </ul>
        </nav>

      </Container>
    </header>
  );
};

export default Navbar;
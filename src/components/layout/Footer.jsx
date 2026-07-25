import siteConfig from "../../constants/siteConfig";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">

      <Container>

        <p className="text-center text-slate-400">

          © {new Date().getFullYear()} {siteConfig.name}.

          All rights reserved.

        </p>

      </Container>

    </footer>
  );
};

export default Footer;
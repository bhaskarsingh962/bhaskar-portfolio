import Container from "../../ui/Container";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import ScrollTopButton from "./ScrollTopButton";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          <FooterBrand />
          <FooterLinks />
          <FooterSocial />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Bhaskar Singh.
            All rights reserved.
          </p>

          <ScrollTopButton />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
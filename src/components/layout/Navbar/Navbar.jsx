import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import GlowButton from "../../ui/GlowButton";

const Navbar = () => {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      border-b
      border-white/10
      bg-slate-950/80
      backdrop-blur-xl
      "
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <NavLinks />

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />

          <GlowButton>
            Resume
          </GlowButton>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;
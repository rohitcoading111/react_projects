import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Skills", path: "/#skills" },
  { name: "Projects", path: "/#projects" },
  { name: "Journey", path: "/#journey" },
  { name: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight text-white"
        >
          ROHIT<span className="text-white/40">.DEV</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="group relative text-sm text-white/60 transition-colors duration-300 hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </nav>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg border border-white/15 px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-white hover:text-black md:block"
        >
          Resume
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-5 px-6 py-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-base text-white/70 transition-colors hover:text-white"
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-lg border border-white/15 px-4 py-2 text-sm text-white"
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
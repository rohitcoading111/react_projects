import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Journey", id: "journey" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

const handleNavClick = (e, id) => {
  e.preventDefault();

  const section = document.getElementById(id);

  if (!section) return;

  const navbarHeight = 90;

  const targetPosition =
    section.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight;

  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;

  const duration = 1000;
  let startTime = null;

  const easeInOut = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime;

    const elapsed = currentTime - startTime;

    const progress = Math.min(elapsed / duration, 1);

    const easedProgress = easeInOut(progress);

    window.scrollTo(
      0,
      startPosition + distance * easedProgress
    );

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);

  setMenuOpen(false);
};

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight text-white"
        >
          ROHIT<span className="text-white/40">.DEV</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="group relative text-sm text-white/60 transition-colors duration-300 hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
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
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-5 px-6 py-6">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-base text-white/70 transition-colors hover:text-white"
            >
              {link.name}
            </a>
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
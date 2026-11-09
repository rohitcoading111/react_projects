import { Menu, X, ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ]

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4 sm:px-6">

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/[0.08] bg-[#080914]/75 px-5 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="group text-3xl font-extrabold tracking-tighter"
        >
          R<span className="text-violet-500 transition group-hover:text-purple-300">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative py-2 text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link.name}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-violet-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden items-center gap-6 md:flex">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
          >
            <FaLinkedin size={19} />
          </a>

          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-600/10 px-5 py-2.5 text-sm font-semibold text-violet-300 transition-all duration-300 hover:border-violet-400 hover:bg-violet-600 hover:text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]"
          >
            Let's Talk
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-[calc(100%+10px)] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#080914]/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:hidden ${
            isOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-3 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-1 p-4">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition hover:bg-violet-500/10 hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <div className="my-2 border-t border-white/10" />

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </a>

            <div className="flex items-center justify-center gap-7 py-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 transition hover:text-white"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition hover:text-blue-400"
              >
                <FaLinkedin size={20} />
              </a>
            </div>

          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navbar

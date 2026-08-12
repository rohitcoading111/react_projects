const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer   id="footer"
 className="border-t border-white/10 px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              ROHIT<span className="text-white/40">.DEV</span>
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/30">
              Building thoughtful digital experiences with code,
              creativity and curiosity.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://github.com/rohitcoading111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 transition-colors duration-300 hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 transition-colors duration-300 hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="text-sm text-white/40 transition-colors duration-300 hover:text-white"
            >
              Email ↗
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/25 sm:flex-row">

          <p>
            © {currentYear} Rohit. All rights reserved.
          </p>

          <p>
            Designed & built with React.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
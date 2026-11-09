import { useEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import gsap from 'gsap'
import SpaceScene from '../three/SpaceScene'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      tl.from('.hero-badge', {
        y: 25,
        opacity: 0,
        duration: 0.7,
      })
        .from('.hero-title', {
          y: 50,
          opacity: 0,
          duration: 1,
        }, '-=0.3')
        .from('.hero-description', {
          y: 25,
          opacity: 0,
          duration: 0.8,
        }, '-=0.5')
        .from('.hero-buttons', {
          y: 20,
          opacity: 0,
          duration: 0.7,
        }, '-=0.4')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#03040b] px-6 pb-16 pt-32 lg:px-12"
    >

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[450px] w-[450px] rounded-full bg-violet-700/10 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-2">

        {/* Left Content */}
        <div className="relative z-10">

          <div className="hero-badge mb-7 inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-xs font-medium tracking-[0.18em] text-violet-300">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-gray-400 uppercase">
            Hello, I'm
          </p>

          <h1 className="hero-title text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Rohit
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              Pandey.
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-gray-200 sm:text-2xl">
            Full Stack Developer
          </h2>

          <p className="hero-description mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
            I build modern web applications, scalable backend systems
            and immersive digital experiences with clean code and
            creative technology.
          </p>

          {/* Buttons */}
          <div className="hero-buttons mt-9 flex flex-wrap items-center gap-4">

            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            >
              View Projects
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-violet-400 hover:text-white"
            >
              Download CV
              <Download size={17} />
            </a>

          </div>

          {/* Bottom Text */}
          <div className="mt-16 flex items-center gap-4">
            <div className="h-px w-12 bg-violet-500" />
            <span className="text-xs tracking-[0.2em] text-gray-500">
              BUILDING DIGITAL EXPERIENCES
            </span>
          </div>

        </div>

        {/* Right 3D Environment */}
        <div className="relative h-[380px] w-full sm:h-[480px] lg:h-[600px]">
          <SpaceScene />
        </div>

      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition hover:text-violet-400"
      >
        <span className="text-[10px] tracking-[0.25em]">SCROLL TO EXPLORE</span>
        <ArrowDown size={17} className="animate-bounce" />
      </a>

    </section>
  )
}

export default Hero
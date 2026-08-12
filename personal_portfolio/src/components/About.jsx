import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <p className="about-label mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
              01 / About
            </p>

            <h2 className="about-title max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              More than just
              <span className="text-white/35"> code.</span>
            </h2>
          </div>

          <span className="hidden text-sm text-white/30 md:block">
            A little about me
          </span>
        </div>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <div className="about-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/20 via-white/5 to-transparent">

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-bold text-white/10">
                  R
                </span>
              </div>

              {/* Decorative circle */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/10" />

              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

              {/* Available badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Currently learning & building
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">

            <p className="about-text max-w-2xl text-xl leading-relaxed text-white/70 sm:text-2xl">
              I'm Rohit, a BCA student and aspiring full-stack developer
              who enjoys turning ideas into clean and interactive web
              experiences.
            </p>

            <p className="about-text mt-7 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
              I'm currently focused on strengthening my frontend skills
              with React, JavaScript and GSAP while exploring the MERN
              stack and building real-world projects.
            </p>

            <div className="about-stats mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-2xl font-semibold text-white">
                  10+
                </p>
                <p className="mt-1 text-xs text-white/40">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-2xl font-semibold text-white">
                  1+
                </p>
                <p className="mt-1 text-xs text-white/40">
                  Years Learning
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-2xl font-semibold text-white">
                  ∞
                </p>
                <p className="mt-1 text-xs text-white/40">
                  Curiosity
                </p>
              </div>

            </div>

            <a
              href="#contact"
              className="group mt-10 flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-white"
            >
              Let's connect

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
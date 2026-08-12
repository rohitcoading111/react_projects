import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import skills from "../data/skills";

const Skills = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className=" scroll-mt-24 relative overflow-hidden px-6 py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="skills-label mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            02 / Skills
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="skills-title max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Tools I use to
              <span className="text-white/35"> build.</span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-white/35">
              A growing collection of technologies I use while building
              modern web applications.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card group relative min-h-60 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <span className="absolute right-5 top-5 text-xs text-white/20">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-white/70 transition duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white group-hover:text-black">
                {skill.name.charAt(0)}
              </div>

              <div className="mt-12">
                <p className="text-xs uppercase tracking-wider text-white/30">
                  {skill.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {skill.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {skill.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-white/30">
                  {skill.level}
                </span>

                <ArrowUpRight
                  size={16}
                  className="text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                />
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
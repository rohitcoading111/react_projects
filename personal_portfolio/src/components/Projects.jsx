import { ArrowDown } from "lucide-react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white/[0.02] px-6 py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
              03 / Selected Work
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Things I've
              <span className="text-white/35"> built.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/30">
            <ArrowDown size={15} />
            Explore projects
          </div>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;
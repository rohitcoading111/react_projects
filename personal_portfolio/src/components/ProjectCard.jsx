import { Link } from "react-router";

const ProjectCard = ({ project, index }) => {
  return (
    <article className="project-card group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-white/20">

      <div className="relative aspect-video overflow-hidden bg-white/5">

        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/30" />

        <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </span>

        <Link
          to={`/projects/${project.id}`}
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-lg text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
          aria-label={`View ${project.title} details`}
        >
          ↗
        </Link>
      </div>

      <div className="p-6">

        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
          {project.category}
        </p>

        <div className="mt-2 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold text-white">
            {project.title}
          </h3>

          <span className="text-xs text-white/20">
            {project.tech.length} technologies
          </span>
        </div>

        <p className="mt-4 max-w-xl text-sm leading-6 text-white/45">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/50 transition duration-300 hover:border-white/20 hover:text-white/80"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Live Demo ↗
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 transition hover:text-white"
          >
            GitHub ↗
          </a>

        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
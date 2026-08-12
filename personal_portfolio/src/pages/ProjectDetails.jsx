import { Link, useParams } from "react-router";
import projects from "../data/projects";

const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = projects.find(
    (item) => item.id === projectId
  );

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/30">
            404
          </p>

          <h1 className="mt-4 text-5xl font-bold text-white">
            Project not found
          </h1>

          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Back to Portfolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-6 pb-24 pt-32 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <Link
          to="/"
          className="text-sm text-white/40 transition hover:text-white"
        >
          ← Back to projects
        </Link>

        <div className="mt-12">

          <p className="text-sm uppercase tracking-[0.3em] text-white/30">
            {project.category}
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/50">
            {project.details}
          </p>

        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/30">
              What I built
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white">
              Project Features
            </h2>

            <div className="mt-8 space-y-4">
              {project.features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="text-sm text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm text-white/60">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/30">
              Technologies
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
             {project.tech.map((technology) => (
  <Link
    key={technology}
    to={`/technologies/${technology
      .toLowerCase()
      .replace(/\s+/g, "-")}`}
    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
  >
    {technology}
  </Link>
))}
            </div>

            <div className="mt-10 flex flex-col gap-3">

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                Visit Live Website ↗
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-center text-sm text-white transition hover:border-white/40"
              >
                View Source Code ↗
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
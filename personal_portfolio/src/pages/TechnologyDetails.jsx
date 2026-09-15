import { Link, useParams } from "react-router";
import technologies from "../data/technologies";
import { useNavigate } from "react-router";

const TechnologyDetails = () => {
  const navigate = useNavigate();
  const { technologyId } = useParams();

  const technology = technologies.find(
    (item) => item.id === technologyId
  );

  if (!technology) {
    return (
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/30">
            404
          </p>

          <h1 className="mt-4 text-5xl font-bold text-white">
            Technology not found
          </h1>

  <button
  onClick={() => navigate(-1)}
  className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition-all duration-300 hover:-translate-x-1 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
>
  <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
    ←
  </span>

  Go Back
</button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-6 pb-24 pt-32 lg:px-8">
      <div className="mx-auto max-w-6xl">

      <button
  onClick={() => navigate(-1)}
  className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition-all duration-300 hover:-translate-x-1 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
>
  <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
    ←
  </span>

  Go Back
</button>

        <div className="mt-16">
          <p className="text-sm uppercase tracking-[0.3em] text-white/30">
            {technology.category}
          </p>

          <h1 className="mt-4 text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            {technology.name}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
            {technology.description}
          </p>
        </div>

        <div className="mt-20">
          <p className="text-sm uppercase tracking-[0.3em] text-white/30">
            Concepts
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technology.concepts.map((concept, index) => (
              <div
                key={concept}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <span className="text-xs text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-lg font-medium text-white">
                  {concept}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <p className="text-sm uppercase tracking-[0.3em] text-white/30">
            Used in projects
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {technology.usedIn.map((project) => (
              <span
                key={project}
                className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/50"
              >
                {project}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnologyDetails;
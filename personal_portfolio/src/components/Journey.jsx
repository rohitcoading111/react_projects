import journey from "../data/journeyData";
const Journey = () => {
  return (
    <section
      id="journey"
      className="relative overflow-hidden px-6 py-32 lg:px-8 lg:py-40  scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            04 / My Journey
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Learning.
            <span className="text-white/35"> Building.</span>
            <br />
            Growing.
          </h2>
        </div>

        <div className="relative">

          <div className="absolute left-[7px] top-0 h-full w-px bg-white/10" />

          <div className="space-y-14">
            {journey.map((item, index) => (
              <div
                key={item.title}
                className="journey-item relative pl-10 lg:grid lg:grid-cols-[180px_1fr] lg:gap-12"
              >

                <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-black bg-white" />

                <div>
                  <p className="text-sm font-medium text-white/70">
                    {item.year}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/25">
                    {item.type}
                  </p>
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] lg:mt-0 lg:p-8">

                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                    {item.description}
                  </p>

                  <span className="mt-6 inline-block text-xs text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;
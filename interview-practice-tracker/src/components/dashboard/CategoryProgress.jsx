
function CategoryProgress({ categories = [] }) {
  return (
    <section className="mt-8">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Category Progress
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Track your progress in each interview section.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const percentage =
            category.total === 0
              ? 0
              : Math.round(
                  (category.completed / category.total) * 100
                );

          return (
            <div
              key={category.name}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">
                  {category.name}
                </h3>

                <span className="text-sm text-gray-500">
                  {category.completed}/{category.total}
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-gray-900 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <p className="mt-2 text-xs text-gray-400">
                {percentage}% completed
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryProgress;

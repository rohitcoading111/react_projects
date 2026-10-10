import { Code2 } from "lucide-react";

function CategoryProgress({ categories }) {
  return (
    <section className="mt-8">
      <div className="mb-3">
        <h2 className="font-semibold">Preparation by category</h2>
        <p className="mt-1 text-xs text-slate-400">See where your practice time is going</p>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 max-sm:grid-cols-1">
        {categories.map((category) => {
          const progress = category.total
            ? Math.round((category.completed / category.total) * 100)
            : 0;
          return (
            <article className="rounded-xl border border-slate-800 bg-slate-900/80 p-4" key={category.name}>
              <div className="flex items-center gap-2 text-violet-300">
                <Code2 size={17} />
                <h3 className="text-sm font-medium text-slate-100">{category.name}</h3>
              </div>
              <div className="mb-2 mt-4 flex justify-between text-xs text-slate-400">
                <span>{category.completed} of {category.total} completed</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-violet-500 transition-all" style={{ width: `${progress}%` }} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryProgress;

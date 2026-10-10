function StatCard({ title, value, caption, icon: Icon, tone }) {
  const iconColor = tone === "green"
    ? "bg-emerald-500/10 text-emerald-300"
    : tone === "blue"
      ? "bg-blue-500/10 text-blue-300"
      : tone === "amber"
        ? "bg-amber-500/10 text-amber-300"
        : "bg-violet-500/10 text-violet-300";

  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 transition hover:border-slate-700">
      <div className="flex items-center justify-between gap-2">
        <span className={`grid size-9 place-items-center rounded-lg ${iconColor}`}><Icon size={18} /></span>
        <span className="text-right text-xs text-slate-500">{caption}</span>
      </div>
      <p className="mb-1 mt-4 text-2xl font-semibold">{value}</p>
      <h2 className="text-sm font-medium text-slate-400">{title}</h2>
    </article>
  );
}

export default StatCard;

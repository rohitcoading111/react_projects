function ProgressCard({ progress, completed, total }) {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/80 p-5">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-semibold">Overall progress</h2>
          <p className="mt-1 text-xs text-slate-400">A little consistency goes a long way</p>
        </div>
        <span className="text-3xl font-semibold text-violet-300">{progress}%</span>
      </div>
      <p className="mb-3 mt-5 text-sm text-slate-400">{completed} of {total} questions completed</p>
      <div
        aria-label={`${progress}% complete`}
        aria-valuemax="100"
        aria-valuemin="0"
        aria-valuenow={progress}
        className="h-2 overflow-hidden rounded-full bg-slate-800"
        role="progressbar"
      >
        <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-400 transition-all" style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
}

export default ProgressCard;

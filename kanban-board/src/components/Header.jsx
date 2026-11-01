
const Header = ({
  search,
  setSearch,
  onAddTask,
  totalTasks,
  completedTasks,
}) => {
  return (
    <header className="border-b border-white/10 bg-[#101019]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-5 px-5 py-6 md:px-8">

        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 shadow-lg shadow-violet-500/30">
              <span className="text-xl">✦</span>
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                TaskFlow
              </h1>
              <p className="text-xs text-gray-500">
                Workspace / My Board
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-wrap items-center justify-end gap-3">

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2">
            <span className="text-violet-400">◈</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tasks..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500 sm:w-48"
            />
          </div>

          <button
            onClick={onAddTask}
            className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/40"
          >
            + Create Task
          </button>

        </div>
      </div>

      <div className="mx-auto flex max-w-[1600px] gap-8 px-5 pb-5 md:px-8">
        <div>
          <p className="text-xs text-gray-500">Total Tasks</p>
          <p className="text-xl font-bold">{totalTasks}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Completed</p>
          <p className="text-xl font-bold text-emerald-400">
            {completedTasks}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Remaining</p>
          <p className="text-xl font-bold text-violet-400">
            {totalTasks - completedTasks}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

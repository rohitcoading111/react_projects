
const FilterBar = ({
  priority,
  setPriority,
  status,
  setStatus,
}) => {
  return (
    <div className="mb-7 flex flex-wrap items-center justify-between gap-4">

      <div>
        <h2 className="text-xl font-bold">My Workspace</h2>
        <p className="mt-1 text-sm text-gray-500">
          Manage and organize your daily tasks.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="dark-select"
        >
          <option value="All">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="dark-select"
        >
          <option value="All">All Status</option>
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <button
          onClick={() => {
            setPriority("All");
            setStatus("All");
          }}
          className="rounded-xl border border-white/10 px-4 py-2 text-sm text-gray-400 transition hover:border-violet-500 hover:text-white"
        >
          Reset
        </button>

      </div>
    </div>
  );
};

export default FilterBar;

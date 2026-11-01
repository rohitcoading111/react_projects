
const TaskCard = ({
  task,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  const priorityStyles = {
    High: "text-red-400 bg-red-500/10 border-red-500/20",
    Medium: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    Low: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  };

  const nextStatus = {
    Todo: "In Progress",
    "In Progress": "Done",
    Done: "Todo",
  };

  const previousStatus = {
    Todo: "Done",
    "In Progress": "Todo",
    Done: "In Progress",
  };

  return (
    <article className="task-card group">

      <div className="mb-4 flex items-center justify-between gap-2">
        <span className={`rounded-md border px-2.5 py-1 text-[11px] font-bold ${priorityStyles[task.priority]}`}>
          {task.priority} Priority
        </span>

        <span className="text-xs text-gray-500">
          {task.date || "No deadline"}
        </span>
      </div>

      <h3 className="text-base font-semibold text-gray-100 transition group-hover:text-violet-300">
        {task.title}
      </h3>

      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">
        {task.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-md bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
          {task.label}
        </span>

        <div className="flex gap-2 opacity-100 transition sm:opacity-70 sm:group-hover:opacity-100">
          <button
            onClick={() => onEdit(task)}
            title="Edit task"
            className="card-action hover:text-amber-400"
          >
            ✎
          </button>

          <button
            onClick={() => {
              if (window.confirm("Delete this task?")) {
                onDelete(task.id);
              }
            }}
            title="Delete task"
            className="card-action hover:text-red-400"
          >
            ×
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
        <button
          onClick={() => onStatusChange(task.id, previousStatus[task.status])}
          className="text-xs text-gray-500 transition hover:text-white"
        >
          ← Previous
        </button>

        <button
          onClick={() => onStatusChange(task.id, nextStatus[task.status])}
          className="text-xs font-semibold text-violet-400 transition hover:text-violet-300"
        >
          {task.status === "Done" ? "Restart ↻" : "Move Forward →"}
        </button>
      </div>

    </article>
  );
};

export default TaskCard;

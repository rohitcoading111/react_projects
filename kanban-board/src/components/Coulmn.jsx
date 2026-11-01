
import TaskCard from "./TaskCard";

const Column = ({
  title,
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  const styles = {
    Todo: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    "In Progress": "text-blue-400 bg-blue-500/10 border-blue-500/20",
    Done: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  };

  const glowStyles = {
    Todo: "column-todo",
    "In Progress": "column-progress",
    Done: "column-done",
  };

  return (
    <div className={`column-panel ${glowStyles[title] || ""}`}>

      {/* Column Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className={`rounded-lg border px-3 py-2 text-sm font-semibold ${styles[title]}`}
          >
            {title}
          </span>

          <span className="text-sm text-gray-500">
            {tasks.length} tasks
          </span>
        </div>

        <span className="text-gray-500">•••</span>
      </div>

      {/* Tasks */}
      <div className="space-y-4">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <div className="mb-3 text-3xl opacity-40">◇</div>

            <p className="text-sm font-medium text-gray-400">
              No tasks here
            </p>

            <p className="mt-1 text-xs text-gray-600">
              Tasks will appear here
            </p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onStatusChange={onStatusChange}
            />
          ))
        )}
      </div>

    </div>
  );
};

export default Column;


import Column from "./Coulmn.jsx";
import { groupTasks } from "../utils/taskUtils";

const Board = ({ tasks, onEdit, onDelete, onStatusChange }) => {
  const columns = groupTasks(tasks);

  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">

      {columns.map((column) => (
        <Column
          key={column.title}
          title={column.title}
          tasks={column.tasks}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}

    </section>
  );
};

export default Board;

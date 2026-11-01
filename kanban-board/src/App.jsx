
import { useMemo, useState } from "react";

import Header from "./components/Header";
import Board from "./components/Board";
import AddTaskModal from "./components/AddTaskModal";
import FilterBar from "./components/FilterBar";

import useTasks from "./hooks/useTasks";
import { filterTasks } from "./utils/taskUtils";

const App = () => {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
  } = useTasks();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredTasks = useMemo(() => {
    return filterTasks(tasks, search, priority, status);
  }, [tasks, search, priority, status]);

  const handleOpenModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleSubmit = (formData) => {
    if (editingTask) {
      updateTask({
        ...formData,
        id: editingTask.id,
      });
    } else {
      addTask(formData);
    }

    handleCloseModal();
  };

  const completedTasks = tasks.filter(
    (task) => task.status === "Done"
  ).length;

  return (
    <div className="min-h-screen bg-[#09090f] text-white">
      <Header
        search={search}
        setSearch={setSearch}
        onAddTask={handleOpenModal}
        totalTasks={tasks.length}
        completedTasks={completedTasks}
      />

      <main className="mx-auto max-w-[1600px] px-5 py-8 md:px-8">

        <FilterBar
          priority={priority}
          setPriority={setPriority}
          status={status}
          setStatus={setStatus}
        />

        <Board
          tasks={filteredTasks}
          onEdit={handleEdit}
          onDelete={deleteTask}
          onStatusChange={updateTaskStatus}
        />

      </main>

      {isModalOpen && (
        <AddTaskModal
          editingTask={editingTask}
          onSubmit={handleSubmit}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;


import { useEffect, useState } from "react";

const STORAGE_KEY = "kanban_tasks";

const getInitialTasks = () => {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error("Failed to load tasks:", error);
    return [];
  }
};

const useTasks = () => {
  const [tasks, setTasks] = useState(getInitialTasks);

  // Persist tasks
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Add task
  const addTask = (taskData) => {
    const newTask = {
      ...taskData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    setTasks((prev) => [...prev, newTask]);
  };

  // Update task
  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Change task status
  const updateTaskStatus = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
  };
};

export default useTasks;

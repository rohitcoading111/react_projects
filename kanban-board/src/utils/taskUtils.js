export const TASK_STATUSES = ["Todo", "In Progress", "Done"];

export const TASK_PRIORITIES = ["Low", "Medium", "High"];

export const filterTasks = (tasks, search, priority, status) => {
  return tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase()) ||
      task.label.toLowerCase().includes(search.toLowerCase());

    const matchesPriority =
      priority === "All" || task.priority === priority;

    const matchesStatus =
      status === "All" || task.status === status;

    return matchesSearch && matchesPriority && matchesStatus;
  });
};

export const groupTasks = (tasks) => {
  return TASK_STATUSES.map((status) => ({
    title: status,
    tasks: tasks.filter((task) => task.status === status),
  }));
};


import { useEffect, useState } from "react";

const initialFormData = {
  title: "",
  description: "",
  priority: "Low",
  status: "Todo",
  date: "",
  label: "",
};

const AddTaskModal = ({ editingTask, onSubmit, onClose }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");

  useEffect(() => {
    setFormData(
      editingTask
        ? { ...initialFormData, ...editingTask }
        : initialFormData
    );
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setError("Task title is required.");
      return;
    }

    if (!formData.description.trim()) {
      setError("Description is required.");
      return;
    }

    if (!formData.label.trim()) {
      setError("Please enter a task label.");
      return;
    }

    if (
      formData.date &&
      formData.date < new Date().toLocaleDateString("en-CA")
    ) {
      setError("Due date cannot be in the past.");
      return;
    }

    onSubmit({
      ...formData,
      title: formData.title.trim(),
      description: formData.description.trim(),
      label: formData.label.trim(),
    });
  };

  return (
    <div
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
    >
      <div className="modal-panel my-auto w-full max-w-xl">

        <div className="mb-7 flex items-center justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[3px] text-violet-400">
              Task Management
            </p>

            <h2 className="text-2xl font-bold text-white">
              {editingTask ? "Edit Task" : "Create New Task"}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="card-action text-xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="form-label">Task Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="What needs to be done?"
              maxLength={100}
              required
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your task..."
              rows={4}
              maxLength={1000}
              required
              className="form-input resize-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div>
              <label className="form-label">Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="form-input"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div>
              <label className="form-label">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-input"
              >
                <option value="Todo">Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div>
              <label className="form-label">Due Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Label</label>
              <input
                name="label"
                value={formData.label}
                onChange={handleChange}
                placeholder="React / Backend / UI"
                maxLength={30}
                required
                className="form-input"
              />
            </div>

          </div>

          {error && (
            <p className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
              {error}
            </p>
          )}

          <div className="flex justify-end gap-3 border-t border-white/10 pt-5">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 px-5 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-violet-500/40"
            >
              {editingTask ? "Save Changes" : "Create Task"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;

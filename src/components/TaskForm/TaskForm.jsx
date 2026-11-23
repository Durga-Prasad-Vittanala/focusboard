
import { useState } from "react";
import { X } from "lucide-react";

import "./TaskForm.css";

function TaskForm({ onClose, onSave, editingTask }) {

  const [formData, setFormData] = useState({
    title: editingTask?.title || "",
    description: editingTask?.description || "",
    category: editingTask?.category || "Development",
    status: editingTask?.status || "To do",
    priority: editingTask?.priority || "Medium",
    dueDate: editingTask?.dueDate || ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setError("Task title is required.");
      return;
    }

    if (!formData.dueDate) {
      setError("Please select a due date.");
      return;
    }

    onSave({
      ...formData,
      title: formData.title.trim()
    });
  };

  return (
    <div className="modal-overlay">

      <div className="task-modal">

        <div className="modal-header">
          <div>
            <h2>{editingTask ? "Edit Task" : "Create New Task"}</h2>
            <p>Fill in the details of your task.</p>
          </div>

          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close form"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="title">Task Title *</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter task title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe your task..."
              rows="3"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option>Design</option>
              <option>Development</option>
              <option>Testing</option>
              <option>Research</option>
              <option>Documentation</option>
            </select>
          </div>

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="status">Status *</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>To do</option>
                <option>In progress</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority *</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date *</label>
            <input
              id="dueDate"
              name="dueDate"
              type="date"
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
          </div>

          {error && (
            <p className="form-error">{error}</p>
          )}

          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="save-btn">
              {editingTask ? "Update Task" : "Create Task"}
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default TaskForm;


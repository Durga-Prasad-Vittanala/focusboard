
import { CalendarDays, Pencil, Trash2 } from "lucide-react";

import "./TaskCard.css";

function TaskCard({ task, onEdit, onDelete,onStatusChange }) {
  return (
    <div className="task-card">

      <div className="task-main">

        <div className="task-details">
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <div className="task-meta">

            <select
  className={`status-select ${task.status.toLowerCase().replace(" ", "-")}`}
  value={task.status}
  onChange={(e) => onStatusChange(task.id, e.target.value)}
  aria-label={`Change status for ${task.title}`}
>
  <option value="To do">To do</option>
  <option value="In progress">In progress</option>
  <option value="Completed">Completed</option>
</select>

            <span className={`priority-badge ${task.priority.toLowerCase()}`}>
              {task.priority} Priority
            </span>

            <span className="task-category">
              {task.category}
            </span>

          </div>

          <div className="task-date">
            <CalendarDays size={14} />
            <span>{task.dueDate}</span>
          </div>
        </div>

        <div className="task-actions">

          <button
            onClick={() => onEdit(task)}
            aria-label={`Edit ${task.title}`}
            title="Edit Task"
          >
            <Pencil size={17} />
          </button>

          <button
            onClick={() => onDelete(task)}
            aria-label={`Delete ${task.title}`}
            title="Delete Task"
          >
            <Trash2 size={17} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskCard;



import { Plus } from "lucide-react";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskList.css";

function TaskList({ tasks, onAddTask, onEditTask, onDeleteTask,onStatusChange }) {
  return (
    <section className="task-section" id="tasks">

      <div className="task-section-header">

        <div>
          <h2>My Tasks</h2>
          <p>Manage and track your daily activities.</p>
        </div>

        <button
          className="add-task-btn"
          onClick={onAddTask}
        >
          <Plus size={18} />
          Add Task
        </button>

      </div>

      <div className="task-list">

        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
  key={task.id}
  task={task}
  onEdit={onEditTask}
  onDelete={onDeleteTask}
  onStatusChange={onStatusChange}
/>
          ))
        ) : (
          <div className="empty-state">
            <h3>No matching tasks found</h3>
<p>Try searching with a different task title.</p>
          </div>
        )}

      </div>

    </section>
  );
}

export default TaskList;


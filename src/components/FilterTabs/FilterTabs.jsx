
import "./FilterTabs.css";

function FilterTabs({
  statusFilter,
  onStatusChange,
  priorityFilter,
  onPriorityChange,
  onReset
}) {
  const statuses = [
    "All",
    "To do",
    "In progress",
    "Completed"
  ];

  return (
    <div className="filter-toolbar">

      <div className="status-tabs" role="group" aria-label="Filter tasks by status">

        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            className={`filter-tab ${
              statusFilter === status ? "active" : ""
            }`}
            onClick={() => onStatusChange(status)}
            aria-pressed={statusFilter === status}
          >
            {status}
          </button>
        ))}

      </div>

      <div className="filter-actions">

        <select
          className="priority-filter"
          value={priorityFilter}
          onChange={(e) => onPriorityChange(e.target.value)}
          aria-label="Filter tasks by priority"
        >
          <option value="All">All Priorities</option>
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>

        <button
          type="button"
          className="reset-filter-btn"
          onClick={onReset}
        >
          Reset Filters
        </button>

      </div>

    </div>
  );
}

export default FilterTabs;


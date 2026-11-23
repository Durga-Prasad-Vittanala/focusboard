
import { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import FocusNotes from "./components/FocusNotes/FocusNotes";
import Overview from "./components/Overview/Overview";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";

import sampleTasks from "./data/sampleTasks";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterTabs from "./components/FilterTabs/FilterTabs";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {

  const [tasks, setTasks] = useLocalStorage(
  "focusboard_tasks",
  sampleTasks
);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

const [priorityFilter, setPriorityFilter] = useState("All");

  // Open form for creating a task
  const handleAddTask = () => {
    setEditingTask(null);
    setIsFormOpen(true);
  };

  // Open form for editing a task
  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  // Create or update a task
  const handleSaveTask = (taskData) => {

    if (editingTask) {

      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingTask.id
            ? { ...taskData, id: task.id }
            : task
        )
      );

    } else {

      const newTask = {
        ...taskData,
        id: Date.now()
      };

      setTasks((prev) => [...prev, newTask]);

    }

    setIsFormOpen(false);
    setEditingTask(null);
  };
  // Delete task with confirmation
const handleDeleteTask = (task) => {

  const confirmDelete = window.confirm(
    `Are you sure you want to delete "${task.title}"?`
  );

  if (confirmDelete) {

    setTasks((prev) =>
      prev.filter((item) => item.id !== task.id)
    );

  }
};
// Update task status
const handleStatusChange = (taskId, newStatus) => {

  setTasks((prev) =>
    prev.map((task) =>
      task.id === taskId
        ? { ...task, status: newStatus }
        : task
    )
  );

};

  // Close form
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingTask(null);
  };
  const filteredTasks = tasks.filter((task) => {

  const matchesSearch = task.title
    .toLowerCase()
    .includes(searchTerm.trim().toLowerCase());

  const matchesStatus =
    statusFilter === "All" ||
    task.status === statusFilter;

  const matchesPriority =
    priorityFilter === "All" ||
    task.priority === priorityFilter;

  return matchesSearch && matchesStatus && matchesPriority;

});

  return (
    <div className="app">

      <Sidebar />

      <div className="main-layout">

        <Header />

        <main className="main-content">

          <div className="welcome-section">
            <h1>Welcome to FocusBoard!</h1>
            <p>Your work, in focus.</p>
          </div>

          <FocusNotes />

          <Overview tasks={tasks} />


<SearchBar
  searchTerm={searchTerm}
  onSearchChange={setSearchTerm}
/>

<FilterTabs
  statusFilter={statusFilter}
  onStatusChange={setStatusFilter}
  priorityFilter={priorityFilter}
  onPriorityChange={setPriorityFilter}
  onReset={() => {
    setStatusFilter("All");
    setPriorityFilter("All");
    setSearchTerm("");
  }}
/>

<TaskList
  tasks={filteredTasks}
  onAddTask={handleAddTask}
  onEditTask={handleEditTask}
  onDeleteTask={handleDeleteTask}
  onStatusChange={handleStatusChange}
/>

        </main>

      </div>

      {isFormOpen && (
        <TaskForm
          onClose={handleCloseForm}
          onSave={handleSaveTask}
          editingTask={editingTask}
        />
      )}

    </div>
  );
}

export default App;

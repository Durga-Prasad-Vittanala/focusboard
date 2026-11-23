
import {
  ClipboardList,
  Clock,
  CheckCircle
} from "lucide-react";

import StatCard from "../StatCard/StatCard";
import "./Overview.css";

function Overview({ tasks = [] }) {

  const totalTasks = tasks.length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In progress"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  return (
    <section className="overview-section">

      <div className="section-heading">
        <div>
          <h2>Overview</h2>
          <p>Track your productivity at a glance.</p>
        </div>
      </div>

      <div className="stats-grid">

        <StatCard
          title="Total Tasks"
          value={totalTasks}
          icon={ClipboardList}
          color="#6554F5"
          background="#EEEAFE"
        />

        <StatCard
          title="In Progress"
          value={inProgressTasks}
          icon={Clock}
          color="#E99A27"
          background="#FFF4DF"
        />

        <StatCard
          title="Completed"
          value={completedTasks}
          icon={CheckCircle}
          color="#20B486"
          background="#E5F8F0"
        />

      </div>

    </section>
  );
}

export default Overview;


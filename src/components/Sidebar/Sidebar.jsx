
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  Settings,
  Target
} from "lucide-react";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="logo-icon">
          <Target size={24} />
        </div>
        <h2>FocusBoard</h2>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-label">WORKSPACE</p>

        <nav className="sidebar-nav">

          <a href="#dashboard" className="nav-item active">
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </a>

          <a href="#tasks" className="nav-item">
            <CheckSquare size={19} />
            <span>My Tasks</span>
          </a>

          <a href="#calendar" className="nav-item">
            <CalendarDays size={19} />
            <span>Calendar</span>
          </a>

        </nav>
      </div>

      <div className="sidebar-bottom">
        <a href="#settings" className="nav-item">
          <Settings size={19} />
          <span>Settings</span>
        </a>
      </div>

    </aside>
  );
}

export default Sidebar;



import { Bell, ChevronRight } from "lucide-react";

import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="breadcrumb">
        <span>Workspace</span>
        <ChevronRight size={16} />
        <strong>Dashboard</strong>
      </div>

      <div className="header-right">

        <button className="notification-btn" aria-label="Notifications">
          <Bell size={20} />
        </button>

        <div className="profile">
          <div className="profile-avatar">U</div>

          <div className="profile-info">
            <strong>User</strong>
            <span>Workspace member</span>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Header;


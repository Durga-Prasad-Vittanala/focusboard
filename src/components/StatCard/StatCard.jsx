
import "./StatCard.css";

function StatCard({ title, value, icon: Icon, color, background }) {
  return (
    <div className="stat-card">

      <div className="stat-info">
        <p>{title}</p>
        <h2>{value}</h2>
      </div>

      <div
        className="stat-icon"
        style={{
          color: color,
          backgroundColor: background
        }}
      >
        <Icon size={22} />
      </div>

    </div>
  );
}

export default StatCard;


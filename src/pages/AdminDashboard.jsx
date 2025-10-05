import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user || user.info.role !== "admin") {
    navigate("/login");
    return null;
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-info">
          <span>Welcome, {user.info.name}</span>
          <button onClick={handleLogout} className="btn logout-btn">
            Logout
          </button>
        </div>
      </div>

      <div className="admin-content">
        <div className="admin-stats">
          <div className="stat-card">
            <h3>Dashboard Overview</h3>
            <p>You are successfully logged in as an administrator.</p>
          </div>
        </div>

        <div className="admin-actions">
          <h2>Admin Actions</h2>
          <div className="action-buttons">
            <button className="btn" onClick={() => navigate("/")}>
              View Store
            </button>
            <button className="btn" onClick={() => navigate("/profile")}>
              Manage Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

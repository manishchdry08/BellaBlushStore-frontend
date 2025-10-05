import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>You're not logged in ❌</h2>
        <p>Please login or create a new account.</p>
        <div style={{ marginTop: "20px" }}>
          <button
            className="btn"
            onClick={() => navigate("/login")}
            style={{ marginRight: "10px" }}
          >
            Go to Login
          </button>
          <button className="btn" onClick={() => navigate("/register")}>
            Go to Signup
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
      <h2>My Profile 👤</h2>
      <div style={{ marginTop: "20px", textAlign: "left" }}>
        <p><strong>Name:</strong> {user.info?.name || "N/A"}</p>
        <p><strong>Email:</strong> {user.info?.email || "N/A"}</p>
        <p><strong>Role:</strong> {user.info?.role || "user"}</p>
      </div>

      <button
        className="btn"
        style={{ marginTop: "20px", backgroundColor: "red", color: "white" }}
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

import React from "react";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#2c3e50",
        color: "white",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>Inventory</h2>

      <p>🏠 Dashboard</p>
      <p>🏢 Company</p>
      <p>📦 Products</p>
      <p>📋 Orders</p>
      <p>👤 Users</p>
      <p>🚪 Logout</p>
    </div>
  );
}

export default Sidebar;
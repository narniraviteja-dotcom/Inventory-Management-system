import React from "react";
import { Link } from "react-router-dom";

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

      <p>
  <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
    🏠 Dashboard
  </Link>
</p>

<p>
  <Link to="/company" style={{ color: "white", textDecoration: "none" }}>
    🏢 Company
  </Link>
</p>
     <Link
  to="/product"
  style={{ color: "white", textDecoration: "none" }}
>
  📦 Products
</Link>
      <p>📋 Orders</p>
      <p>👤 Users</p>
      <p>🚪 Logout</p>
    </div>
  );
}

export default Sidebar;
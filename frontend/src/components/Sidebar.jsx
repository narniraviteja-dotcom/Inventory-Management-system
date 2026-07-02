import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
  style={{
    width: "250px",
    background: "#2c3e50",
    color: "white",
    height: "100vh",
    padding: "20px",
    boxSizing: "border-box",
  }}
>
    <h2>Inventory</h2>

<p style={{ margin: "12px 0" }}>
  <Link to="/dashboard" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
    <span style={{ width: "25px", textAlign: "center" }}>🏠</span>
    <span>Dashboard</span>
  </Link>
</p>

<p style={{ margin: "12px 0" }}>
  <Link to="/company" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
    <span style={{ width: "25px", textAlign: "center" }}>🏢</span>
    <span>Company</span>
  </Link>
</p>

<p style={{ margin: "12px 0" }}>
  <Link to="/product" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
    <span style={{ width: "25px", textAlign: "center" }}>📦</span>
    <span>Products</span>
  </Link>
</p>

<p style={{ margin: "12px 0" }}>
  <Link to="/orders" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
    <span style={{ width: "25px", textAlign: "center" }}>📦</span>
    <span>Orders</span>
  </Link>
</p>

<p style={{ margin: "12px 0" }}>
  <Link to="/users" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
    <span style={{ width: "25px", textAlign: "center" }}>👤</span>
    <span>Users</span>
  </Link>
</p>

<p style={{ margin: "12px 0" }}>
  <Link to="/billing" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
    <span style={{ width: "25px", textAlign: "center" }}>🧾</span>
    <span>Billing</span>
  </Link>
</p>

<p style={{ margin: "12px 0" }}>
  <Link to="/reports" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
    <span style={{ width: "25px", textAlign: "center" }}>📊</span>
    <span>Reports</span>
  </Link>
</p>

<p style={{ margin: "12px 0", display: "flex", alignItems: "center" }}>
  <span style={{ width: "25px", textAlign: "center" }}>🚪</span>
  <span>Logout</span>
</p>
    </div>
  );
 
}

export default Sidebar;
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />

        <div style={{ padding: "20px" }}>
          <h2>Dashboard</h2>
          <p>Welcome to Inventory Management System</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
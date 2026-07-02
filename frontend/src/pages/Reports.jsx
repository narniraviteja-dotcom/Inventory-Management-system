import React, { useEffect, useState } from "react";

function Reports() {
  const [report, setReport] = useState({
    totalCompanies: 0,
    totalUsers: 4,
    totalProducts: 0,
    totalOrders: 0,
    totalSales: 0,
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/reports")
      .then((res) => res.json())
      .then((data) => setReport(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Reports</h1>

      <h3>Total Companies: {report.totalCompanies}</h3>
      <h3>Total Users: {report.totalUsers}</h3>
      <h3>Total Products: {report.totalProducts}</h3>
      <h3>Total Orders: {report.totalOrders}</h3>
      <h3>Total Sales: ₹{report.totalSales}</h3>
    </div>
  );
}

export default Reports;
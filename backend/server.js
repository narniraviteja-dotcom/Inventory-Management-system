const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const companyRoutes = require("./routes/companyRoutes");
const userRoutes = require("./routes/userRoutes");
const reportRoutes = require("./routes/reportRoutes");
const billRoutes = require("./routes/billRoutes");
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/companies", companyRoutes);
app.use("/api/users", userRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/bills", billRoutes);
app.use("/api/products", require("./routes/ProductRoutes"));
app.get("/", (req, res) => {
  res.send("Inventory Management Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const Company = require("../models/companyModel");
const User = require("../models/userModel");
const Bill = require("../models/billModel");
const Product = require("../models/ProductModel");

const getReports = async (req, res) => {
  try {
    const totalCompanies = await Company.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalProducts = await Product.countDocuments();

    const bills = await Bill.find();

    const totalOrders = bills.length;

    const totalSales = bills.reduce((sum, bill) => {
      return sum + bill.total;
    }, 0);

    res.json({
      totalCompanies,
      totalUsers,
      totalProducts,
      totalOrders,
      totalSales,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getReports };
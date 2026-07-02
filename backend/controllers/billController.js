const Bill = require("../models/billModel");

// Create Bill
const createBill = async (req, res) => {
  try {
    const { customerName, productName, quantity, price, total } = req.body;

    const bill = await Bill.create({
      customerName,
      productName,
      quantity,
      price,
      total,
    });

    res.status(201).json(bill);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Bills
const getBills = async (req, res) => {
  try {
    const bills = await Bill.find().sort({ createdAt: -1 });
    res.json(bills);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Update Bill
const updateBill = async (req, res) => {
  try {
    const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!bill) {
      return res.status(404).json({ message: "Bill not found" });
    }

    res.status(200).json(bill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Bill
const deleteBill = async (req, res) => {
  try {
    const bill = await Bill.findByIdAndDelete(req.params.id);

    if (!bill) {
      return res.status(404).json({ message: "Bill not found" });
    }

    res.status(200).json({ message: "Bill deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createBill,
  getBills,
  updateBill,
  deleteBill,
};
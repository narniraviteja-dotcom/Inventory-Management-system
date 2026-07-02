const express = require("express");
const router = express.Router();

const {
  createBill,
  getBills,
  updateBill,
  deleteBill,
} = require("../controllers/billController");

router.post("/", createBill);
router.get("/", getBills);
router.put("/:id", updateBill);
router.delete("/:id", deleteBill);

module.exports = router;
const User = require("../models/userModel");

const registerUser = async (req, res) => {
  res.json({ message: "Register User API" });
};

const loginUser = async (req, res) => {
  res.json({ message: "Login User API" });
};

module.exports = {
  registerUser,
  loginUser,
};
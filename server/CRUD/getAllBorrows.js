const Borrow = require("../models/borrow");

const getAllBorrows = async (req, res) => {
  try {
    const borrows = await Borrow.find().populate("user").populate("book");
    res.status(200).json(borrows);
  } catch (error) {
    res.status(400).json({ message: "Error fetching borrows", error });
  }
};

module.exports = getAllBorrows;

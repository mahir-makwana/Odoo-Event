const Borrow = require("../models/borrow");

const deleteBorrow = async (req, res) => {
  try {
    const { borrowId } = req.params;

    const deletedBorrow = await Borrow.findByIdAndDelete(borrowId);

    if (!deletedBorrow) {
      return res.status(404).json({ message: "Borrow not found" });
    }

    res
      .status(200)
      .json({ message: "Borrow deleted successfully", deletedBorrow });
  } catch (error) {
    res.status(400).json({ message: "Error deleting borrow", error });
  }
};

module.exports = deleteBorrow;

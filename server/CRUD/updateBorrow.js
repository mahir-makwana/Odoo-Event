const Borrow = require("../models/borrow");

const updateBorrow = async (req, res) => {
  try {
    const { borrowId } = req.params;
    const { returnDate, lateFee } = req.body;

    const updatedBorrow = await Borrow.findByIdAndUpdate(
      borrowId,
      { returnDate, lateFee },
      { new: true }
    );

    if (!updatedBorrow) {
      return res.status(404).json({ message: "Borrow not found" });
    }

    res
      .status(200)
      .json({ message: "Borrow updated successfully", updatedBorrow });
  } catch (error) {
    res.status(400).json({ message: "Error updating borrow", error });
  }
};

module.exports = updateBorrow;

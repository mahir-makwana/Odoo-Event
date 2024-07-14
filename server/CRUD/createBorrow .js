const Borrow = require("../models/borrow");

const createBorrow = async (req, res) => {
  try {
    const { userId, bookId, dueDate } = req.body;

    const borrow = new Borrow({
      user: userId,
      book: bookId,
      dueDate: dueDate,
    });

    await borrow.save();

    res.status(201).json({ message: "Borrow created successfully", borrow });
  } catch (error) {
    res.status(400).json({ message: "Error creating borrow", error });
  }
};

module.exports = createBorrow;

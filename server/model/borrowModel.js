const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  borrowDate: { type: Date, default: Date.now },
  returnDate: { type: Date },
  dueDate: { type: Date, required: true },
  lateFee: { type: Number, default: 0 },
});

module.exports = mongoose.model("Borrow", borrowSchema);

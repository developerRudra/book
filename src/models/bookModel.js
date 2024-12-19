const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    authorName: { type: String, trim: true },
    price: { type: Number, trim: true },
    description: { type: String, trim: true },
    stock: { type: Number, trim: true },
    disable: { type: Boolean, default:false},
  },
  { timestamps: true }
);

const Book = mongoose.model("BookSchema",BookSchema)
module.exports = Book
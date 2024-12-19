const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, trim: true, ref: "UserSchema" },
    bookId: { type: String, trim: true, ref: "BookSchema" },
    quentity: { type: Number, trim: true ,default:1 },
    price: { type: Number, trim: true },
  },
  { timestamps: true }
);

const Cart = mongoose.model("cartSchema", cartSchema);
module.exports = Cart;

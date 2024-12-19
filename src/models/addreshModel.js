const mongoose = require("mongoose");

const AddreshSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    phoneNumber: { type: Number, trim: true },
    email: { type: String, trim: true },
    userId: { type: String, trim: true ,ref:"UserSchema"},
    addresh1: { type: String, trim: true },
    addresh2: { type: String, trim: true },
    city:{ type: String, trim: true },
    pincode: { type: String, trim: true },
    state: { type: String, trim: true },
    landmark: { type: String, trim: true },
    disable: { type: Boolean, default:false},
  },
  { timestamps: true }
);


const Addresh = mongoose.model("AddreshSchema",AddreshSchema)

module.exports = Addresh
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    age: { type: String, trim: true },
    phoneNumber: { type: Number, trim: true },
    email: { type: String, trim: true },
    userName: { type: String, trim: true },
    profilePicture: { type: String, trim: true },
    password: { type: String, trim: true },
    otp:{ type: Number, trim: true },
    
  },
  { timestamps: true }
);


const User = mongoose.model("UserSchema",UserSchema)
module.exports = User
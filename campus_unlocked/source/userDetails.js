const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserDetailsSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    emailVerificationToken: String,
    isEmailVerified: { type: Boolean, default: false },
  },
  {
    collection: "UserInfo",
  }
);



mongoose.model("UserInfo", UserDetailsSchema);

const mongoose = require("mongoose");

const hall3Schema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: [{
    type: String // Store the token of the user who liked the post
  }],
});

const hall3Model = mongoose.model("hall3", hall3Schema);

module.exports = hall3Model;

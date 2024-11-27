const mongoose = require("mongoose");

const p_k_kelkar_LibrarySchema = new mongoose.Schema({
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

const p_k_kelkar_LibraryModel = mongoose.model("p_k_kelkar_Library", p_k_kelkar_LibrarySchema);

module.exports = p_k_kelkar_LibraryModel;

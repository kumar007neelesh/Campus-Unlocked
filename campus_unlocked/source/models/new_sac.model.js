const mongoose = require("mongoose");

const new_sacSchema = new mongoose.Schema({
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

const new_sacModel = mongoose.model("new_sac", new_sacSchema);

module.exports = new_sacModel;

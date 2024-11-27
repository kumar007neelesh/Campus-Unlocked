const mongoose = require("mongoose");

const old_sacSchema = new mongoose.Schema({
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

const old_sacModel = mongoose.model("old_sac", old_sacSchema);

module.exports = old_sacModel;

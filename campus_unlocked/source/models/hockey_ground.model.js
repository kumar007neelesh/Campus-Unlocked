const mongoose = require("mongoose");

const hockey_groundSchema = new mongoose.Schema({
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

const hockey_groundModel = mongoose.model("hockey_ground", hockey_groundSchema);

module.exports = hockey_groundModel;

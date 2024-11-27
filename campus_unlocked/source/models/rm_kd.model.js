const mongoose = require("mongoose");

const rm_kdSchema = new mongoose.Schema({
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

const rm_kdModel = mongoose.model("rm_kd", rm_kdSchema);

module.exports = rm_kdModel;

const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: String,
  desc: String,
  location: String,
  img: String,
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: [{
    type: String // Store the token of the user who liked the post
  }],
});
module.exports = new mongoose.model("Image", imageSchema);

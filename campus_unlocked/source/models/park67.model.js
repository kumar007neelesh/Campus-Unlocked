const mongoose = require("mongoose");

const park67Schema = new mongoose.Schema({
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

const park67Model = mongoose.model("park67", park67Schema);

module.exports = park67Model;

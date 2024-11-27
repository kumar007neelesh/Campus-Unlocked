const mongoose = require("mongoose");

const stadiumSchema = new mongoose.Schema({
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

const stadiumModel = mongoose.model("stadium", stadiumSchema);

module.exports = stadiumModel;

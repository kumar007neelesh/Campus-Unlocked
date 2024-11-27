const mongoose = require("mongoose");

const auditoriumSchema = new mongoose.Schema({
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

const auditoriumModel = mongoose.model("auditorium", auditoriumSchema);

module.exports = auditoriumModel;

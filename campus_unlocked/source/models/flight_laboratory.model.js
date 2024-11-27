const mongoose = require("mongoose");

const flight_laboratorySchema = new mongoose.Schema({
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

const flight_laboratoryModel = mongoose.model("flight_laboratory", flight_laboratorySchema);

module.exports = flight_laboratoryModel;

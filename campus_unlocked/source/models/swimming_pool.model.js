const mongoose = require("mongoose");

const swimming_poolSchema = new mongoose.Schema({
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

const swimming_poolModel = mongoose.model("swimming_pool", swimming_poolSchema);

module.exports = swimming_poolModel;

const mongoose = require("mongoose");

const doaa_canteenSchema = new mongoose.Schema({
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

const doaa_canteenModel = mongoose.model("doaa_canteen", doaa_canteenSchema);

module.exports = doaa_canteenModel;

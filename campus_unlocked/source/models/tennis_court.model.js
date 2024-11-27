const mongoose = require("mongoose");

const tennis_courtSchema = new mongoose.Schema({
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

const tennis_courtModel = mongoose.model("tennis_court", tennis_courtSchema);

module.exports = tennis_courtModel;

const mongoose = require("mongoose");

const nurserySchema = new mongoose.Schema({
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

const nurseryModel = mongoose.model("nursery", nurserySchema);

module.exports = nurseryModel;

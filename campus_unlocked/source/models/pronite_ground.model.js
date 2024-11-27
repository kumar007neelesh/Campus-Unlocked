const mongoose = require("mongoose");

const pronite_groundSchema = new mongoose.Schema({
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

const pronite_groundModel = mongoose.model("pronite_ground", pronite_groundSchema);

module.exports = pronite_groundModel;

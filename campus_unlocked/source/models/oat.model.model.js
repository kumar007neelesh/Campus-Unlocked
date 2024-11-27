const mongoose = require("mongoose");

const oatSchema = new mongoose.Schema({
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

const oatModel = mongoose.model("oat", oatSchema);

module.exports = oatModel;

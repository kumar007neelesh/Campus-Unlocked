const mongoose = require("mongoose");

const oxidation_pondSchema = new mongoose.Schema({
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

const oxidation_pondModel = mongoose.model("oxidation_pond", oxidation_pondSchema);

module.exports = oxidation_pondModel;

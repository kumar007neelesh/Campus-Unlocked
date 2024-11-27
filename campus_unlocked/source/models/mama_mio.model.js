const mongoose = require("mongoose");

const mama_mioSchema = new mongoose.Schema({
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

const mama_mioModel = mongoose.model("mama_mio", mama_mioSchema);

module.exports = mama_mioModel;

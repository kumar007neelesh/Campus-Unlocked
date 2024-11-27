const mongoose = require("mongoose");

const outreachSchema = new mongoose.Schema({
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

const outreachModel = mongoose.model("outreach", outreachSchema);

module.exports = outreachModel;

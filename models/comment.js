const mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
  name: { type: String, default: "Anonymous" },
  rant: { type: Boolean, default: false },
  stars: { type: Number, required: true },
  content: { type: String, default: "" },
});

module.exports = mongoose.model("Comment", commentSchema);

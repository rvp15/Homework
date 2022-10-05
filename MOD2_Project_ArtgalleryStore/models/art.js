//load mongoose
const mongoose = require("mongoose");
//define schema
const Schema = mongoose.Schema;
//create log Schema
const artSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, require: true },
  imageFullname: { type: String, require: true },
  price: { type: Number, required: true },
  artist: { type: String, required: true },
  description: { type: String, required: true },
  count: { type: String, required: true },
});

const Art = mongoose.model("Art", artSchema);
module.exports = Art;

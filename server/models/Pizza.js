const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: Number,
  pizza: String,
  price: Number,
  vegetarian: Boolean,
  img: String,
  description: String,
  new: Boolean,
  bestseller: Boolean,
});

module.exports = mongoose.model("Pizza", schema);

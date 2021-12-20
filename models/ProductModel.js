const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  tag: [String],
  price: Number,
  slug: {
    type: String,
    lowercase: true,
  },
});
const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;

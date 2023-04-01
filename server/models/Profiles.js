const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  id: Number,
  product_name: String,
  category: String,
  size_weight: Number,
  price: Number,
  rating: String,
});

mongoose.model("profiles", profileSchema);

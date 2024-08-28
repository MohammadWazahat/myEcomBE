const mongoose = require("mongoose");

//Crating schema
const userSchema = new mongoose.Schema({
  brand_name: {
    type: String,
    required: true,
  },
  model_name: {
    type: String,
    required: true,
  },
  cover_image: {
    type: String,
    required: false,
  },
  images: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  stock: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  storage: {
    type: String,
    required: false,
  },
  ram: {
    type: String,
    required: false,
  },
  processor: {
    type: String,
    required: false,
  },
  rating: {
    type: String,
    required: false,
  },
  rating_count: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  camera_rear: {
    type: String,
    required: false,
  },
  camera_front: {
    type: String,
    required: false,
  },
  display: {
    type: String,
    required: false,
  },
  battery: {
    type: String,
    required: false,
  },
  amount: {
    type: Number,
    required: false,
  },
});

//Creating a model
const AdminUser = mongoose.model("adminUser", userSchema);

module.exports = AdminUser;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
    required: false,
  },
  orders: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);

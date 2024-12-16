const mongoose = require("mongoose");

const Customerschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", Customerschema);

module.exports = Customer;

const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    rating: {
      rate: Number,
      required: false,
    },
    images: {
      type: [String],
    },
    foods: [
      {
        type: Schema.Types.ObjectId,
        ref: "Food",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);

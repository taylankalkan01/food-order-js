const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
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
		required: true,
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
});

module.exports = mongoose.model("Restaurant", restaurantSchema);

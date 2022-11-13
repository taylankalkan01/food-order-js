const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	readyTime: {
		type: Number,
		required: true,
	},
	rating: {
		rate: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	images: {
		type: [String],
	},
});

module.exports = mongoose.model("Food", foodSchema);

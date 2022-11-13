const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
	{
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
			type: String,
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
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("Food", foodSchema);

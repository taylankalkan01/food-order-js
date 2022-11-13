const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	orderID: {
		type: String,
		required: true,
	},
	items: [
		{
			type: Schema.Types.ObjectId,
			ref: "Food",
		},
	],
	totalAmount: {
		type: Number,
		required: true,
	},
	orderDate: {
		type: Date,
	},
	orderStatus: {
		type: String,
		//waiting-preparing-onway-delivered-cancelled-failed
	},
});

module.exports = mongoose.model("Order", orderSchema);

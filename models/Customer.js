const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	fullName: {
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
	cart: [
		{
			food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
			qty: { type: Number, required: true },
		},
	],
	order: [
		{
			type: Schema.Types.ObjectId,
			ref: "Order",
		},
	],
});
module.exports = mongoose.model("Customer", customerSchema);

const Customer = require("../../../models/Customer");
const registerValidation = require("../../../validations/customer/registerValidation");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
	try {
		//register validation
		const { error } = registerValidation(req.body);
		if (error) {
			return res
				.status(400)
				.json({ error: true, message: error.details[0].message });
		}
		//checking if the email is already in the db
		const emailExist = await Customer.findOne({ email: req.body.email });
		if (emailExist)
			return res.status(400).send("You cannot register, email already exist");

		//bcrypt password
		const hashedPass = await bcrypt.hash(req.body.password, 10);

		const { email, fullName, phone } = req.body;
		const newCustomer = new Customer({
			fullName,
			email,
			phone,
			password: hashedPass,
		});

		const user = await newCustomer.save();
		res.status(201).json({ data: user, message: "User Created" });
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
};
module.exports = register;

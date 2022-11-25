const Customer = require("../../../models/Customer");
const updatePasswordValidation = require("../../../validations/customer/updatePasswordValidation");
const bcrypt = require("bcrypt");

const updatePassword = async (req, res) => {
	try {
		const { password } = req.body;
		const { id } = req.params;

		//validation password
		const { error } = updatePasswordValidation(password);
		if (error) {
			return res
				.status(400)
				.json({ error: true, message: error.details[0].message });
		}
		//bcrypt password
		const hashedPass = await bcrypt.hash(password, 10);

		//compare old and new password
		const user = await Customer.findById(id);
		const oldPass = await bcrypt.compare(password, user.password);
		if (oldPass)
			return res.status(400).json({
				error: true,
				message: "New password cannot be the same as your old password",
			});

		//update password
		const data = await Customer.findByIdAndUpdate(
			id,
			{
				$set: { password: hashedPass },
			},
			{ new: true }
		);
		res.status(200).json({
			data: data._id,
			message: `Password is updated`,
		});
	} catch (err) {
		res.status(500).send(err);
	}
};
module.exports = updatePassword;

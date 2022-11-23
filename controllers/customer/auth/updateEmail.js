const Customer = require("../../../models/Customer");
const updateEmailValidation = require("../../../validations/customer/updateEmailValidation");

const updateEmail = async (req, res) => {
	try {
		const { email } = req.body;

		//validation email
		const { error } = updateEmailValidation(email);
		if (error) {
			return res
				.status(400)
				.json({ error: true, message: error.details[0].message });
		}

		//update email
		const data = await Customer.findByIdAndUpdate(
			req.params.id,
			{
				$set: { email: email },
			},
			{
				new: true,
			}
		);
		res.status(200).json({
			data: data._id,
			message: `Email is updated: ${email}`,
		});
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
};
module.exports = updateEmail;

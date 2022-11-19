const Customer = require("../../../models/Customer");
const loginValidation = require("../../../validations/customer/loginValidation");
const generateAccessToken = require("../../../helpers/token/generateToken");

const login = async (req, res) => {
	try {
		//login validation
		const { error } = loginValidation(req.body);
		if (error) {
			return res
				.status(400)
				.json({ error: true, message: error.details[0].message });
		}

		//checking if the email is correct
		const user = await Customer.findOne({ email: req.body.email });
		if (!user) return res.status(400).json("Email or Password is wrong");

		//checking if the password is correct
		const pass = await bcrypt.compare(req.body.password, user.password);
		if (!pass) return res.status(400).json("Email or Password is wrong");

		//token
		const accessToken = await generateAccessToken(user);

		//httpOnly cookie for security
		res.cookie("jwt", accessToken, {
			httpOnly: true,
			secure: true,
			sameSite: "None", //cross-site cookie
			maxAge: 24 * 60 * 60 * 1000,
		}); //maxAge = 1 day

		//response
		res
			.status(200)
			.json({ data: user, token: accessToken, message: "Login Successful." });
	} catch (err) {
		res.status(500).send(err);
	}
};
module.exports = login;

const jwt = require("jsonwebtoken");

const generateAccessToken = async (user) => {
	try {
		const payload = { id: user._id };
		const accessToken = jwt.sign(
			payload,
			process.env.ACCESS_TOKEN_PRIVATE_KEY,
			{ expiresIn: "3d" }
		);
		return Promise.resolve(accessToken);
	} catch (error) {
		return Promise.reject(error);
	}
};

module.exports = generateAccessToken;

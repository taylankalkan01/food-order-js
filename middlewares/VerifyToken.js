const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	try {
		const authHeader =
			req.headers.token || req.header("token") || req.cookies.jwt;
		if (!authHeader?.startsWith("Bearer ")) {
			return res
				.status(401)
				.json({ error: true, message: "Unauthorized, Missing Bearer" });
		}
		const token = authHeader.split(" ")[1];

		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);
		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(500).send(err);
	}
};
module.exports = verifyToken;

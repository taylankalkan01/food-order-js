const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const auth = req.cookies.jwt;

    if (!auth) {
      return res
        .status(403)
        .json({ error: true, message: "Token is missing." });
    }

    const decoded = jwt.verify(auth, process.env.ACCESS_TOKEN_PRIVATE_KEY);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = verifyToken;

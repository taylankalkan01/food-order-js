const logout = async (req, res) => {
  try {
    res.clearCookie("jwt").status(200).json({ message: "Logout Successful." });
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = logout;

const Customer = require("../../../models/Customer");

const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Customer.findByIdAndDelete(id);

    res
      .status(200)
      .json({ data: data, message: "Customer account is deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = deleteAccount;

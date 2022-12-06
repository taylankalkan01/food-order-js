const Restaurant = require("../../../models/Restaurant");
const getAllRestaurants = async (req, res) => {
  try {
    const data = await Restaurant.find();
    res.status(200).json({ data: data, message: "All Restaurant is listed." });
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = getAllRestaurants;

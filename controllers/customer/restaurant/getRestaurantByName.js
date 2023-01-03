const Restaurant = require("../../../models/Restaurant");
const getRestaurantByName = async (req, res) => {
  try {
    // const data = await Restaurant.findOne({ name: req.body.name });
    const data = await Restaurant.find({ name: req.body.name });
    res.status(200).json({ data: data, message: "All Restaurant is listed." });
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = getRestaurantByName;

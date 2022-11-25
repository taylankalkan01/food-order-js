const router = require("express").Router();
const customerControllers = require("../controllers/customer/index");
const verifyToken = require("../middlewares/VerifyToken");

router.post("/auth/customer/login", customerControllers.customerLogin);
router.post("/auth/customer/register", customerControllers.customerRegister);
router.post("/auth/customer/logout", customerControllers.customerLogout);
router.put(
	"/auth/customer/update-email/:id",
	verifyToken,
	customerControllers.customerUpdateEmail
);
router.put(
	"/auth/customer/update-password/:id",
	verifyToken,
	customerControllers.customerUpdatePassword
);
router.delete(
	"/auth/customer/delete",
	customerControllers.customerDeleteAccount
);
router.post("/customer/order", customerControllers.customerCreateOrder);
router.put("/customer/order", customerControllers.customerUpdateOrder);
router.delete("/customer/order", customerControllers.customerDeleteOrder);
router.delete(
	"/customer/order/:id",
	customerControllers.customerDeleteOrderById
);
router.get("/customer/restaurant", customerControllers.getAllRestaurant);
router.get(
	"/customer/restaurant/:name",
	customerControllers.getRestaurantByName
);

module.exports = router;

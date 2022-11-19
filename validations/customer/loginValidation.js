const Joi = require("joi");

const loginValidation = (body) => {
	const schema = Joi.object({
		email: Joi.string().required().email().min(5).max(255),
		password: Joi.string().required().min(5).max(255),
	});
	return schema.validate(body);
};

module.exports = loginValidation;

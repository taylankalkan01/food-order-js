const Joi = require("joi");

const updatePasswordValidation = (body) => {
	const schema = Joi.string().required().min(5).max(120);
	return schema.validate(body);
};

module.exports = updatePasswordValidation;

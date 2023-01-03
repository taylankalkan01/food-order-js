const Joi = require("joi");

const updateEmailValidation = (body) => {
	const schema = Joi.string().email().required().min(5).trim();
	return schema.validate(body);
};

module.exports = updateEmailValidation;

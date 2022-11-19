const Joi = require("joi");

const registerValidation = (body) => {
	const schema = Joi.object({
		email: Joi.string().required().email().min(5).max(120),
		password: Joi.string().required().min(5).max(120),
		fullName: Joi.string().required().min(3),
		address: Joi.string().min(10).max(255),
		phone: Joi.string()
			.trim()
			// .required()
			.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im),
	});
	return schema.validate(body);
};

module.exports = registerValidation;

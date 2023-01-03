const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const registerValidation = (body) => {
	const schema = Joi.object({
		email: Joi.string().required().email().min(5).max(120),
		password: passwordComplexity({
			min: 5,
			max: 250,
			lowerCase: 1,
			upperCase: 1,
			requirementCount: 1,
		}),
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

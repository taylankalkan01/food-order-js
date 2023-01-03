const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const loginValidation = (body) => {
	const schema = Joi.object({
		email: Joi.string().required().email().min(5).max(255),
		password: passwordComplexity({
			min: 5,
			max: 250,
			lowerCase: 1,
			upperCase: 1,
			requirementCount: 1,
		}),
	});
	return schema.validate(body);
};

module.exports = loginValidation;

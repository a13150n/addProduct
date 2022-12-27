const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");


const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	password: { type: String, required: true },
	email: { type: String, required: true },
	place: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label("Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		place: Joi.string().required().label("Place"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
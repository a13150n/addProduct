
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");


const productSchema = new mongoose.Schema({
	pname: { type: String, required: true },
	price: { type: String, required: true },
	category: { type: String, required: true },
});


const Product = mongoose.model("product", productSchema);

const validate = (data) => {
	const schema = Joi.object({
		pname: Joi.string().required().label("Product Name"),
		price: Joi.string().required().label("Price"),
		category: Joi.string().required().label("Category"),
	
	});
	return schema.validate(data);
};

module.exports = { Product, validate };
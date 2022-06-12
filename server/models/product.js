const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");


const productSchema = new mongoose.Schema({
	pname: { type: String, required: true },
	price: { type: Number, required: true },
	quatity: { type: Number, required: true },
	category: { type: String, required: true },
});

productSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const Product = mongoose.model("product", productSchema);

const validate = (data) => {
	const schema = Joi.object({
		pname: Joi.string().required().label("Product Name"),
		price: Joi.integer().required().label("Price"),
		quantity: Joi.integer().required().label("Quantity"),
		category: Joi.string().required().label("Category"),
	
	});
	return schema.validate(data);
};

module.exports = {Product, validate };
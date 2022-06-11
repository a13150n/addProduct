const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	name: {type:String, required:true },
	email: {type:String, required:true },
	password: {type:String, required:true },
	place: {type:String, required:true },
});

userSchema.methods.generateAuthToken = function (){
	const token = jwt.sign({_id:this.id},process.env.JWTPRIVATEKEY,{expireIn:"7d"});
	return token
};

const User = mongoose.model("user",userSchema);

const validate = (data) => {
	const schema = Joi.object({

		name:Joi.string().required().label("name"),
		email:Joi.string().required().label("email"),
		password:Joi.string().required().label("password"),
		place:Joi.string().required().label("place"),
	});
	return schema.validate(data);
};
module.exports = { User, validate};

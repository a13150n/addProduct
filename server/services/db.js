const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/product',{
	useNewUrlParser:true
})

const User = mongoose.model('User',{
	uname:String,
	email:String,
	password:String,
	place:String
})

const Add = mongoose.model('Add',{
	pname:String,
	price:Number,
	quantiy:Number,
	category:String
})

module.exports={
	User,
	Add
}
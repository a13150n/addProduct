const Product = require("../models/product");
exports.addProduct = (req,res) => {
	try {
		const newProduct = new Product({
			pname:req.body.pname,
			price:req.body.price,
			quatity:req.body.quatity,
			category:req.body.category,
		})
		const product= newProduct.save();
		res.status(200).json({success:true,data:todo})

	}catch (err){
		res.status(400).json({success:false,err})

	}
}


const router = require("express").Router();
const { Product, validate } = require("../models/product");


router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await Product.findOne({ pname: req.body.pname });
		
		if (user)
			return res.status(409).send({ message: "product already exist" });

		res.status(201).send({ message: "Product details entered successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error " });
	}
});

module.exports = router;
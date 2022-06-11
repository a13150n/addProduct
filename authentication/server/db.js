const mongoose = require("mongoose");
module.exports = () => {
	const connectionParams ={
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
try{
	mongoose.connect(process.env.DB,connectionParams);
	console.log("connected to database successfully99")
}catch(error){
	console.log("error")
	console.log(" can't connect to database successfully")
}
};
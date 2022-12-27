const express = require("express")
const dataservice = require('./services/dataservice')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express()
app.use(cors({
	origin:'http://localhost:3000'
}))

app.use(express.json())



const appMiddleware = (req,res,next)=>{
	console.log("application specific middleware")
	next()
}
app.use(appMiddleware)


//register api 
app.post('/signup',(req,res)=>{
	dataservice.register(req.body.name,req.body.email,req.body.password,req.body.place)
	.then(result=>{
		res.status(result.statusCode).json(result)
	})
})

//login api 
app.post('/login',(req,res)=>{
	dataservice.login(req.body.email,req.body.password)
	.then(result=>{
	res.status(result.statusCode).json(result)
	})    
})

//add product api 
app.post('/add',(req,res)=>{
	dataservice.add(req.body.pname,req.body.price,req.body.category)
	.then(result=>{
		res.status(result.statusCode).json(result)
	})
})

//add product api 
app.post('/add',(req,res)=>{
	dataservice.add(req.body.pname,req.body.price,req.body.quantity,req.body.category)
	.then(result=>{
		res.status(result.statusCode).json(result)
	})
})


//add product api 
app.get('/view',(req,res)=>{
	dataservice.view()
	.then(result=>{
		res.status(result.statusCode).json(result)
	})
})



app.listen(8080, () =>{
	console.log("server starts at 8080")
})
const jwt = require('jsonwebtoken')
const db = require('./db')

//register

const register = (name,email,password,place)=>{
    return db.User.findOne({email})
    .then(user=>{
      if(user){
        return {
          statusCode:422,
          status:false,
          message:"user already exist !!"
        }  
      }
      else{
        const newUser=new db.User({
          name,
		       email,
          password,
          place
        })
        newUser.save()
        return {
          statusCode:200,
          status:true,
          message:"successfully registered"
        }
      }
    })

  }

  //login

  const login = (email,password)=>{
    return db.User.findOne({email,password})
    
    .then(user=>{
      if(user){
      
      return {
        statusCode:200,
        status:true,
        message:"successfully login",     
      
      }
    }
    else{
      return{
        statusCode:422,
        status:false,
        message:"incorrect password / email id"
        
      }
    }

  })

  }

  const add = (pname,price,category)=>{
    return db.Add.findOne({pname})
    .then(user=>{
      if(user){
        return {
          statusCode:422,
          status:false,
          message:"product already exist !!"
        }  
      }
      else{
        const newAdd=new db.Add({
          pname,
		      price,
          category
        })
        newAdd.save()
        return {
          statusCode:200,
          status:true,
          message:"product successfully added"
        }
      }
    })

  }

  //view

  const view = ()=>{
    return db.Add.find()
    .then(user=>{
      if(user){
        return {
          statusCode:200,
          status:true,
          message:"products found !!",
          data:user
        }  
      }
      else{
        return {
          statusCode:400,
          status:false,
          message:"product unable to get"
        }
      }
    })

  }


  

  module.exports={
	register,
	login,
	add,
  view
}
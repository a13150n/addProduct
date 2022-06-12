import React from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import './Add.css'

function Add() {
  const [datas, setDatas] = useState({
		pname: '',
		price: '',
		quantity: '',
		category: '',
	});
  const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setDatas({ ...datas, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		console.log(datas.pname,datas.price,datas.quantity,datas.category);
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/product";
			const { datas:res } = await axios.post(url, datas);
			navigate("/home");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  return (
    <div>
      <div className="addcontainer">
     
      <div className="addright">
       
          <Link to="/">
						<button type="button" className="addwhite_btn">
							LOGOUT
						</button>
					</Link>
			
				</div>
	
				<div className="addleft">
        
      
					<form className="addform_container" onSubmit={handleSubmit}>
            
						<h1>Add product details</h1>
						<input
							type="text"
							placeholder="Product Name"
							name="pname"
							onChange={handleChange}
							value={datas.pname}
							required
							className="input"
						/>
            	<input
							type="number"
							placeholder="Price"
							name="price"
							onChange={handleChange}
							value={datas.price}
							required
							className="input"
						/>
					
          <input
							type="number"
							placeholder="Quantity"
							name="quantity"
							onChange={handleChange}
							value={datas.quantity}
							required
							className="input"
						/>
            	<input
							type="text"
							placeholder="Category"
							name="category"
							onChange={handleChange}
							value={datas.category}
							required
							className="input"
						/>
					
					
						
						{error && <div className="adderror_msg">{error}</div>}
						<button type="submit" className="addwhite_btn">
							CREATE
						</button>
					</form>
          <div className="addright">
          <Link to="/home">
						<button type="button" className="addwhite_btn">
							GO BACK
						</button>
					</Link>
          <Link to="/view">
						<button type="button" className="addwhite_btn">
							VIEW PRODUCTS
						</button>
					</Link>
          </div>
				</div>
			</div>
		</div>
    
  )
}

export default Add
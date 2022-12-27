import React from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import './Signup.css'

function Signup() {
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
		place: ""
	});

	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/signup";
			const { data: res } = await axios.post(url, data);
			navigate("/");
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
		<div className="signup_container">
			<div className="signup_form_container">
				<div className="right">
					<h1>Welcome Back</h1>
					<Link to="/">
						<button type="button" className="white_btn">
							LOGIN
						</button>
					</Link>
				</div>
				<div className="left">
					<form className="form_container" onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className="input"
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Place"
							name="place"
							onChange={handleChange}
							value={data.place}
							required
							className="input"
						/>
						
						{error && <div className="error_msg">{error}</div>}
						<button type="submit" className="red_btn">
							SIGN IN
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Signup
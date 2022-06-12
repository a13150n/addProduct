import React from 'react'
import { Link,Navigate } from "react-router-dom";
import './Homepage.css'

function Main() {
  return (

	
	<div className="main_container">
			<div className="signup_form_container">
				
				<div className="right1">
					<h1>ADD NEW PRODUCT & DETAILS</h1>
					<Link to="/add">
						<button type="button" className="green_btn1">
							ADD
						</button>
					</Link>
				</div>
				<div className="left1">
				<h1>VIEW ALL PRODUCTS & DETAILS</h1>
					<Link to="/view">
						<button type="button" className="white_btn1">
							VIEW
						</button>
					</Link>
				</div>
			</div>
		</div>
		
  )
}

export default Main
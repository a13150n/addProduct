import React from 'react'
import { Link } from "react-router-dom";
import './View.css'



function View() {
  return (
	<div className='di'>
    <div className='des'>
    <Link to="/add">
						<button type="button" className="addwhite_btn">
							ADD PRODUCTS
						</button>
					</Link>
     <Link to="/">
						<button type="button" className="addwhite_btn">
							LOGOUT
						</button>
					</Link>
          </div>
          <div className='de' >
          
          <h1>PRODUCT LIST</h1>

          </div>
  </div>
  )
}

export default View
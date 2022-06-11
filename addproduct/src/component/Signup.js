import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Signup() {
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
		place: "",
	});

  return (
	<div>Signup</div>
  )
}

export default Signup
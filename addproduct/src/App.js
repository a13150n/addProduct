import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./component/Main";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Nav from './component/Nav';
function App() {
	const user = localStorage.getItem("token");
	return (
	  <div className="App">
		<Nav />
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
		
	  </div>
	  
	);
  }
  
  export default App;
  


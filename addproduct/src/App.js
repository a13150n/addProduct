import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./component/Main";
import Signup from "./component/Signup";
import Homepage from "./component/Homepage"
import Nav from './component/Nav';
import Add from "./component/Add";
import View from "./component/View";
function App() {
	const user = localStorage.getItem("token");
	return (
	  <div className="App">
		<Nav />
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/add" exact element={<Add />} />
			<Route path="/view" exact element={<View />} />
			<Route path="/home" exact element={<Homepage />} />
			<Route path="/" element={<Navigate replace to="/" />} />
		</Routes>
		
	  </div>
	  
	);
  }
  
  export default App;
  


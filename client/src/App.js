import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/common/navbar/navbar";
import Registration from "./components/login/registration/signup";
import Login from "./components/login/Login/signin";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/signup" element={<Registration />} />
				<Route path="/signin" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;

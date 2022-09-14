import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/common/navbar/navbar";
import Registration from "./components/login/registration/signup";
import Login from "./components/login/Login/signin";
import ProductList from "./components/productList/product";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/signup" element={<Registration />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/products" element={<ProductList />} />
				<Route path="/productDetail" />
			</Routes>
		</div>
	);
}

export default App;

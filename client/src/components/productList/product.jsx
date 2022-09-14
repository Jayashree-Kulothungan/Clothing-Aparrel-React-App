import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../productList/product.scss";
const theme = createTheme({
	palette: {
		background: {
			default: "#ffffe6",
		},
	},
});
export default function ProductList() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<div className="jumbotron">
					<h1 className="display-4">Fashion never goes out of style!</h1>
					<p className="lead">Featuring the newly launched spring collection</p>
				</div>
			</ThemeProvider>
		</>
	);
}

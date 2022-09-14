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
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style component for
						calling extra attention to featured content or information.
					</p>
				</div>
			</ThemeProvider>
		</>
	);
}

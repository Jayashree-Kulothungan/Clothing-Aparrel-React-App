import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
export default function SignUp() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [data, setData] = useState({
		name: "",
		phone: "",
		email: "",
		password: "",
	});
	const handleSubmit = (event) => {
		event.preventDefault();
		errorHandling();
		if (error.length === 0) {
			setData({
				name: name,
				phone: phone,
				email: email,
				password: password,
			});
			console.log(data);
		} else {
			console.log(error);
		}
	};

	const errorHandling = () => {
		let errors = {};

		if (name === "") {
			errors.name = "Name is Required";
		} else if (!/^[A-Za-z]+$/.test(name)) {
			errors.name = "Name can only have alphabets";
		}

		if (phone === "") {
			errors.phone = "Phone number is Required";
		} else if (!/^[0-9]+$/.test(phone)) {
			errors.phone = "Phone number can only be numeric";
		} else if (phone.length != 10) {
			errors.phone = "Phone number is invalid";
		}

		if (email === "") {
			errors.email = "Email is Required ";
		}
		if (password === "") {
			errors.password = "Password is required";
		} else if (password.length < 8) {
			errors.password = "password length is less then 8";
		} else if (!/^[ A-Za-z0-9_@./#&+-]*$/.test(password)) {
			errors.password = "Only special characters and alphanumeric is allowed";
		}
		setError(errors);
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography component="h1" variant="h5">
						Register
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="fullName"
									required
									fullWidth
									id="fullName"
									label="Full Name "
									autoFocus
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
								<p style={{ color: "red" }}>{error.name}</p>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="phone"
									label="Phone"
									name="phone"
									autoComplete="phone"
									value={phone}
									onChange={(e) => {
										setPhone(e.target.value);
									}}
								/>
								<p style={{ color: "red" }}>{error.phone}</p>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
								<p style={{ color: "red" }}>{error.email}</p>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
									value={password}
									onChange={(e) => {
										setPassword(e.target.value);
									}}
								/>
								<p style={{ color: "red" }}>{error.password}</p>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Register
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="/signin" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

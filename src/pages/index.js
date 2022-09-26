import { Avatar, Stack, Typography } from "@mui/material";
import * as React from "react";
import Layout from "../components/Layout";
import AvatarImage from "../images/avatar.png";
import "./index.css";

const IndexPage = () => {
	return (
		<Layout pageTitle="Home">
			<Stack id="index-text" direction="column" spacing={2}>
				<Typography variant="h1" align="center" gutterBottom>
					Informatics and Computer Engineering Student
				</Typography>
				<Typography variant="h2" align="center" gutterBottom>
					Computer lover who is studing at FEUP mostly interested in
					Linux, Backend and Process Automation
				</Typography>
			</Stack>
			<Avatar
				alt="Xavier Pisco"
				id="avatar-image"
				sx={{ width: 300, height: 300 }}
				src={AvatarImage}
			/>
		</Layout>
	);
};

export default IndexPage;

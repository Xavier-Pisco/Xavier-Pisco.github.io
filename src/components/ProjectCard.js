import React from "react";
import {
	Card,
	CardContent,
	CardMedia,
	Stack,
	Link,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Chip,
	Divider,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./projectCard.css";

function ProjectCard({ project }) {
	return (
		<Card sx={{ display: "flex" }} style={{ width: "100%" }}>
			<CardMedia>
				<GatsbyImage
					image={getImage(project.image)}
					alt={project.title}
					style={{ width: 400, height: 400 }}
				/>
			</CardMedia>
			<CardContent style={{ width: "100%" }}>
				<Stack spacing={2}>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<div className="project-title">
							<Link
								href={project.github}
								underline="none"
								variant="h3"
								target="_blank"
							>
								{project.title}
							</Link>
							<Typography variant="h3">-</Typography>
							<Typography variant="h3">
								{project.summary}
							</Typography>
						</div>
						<Stack
							direction="row"
							style={{ width: "fit-content", gap: "0.5rem" }}
						>
							<Divider orientation="vertical" flexItem />
							<Stack alignItems="flex-end">
								<Typography
									variant="body2"
									style={{ whiteSpace: "nowrap" }}
								>
									{project.initialDate} - {project.endDate}
								</Typography>
								<Typography variant="body2">
									{project.group > 1
										? `Team of ${project.group} people`
										: "Personal project"}
								</Typography>
							</Stack>
						</Stack>
					</Stack>
					<List spacing={2}>
						{project.topics.map((topic) => (
							<ListItem
								disableGutters
								key={topic}
								alignItems="center"
							>
								<ListItemIcon sx={{ minWidth: 20 }}>
									<FiberManualRecordIcon
										sx={{ fontSize: 12 }}
										color="primary"
									/>
								</ListItemIcon>
								<ListItemText>
									<Typography
										className="project-information"
										dangerouslySetInnerHTML={{
											__html: topic,
										}}
									/>
								</ListItemText>
							</ListItem>
						))}
					</List>
					<Stack
						direction="row"
						spacing={2}
						justifyContent="flex-start"
						alignItems="center"
						sx={{ flexWrap: "wrap" }}
					>
						<Typography variant="h6">Technologies </Typography>
						{project.technologies.map((technology) => (
							<Chip
								label={technology}
								key={technology}
								variant="outlined"
								color="primary"
							/>
						))}
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
}

export default ProjectCard;

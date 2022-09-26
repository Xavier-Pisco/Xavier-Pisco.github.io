import { graphql } from "gatsby";
import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import Layout from "../components/Layout";

function Projects({ data }) {
	const projects = data.allProjectsJson.edges.map(({ node }) => node);
	projects.sort(({ position: p1 }, { position: p2 }) => {
		return p1 - p2;
	});

	return (
		<Layout pageTitle="Projects">
			<Typography variant="h1">Projects</Typography>
			{projects.map((project) => (
				<ProjectCard
					key={project.title}
					project={project}
					context={{ image: "projects/" + project.image }}
				/>
			))}
		</Layout>
	);
}

export default Projects;

export const projectsQuery = graphql`
	query projects {
		allProjectsJson {
			edges {
				node {
					endDate
					github
					group
					image {
						childImageSharp {
							gatsbyImageData(width: 400, height: 400)
						}
					}
					initialDate
					summary
					tags
					title
					technologies
					topics
					position
				}
			}
		}
	}
`;

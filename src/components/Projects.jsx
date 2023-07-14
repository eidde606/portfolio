import { Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import myreads from "../images/myreads.png";
import Card from "./Card";
import DashboardScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "MyReads",
    description:
      "MyReads is an app that tracks the books you are currently reading, want to read, and have read.",
    getImageSrc: () => myreads,
    to: "/project/react-space",
  },
];

const ProjectCards = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
      {projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.getImageSrc()}
          websiteUrl="https://golden-seahorse-850414.netlify.app"
        />
      ))}
    </SimpleGrid>
  );
};

const Projects = () => {
  return (
    <DashboardScreenSection backgroundColor="lightgray" isDarkBackground p={20}>
      <Heading as="h1" id="projects-section" color="yellow">
        Featured Projects
      </Heading>
      <ProjectCards />
    </DashboardScreenSection>
  );
};

export default Projects;

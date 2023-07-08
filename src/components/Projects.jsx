import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import myreads from "../images/myreads.png";
import Card from "./Card";
import DashboardScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "MyReads",
    description:
      "MyReads it is an app that tracks the books you are currently reading," +
      " want to read and have read.",
    getImageSrc: () => myreads,
    to: "/project/react-space",
  },
];

const ProjectCards = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(2, minmax(0, 1fr))"
      gridGap={8}
    >
      {projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.getImageSrc()}
          websiteUrl="https://funny-gumption-52823b.netlify.app"
        />
      ))}
    </Box>
  );
};

const Projects = () => {
  return (
    <DashboardScreenSection
      backgroundColor="lightgray"
      isDarkBackground
      p={20}
      // alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" color="yellow">
        Featured Projects
      </Heading>
      <ProjectCards />
    </DashboardScreenSection>
  );
};

export default Projects;

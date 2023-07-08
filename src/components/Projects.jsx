import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import Card from "./Card";
import DashboardScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "React Hello",
    description:
      "I built a modern and stylish hair salon website using React. The website features a sleek design with easy navigation and showcases the salon's services, prices, and booking options.",
    getImageSrc: () => photo1,
    to: "/project/react-space",
  },
  {
    title: "React Space",
    description:
      "I built a modern and stylish hair salon website using React. The website features a sleek design with easy navigation and showcases the salon's services, prices, and booking options.",
    getImageSrc: () => photo2,
    to: "/project/react-space",
  },
  {
    title: "React Code",
    description:
      "I built a modern and stylish hair salon website using React. The website features a sleek design with easy navigation and showcases the salon's services, prices, and booking options.",
    getImageSrc: () => photo3,
    to: "/project/react-space",
  },
  {
    title: "React Project",
    description:
      "I built a modern and stylish hair salon website using React. The website features a sleek design with easy navigation and showcases the salon's services, prices, and booking options.",
    getImageSrc: () => photo4,
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
      alignItems="flex-start"
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

import { Avatar, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import DashboardScreenSection from "./FullScreenSection";
import eddie2 from "../images/eddie2.png";
import Footer from "./Footer";

const greeting = "Hello, I am Eddie!";
const bio1 = "A frontend developer";
const bio2 = "Specialized in React";

const DashBoard = () => {
  return (
    <>
      <DashboardScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365"
      >
        <VStack spacing={4}>
          <Avatar size="2xl" name="Eddie" src={eddie2} />
          <Heading size="lg" color="white">
            {greeting}
          </Heading>
          <Heading size="md" color="white">
            {bio1}
          </Heading>
          <Heading size="md" color="white">
            {bio2}
          </Heading>
        </VStack>
      </DashboardScreenSection>
      <Footer />
    </>
  );
};

export default DashBoard;

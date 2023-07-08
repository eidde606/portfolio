import {
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ title, description, imageSrc, websiteUrl }) => {
  const handleButtonClick = () => {
    window.open(websiteUrl, "_blank");
  };
  return (
    <VStack
      borderWidth="0px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      maxW="sm"
      alignItems="flex-start"
      bgColor="white"
      p={2}
    >
      <Image src={imageSrc} alt={title} borderRadius="lg" width="384px" />
      <VStack alignItems="flex-start" spacing={2} bgColor="white">
        <Heading size="md" color="black">
          {title}
        </Heading>
        <Text color="gray">{description}</Text>
        <Divider />
        <HStack>
          <Button
            rightIcon={<FontAwesomeIcon icon={faArrowRight} color="black" />}
            colorScheme="teal"
            variant="outline"
            onClick={handleButtonClick}
          >
            Visit Website
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;

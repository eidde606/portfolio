import { Divider, VStack, Button } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Card = ({ title, description, imageSrc }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleButtonClick = () => {
    setShowDescription(!showDescription);
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
            {showDescription ? "Hide" : "Read More"}
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;

import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b" position="relative" zIndex="1">
      <footer>
        <Flex
          margin="0 auto"
          padding={5}
          px={12}
          color="white"
          justifyContent="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Eddie • © 2023 </p>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;

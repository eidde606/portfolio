import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Contacts = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form submission delay
    setIsSubmitting(true);
    setSubmissionError(null);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Perform form submission logic here
    console.log("Email:", email);
    console.log("Message:", message);

    // Simulate form submission error
    const shouldFailSubmission = Math.random() < 0.3;
    if (shouldFailSubmission) {
      setSubmissionError(
        "An error occurred while submitting the form. Please try again."
      );
    } else {
      // Reset the form
      setEmail("");
      setMessage("");
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <h1>Message Me</h1>
      <Box
        maxW={{ base: "100%", sm: "400px", md: "600px" }}
        mx="auto"
        p={4}
        bg="white"
        boxShadow="lg"
        rounded="md"
        mt="250px"
      >
        <form onSubmit={handleSubmit}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="message" mt={4} isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
            />
          </FormControl>

          {submissionError && (
            <FormErrorMessage mt={2} color="red.500">
              {submissionError}
            </FormErrorMessage>
          )}

          <Button
            mt={4}
            colorScheme="blue"
            type="submit"
            isLoading={isSubmitting}
            loadingText="Submitting..."
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Contacts;

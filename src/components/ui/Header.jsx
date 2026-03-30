import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { ColorModeToggle } from "./ColorModeToggle";

export const Header = () => {
  return (
    <Box
      position="sticky"
      top={0}
      zIndex="sticky"
      bg="white"
      boxShadow="sm"
      px={6}
      py={4}
    >
      <Flex justify="space-between" align="center">
        <Heading size="md">My Portfolio</Heading>

        <Flex gap={3}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>

          <ColorModeToggle />
        </Flex>
      </Flex>
    </Box>
  );
};

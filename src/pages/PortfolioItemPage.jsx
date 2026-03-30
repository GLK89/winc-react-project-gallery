import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

export const PortfolioItemPage = ({ item, setSelectedItem }) => {
  return (
    <Box p={6}>
      <Stack spacing={6} maxW="4xl" mx="auto">
        <Button alignSelf="start" onClick={() => setSelectedItem(null)}>
          Back to overview
        </Button>

        <Image src={item.imageUrl} alt={item.title} borderRadius="xl" />

        <Heading>{item.title}</Heading>

        <Text>{item.description}</Text>

        <Flex wrap="wrap" gap={2}>
          {item.skills.map((skill) => (
            <Box
              key={skill}
              px={3}
              py={1}
              borderRadius="md"
              bg="blue.100"
              fontSize="sm"
            >
              {skill}
            </Box>
          ))}
        </Flex>
      </Stack>
    </Box>
  );
};

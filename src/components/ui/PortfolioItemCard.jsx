import { Box, Image, Heading, Text, Stack, Flex } from "@chakra-ui/react";

export const PortfolioItemCard = ({ item, setSelectedItem }) => {
  return (
    <Box
      maxW="sm"
      p={4}
      borderRadius="xl"
      boxShadow="md"
      borderWidth="1px"
      bg="white"
      cursor="pointer"
      onClick={() => setSelectedItem(item)}
      _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
      transition="0.2s"
    >
      <Stack gap={4}>
        <Image src={item.imageUrl} alt={item.title} borderRadius="lg" />

        <Heading size="md">{item.title}</Heading>

        <Text>{item.summary}</Text>

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

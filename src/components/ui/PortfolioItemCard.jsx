import { Box, Image, Heading, Text, Stack, Flex } from "@chakra-ui/react";

export const PortfolioItemCard = ({ item, setSelectedItem }) => {
  return (
    <Box
      maxW="sm"
      p={4}
      borderRadius="xl"
      boxShadow={{ _light: "md", _dark: "lg" }}
      borderWidth="1px"
      borderColor={{ _light: "gray.200", _dark: "gray.600" }}
      bg={{ _light: "white", _dark: "gray.800" }}
      cursor="pointer"
      onClick={() => setSelectedItem(item)}
      _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
      transition="0.2s"
    >
      <Stack gap={4}>
        <Image src={item.imageUrl} alt={item.title} borderRadius="lg" />

        <Heading size="md" color={{ _light: "black", _dark: "white" }}>
          {item.title}
        </Heading>

        <Text color={{ _light: "gray.700", _dark: "gray.200" }}>
          {item.summary}
        </Text>

        <Flex wrap="wrap" gap={2}>
          {item.skills.map((skill) => (
            <Box
              key={skill}
              px={3}
              py={1}
              borderRadius="md"
              bg={{ _light: "blue.100", _dark: "blue.700" }}
              color={{ _light: "black", _dark: "white" }}
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

import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { PortfolioItemCard } from "../components/ui/PortfolioItemCard";

export const PortfolioPage = ({ portfolioItems, setSelectedItem }) => {
  return (
    <Stack
      p={6}
      spacing={6}
      bg={{ _light: "gray.50", _dark: "gray.900" }}
      minH="100vh"
    >
      <Heading size="lg" color={{ _light: "black", _dark: "white" }}>
        Portfolio Page
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
        {portfolioItems.map((item) => (
          <PortfolioItemCard
            key={item.id}
            item={item}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

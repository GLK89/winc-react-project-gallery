import { portfolioItems } from "../utils/data";
import { PortfolioItemCard } from "../components/ui/PortfolioItemCard";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";

export const PortfolioPage = () => {
  return (
    <Stack p={6} spacing={6}>
      <Heading size="lg">Portfolio Page</Heading>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
        {portfolioItems.map((item) => (
          <PortfolioItemCard key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

import { useState } from "react";
import { portfolioItems } from "./utils/data";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { Header } from "./components/ui/Header";
import { Box } from "@chakra-ui/react";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Header />
      <Box pt={4}>
        {selectedItem ? (
          <PortfolioItemPage
            item={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        ) : (
          <PortfolioPage
            portfolioItems={portfolioItems}
            setSelectedItem={setSelectedItem}
          />
        )}
      </Box>
    </>
  );
};

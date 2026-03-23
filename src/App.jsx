import { useState } from "react";
import { portfolioItems } from "./utils/data";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";
import { PortfolioPage } from "./pages/PortfolioPage";

export const App = () => {
  const [selectedItem] = useState(portfolioItems[0]);

  return (
    <>
      {selectedItem ? (
        <PortfolioItemPage item={selectedItem} />
      ) : (
        <PortfolioPage />
      )}
    </>
  );
};

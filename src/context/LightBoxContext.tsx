import * as React from "react";

const LightBoxContext = React.createContext({
  currentLightBoxId: "",
  setCurrentLightBoxId: (value: string): void => {},
  portfolioFilter: "All",
  setPortfolioFilter: (value: string): void => {},
});

export default LightBoxContext;

import * as React from "react";
import { LIGHTBOX_ID, PORTFOLIO_CATEGORY } from "../data/constants";

const LightBoxContext = React.createContext({
  currentLightBoxId: LIGHTBOX_ID.initial,
  setCurrentLightBoxId: (value: string): void => {},
  portfolioFilter: PORTFOLIO_CATEGORY.All,
  setPortfolioFilter: (value: string): void => {},
});

export default LightBoxContext;

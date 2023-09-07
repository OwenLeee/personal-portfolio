import * as React from "react";

const LightBoxContext = React.createContext({
  currentLightBoxId: "",
  setCurrentLightBoxId: (value: string): void => {},
});

export default LightBoxContext;

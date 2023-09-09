import { useState } from "react";
import { LightBoxContext } from "./context";
import { HomePage } from "./pages";

function App() {
  const [currentLightBoxId, setCurrentLightBoxId] = useState<string>("");

  return (
    <LightBoxContext.Provider
      value={{ currentLightBoxId, setCurrentLightBoxId }}
    >
      <HomePage />
    </LightBoxContext.Provider>
  );
}

export default App;

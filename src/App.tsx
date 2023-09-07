import { useState } from "react";
import NavBar from "./components/Navbar";
import SocialMediaBar from "./components/SocialMediaBar";
import { LightBoxContext } from "./context";
import LandingLayout from "./layouts/LandingLayout";

function App() {
  const [currentLightBoxId, setCurrentLightBoxId] = useState<string>("");

  return (
    <LightBoxContext.Provider
      value={{ currentLightBoxId, setCurrentLightBoxId }}
    >
      <LandingLayout
        navbar={<NavBar />}
        main={{
          name: "Owen Lee",
          titles: ["Software Developer", "Full-Stack Developer"],
        }}
        socialMedia={<SocialMediaBar />}
      />
    </LightBoxContext.Provider>
  );
}

export default App;

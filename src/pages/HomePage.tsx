import { useMemo, useState } from "react";
import { AboutMePage, PortfolioPage, ResumePage } from ".";
import { Navbar, SocialMediaBar } from "../components";
import { LightBoxContext } from "../context";
import { LandingLayout } from "../layouts";

interface HomePageProps {}
const HomePage: React.FC<HomePageProps> = () => {
  const [currentLightBoxId, setCurrentLightBoxId] = useState<string>("");
  const [portfolioFilter, setPortfolioFilter] = useState<string>("All");

  const LightBoxSharedValue = useMemo(() => {
    return {
      currentLightBoxId,
      setCurrentLightBoxId,
      portfolioFilter,
      setPortfolioFilter,
    };
  }, [currentLightBoxId, portfolioFilter]);

  return (
    <LightBoxContext.Provider value={LightBoxSharedValue}>
      <LandingLayout
        navbar={<Navbar />}
        video="bg-video.mp4"
        main={{
          name: "Owen Lee",
          titles: ["Software Developer", "Full-Stack Developer"],
        }}
        socialMedia={<SocialMediaBar />}
        lightBoxes={[AboutMePage, ResumePage, PortfolioPage]}
      />
    </LightBoxContext.Provider>
  );
};
export default HomePage;

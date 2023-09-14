import { useMemo, useState } from "react";
import { AboutMePage, PortfolioPage, ResumePage } from ".";
import { Navbar, SocialMediaBar } from "../components";
import { LightBoxContext } from "../context";
import { LandingLayout } from "../layouts";
import { landing } from "../data/contents";
import { LIGHTBOX_ID, PORTFOLIO_CATEGORY } from "../data/constants";

interface HomePageProps {}
const HomePage: React.FC<HomePageProps> = () => {
  const { bgVideo, myName, titles } = landing;

  const [currentLightBoxId, setCurrentLightBoxId] = useState<string>(
    LIGHTBOX_ID.initial
  );
  const [portfolioFilter, setPortfolioFilter] = useState<string>(
    PORTFOLIO_CATEGORY.All
  );

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
        video={bgVideo}
        main={{
          name: myName,
          titles,
        }}
        socialMedia={<SocialMediaBar />}
        lightBoxes={[AboutMePage, ResumePage, PortfolioPage]}
      />
    </LightBoxContext.Provider>
  );
};
export default HomePage;

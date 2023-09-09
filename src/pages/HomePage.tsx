import { AboutMePage, PortfolioPage, ResumePage } from ".";
import { Navbar, SocialMediaBar } from "../components";
import { LandingLayout } from "../layouts";

interface HomePageProps {}
const HomePage: React.FC<HomePageProps> = () => {
  return (
    <LandingLayout
      navbar={<Navbar />}
      main={{
        name: "Owen Lee",
        titles: ["Software Developer", "Full-Stack Developer"],
      }}
      socialMedia={<SocialMediaBar />}
      lightBoxes={[AboutMePage, ResumePage, PortfolioPage]}
    />
  );
};
export default HomePage;

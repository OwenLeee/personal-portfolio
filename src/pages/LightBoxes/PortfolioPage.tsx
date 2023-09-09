import { LightBoxLayout } from "../../layouts";

interface PortfolioPageProps {}
const PortfolioPage: React.FC<PortfolioPageProps> = () => {
  return (
    <LightBoxLayout
      lightBoxId="Portfolio"
      section="Portfolio"
      sectionDescription="Showcasing some of my best work"
    >
      <div className="photo"></div>
    </LightBoxLayout>
  );
};
export default PortfolioPage;

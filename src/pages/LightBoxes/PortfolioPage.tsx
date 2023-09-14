import { useContext } from "react";
import { PortfolioCard, PortfolioFilter } from "../../components";
import { LightBoxContext } from "../../context";
import { LightBoxLayout } from "../../layouts";
import { portfolio } from "../../data/contents";
import { PORTFOLIO_CATEGORY } from "../../data/constants";

interface PortfolioPageProps {}
const PortfolioPage: React.FC<PortfolioPageProps> = () => {
  const { portfolioFilter } = useContext(LightBoxContext);

  return (
    <LightBoxLayout
      lightBoxId="Portfolio"
      section="Portfolio"
      sectionDescription="Showcasing some of my best work"
    >
      <div className="portfolio-section single-section">
        <div className="row">
          <div className="col-12">
            <PortfolioFilter items={[...Object.values(PORTFOLIO_CATEGORY)]} />
          </div>
        </div>

        <div className="row portfolio-grid">
          <div className="col-12 col-sm-6 col-lg-4 single-portfolio-item flex flex-wrap">
            {portfolio?.length &&
              portfolio
                .filter((value) => {
                  if (PORTFOLIO_CATEGORY.All === portfolioFilter) return true;
                  return value.category === portfolioFilter;
                })
                .map((data, index) => (
                  <PortfolioCard {...data} key={`${data.title}-${index}`} />
                ))}
          </div>
        </div>
      </div>
    </LightBoxLayout>
  );
};
export default PortfolioPage;

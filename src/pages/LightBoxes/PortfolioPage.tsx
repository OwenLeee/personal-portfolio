import { useContext } from "react";
import { PortfolioCard, PortfolioFilter } from "../../components";
import { PortfolioCardProps } from "../../components/Portfolio/PortfolioCard";
import { LightBoxContext } from "../../context";
import { LightBoxLayout } from "../../layouts";
import { tagsMap } from "../../data/portfolio";

const {
  react,
  html,
  css,
  nodejs,
  express,
  socketio,
  postgresql,
  vanillaJS,
  fullstack,
  aws,
  scss,
  typescript,
  tailwindCSS,
  githubActions,
  python,
} = tagsMap;

const PortfolioData: PortfolioCardProps[] = [
  {
    title: "Rental Apartment App",
    link: "https://github.com/OwenLeee/rental-apartment-app",
    img: "bbr-p1.png",
    category: "Side Projects",
    tags: [
      fullstack,
      aws,
      typescript,
      nodejs,
      react,
      express,
      postgresql,
      scss,
    ],
  },
  {
    title: "Voice Dating App",
    link: "https://github.com/OwenLeee/voice-dating-app",
    img: "sp-p1.png",
    category: "Side Projects",
    tags: [
      fullstack,
      aws,
      typescript,
      socketio,
      nodejs,
      html,
      css,
      vanillaJS,
      express,
      postgresql,
    ],
  },
  {
    title: "Personal Website",
    link: "https://github.com/OwenLeee/personal-portfolio",
    img: "sp-p1.png",
    category: "Side Projects",
    tags: [react, tailwindCSS, aws, githubActions],
  },
  {
    title: "Lyft Backend Engineering",
    link: "https://github.com/OwenLeee/forage-lyft-backend-engineering",
    img: "lyft.png",
    category: "Forage Virtual Work Experience",
    tags: [python],
  },
];

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
            <PortfolioFilter
              items={["All", "Side Projects", "Forage Virtual Work Experience"]}
            />
          </div>
        </div>

        <div className="row portfolio-grid">
          <div className="col-12 col-sm-6 col-lg-4 single-portfolio-item flex flex-wrap">
            {PortfolioData?.length &&
              PortfolioData.filter((value) => {
                if (portfolioFilter === "All") return true;
                return value.category === portfolioFilter;
              }).map((data, index) => (
                <PortfolioCard {...data} key={`${data.title}-${index}`} />
              ))}
          </div>
        </div>
      </div>
    </LightBoxLayout>
  );
};
export default PortfolioPage;

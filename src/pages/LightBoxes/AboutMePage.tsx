import { LightBoxLayout } from "../../layouts";

interface AboutMePageProps {}
const AboutMePage: React.FC<AboutMePageProps> = () => {
  return (
    <LightBoxLayout
      lightBoxId="About"
      section="About Me"
      sectionDescription="Get to know me"
    >
      <div className="photo"></div>
    </LightBoxLayout>
  );
};
export default AboutMePage;

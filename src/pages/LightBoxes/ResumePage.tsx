import { LightBoxLayout } from "../../layouts";

interface ResumePageProps {}
const ResumePage: React.FC<ResumePageProps> = () => {
  return (
    <LightBoxLayout
      lightBoxId="Resume"
      section="Resume"
      sectionDescription="Check out my Resume"
    >
      <div className="photo"></div>
    </LightBoxLayout>
  );
};
export default ResumePage;

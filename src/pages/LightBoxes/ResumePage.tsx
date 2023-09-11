import { SectionHeader, Resume, Skills } from "../../components";
import { LightBoxLayout } from "../../layouts";

interface ResumePageProps {}
const ResumePage: React.FC<ResumePageProps> = () => {
  return (
    <LightBoxLayout
      lightBoxId="Resume"
      section="Resume"
      sectionDescription="Check out my Resume"
    >
      <div className="resume-section single-section">
        <div className="row">
          <Resume
            heading="Education"
            items={[
              {
                title: "Computer Science",
                details: "Cambridge University / 2004 - 2007",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
              },
              {
                title: "Bachelor Degree",
                details: "University of Tokyo / 2008 - 2010",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
              },
              {
                title: "Master Degree",
                details: "Harvard University / 2012 - 2015",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
              },
            ]}
          />
          <Resume
            heading="Experience"
            items={[
              {
                title: "Computer Science",
                details: "Cambridge University / 2004 - 2007",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
              },
              {
                title: "Bachelor Degree",
                details: "University of Tokyo / 2008 - 2010",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
              },
              {
                title: "Master Degree",
                details: "Harvard University / 2012 - 2015",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
              },
            ]}
          />
        </div>
      </div>
      <div className="skills-section single-section">
        <div className="row">
          <div className="col-12">
            <SectionHeader
              section="My Skills"
              sectionDescription="My level of knowledge in some tools"
              isHeading={false}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 md:col-6">
            <Skills
              skills={[
                { skill: "HTML/CSS", percentage: 95 },
                { skill: "Web Design", percentage: 80 },
                { skill: "JavaScript", percentage: 90 },
              ]}
            />
          </div>
          <div className="col-12 md:col-6">
            <Skills
              skills={[
                { skill: "React JS", percentage: 90 },
                { skill: "Express.js", percentage: 95 },
                { skill: "TypeScript", percentage: 80 },
              ]}
            />
          </div>
        </div>
      </div>
    </LightBoxLayout>
  );
};
export default ResumePage;

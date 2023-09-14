import { SectionHeader, Resume, Skills } from "../../components";
import { certificates, education, professionals, skills } from "../../data/contents";
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
          <div className="col-12 lg:col-6">
            <Resume
              heading={professionals.heading}
              items={professionals.items}
            />
          </div>
          <div className="col-12 lg:col-6">
            <div className="mt-[60px] lg:mt-[0px] lg:mb-4">
              <Resume
                heading={certificates.heading}
                items={certificates.items}
              />
            </div>
            <Resume heading={education.heading} items={education.items} />
          </div>
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
            <Skills skills={[skills.html_css, skills.js_ts, skills.java]} />
          </div>
          <div className="col-12 md:col-6">
            <Skills skills={[skills.react, skills.vue, skills.tailwind]} />
          </div>
          <div className="col-12 md:col-6">
            <Skills
              skills={[skills.nodejs, skills.expressjs, skills.spring_boot]}
            />
          </div>
          <div className="col-12 md:col-6">
            <Skills skills={[skills.sql, skills.python, skills.c_sharp]} />
          </div>
          <div className="col-12 md:col-6">
            <Skills skills={[skills.aws, skills.restful_api, skills.graphql]} />
          </div>
        </div>
      </div>
    </LightBoxLayout>
  );
};
export default ResumePage;

import { LightBoxLayout } from "../../layouts";
import icon from "../../assets/photo-owenlee.jpg";
import { SocialMediaBar } from "../../components";
import { about } from "../../data/contents";

interface ContentSingleInfoProps {
  label: string;
  value: string | number;
  tag?: "p" | "a";
  href?: string;
}
const ContentSingleInfo: React.FC<ContentSingleInfoProps> = ({
  label,
  value,
  tag = "p",
  href = "",
}) => {
  const ValueTag = (tag: "p" | "a", value: string | number, href: string) => {
    switch (tag) {
      case "a":
        return (
          <a href={href} className="text-primary">
            {value}
          </a>
        );
      case "p":
      default:
        return <p>{value}</p>;
    }
  };

  return (
    <div className="col-12 md:col-6 single-info">
      <span>{label}:</span>
      {ValueTag(tag, value, href)}
    </div>
  );
};

interface AboutMePageProps {}
const AboutMePage: React.FC<AboutMePageProps> = () => {
  const { funFacts, resumePath, resumeName, name, email, location, from } =
    about;

  const { question, answer } = funFacts[0];

  return (
    <LightBoxLayout
      lightBoxId="About"
      section="About Me"
      sectionDescription="Get to know me"
    >
      <div className="info-section">
        <div className="row">
          {/* picture part */}
          <div className="col-12 lg:basis-5/12">
            <img src={icon} className="content-img" alt="Owen Lee" />
          </div>
          {/* content part */}
          <div className="col-12 lg:basis-7/12">
            <h2 className="content-subtitle">{question}</h2>
            <h6 className="content-title">{answer[0]}</h6>
            <div className="content-description">
              <p className="text-left">
                {answer[1]}
                <b className="underline decoration-primary-light">
                  {answer[2]}
                </b>
                {answer[3]}
                <b className="underline decoration-primary-light">
                  {answer[4]}
                </b>
                {answer[5]}
              </p>
            </div>
            <div className="content-info">
              <div className="row">
                <ContentSingleInfo label={"Name"} value={name} />
                <ContentSingleInfo
                  label={"Email"}
                  value={email}
                  tag={"a"}
                  href={`mailto: ${email}`}
                />
              </div>
              <div className="row">
                <ContentSingleInfo label={"Location"} value={location} />
                <ContentSingleInfo label={"From"} value={from} />
              </div>
            </div>
            <div className="content-ref block sm:flex sm:items-center ">
              <a
                href={resumePath}
                download={resumeName}
                className="btn download-btn mr-[23px] mb-[27px] sm:mb-0 text-sm text-white"
              >
                Download CV
              </a>
              <div className="content-social-media">
                <SocialMediaBar direction="h" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-section"></div>
    </LightBoxLayout>
  );
};
export default AboutMePage;

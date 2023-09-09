import { LightBoxLayout } from "../../layouts";
import icon from "../../assets/photo-owenlee.jpg";
import { SocialMediaBar } from "../../components";

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
  return (
    <LightBoxLayout
      lightBoxId="About"
      section="About Me"
      sectionDescription="Get to know me"
    >
      <div className="info-section">
        <div className="row">
          {/* picture part */}
          <div className="col-12">
            <img
              src={icon}
              className="rounded-full h-[200px] w-[200px] md:h-[250px] md:w-[250px] object-cover object-top mx-auto mb-10"
              alt="Owen Lee"
            />
          </div>
          {/* content part */}
          <div className="col-12">
            <h2 className="content-subtitle">Who am i?</h2>
            <h6 className="content-title">
              I'm Owen Lee, a software developer and full-stack developer
            </h6>
            <div className="content-description">
              <p>
                I am a freelancer based in the United Kingdom and i have been
                building noteworthy UX/UI designs and websites for years, which
                comply with the latest design trends. I help convert a vision
                and an idea into meaningful and useful products. Having a sharp
                eye for product evolution helps me prioritize tasks, iterate
                fast and deliver faster.
              </p>
            </div>
            <div className="content-info">
              <div className="row">
                <ContentSingleInfo label={"Name"} value={"Owen Lee"} />
                <ContentSingleInfo
                  label={"Email"}
                  value={"owen55889@gmail.com"}
                  tag={"a"}
                  href={"mailto: owen55889@gmail.com"}
                />
              </div>
              <div className="row">
                <ContentSingleInfo label={"Location"} value={"Vancouver 🇨🇦"} />
                <ContentSingleInfo label={"From"} value={"Hong Kong 🇭🇰"} />
              </div>
            </div>
            <div className="content-ref block sm:flex sm:items-center ">
              <a
                href="static/resume.pdf"
                download="Resume - Owen Lee.pdf"
                className="btn download-btn mr-[23px] mb-[27px] sm:mb-0 text-sm"
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

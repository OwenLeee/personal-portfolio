import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import content from "../../data";
import { SocialMedia } from "../../data/types";

const socialMediaIconMap: Record<SocialMedia, React.ReactElement> = {
  Linkedin: <BsLinkedin size={20} />,
  GitHub: <BsGithub size={20} />,
  Email: <MdEmail size={20} />,
};

const SocialMediaBar: React.FC<{}> = () => {
  const { landing } = content;
  const { socialMediasMetadata } = landing;

  return (
    <ul className="social-icons">
      {socialMediasMetadata?.length &&
        socialMediasMetadata.map((metadata, idx) => {
          return (
            <li key={`${metadata.socialMedia}-${idx}`}>
              <a href={metadata.link} target="_blank" rel="noreferrer">
                {socialMediaIconMap[metadata.socialMedia]}
              </a>
            </li>
          );
        })}
    </ul>
  );
};
export default SocialMediaBar;

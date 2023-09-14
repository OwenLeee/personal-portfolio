import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SocialMedia } from "../../data/types/contentTypes";
import { socialMedias } from "../../data/contents";

const socialMediaIconMap: Record<SocialMedia, React.ReactElement> = {
  Linkedin: <BsLinkedin size={20} />,
  GitHub: <BsGithub size={20} />,
  Email: <MdEmail size={20} />,
};

interface SocialMediaProps {
  direction?: "v" | "h";
}

const SocialMediaBar: React.FC<SocialMediaProps> = ({ direction = "v" }) => {
  const isHorizontalDisplay = direction === "h";

  return (
    <ul
      className={`social-icons ${
        isHorizontalDisplay ? "flex items-center" : ""
      }`}
    >
      {socialMedias?.length &&
        socialMedias.map((metadata, idx) => {
          return (
            <li
              key={`${metadata.socialMedia}-${idx}`}
              className={`${isHorizontalDisplay ? "mr-4" : "mt-4 "}`}
            >
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

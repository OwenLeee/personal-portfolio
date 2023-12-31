import { useCallback, useContext } from "react";
import { LightBoxContext } from "../context";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatedBar, SectionHeader } from "../components";
import { LIGHTBOX_ID } from "../data/constants";

interface ILightBoxLayout {
  lightBoxId: string;
  section: string;
  sectionDescription: string;
  children: React.ReactNode;
}

const LightBoxLayout: React.FC<ILightBoxLayout> = ({
  lightBoxId,
  section,
  sectionDescription,
  children,
}) => {
  const { currentLightBoxId, setCurrentLightBoxId } =
    useContext(LightBoxContext);

  const closeLightBox = useCallback(() => {
    setCurrentLightBoxId(LIGHTBOX_ID.empty);
  }, [setCurrentLightBoxId]);

  const isActive = lightBoxId === currentLightBoxId;

  return (
    <div
      className={`lightbox-wrapper ${
        isActive
          ? `animate-fadeIn ${lightBoxId.toLowerCase()}-on`
          : `animate-fadeOut ${lightBoxId.toLowerCase()}-off`
      } delay-500 overflow-auto`}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px",
        animationDuration: "0s",
        animationFillMode: "none",
        ...(isActive
          ? {
              opacity: "1",
              zIndex: "9999",
            }
          : {
              opacity: "0",
              zIndex: "-9999",
            }),
      }}
    >
      <div className="lightbox-container">
        <div className="close-btn hover:cursor-pointer" onClick={closeLightBox}>
          <AiOutlineClose size={33} color="white" />
        </div>
        <div className="lightbox-content">
          <SectionHeader
            section={section}
            sectionDescription={sectionDescription}
          >
            <AnimatedBar />
          </SectionHeader>
          {children}
        </div>
      </div>
    </div>
  );
};
export default LightBoxLayout;

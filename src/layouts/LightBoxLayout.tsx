import { useCallback, useContext } from "react";
import { LightBoxContext } from "../context";
import { AiOutlineClose } from "react-icons/ai";

interface ILightBoxLayout {
  lightBoxId: string;
}

const LightBoxLayout: React.FC<ILightBoxLayout> = ({ lightBoxId }) => {
  const { currentLightBoxId, setCurrentLightBoxId } =
    useContext(LightBoxContext);

  const closeLightBox = useCallback(() => {
    setCurrentLightBoxId("empty"); // TODO: group in constant file
  }, [setCurrentLightBoxId]);

  const isActive = lightBoxId === currentLightBoxId;

  return (
    <div
      className={`lightbox-wrapper ${
        isActive
          ? `animate-fadeIn ${lightBoxId.toLowerCase()}-on`
          : `animate-fadeOut ${lightBoxId.toLowerCase()}-off`
      } delay-500`}
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
      <div className="container text-white">
        <div className="close-btn" onClick={closeLightBox}>
          <AiOutlineClose size={33} />
        </div>
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>
    </div>
  );
};
export default LightBoxLayout;

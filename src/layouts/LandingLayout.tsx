import { useContext, useEffect, useState } from "react";
import { LightBoxContext } from "../context";

type MainContent = {
  name: string;
  titles: string[];
};

interface ILandingLayout {
  navbar: React.ReactElement;
  video: string;
  main: MainContent;
  socialMedia: React.ReactElement;
  lightBoxes: React.FunctionComponent[];
  children?: React.ReactNode;
}

const LandingLayout: React.FC<ILandingLayout> = ({
  navbar,
  video,
  main,
  socialMedia,
  lightBoxes,
  children,
}) => {
  const { name, titles } = main;

  const { currentLightBoxId } = useContext(LightBoxContext);
  const [headlineIdx, setHeadlineIdx] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIdx((prev) => (prev < titles.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  const initialLightBoxStage = currentLightBoxId === ""; // TODO: group in constant file

  return (
    <>
      <div
        id="overlay-effect"
        className={`${
          initialLightBoxStage
            ? ""
            : currentLightBoxId !== "empty" // TODO: group in constant file
            ? "animate-up"
            : "animate-down"
        }`}
      ></div>
      <header>{navbar}</header>
      <section className="relative">
        <div id="background-video-overlay" />
        <video autoPlay muted loop id="background-video">
          <source src={`/static/${video}`} type="video/mp4" />
        </video>
        <div className="flex h-screen w-3/4 mx-auto sm:p-1 lg:p-3 col-8 items-center justify-center">
          <div className="flex flex-col text-center w-full text-white">
            <h1 className="home-name">{name}</h1>
            <h4 className="home-headline w-full animate-opacity text-[26px] md:text-3xl lg:text-[32px]">
              <span>I'm a&nbsp;</span>
              <span className="single-headline">
                <b className={`animate-slide single-headline-title`}>
                  {titles[headlineIdx]}
                </b>
              </span>
            </h4>
          </div>
        </div>
        <div className="fixed-wrapper">
          <div className="fixed-block block-right">{socialMedia}</div>
        </div>
        {/* lightbox */}
        {lightBoxes?.length &&
          lightBoxes.map((LightBox, idx) => (
            <LightBox key={`LightBox-${idx}`} />
          ))}
      </section>
    </>
  );
};
export default LandingLayout;

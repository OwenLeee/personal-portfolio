import { useEffect, useState } from "react";

type MainContent = {
  name: string;
  titles: string[];
};

interface ILandingLayout {
  navbar: React.ReactElement;
  main: MainContent;
  socialMedia: React.ReactElement;
}

const LandingLayout: React.FC<ILandingLayout> = ({
  navbar,
  main,
  socialMedia,
}) => {
  const { name, titles } = main;

  const [headlineIdx, setHeadlineIdx] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIdx((prev) => (prev < titles.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <>
      <header>{navbar}</header>
      <section className="relative">
        <div className="flex h-screen w-3/4 mx-auto sm:p-1 lg:p-3 col-8 items-center justify-center">
          <div className="flex flex-col text-center w-full">
            <h1 className="home-name">{name}</h1>
            <h4 className="home-headline w-full animate-opacity">
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
      </section>
    </>
  );
};
export default LandingLayout;

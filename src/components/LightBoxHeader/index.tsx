interface ILightBoxHeader {
  section: string;
  sectionDescription: string;
}

const LightBoxHeader: React.FC<ILightBoxHeader> = ({
  section,
  sectionDescription,
}) => {
  return (
    <>
      <div className="flex w-full justify-center align-middle">
        <div className="columns-1 text-center">
          <p className="mb-4 text-sm text-[#9F9F9F]">{sectionDescription}</p>
          <h2 className="mb-9 text-4xl leading-none font-bold">{section}</h2>
          <div className="animated-bar"></div>
        </div>
      </div>
    </>
  );
};
export default LightBoxHeader;

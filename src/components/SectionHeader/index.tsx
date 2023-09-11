interface ISectionHeader {
  section: string;
  sectionDescription: string;
  isHeading?: boolean;
  children?: React.ReactNode;
}

const SectionHeader: React.FC<ISectionHeader> = ({
  section,
  sectionDescription,
  isHeading = true,
  children,
}) => {
  return (
    <>
      <div className={`section-heading ${isHeading ? "page-heading" : null}`}>
        <p className="section-description">{sectionDescription}</p>
        <h2 className="section-title">{section}</h2>
        {children}
      </div>
    </>
  );
};
export default SectionHeader;

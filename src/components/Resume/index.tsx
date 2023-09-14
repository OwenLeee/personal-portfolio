import ResumeItem, { ResumeItemProps } from "./ResumeItem";

interface ResumeProps {
  heading: string;
  items: ResumeItemProps[];
}
const Resume: React.FC<ResumeProps> = ({ heading, items }) => {
  return (
    <div className={`col-block resume-block-${heading.toLowerCase()}`}>
      <h3 className="resume-block-title">{heading}</h3>
      {items?.length &&
        items.map((item, idx) => (
          <ResumeItem {...item} key={`resume-${idx}`} />
        ))}
    </div>
  );
};
export default Resume;

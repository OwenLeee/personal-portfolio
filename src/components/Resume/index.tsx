import ResumeItem, { ResumeItemProps } from "./ResumeItem";

interface ResumeProps {
  heading: string;
  items: ResumeItemProps[];
}
const Resume: React.FC<ResumeProps> = ({ heading, items }) => {
  return (
    <div className="col-12 lg:col-6">
      <div className="col-block">
        <h3 className="resume-block-title">{heading}</h3>
        {items?.length &&
          items.map((item, idx) => (
            <ResumeItem {...item} key={`resume-${idx}`} />
          ))}
      </div>
    </div>
  );
};
export default Resume;

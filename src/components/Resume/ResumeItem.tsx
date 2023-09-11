export interface ResumeItemProps {
  title: string;
  details: string;
  description: string;
}
const ResumeItem: React.FC<ResumeItemProps> = ({
  title,
  details,
  description,
}) => {
  return (
    <div className="resume-item">
      <span className="item-arrow"></span>
      <h5 className="item-title">{title}</h5>
      <span className="item-details">{details}</span>
      <p className="item-description">{description}</p>
    </div>
  );
};
export default ResumeItem;

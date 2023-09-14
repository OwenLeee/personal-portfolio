export interface ResumeItemProps {
  title: string;
  details: string;
  descriptions: { section: string; points: string[] }[];
}
const ResumeItem: React.FC<ResumeItemProps> = ({
  title,
  details,
  descriptions,
}) => {
  return (
    <div className="resume-item">
      <span className="item-arrow"></span>
      <h5 className="item-title">{title}</h5>
      <span className="item-details">{details}</span>
      {descriptions?.length !== null &&
        descriptions.map(({ section, points }, idx) => (
          <div
            className="item-description-wrapper"
            key={`${title}-section-${idx}`}
          >
            <p className="item-description">{section}</p>
            <ul>
              {points?.length !== null &&
                points.map((point, idx) => (
                  <li
                    className="list-disc list-inside"
                    key={`${title}-point-${idx}`}
                  >
                    {point}
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
};
export default ResumeItem;

import { useEffect, useMemo, useRef, useState } from "react";

export interface SkillBarProps {
  skill: string;
  percentage: number;
}
const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (elementRef?.current) setWidth(elementRef.current.offsetWidth);
  }, []);

  const percentageMarginRight = useMemo(() => {
    return `${((100 - percentage) / 100) * width}px`;
  }, [percentage, width]);

  return (
    <div className="single-skill" data-percentage="95">
      <div className="skill-info" ref={elementRef}>
        <span className="skill-name">{skill}</span>
        <span
          className="skill-percentage"
          style={{ marginRight: percentageMarginRight }}
        >
          {percentage}%
        </span>
      </div>
      <div className="progress skill-progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
export default SkillBar;

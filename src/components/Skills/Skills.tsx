import SkillBar, { SkillBarProps } from "./SkillBar";

interface SkillsProps {
  skills: SkillBarProps[];
}
const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <>
      {skills?.length &&
        skills.map((skill, idx) => (
          <SkillBar {...skill} key={`skills-${idx}`} />
        ))}
    </>
  );
};
export default Skills;

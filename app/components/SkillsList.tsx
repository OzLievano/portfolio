import { SkillData } from "@/utils/db";
import SkillInfo from "./SkillInfo";

interface SkillComponentProp {
  skills: SkillData;
}

const SkillsList = ({ skills }: SkillComponentProp) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <SkillInfo
          key={index}
          skill={skill.skill}
          level={skill.level}
          currentExperience={skill.currentExperience}
          image={skill.image}
        />
      ))}
    </div>
  );
};

export default SkillsList;

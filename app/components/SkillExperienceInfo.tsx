"use client";

interface SkillExpProps {
  skill: string;
  currExp: number;
  remainingExp: number;
}

const SkillExperienceInfo = ({ skill, currExp, remainingExp }: SkillExpProps) => {
  return (
    <div className="bg-gray-700 text-white p-3 rounded w-full">
      <h6 className="font-bold text-sm">{skill}</h6>
      <p className="text-xs">Current Experience: {currExp}</p>
      <p className="text-xs">Experience Till Next Level: {remainingExp}</p>
    </div>
  );
};

export default SkillExperienceInfo;

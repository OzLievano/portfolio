"use client";
import { getExperienceDelta } from "../api/routes";
import { useEffect, useState } from "react";
import SkillExperienceInfo from "./SkillExperienceInfo";
import Image from "next/image";

interface SkillProps {
  skill: string;
  level: number;
  currentExperience: number;
  image: string;
}

const SkillInfo = ({ skill, level, currentExperience, image }: SkillProps) => {
  const [expRemaining, setExpRemaining] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const remainingEXP = getExperienceDelta(level, currentExperience);
    setExpRemaining(remainingEXP);
  }, [level, currentExperience]);

  return (
    <div
      className="relative w-full sm:w-1/2 md:w-1/4 lg:w-1/5 h-36 sm:h-40 border-2 border-black mx-2 my-4 flex flex-col justify-center items-center bg-white rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)} // Toggle hover on mobile
    >
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Image
          src={`/${image}`}
          alt={skill}
          width={50}
          height={50}
          className="w-12 h-12 object-contain"
        />
        <span className="text-sm md:text-base font-semibold">{level}/99</span>
      </div>

      {/* Hover/Tap Tooltip for Experience Info */}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-700 text-white p-3 rounded-lg z-10 w-40 text-center shadow-lg">
          <SkillExperienceInfo
            skill={skill}
            currExp={currentExperience}
            remainingExp={expRemaining}
          />
        </div>
      )}
    </div>
  );
};

export default SkillInfo;

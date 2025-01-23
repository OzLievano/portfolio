"use client";
import { Skill } from "@/utils/db";
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
      className="relative w-1/5 h-36 border-2 border-black mx-2 my-4 flex flex-col justify-center items-center bg-white rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full flex justify-center items-center">
        <Image
          src={`/${image}`}
          alt={skill}
          width={50}
          height={50}
          className="w-12 h-12 object-contain"
        />
        <span>{level}/99</span>
      </div>

      {/* Show Experience Info when hovered */}
      {isHovered && (
        <div className="absolute bottom-0 left-0 right-0 bg-gray-700 text-white p-3 rounded-b-lg z-10">
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

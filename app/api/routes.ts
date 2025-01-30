import { allSkillData, experiencePerLevel } from "@/utils/db";

export const getSkills = () => {
  return allSkillData;
};

export const getExperienceDelta = (
  skillLevel: number,
  currentExperience: number
) => {
  const nextLevelExperience = experiencePerLevel[skillLevel + 1];
  const experienceDelta = nextLevelExperience - currentExperience;

  return experienceDelta;
};

import { Skill, allSkillData, SkillData, experiencePerLevel } from "@/utils/db";
import next from "next";

export const getSkills = () => {
  return allSkillData;
};

const updateSkillExperience = async (
  skill: Skill,
  hoursTrained: number
): Promise<[Skill, ...Skill[]]> => {
  try {
    const skillData = await getSkills();

    if (typeof hoursTrained !== "number" || hoursTrained < 0) {
      throw new Error(
        "Invalid hoursTrained value. It must be a non-negative number."
      );
    }

    const totalExperienceGained = hoursTrained * 60000;

    skill.currentExperience += totalExperienceGained;

    return [skill, ...skillData];
  } catch (error) {
    console.error("Error updating skill experience:", error);
    throw error;
  }
};

export const getExperienceDelta = (
  skillLevel: number,
  currentExperience: number
) => {
  const nextLevelExperience = experiencePerLevel[skillLevel + 1];
  const experienceDelta = nextLevelExperience - currentExperience;

  return experienceDelta;
};

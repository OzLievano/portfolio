export interface Skill {
  skill: string;
  level: number;
  currentExperience: number;
  image: string
}
export type SkillData = Skill[];

export const allSkillData: SkillData = [
  { skill: "React", level: 75, currentExperience: 1210421, image:'react.png' },
  { skill: "Python", level: 70, currentExperience: 737627, image:'python.png' },
  { skill: "Node.js", level: 75, currentExperience: 1210421, image:'node.png' },
  { skill: "JavaScript", level: 80, currentExperience: 1986068, image:'js.png' },
  { skill: "TypeScript", level: 70, currentExperience: 737627, image:'ts.png' },
  { skill: "Communication", level: 80, currentExperience: 1986068, image:'communicating.png'},
  { skill: "Health", level: 85, currentExperience: 3258594, image:'heart.png' },
  { skill: "Writing", level: 75, currentExperience: 1210421, image:'writing.png' },
  { skill: "Reading", level: 75, currentExperience: 1210421, image:'books.png' },
  { skill: "Leadership", level: 70, currentExperience: 737627, image:'leader.png' },
  { skill: "Creativity", level: 70, currentExperience: 737627, image:'creativity.png' },
  { skill: "Adaptability", level: 80, currentExperience: 1986068, image:'adaptability.png' },
  { skill: "Salsa", level: 90, currentExperience: 5346332, image:'salsa.png' },
  { skill: "Volleyball", level: 80, currentExperience: 1986068 , image:'vball.png'},
  { skill: "Warhammer", level: 90, currentExperience: 5346332, image:'aos.png' },
];

export const experiencePerLevel: { [key: number]: number } = {
  60: 273742,
  61: 302288,
  62: 333804,
  63: 368599,
  64: 407015,
  65: 449428,
  66: 496254,
  67: 547953,
  68: 605032,
  69: 668051,
  70: 737627,
  71: 814445,
  72: 899257,
  73: 992895,
  74: 1096278,
  75: 1210421,
  76: 1336443,
  77: 1475581,
  78: 1629200,
  79: 1798808,
  80: 1986068,
  81: 2192818,
  82: 2421087,
  83: 2673114,
  84: 2951373,
  85: 3258594,
  86: 3597792,
  87: 3972294,
  88: 4385776,
  89: 4842295,
  90: 5346332,
  91: 5902831,
  92: 6517253,
  93: 7195629,
  94: 7944614,
  95: 8771558,
  96: 9684577,
  97: 10692629,
  98: 11805606,
  99: 13034431,
};

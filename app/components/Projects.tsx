import ProjectTile from "./ProjectTile";

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <ProjectTile
        title="AoS Match Finder"
        description="Find and connect with other Age of Sigmar players. Stack: TypeScript, React, Node, Express, MongoDB"
        videoUrl="https://youtu.be/VDf6FN7VY6c"
        githubRepoUrl="https://github.com/OzLievano/game-finder"
      />
      <ProjectTile
        title="Storybook with Material UI"
        description="A reusable component library with Typescript, Material UI, and React. Stack: Material UI, TypeScript, React"
        videoUrl="https://youtu.be/mjf1kBpdeh8"
        githubRepoUrl="https://github.com/OzLievano/fabric-storybook"
      />
    </div>
  );
};

export default Projects;

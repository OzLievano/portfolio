import ProjectTile from "./ProjectTile";
const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <ProjectTile
        title="AoS Match Finder"
        description="Find and connect with other Age of Sigmar players"
        landingPageUrl="(link unavailable)"
        githubRepoUrl="https://github.com/OzLievano/game-finder"
      />
      <ProjectTile
        title="Storybook with Material UI"
        description="A reusable component library with Typescript Material UI and React"
        landingPageUrl="https://github.com/OzLievano/fabric-storybook"
        githubRepoUrl="https://github.com/OzLievano/fabric-storybook"
      />
      <ProjectTile
        title="AoS Team Matchup"
        description="Find and compete against other Age of Sigmar teams"
        landingPageUrl="(link unavailable)"
        githubRepoUrl="(link unavailable)"
      />
    </div>
  );
};

export default Projects;
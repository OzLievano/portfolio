interface ProjectTileProps {
  title: string
  description: string
  landingPageUrl: string
  githubRepoUrl: string
}


const ProjectTile = ({ title, description, landingPageUrl, githubRepoUrl }:ProjectTileProps) => {
  return (
    <div className="w-1/3 p-4 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      <div className="flex justify-between mt-4">
        <a href={landingPageUrl} className="text-blue-600 hover:text-blue-800">Visit Site</a>
        <a href={githubRepoUrl} className="text-blue-600 hover:text-blue-800">View on GitHub</a>
      </div>
    </div>
  );
};

export default ProjectTile;
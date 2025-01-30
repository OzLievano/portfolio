interface ProjectTileProps {
  title: string;
  description: string;
  videoUrl: string;
  githubRepoUrl: string;
}

const ProjectTile = ({
  title,
  description,
  videoUrl,
  githubRepoUrl,
}: ProjectTileProps) => {
  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return null;

    let videoId;
    if (url.includes("youtu.be")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    } else if (url.includes("youtube.com/watch")) {
      videoId = new URL(url).searchParams.get("v");
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <div className="w-1/3 p-4 bg-gray-100 hover:bg-gray-200 rounded-md m-5">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      {embedUrl ? (
        <div className="mt-4">
          <iframe
            width="100%"
            height="200"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>
      ) : (
        <p className="text-gray-500 mt-4">Video unavailable</p>
      )}
      <div className="flex justify-between mt-4">
        <a
          href={githubRepoUrl}
          className="text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectTile;

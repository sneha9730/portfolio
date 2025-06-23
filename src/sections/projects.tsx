import { Github, ExternalLink } from "lucide-react";

const FeaturedProjects = () => {
  const projects = [
    {
      name: "Project Name",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat",
      techStack: ["React", "Bootstrap", "Styled Components"],
      image: "https://via.placeholder.com/600x400",
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "Project Name",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat",
      techStack: ["React", "Bootstrap", "Styled Components"],
      image: "https://via.placeholder.com/600x400",
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "Project Name",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat",
      techStack: ["React", "Bootstrap", "Styled Components"],
      image: "https://via.placeholder.com/600x400",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section className="bg-[#111111] text-white px-4 py-10 sm:px-10 md:px-20">
      <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-[#33D2FF] to-[#9845E8] md:bg-[length:10%] sm:bg-[length:70%] bg-clip-text text-transparent">PROJECTS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#242424] rounded-lg overflow-hidden shadow-lg">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl text-[#9845E8] font-semibold mb-2">{project.name}</h3>
              <p className="text-base mb-4 text-gray-300">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1 text-sm text-[#33D2FF]">
                  {project.techStack.map((tech, i) => (
                    <span key={i}>
                      {tech}
                      {i !== project.techStack.length - 1 && " - "}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 text-gray-300">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 hover:text-white" />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;

import Image from "next/image";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string;
    image?: string; // optional in case some projects don't have images
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition duration-300">
      
      {/* Project Image */}
      <div className="w-full h-52 relative mb-4">
        <Image
          src={project.image || "/placeholder.png"} 
          alt={project.title}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

      {/* Project Description */}
      <p className="text-gray-600 mb-3">{project.description}</p>

      {/* Tech Stack */}
      <p className="text-sm text-gray-800 font-medium">
        <span className="font-semibold">Tech:</span> {project.tech}
      </p>
    </div>
  );
}

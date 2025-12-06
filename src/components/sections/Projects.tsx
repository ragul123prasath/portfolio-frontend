"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Use placeholder image stored in /public folder
  const fallbackImage = "/placeholder.png";

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("http://localhost:5000/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-600">
        Loading projects...
      </div>
    );
  }

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white shadow-md rounded-lg p-5 transition hover:shadow-xl"
          >
            {/* Project Image */}
            <div className="w-full h-52 relative">
              <Image
                src={project.image || fallbackImage}
                alt={project.title}
                fill
                className="rounded-lg object-cover"
                unoptimized
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>

            {/* Description */}
            <p className="text-gray-600 mt-2">{project.description}</p>

            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <p className="mt-3 text-sm text-gray-700">
                <strong>Tech:</strong> {project.techStack.join(", ")}
              </p>
            )}

            {/* Live Link */}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                className="inline-block mt-4 text-blue-600 font-medium"
              >
                Visit Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

type Project = {
  _id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Projects Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Projects
      </h2>

      {loading && (
        <p className="text-center text-gray-500">Loading projects...</p>
      )}

      {!loading && projects.length === 0 && (
        <p className="text-center text-gray-500">No projects found.</p>
      )}

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            data-aos="fade-up"
          >
            {/* Project Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {project.description}
              </p>

              {/* Project Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

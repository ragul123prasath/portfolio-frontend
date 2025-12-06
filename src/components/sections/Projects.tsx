"use client";

import React from "react";

type Project = {
  _id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      _id: "1",
      title: "Portfolio Website",
      description: "Modern portfolio built with Next.js & Tailwind CSS",
      image: "/project1.png",
      link: "#",
    },
    {
      _id: "2",
      title: "API Backend",
      description: "Node + Express + MongoDB backend with authentication",
      image: "/project2.png",
      link: "#",
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Projects
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project: Project) => (
          <div
            key={project._id}
            className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>

            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg mt-4"
              />
            )}

            {project.link && (
              <a
                href={project.link}
                className="block mt-4 text-blue-600 font-semibold"
                target="_blank"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

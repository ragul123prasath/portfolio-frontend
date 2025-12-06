"use client";

import React from "react";

type ExperienceItem = {
  _id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
};

export default function Experience() {
  const experience: ExperienceItem[] = [
    {
      _id: "1",
      role: "Full Stack Developer Intern",
      company: "Example Company",
      duration: "2023 - Present",
      description: "Worked on MERN stack applications...",
    },
    {
      _id: "2",
      role: "Backend Developer Intern",
      company: "XYZ Solutions",
      duration: "2022 - 2023",
      description: "Built REST APIs, authentication systems, etc.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {experience.map((exp: ExperienceItem, index: number) => (
          <div
            key={exp._id}
            className="p-6 bg-white shadow rounded-lg border"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

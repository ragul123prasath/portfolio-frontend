"use client";

import { useEffect, useState } from "react";

type ExperienceItem = {
  _id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
};

export default function Experience() {
  const [experience, setExperience] = useState<ExperienceItem[]>([]);
  const [loading, setLoading] = useState(true);

  // OPTIONAL: Enable this if your backend has /experience API
  useEffect(() => {
    async function loadExperience() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/experience`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch experience");
        }

        const data = await res.json();
        setExperience(data);
      } catch (err) {
        console.error("Experience Fetch Error:", err);

        // Fallback static data (so website never breaks)
        setExperience([
          {
            _id: "1",
            role: "Full Stack Developer Intern",
            company: "Tech Company",
            duration: "2023 - Present",
            description:
              "Worked on MERN stack features, REST APIs, cloud deployment, and UI components.",
          },
          {
            _id: "2",
            role: "Backend Developer Intern",
            company: "Software Solutions",
            duration: "2022 - 2023",
            description:
              "Developed Express.js APIs, authentication middleware, and MongoDB schemas.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    }

    loadExperience();
  }, []);

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Experience
      </h2>

      {loading && (
        <p className="text-center text-gray-500">Loading experience...</p>
      )}

      {!loading && experience.length === 0 && (
        <p className="text-center text-gray-500">No experience available.</p>
      )}

      <div className="max-w-4xl mx-auto space-y-6">
        {experience.map((exp) => (
          <div
            key={exp._id}
            className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition"
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

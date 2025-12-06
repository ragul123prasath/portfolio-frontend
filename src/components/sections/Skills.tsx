

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "Java", "Spring Boot"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "Docker", "AWS", "Postman", "VS Code", "Linux"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Skills
      </h2>

      <p className="text-center text-gray-600 mb-10">
        Here are the technologies and tools I work with.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
            <ul className="space-y-2 text-gray-700">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="text-blue-600 text-lg">•</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

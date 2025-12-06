export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Git & GitHub",
    "Tailwind CSS",
    "Java",
    "Spring Boot",
    "MySQL",
    "PostgreSQL",
    "AWS Basics",
    "Docker Basics",
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 text-center rounded-lg shadow hover:shadow-md transition"
          >
            <p className="text-lg font-medium text-gray-700">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default async function Experience() {
  const res = await fetch("http://localhost:5000/api/experience", {
    next: { revalidate: 10 },
  });

  const experience = await res.json();

  return (
    <section id="experience" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto relative border-l-4 border-blue-600 pl-8">

        {experience.map((exp, index) => (
          <div
            key={exp._id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="mb-10"
          >
            {/* Dot */}
            <div className="w-4 h-4 bg-blue-600 rounded-full absolute -left-[10px] mt-1.5"></div>

            {/* Content */}
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-blue-600 font-medium">{exp.company}</p>
            <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>

            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

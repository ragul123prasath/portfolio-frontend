export default function Services() {
  const services = [
    {
      title: "Full-Stack Development",
      description:
        "Building modern web applications using MERN stack, REST APIs, databases, and cloud deployment.",
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive, user-friendly interfaces using React, Next.js, Tailwind CSS, and TypeScript.",
    },
    {
      title: "Backend Development",
      description:
        "Developing secure and scalable backend systems using Node.js, Express.js, MongoDB, and authentication.",
    },
    {
      title: "Java & Spring Boot Development",
      description:
        "Building APIs, services, and enterprise-grade backend systems using Spring Boot & Hibernate.",
    },
    {
      title: "DevOps & Cloud",
      description:
        "Basic CI/CD, Docker usage, AWS services setup, and cloud deployment strategies.",
    },
    {
      title: "API Integration",
      description:
        "Integrating 3rd-party APIs, authentication systems, and secure API communication.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Services
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

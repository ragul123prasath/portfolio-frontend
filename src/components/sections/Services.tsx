

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "I build responsive, scalable, and user-friendly full-stack applications using MERN stack.",
      tools: "React, Next.js, Node.js, Express, MongoDB",
    },
    {
      title: "Java / Spring Boot Development",
      description:
        "I design and develop REST APIs, microservices, and enterprise backend systems.",
      tools: "Java, Spring Boot, MySQL, PostgreSQL, REST API",
    },
    {
      title: "DevOps & Cloud Deployment",
      description:
        "I configure CI/CD pipelines, automation scripts, and deploy applications on cloud.",
      tools: "AWS, Docker, GitHub Actions, Linux, Nginx",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Services
      </h2>

      <p className="text-center text-gray-600 mb-10">
        Here are the services I offer to help build and grow your projects.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-sm text-gray-800">
              <span className="font-semibold">Tools:</span> {service.tools}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          I'm <span className="font-semibold">Ragul Prasath</span>, a passionate{" "}
          <span className="font-semibold text-blue-600">
            Full-Stack MERN Developer
          </span>{" "}
          with strong experience in Java, Spring Boot, AWS, and DevOps.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          I enjoy building modern web applications, solving backend challenges,
          and designing clean UI components with React & Next.js. I also have
          experience deploying cloud-based applications using platforms like
          Render, Vercel, and AWS.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          My goal is to create scalable, efficient, and user-friendly digital
          experiences while continuously learning and improving my skill set.
        </p>
      </div>
    </section>
  );
}

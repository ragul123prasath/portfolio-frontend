import { fetchData } from "@/lib/api";

export default async function About() {
  const about = await fetchData("about");

  return (
    <section id="about" className="py-20 text-center">

      {/* Animation Wrapper */}
      <div data-aos="fade-up">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>

        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          {about.description}
        </p>
      </div>

    </section>
  );
}

// app/page.tsx
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import Blogs from "@/components/sections/Blogs";
import Testimonials from "@/components/sections/Testimonials";
import Experience from "@/components/sections/Experience";

// ❌ REMOVE async and data fetching – this must be a pure SERVER component
export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <div className="text-center pt-40">
        <h1 className="text-4xl font-bold text-blue-600">
          Hi, I'm Ragul Prasath 👋
        </h1>
        <p className="text-gray-600 mt-3">
          Full-Stack MERN Developer | Java | Spring Boot | AWS | DevOps
        </p>

        <button className="mt-6 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          View My Projects
        </button>
      </div>

      {/* OTHER SECTIONS */}
      <About />
      <Skills />
      <Projects />
      <Services />
      <Blogs />

      {/* Testimonials will fetch its own data client-side */}
      <Testimonials />

      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

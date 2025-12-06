export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 bg-gray-900 text-gray-300 text-center">
      <div className="max-w-5xl mx-auto space-y-3">
        <p className="text-sm">
          © {year} Ragul Prasath. All Rights Reserved.
        </p>

        <p className="text-sm">
          Built with <span className="text-blue-400 font-semibold">Next.js</span> &{" "}
          <span className="text-green-400 font-semibold">Tailwind CSS</span>
        </p>

        {/* Social Links (Optional) */}
        <div className="flex justify-center gap-5 mt-2">
          <a
            href="https://github.com/ragul123prasath"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:ragulprasath@example.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

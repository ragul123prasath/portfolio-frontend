

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Name */}
        <h3 className="text-xl font-semibold">Ragul Prasath</h3>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-5">

          {/* GitHub */}
          <a
            href="https://github.com/ragul123prasath"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.8 1.9-.8.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.8 5.6-5.4 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.9 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/ragul-prasath"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7"
            >
              <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8.5h4v15h-4v-15zm7 0h3.8v2.1h.1c.5-.9 1.8-2.1 3.9-2.1 4.1 0 4.9 2.7 4.9 6.1v8.9h-4v-7.9c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1v8.1h-4v-15z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:ragulprasath30@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7"
            >
              <path d="M12 13.065L.015 6h23.97L12 13.065zM0 7.236V18h24V7.236l-12 7.06-12-7.06z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm mt-6">
          © {new Date().getFullYear()} Ragul Prasath. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

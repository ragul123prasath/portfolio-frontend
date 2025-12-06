"use client";

export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-blue-600">Ragul Prasath</h1>

        <div className="space-x-6 text-gray-700 font-medium hidden md:block">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Contact Me
      </h2>

      <p className="text-center text-gray-600 mb-10">
        Feel free to reach out for projects or collaborations.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white shadow-lg p-8 rounded-xl border"
      >
        <div className="mb-5">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg focus:outline-blue-500"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg focus:outline-blue-500"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border px-3 py-2 rounded-lg focus:outline-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center mt-4 text-gray-700 font-medium">{status}</p>
        )}
      </form>
    </section>
  );
}

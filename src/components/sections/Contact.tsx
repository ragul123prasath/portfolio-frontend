"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        setStatus("❌ Failed to send message. Try again!");
      } else {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      setStatus("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md border space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border rounded outline-none"
          onChange={handleChange}
          value={formData.name}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded outline-none"
          onChange={handleChange}
          value={formData.email}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border rounded outline-none"
          rows={5}
          onChange={handleChange}
          value={formData.message}
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 text-white rounded transition ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-center mt-3 font-medium">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

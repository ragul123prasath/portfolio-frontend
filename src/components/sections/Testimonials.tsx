"use client";

import { useEffect, useState } from "react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/testimonials`
        );
        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        console.error("Error loading testimonials:", err);
      }
    }

    loadData();
  }, []);

  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Testimonials
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t: any) => (
          <div
            key={t._id}
            className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition"
          >
            <p className="text-gray-700 italic mb-4">“{t.message}”</p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

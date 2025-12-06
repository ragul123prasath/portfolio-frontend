//"use client";

import { useEffect, useState } from "react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  // Load API URL from .env.local
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const res = await fetch(`${API_URL}/api/testimonials`, {
          cache: "no-store",
        });

        if (!res.ok) {
          console.error("Failed to fetch testimonials");
          return;
        }

        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error loading testimonials:", error);
      }
    }

    loadTestimonials();
  }, [API_URL]);

  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Testimonials
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.length === 0 ? (
          <p className="text-center text-gray-500 col-span-2">
            No testimonials yet.
          </p>
        ) : (
          testimonials.map((t: any) => (
            <div
              key={t._id}
              data-aos="fade-up"
              className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition"
            >
              <p className="text-gray-700 italic mb-4">“{t.message}”</p>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                {t.role && <p className="text-sm text-gray-500">{t.role}</p>}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

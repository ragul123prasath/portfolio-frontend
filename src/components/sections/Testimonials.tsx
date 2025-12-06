"use client";

import { useEffect, useState } from "react";

interface Testimonial {
  _id: string;
  name: string;
  message: string;
  role?: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/testimonials`,
          { cache: "no-store" }  // prevent Vercel SSR cache issues
        );

        if (!res.ok) {
          console.error("Failed to fetch testimonials:", res.status);
          setLoading(false);
          return;
        }

        const data = await res.json();
        setTestimonials(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error loading testimonials:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Testimonials
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading testimonials...</p>
      ) : testimonials.length === 0 ? (
        <p className="text-center text-gray-500">No testimonials available.</p>
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t._id}
              className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition"
            >
              <p className="text-gray-700 italic mb-4">“{t.message}”</p>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role ?? "User"}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

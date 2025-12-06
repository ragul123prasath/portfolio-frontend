"use client";

import { useEffect, useState } from "react";

type Blog = {
  _id: string;
  title: string;
  description: string;
};

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs`,
          { cache: "no-store" }
        );

        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to load blogs", error);
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, []);

  return (
    <section id="blogs" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Blogs
      </h2>

      {/* Loading State */}
      {loading && (
        <p className="text-center text-gray-500">Loading blogs...</p>
      )}

      {/* Empty State */}
      {!loading && blogs.length === 0 && (
        <p className="text-center text-gray-500">No blogs found.</p>
      )}

      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog: Blog) => (
          <div
            key={blog._id}
            data-aos="fade-up"
            className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600">{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

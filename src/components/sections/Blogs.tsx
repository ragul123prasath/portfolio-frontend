"use client";

import { useEffect, useState } from "react";

type Blog = {
  _id: string;
  title: string;
  description: string;
  image?: string;
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

  if (loading) {
    return <p className="text-center mt-10">Loading blogs…</p>;
  }

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-10 text-center">
        Blogs
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>

            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded-lg mb-3 w-full"
              />
            )}

            <p className="text-gray-700">{blog.description}</p>

            <a
              href={`/blogs/${blog._id}`}
              className="text-blue-600 font-semibold mt-2 inline-block"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

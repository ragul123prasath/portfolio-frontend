"use client";

import { useEffect, useState } from "react";

type Blog = {
  _id: string;
  title: string;
  description: string;
};

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`,
          { cache: "no-cache" }
        );
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to load blogs", error);
      }
    }

    loadBlogs();
  }, []);

  return (
    <section id="blogs" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Blogs
      </h2>

      <div className="max-w-5xl mx-auto grid max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog: Blog) => (
          <div
            key={blog._id}
            data-aos="fade-up"
            className="p-6 bg-gray-100 rounded-xl shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600">{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

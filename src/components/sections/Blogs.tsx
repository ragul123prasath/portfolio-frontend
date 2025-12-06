export default async function Blogs() {
  const res = await fetch("http://localhost:5000/api/blogs", {
    next: { revalidate: 10 },
  });
  const blogs = await res.json();

  return (
    <section id="blogs" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Blogs
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            data-aos="fade-up"
            className="bg-white p-6 rounded-lg shadow-md border hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-3">{blog.description}</p>

            <a
              href={`/blogs/${blog._id}`}
              className="text-blue-600 font-medium"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

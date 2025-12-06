export default async function BlogDetails({ params }: any) {
  const { id } = params;

  const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
  const blog = await res.json();

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        {blog.title}
      </h1>
      <p className="text-gray-700 leading-relaxed">{blog.content}</p>
    </section>
  );
}

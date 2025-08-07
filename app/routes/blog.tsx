const posts = [
  {
    slug: "modern-auth-for-node-react",
    title: "Modern Auth for Node.js & React",
    excerpt:
      "A practical guide to authentication in modern fullstack apps using better-auth.",
    date: "2025-07-01",
  },
  {
    slug: "type-safe-seeding-drizzle-orm",
    title: "Type-safe Seeding with Drizzle ORM",
    excerpt:
      "How to seed your database safely and efficiently with drizzle-seed.",
    date: "2025-06-15",
  },
];

export default function Blog() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-gray-700 mb-8 text-center">
        Blog
      </h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="bg-white rounded-xl shadow p-6">
            <div className="text-xs text-gray-400 mb-1">{post.date}</div>
            <a
              href={`/blog/${post.slug}`}
              className="text-2xl font-bold text-gray-700 hover:underline"
            >
              {post.title}
            </a>
            <p className="text-gray-700 mt-2">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

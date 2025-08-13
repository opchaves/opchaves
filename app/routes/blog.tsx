import { post } from "@/database/schema";
import type { Route } from "./+types/blog";
import { desc, eq } from "drizzle-orm";
import { toDateString } from "@/lib/utils";

export async function loader({ context }: Route.LoaderArgs) {
  const posts = await context.db
    .select({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      createdAt: post.createdAt,
      publishedDate: post.publishedDate,
    })
    .from(post)
    .where(eq(post.status, "published"))
    .orderBy(desc(post.createdAt));

  return posts;
}

export default function Blog({ loaderData: posts }: Route.ComponentProps) {
  if (posts.length === 0) {
    return (
      <section className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-extrabold text-gray-700 mb-8 text-center">
          Blog
        </h1>
        <p className="text-gray-600 text-center">No posts available.</p>
      </section>
    );
  }

  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-gray-700 mb-8 text-center">
        Blog
      </h1>
      <ul className="space-y-5">
        {posts.map((post) => (
          <li key={post.slug} className="bg-white rounded-xs p-3">
            <a
              href={`/blog/${post.slug}`}
              className="text-2xl font-bold text-gray-700 hover:underline"
            >
              {post.title}
            </a>
            <div className="text-xs text-gray-400 mb-1">
              {post.publishedDate ? toDateString(post.publishedDate) : ""}
            </div>
            <p className="text-gray-700 mt-2">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

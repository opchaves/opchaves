import { post } from "@/database/schema";
import type { Route } from "./+types/blog";
import { desc, eq } from "drizzle-orm";
import { toDateString } from "@/lib/utils";
import { pageMeta } from "@/lib/site";
import { dbContext } from "@/lib/context";
import { PublicError } from "@/components/not-found";
import { Link } from "react-router";

export function meta() {
  return pageMeta({
    title: "Blog - Paulo Chaves",
    description: "Writing by Paulo Chaves.",
    path: "/blog",
  });
}

export async function loader({ context }: Route.LoaderArgs) {
  const posts = await context
    .get(dbContext)
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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return <PublicError error={error} />;
}

export default function Blog({ loaderData: posts }: Route.ComponentProps) {
  return (
    <article className="mx-auto max-w-2xl px-8 pt-16 pb-8">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        Blog
      </h1>
      {posts.length === 0 ? (
        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          No posts available.
        </p>
      ) : (
        <ul className="mt-10 space-y-8">
          {posts.map((entry) => (
            <li key={entry.slug}>
              <Link
                to={`/blog/${entry.slug}`}
                className="text-lg text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
              >
                {entry.title}
              </Link>
              {entry.publishedDate ? (
                <p className="mt-1 text-sm text-gray-500">
                  {toDateString(entry.publishedDate)}
                </p>
              ) : null}
              {entry.excerpt ? (
                <p className="mt-2 leading-relaxed text-gray-700">
                  {entry.excerpt}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

import { post } from "@/database/schema";
import type { Route } from "./+types/blog-post";
import { and, eq } from "drizzle-orm";
import { isRouteErrorResponse } from "react-router";
import { toDateString } from "@/lib/utils";
import Markdown from "@/components/Markdown";
import { PublicError } from "@/components/not-found";
import markdownCSS from "github-markdown-css?url";
import { pageMeta } from "@/lib/site";
import { dbContext } from "@/lib/context";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: markdownCSS },
];

export async function loader({ params, context }: Route.LoaderArgs) {
  const aPost = await context
    .get(dbContext)
    .select({
      id: post.id,
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      createdAt: post.createdAt,
      publishedDate: post.publishedDate,
    })
    .from(post)
    .where(and(eq(post.slug, params.slug), eq(post.status, "published")))
    .limit(1)
    .get();

  if (!aPost) {
    throw new Response("Not Found", { status: 404 });
  }

  return aPost;
}

export const meta: Route.MetaFunction = ({ loaderData: data, error }) => {
  if (isRouteErrorResponse(error) && error.status === 404) {
    return [
      { title: "Not found - Paulo Chaves" },
      { name: "robots", content: "noindex" },
    ];
  }
  if (!data) return [];
  return pageMeta({
    title: `${data.title} - OpChaves`,
    description: data.excerpt || data.title,
    path: `/blog/${data.slug}`,
  });
};

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return <PublicError error={error} />;
}

export default function BlogPost({ loaderData: post }: Route.ComponentProps) {
  return (
    <article className="mx-auto max-w-2xl px-8 pt-16 pb-8">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        {post.title}
      </h1>
      {post.publishedDate ? (
        <p className="mt-2 text-sm text-gray-500">
          {toDateString(post.publishedDate)}
        </p>
      ) : null}
      <div className="mt-8">
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  );
}

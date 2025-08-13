import { post } from "@/database/schema";
import type { Route } from "./+types/blog-post";
import { eq } from "drizzle-orm";
import { toDateString } from "@/lib/utils";
import Markdown from "@/components/Markdown";
import markdownCSS from "github-markdown-css?url";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: markdownCSS },
];

export async function loader({ params, context }: Route.LoaderArgs) {
  const aPost = await context.db
    .select({
      id: post.id,
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      createdAt: post.createdAt,
    })
    .from(post)
    .where(eq(post.slug, params.slug))
    .limit(1)
    .get();

  if (!aPost) {
    throw new Response("Not Found", { status: 404 });
  }

  return aPost;
}

export const meta: Route.MetaFunction = ({ data }) => {
  if (!data) return [];
  return [
    { title: `${data.title} - OpChaves` },
    { name: "description", content: data.excerpt || "" },
    { property: "og:description", content: data.excerpt || "" },
    { name: "twitter:description", content: data.excerpt || "" },
  ];
};

export default function BlogPost({ loaderData: post }: Route.ComponentProps) {
  return (
    <article className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-gray-700 mb-2">
        {post.title}
      </h1>
      <div className="text-xs text-gray-400 mb-1">
        {toDateString(post.createdAt)}
      </div>
      <div className="mt-8">
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  );
}

import type { Route } from "./+types/edit";
import { data, redirect } from "react-router";
import { post } from "@/database/schema";
import { and, eq } from "drizzle-orm";
import { ensureAuthenticated } from "@/lib/utils.server";
import {
  BlogForm,
  blogSchema,
  type BlogFormValues,
} from "./components/BlogForm";
import { zodErrorToFieldMessages } from "@/lib/utils";

export const loader = async ({
  params,
  request,
  context,
}: Route.LoaderArgs) => {
  const session = await ensureAuthenticated({ context, request });

  const postData = await context.db
    .select()
    .from(post)
    .where(and(eq(post.id, params.id), eq(post.authorId, session.user.id)))
    .get();

  if (!postData) {
    throw new Response("Not Found", { status: 404 });
  }

  return {
    id: postData.id,
    title: postData.title,
    slug: postData.slug,
    excerpt: postData.excerpt,
    content: postData.content,
    status: postData.status,
    publishedDate: postData.publishedDate,
  };
};

export const action = async ({
  request,
  params,
  context,
}: Route.ActionArgs) => {
  const session = await ensureAuthenticated({ context, request });
  const { id } = params;
  const formData = await request.formData();
  const values = {
    title: formData.get("title")?.toString() || "",
    slug: formData.get("slug")?.toString() || "",
    excerpt: formData.get("excerpt")?.toString() || "",
    content: formData.get("content")?.toString() || "",
    status: formData.get("status")?.toString() || "draft",
    publishedDate: formData.get("publishedDate")?.toString(),
  };

  const result = blogSchema.safeParse(values);
  if (!result.success) {
    const errorMessages = zodErrorToFieldMessages<BlogFormValues>(result.error);
    return data(errorMessages, { status: 400 });
  }

  const { title, excerpt, content, status, publishedDate } = result.data;
  try {
    await context.db
      .update(post)
      .set({
        title,
        excerpt,
        content,
        status,
        updatedAt: new Date(),
        ...(publishedDate && { publishedDate: new Date(publishedDate) }),
      })
      .where(and(eq(post.id, id), eq(post.authorId, session.user.id)));
    return redirect(`/app/blog/${id}`);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update post.";
    return data({ error: message }, { status: 500 });
  }
};

export default function BlogEdit({ loaderData: post }: Route.ComponentProps) {
  const publishedDate = post.publishedDate
    ? post.publishedDate.toISOString().split("T")[0]
    : undefined;

  return (
    <BlogForm
      mode="edit"
      initialValues={{
        publishedDate,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt ?? undefined,
        content: post.content,
        status: post.status as "draft" | "published",
      }}
    />
  );
}

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
  };

  const result = blogSchema.safeParse(values);
  if (!result.success) {
    const errorMessages = zodErrorToFieldMessages<BlogFormValues>(result.error);
    return data(errorMessages, { status: 400 });
  }

  const { title, excerpt, content, status } = result.data;
  try {
    await context.db
      .update(post)
      .set({ title, excerpt, content, status, updatedAt: new Date() })
      .where(and(eq(post.id, id), eq(post.authorId, session.user.id)));
    return redirect(`/app/blog/${id}`);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update post.";
    return data({ error: message }, { status: 500 });
  }
};

export default function BlogEdit({ loaderData }: Route.ComponentProps) {
  return (
    <BlogForm
      mode="edit"
      initialValues={{
        title: loaderData.title,
        slug: loaderData.slug,
        excerpt: loaderData.excerpt ?? undefined,
        content: loaderData.content,
        status: loaderData.status as "draft" | "published",
      }}
    />
  );
}

import type { Route } from "./+types/new";
import { data, redirect } from "react-router";
import { nanoid } from "nanoid";
import { APP_PATH } from "@/lib/consts";
import { post } from "@/database/schema";
import { ensureAuthenticated } from "@/lib/utils.server";
import { zodErrorToFieldMessages } from "@/lib/utils";
import {
  BlogForm,
  blogSchema,
  type BlogFormValues,
} from "./components/BlogForm";

export async function loader({ request, context }: Route.LoaderArgs) {
  const session = await ensureAuthenticated({ context, request });
  return session.user;
}

export async function action({ request, context }: Route.ActionArgs) {
  const session = await ensureAuthenticated({ context, request });
  const formData = await request.formData();
  const values = {
    title: formData.get("title")?.toString(),
    slug: formData.get("slug")?.toString(),
    excerpt: formData.get("excerpt")?.toString(),
    content: formData.get("content")?.toString(),
    status: formData.get("status")?.toString() || "draft",
  };

  const result = blogSchema.safeParse(values);
  if (!result.success) {
    const errorMessages = zodErrorToFieldMessages<BlogFormValues>(result.error);
    return data(errorMessages, { status: 400 });
  }

  const { title, slug, excerpt, content, status } = result.data;

  try {
    await context.db.insert(post).values({
      id: nanoid(),
      title,
      slug,
      excerpt,
      content,
      authorId: session.user.id,
      status,
    });
    return redirect(`${APP_PATH}/blog`);
  } catch (error) {
    console.log({ error });
    if (
      error instanceof Error &&
      error.message.match(/unique constraint failed/i)
    ) {
      return data(
        { error: "Post with this slug already exists." },
        { status: 400 },
      );
    }
    return data({ error: "Failed to create post." }, { status: 500 });
  }
}

export default function BlogNew() {
  return (
    <BlogForm
      mode="new"
      initialValues={{
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        status: "draft",
      }}
    />
  );
}

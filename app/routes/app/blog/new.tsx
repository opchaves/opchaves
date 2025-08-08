import type { Route } from "./+types/new";
import React from "react";
import { useFetcher } from "react-router";
import { useForm, useWatch, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";
import ReactMarkdown from "react-markdown";
import { data, redirect } from "react-router";
import { getAuth } from "@/lib/auth.server";
import { nanoid } from "nanoid";
import { APP_PATH } from "@/lib/consts";
import { post } from "@/database/schema";

export async function loader({ request, context }: Route.LoaderArgs) {
  const session = await getAuth(context).api.getSession({
    headers: request.headers,
  });
  if (!session?.user) {
    return redirect("/auth/login");
  }
  return session.user;
}

export async function action({ request, context }: Route.ActionArgs) {
  const session = await getAuth(context).api.getSession({
    headers: request.headers,
  });
  if (!session?.user) {
    return redirect("/auth/login");
  }
  const formData = await request.formData();
  const values = {
    title: formData.get("title")?.toString() || "",
    excerpt: formData.get("excerpt")?.toString() || "",
    content: formData.get("content")?.toString() || "",
  };

  const schema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters"),
    excerpt: z
      .string()
      .max(200, "Excerpt must be at most 200 characters")
      .optional(),
    content: z.string().min(20, "Content must be at least 20 characters"),
  });

  const result = schema.safeParse(values);
  if (!result.success) {
    const errorMessages = z.treeifyError(result.error).errors;
    return data({ error: errorMessages.join(" ") }, { status: 400 });
  }

  const { title, excerpt, content } = result.data;
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 50);

  try {
    await context.db.insert(post).values({
      id: nanoid(),
      title,
      excerpt,
      content,
      slug,
      authorId: session.user.id,
      status: "draft",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return redirect(`${APP_PATH}/blog`);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create post.";
    return data({ error: message }, { status: 500 });
  }
}

const schema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  excerpt: z
    .string()
    .max(200, "Excerpt must be at most 200 characters")
    .optional(),
  content: z.string().min(20, "Content must be at least 20 characters"),
});

type BlogForm = z.infer<typeof schema>;

export default function BlogNew({ actionData }: Route.ComponentProps) {
  const fetcher = useFetcher();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<BlogForm>({ resolver: zodResolver(schema) });
  const content = useWatch({
    control,
    name: "content",
  });
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const onSubmit = (data: BlogForm) => {
    setSubmitError(null);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("excerpt", data.excerpt ?? "");
    formData.append("content", data.content);
    fetcher.submit(formData, {
      method: "post",
      action: window.location.pathname,
    });
  };

  // Show backend error if present
  React.useEffect(() => {
    if (actionData && actionData.error) {
      setSubmitError(actionData.error);
    } else {
      setSubmitError(null);
    }
  }, [actionData]);
  console.log(">>> errors", actionData, submitError, errors);

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text text-center">
        Create a New Blog Post
      </h1>
      {submitError && (
        <div className="text-red-600 text-sm mb-4 text-center">
          {submitError}
        </div>
      )}
      <fetcher.Form
        method="post"
        className="space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Title
          </label>
          <input
            type="text"
            {...register("title")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter post title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title?.message}</p>
          )}
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Excerpt
          </label>
          <textarea
            {...register("excerpt")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Short summary (optional)"
            maxLength={200}
          />
          {errors.excerpt && (
            <p className="text-red-500 text-sm mt-1">
              {errors.excerpt?.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Content
          </label>
          <Controller
            name="content"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <MDEditor
                value={field.value}
                onChange={field.onChange}
                height={300}
                previewOptions={{
                  className: "prose max-w-none",
                }}
              />
            )}
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content?.message}
            </p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            {isSubmitting ? "Publishing..." : "Publish"}
          </button>
        </div>
      </fetcher.Form>
      <div className="mt-10">
        <h2 className="text-lg font-bold mb-2 text-gray-700">Preview</h2>
        <div className="prose border rounded-lg p-4 bg-gray-50">
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <ReactMarkdown>
                {field.value || "Nothing to preview yet."}
              </ReactMarkdown>
            )}
          />
        </div>
      </div>
    </div>
  );
}

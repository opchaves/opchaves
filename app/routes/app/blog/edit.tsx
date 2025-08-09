import type { Route } from "./+types/edit";
import React from "react";
import { useFetcher, useNavigate } from "react-router";
import { useForm, useWatch, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";
import ReactMarkdown from "react-markdown";
import { data, redirect } from "react-router";
import { getAuth } from "@/lib/auth.server";
import { post } from "@/database/schema";
import { eq } from "drizzle-orm";

export const loader = async ({
  params,
  request,
  context,
}: Route.LoaderArgs) => {
  const session = await getAuth(context).api.getSession({
    headers: request.headers,
  });
  if (!session?.user) {
    return redirect("/auth/login");
  }
  const { id } = params;
  const postData = await context.db
    .select()
    .from(post)
    .where(eq(post.id, id))
    .get();
  if (!postData) throw new Response("Not Found", { status: 404 });
  return postData;
};

export const action = async ({
  request,
  params,
  context,
}: Route.ActionArgs) => {
  const session = await getAuth(context).api.getSession({
    headers: request.headers,
  });
  if (!session?.user) {
    return redirect("/auth/login");
  }
  const { id } = params;
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
  try {
    await context.db
      .update(post)
      .set({ title, excerpt, content, updatedAt: new Date() })
      .where(eq(post.id, id));
    return redirect(`/app/blog/${id}`);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update post.";
    return data({ error: message }, { status: 500 });
  }
};

const schema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  excerpt: z
    .string()
    .max(200, "Excerpt must be at most 200 characters")
    .optional(),
  content: z.string().min(20, "Content must be at least 20 characters"),
  status: z.enum(["draft", "published"]),
});

type BlogForm = z.infer<typeof schema>;

export default function BlogEdit({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<BlogForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: loaderData.title,
      excerpt: loaderData.excerpt ?? "",
      content: loaderData.content,
      status: (loaderData.status ?? "draft") as "draft" | "published",
    },
  });
  const content = useWatch({ control, name: "content" });
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const onSubmit = (data: BlogForm) => {
    setSubmitError(null);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("excerpt", data.excerpt ?? "");
    formData.append("content", data.content);
    formData.append("status", data.status ?? "draft");
    fetcher.submit(formData, {
      method: "post",
      action: window.location.pathname,
    });
  };

  const hasContent = Boolean(
    watch("title") !== loaderData.title ||
      watch("excerpt") !== loaderData.excerpt ||
      watch("content") !== loaderData.content ||
      watch("status") !== (loaderData.status ?? "draft"),
  );
  const handleCancel = () => {
    if (hasContent) {
      if (
        window.confirm(
          "You have unsaved changes. Are you sure you want to leave?",
        )
      ) {
        navigate("/app/blog");
      }
    } else {
      navigate("/app/blog");
    }
  };

  React.useEffect(() => {
    if (actionData && actionData.error) {
      setSubmitError(actionData.error);
    } else {
      setSubmitError(null);
    }
  }, [actionData]);

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text text-center">
        Edit Blog Post
      </h1>
      {submitError && (
        <div className="text-red-600 text-sm mb-4 text-center">
          {submitError}
        </div>
      )}
      <fetcher.Form
        method="post"
        className="space-y-6"
        onSubmit={handleSubmit(onSubmit as any)}
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
            defaultValue={loaderData.content}
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
        <div className="flex items-center gap-2 mt-2">
          <label className="font-medium text-gray-700">
            <Controller
              name="status"
              control={control}
              defaultValue={
                (loaderData.status ?? "draft") as "draft" | "published"
              }
              render={({ field }) => (
                <input
                  type="checkbox"
                  checked={field.value === "draft"}
                  onChange={(e) =>
                    field.onChange(e.target.checked ? "draft" : "published")
                  }
                  className="mr-2"
                />
              )}
            />
            Mark as draft
          </label>
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
}

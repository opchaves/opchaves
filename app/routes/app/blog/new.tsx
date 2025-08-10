import type { Route } from "./+types/new";
import React from "react";
import { useNavigate } from "react-router";
import { useFetcher } from "react-router";
import { useForm, useWatch, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";
import { data, redirect } from "react-router";
import { nanoid } from "nanoid";
import { APP_PATH } from "@/lib/consts";
import { post } from "@/database/schema";
import { ensureAuthenticated } from "@/lib/utils.server";
import { slugify, zodErrorToFieldMessages } from "@/lib/utils";

const postSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  excerpt: z
    .string()
    .max(200, "Excerpt must be at most 200 characters")
    .optional(),
  content: z.string().min(20, "Content must be at least 20 characters"),
  status: z.enum(["draft", "published"]),
});

export async function loader({ request, context }: Route.LoaderArgs) {
  const session = await ensureAuthenticated({ context, request });
  return session.user;
}

export async function action({ request, context }: Route.ActionArgs) {
  const session = await ensureAuthenticated({ context, request });
  const formData = await request.formData();
  const values = {
    title: formData.get("title")?.toString() || "",
    excerpt: formData.get("excerpt")?.toString() || "",
    content: formData.get("content")?.toString() || "",
    status: formData.get("status")?.toString() || "draft",
  };

  const result = postSchema.safeParse(values);
  if (!result.success) {
    const errorMessages = zodErrorToFieldMessages(result.error);
    return data({ error: errorMessages }, { status: 400 });
  }

  const { title, excerpt, content } = result.data;
  const slug = slugify(title);

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
    console.log({ error });
    if (
      error instanceof Error &&
      error.message.match(/unique constraint failed/i)
    ) {
      return data(
        { error: { error: "Post with this slug already exists." } },
        { status: 400 },
      );
    }
    return data(
      { error: { error: "Failed to create post." } },
      { status: 500 },
    );
  }
}

type BlogForm = z.infer<typeof postSchema>;
type ActionError = Record<string, string>;

export default function BlogNew({ actionData }: Route.ComponentProps) {
  const navigate = useNavigate();
  const fetcher = useFetcher<typeof actionData>();
  const busy = fetcher.state !== "idle";
  const submitError = fetcher.data?.error;

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<BlogForm>({
    resolver: zodResolver(postSchema),
    defaultValues: { status: "draft" },
  });

  const onSubmit = (data: BlogForm) => {
    fetcher.submit(data, {
      method: "post",
      action: window.location.pathname,
    });
  };

  const hasContent = Boolean(
    watch("title") || watch("excerpt") || watch("content"),
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

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text text-center">
        New Blog Post
      </h1>
      {submitError?.["error"] && (
        <div className="text-red-600 text-sm mb-4 text-center">
          {submitError["error"]}
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
          {submitError && "title" in submitError && (
            <p className="text-red-500 text-xs mt-1">{submitError["title"]}</p>
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
          {submitError && "excerpt" in submitError && (
            <p className="text-red-500 text-xs mt-1">
              {submitError["excerpt"]}
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
          {submitError && "content" in submitError && (
            <p className="text-red-500 text-xs mt-1">
              {submitError["content"]}
            </p>
          )}
        </div>
        <div>
          <label className="font-medium text-gray-700">
            <Controller
              name="status"
              control={control}
              defaultValue="draft"
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
          {submitError && "status" in submitError && (
            <p className="text-red-500 text-xs mt-1">{submitError["status"]}</p>
          )}
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
            disabled={busy}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            {busy ? "Saving..." : "Save"}
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
}

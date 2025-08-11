import type { Route } from "./+types/new";
import React from "react";
import { Input } from "@/components/Input";
import { useNavigate } from "react-router";
import { useFetcher } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";
import { data, redirect } from "react-router";
import { nanoid } from "nanoid";
import { APP_PATH } from "@/lib/consts";
import { post } from "@/database/schema";
import { ensureAuthenticated } from "@/lib/utils.server";
import { slugify, zodErrorToFieldMessages } from "@/lib/utils";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const postSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(
      slugRegex,
      "Slug must contain only lowercase letters, numbers, and hyphens",
    ),
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
    slug: formData.get("slug")?.toString() || "",
    excerpt: formData.get("excerpt")?.toString() || "",
    content: formData.get("content")?.toString() || "",
    status: formData.get("status")?.toString() || "draft",
  };

  const result = postSchema.safeParse(values);
  if (!result.success) {
    const errorMessages = zodErrorToFieldMessages<BlogForm>(result.error);
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
        { error: "Post with this slug already exists." },
        { status: 400 },
      );
    }
    return data({ error: "Failed to create post." }, { status: 500 });
  }
}

type BlogForm = z.infer<typeof postSchema>;

export default function BlogNew({ actionData }: Route.ComponentProps) {
  const navigate = useNavigate();
  const fetcher = useFetcher<typeof actionData>();
  const busy = fetcher.state !== "idle";
  const submitError = fetcher.data;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<BlogForm>({
    resolver: zodResolver(postSchema),
    defaultValues: { status: "draft" },
  });

  const [slugManuallyEdited, setSlugManuallyEdited] = React.useState(false);

  const onSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isEmpty = e.target.value.trim() === "";
    setValue("slug", e.target.value);
    setSlugManuallyEdited(!isEmpty);
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("title", e.target.value);
    if (!slugManuallyEdited) {
      setValue("slug", slugify(e.target.value));
    }
  };

  const onSubmit = (data: BlogForm) => {
    fetcher.submit(data, {
      method: "post",
      action: window.location.pathname,
    });
  };

  const hasContent = Boolean(
    watch("title") || watch("excerpt") || watch("content") || watch("slug"),
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

  // Map client and server error messages to their respective fields
  const errorsObj: Record<string, string | undefined> = {
    error: undefined,
    title: errors.title?.message,
    slug: errors.slug?.message,
    excerpt: errors.excerpt?.message,
    content: errors.content?.message,
    status: errors.status?.message,
  };
  if (submitError) {
    Object.assign(errorsObj, submitError);
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text text-center">
        New Blog Post
      </h1>
      {errorsObj.error && (
        <div className="text-red-600 text-sm mb-4 text-center">
          {errorsObj.error}
        </div>
      )}
      <fetcher.Form
        method="post"
        className="space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Title"
          name="title"
          type="text"
          register={register}
          onChange={onTitleChange}
          placeholder="Enter post title"
          error={errorsObj.title}
        />
        <Input
          label="Slug"
          name="slug"
          type="text"
          register={register}
          onChange={onSlugChange}
          placeholder="post-title-slug"
          error={errorsObj.slug}
        />
        <Input
          label="Excerpt"
          name="excerpt"
          as="textarea"
          register={register}
          placeholder="Short summary (optional)"
          maxLength={200}
          error={errorsObj.excerpt}
        />
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
          {errorsObj.content && (
            <p className="text-red-500 text-sm mt-1">{errorsObj.content}</p>
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
          {errorsObj.status && (
            <p className="text-red-500 text-xs mt-1">{errorsObj.status}</p>
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

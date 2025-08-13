import React from "react";
import { Input } from "@/components/Input";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";
import { slugify } from "@/lib/utils";
import { z } from "zod";
import { useFetcher, useNavigate } from "react-router";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const blogSchema = z.object({
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
    .min(1, "Excerpt is required")
    .max(200, "Excerpt must be at most 200 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  status: z.enum(["draft", "published"]),
});

export type BlogFormValues = z.infer<typeof blogSchema>;

interface BlogFormProps {
  mode: "new" | "edit";
  initialValues?: Partial<BlogFormValues>;
  errorsObj?: Record<string, string | undefined>;
}

export const BlogForm: React.FC<BlogFormProps> = ({
  mode,
  initialValues = {},
}) => {
  const [slugManuallyEdited, setSlugManuallyEdited] = React.useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isDirty },
  } = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: initialValues,
  });
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const busy = fetcher.state !== "idle";
  const submitError = fetcher.data;

  const onSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (mode !== "new") return;

    const isEmpty = e.target.value.trim() === "";
    setValue("slug", e.target.value, { shouldDirty: true });
    setSlugManuallyEdited(!isEmpty);
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("title", e.target.value, { shouldDirty: true });

    if (mode !== "new") return;

    if (!slugManuallyEdited) {
      setValue("slug", slugify(e.target.value), { shouldDirty: true });
    }
  };

  const handleCancel = () => {
    if (
      !isDirty ||
      window.confirm(
        "You have unsaved changes. Are you sure you want to leave?",
      )
    ) {
      navigate("/app/blog");
    }
  };

  const onSubmit = (data: BlogFormValues) => {
    fetcher.submit(data, {
      method: "post",
      action: window.location.pathname,
    });
  };

  // Merge client and server errors
  const mergedErrors: Record<string, string | undefined> = {
    title: errors.title?.message,
    slug: errors.slug?.message,
    excerpt: errors.excerpt?.message,
    content: errors.content?.message,
    status: errors.status?.message,
    ...submitError,
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text text-center">
        {mode === "edit" ? "Edit" : "New"} Blog Post
      </h1>
      <fetcher.Form
        method="post"
        className="space-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        {mergedErrors.error && (
          <div className="text-red-600 text-sm mb-4 text-center">
            {mergedErrors.error}
          </div>
        )}
        <Input
          label="Title"
          name="title"
          type="text"
          register={register}
          onChange={onTitleChange}
          placeholder="Enter post title"
          error={mergedErrors.title}
        />
        <Input
          label="Slug"
          name="slug"
          type="text"
          readOnly={mode !== "new"}
          register={register}
          onChange={onSlugChange}
          placeholder="post-title-slug"
          error={mergedErrors.slug}
        />
        <Input
          label="Excerpt"
          name="excerpt"
          as="textarea"
          register={register}
          placeholder="Short summary"
          maxLength={200}
          error={mergedErrors.excerpt}
        />
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Content
          </label>
          <Controller
            name="content"
            control={control}
            defaultValue={initialValues.content ?? ""}
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
          {mergedErrors.content && (
            <p className="text-red-500 text-xs mt-1">{mergedErrors.content}</p>
          )}
        </div>
        <div>
          <label className="font-medium text-gray-700">
            <Controller
              name="status"
              control={control}
              defaultValue={initialValues.status ?? "draft"}
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
          {mergedErrors.status && (
            <p className="text-red-500 text-xs mt-1">{mergedErrors.status}</p>
          )}
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            disabled={busy}
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={busy}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            {busy ? "Saving..." : mode === "edit" ? "Save Changes" : "Save"}
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
};

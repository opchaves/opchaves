import type { Route } from "./+types/view";
import { post } from "@/database/schema";
import { and, eq } from "drizzle-orm";
import React from "react";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { useFetcher, Link, useNavigate } from "react-router";
import ReactMarkdown from "react-markdown";
import { ensureAuthenticated } from "@/lib/utils.server";

export const loader = async ({
  params,
  context,
  request,
}: Route.LoaderArgs) => {
  const session = await ensureAuthenticated({ context, request });
  const postData = await context.db
    .select()
    .from(post)
    .where(and(eq(post.id, params.id), eq(post.authorId, session.user.id)))
    .get();

  if (!postData) throw new Response("Not Found", { status: 404 });
  return postData;
};

export const action = async ({ request, context }: Route.ActionArgs) => {
  const session = await ensureAuthenticated({ context, request });
  const formData = await request.formData();

  const id = formData.get("id")?.toString();
  const isDeleteAction = formData.get("_action") === "delete";

  if (isDeleteAction && id) {
    await context.db
      .delete(post)
      .where(and(eq(post.id, id), eq(post.authorId, session.user.id)));

    return { success: true };
  }
  return { success: false };
};

export default function BlogView({ loaderData }: Route.ComponentProps) {
  const postData = loaderData;
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const [confirmDelete, setConfirmDelete] = React.useState(false);

  const handleDelete = () => {
    setConfirmDelete(true);
  };

  const confirmDeletePost = () => {
    const formData = new FormData();
    formData.append("id", postData.id);
    formData.append("_action", "delete");
    fetcher.submit(formData, { method: "post" });
    setConfirmDelete(false);
    navigate("/app/blog");
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="mb-6 flex justify-between items-center">
        <button
          onClick={() => navigate("/app/blog")}
          className="text-gray-600 hover:underline"
        >
          Posts
        </button>
        <div className="flex gap-2">
          <Link
            to={`/app/blog/${postData.id}/edit`}
            className="px-4 py-2 bg-blue-100 rounded hover:bg-blue-200 text-blue-800 font-medium"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-100 rounded hover:bg-red-200 text-red-800 font-medium"
          >
            Delete
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-2 text-gray-800">
        {postData.title}
      </h1>
      <div className="text-xs text-gray-400 mb-4">
        {new Date(postData.createdAt).toLocaleString()}
      </div>
      <div className="prose mb-8">
        <ReactMarkdown>{postData.content}</ReactMarkdown>
      </div>
      <ConfirmDialog
        open={confirmDelete}
        title="Confirm Delete"
        description={`Are you sure you want to delete "${postData.title}"?`}
        confirmLabel="Delete"
        cancelLabel="Cancel"
        danger
        onConfirm={confirmDeletePost}
        onCancel={() => setConfirmDelete(false)}
      />
    </div>
  );
}

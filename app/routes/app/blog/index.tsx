import React from "react";
import { useFetcher, Link } from "react-router";
import { post } from "@/database/schema";
import { desc, eq } from "drizzle-orm";
import type { Route } from "../blog/+types/index";

export async function loader({ context }: Route.LoaderArgs) {
  const posts = await context.db
    .select()
    .from(post)
    .orderBy(desc(post.createdAt));
  return posts;
}

export async function action({ request, context }: Route.ActionArgs) {
  const formData = await request.formData();
  const id = formData.get("id")?.toString();
  if (formData.get("_action") === "delete" && id) {
    await context.db.delete(post).where(eq(post.id, id));
    return { success: true };
  }
  return { success: false };
}

export default function BlogIndex({ loaderData }: Route.ComponentProps) {
  const posts = loaderData;
  const fetcher = useFetcher();
  const [confirmId, setConfirmId] = React.useState<string | null>(null);

  const handleDelete = (id: string) => {
    setConfirmId(id);
  };

  const confirmDelete = (id: string) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("_action", "delete");
    fetcher.submit(formData, { method: "post" });
    setConfirmId(null);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>
        <Link
          to="/app/blog/new"
          className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
        >
          + Add Post
        </Link>
      </div>
      {posts.length === 0 ? (
        <div className="text-gray-500">No posts found.</div>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post.id}
              className="border rounded-lg p-6 bg-white shadow flex flex-col md:flex-row md:items-center justify-between"
            >
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-2">{post.excerpt}</p>
                <span className="text-xs text-gray-400">
                  {new Date(post.createdAt).toLocaleString()}
                </span>
              </div>
              <div className="flex gap-3 mt-4 md:mt-0">
                <Link
                  to={`/app/blog/${post.id}`}
                  className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-800 font-medium"
                >
                  View
                </Link>
                <Link
                  to={`/app/blog/${post.id}/edit`}
                  className="px-4 py-2 bg-blue-100 rounded hover:bg-blue-200 text-blue-800 font-medium"
                >
                  Edit
                </Link>
                <button
                  className="px-4 py-2 bg-red-100 rounded hover:bg-red-200 text-red-800 font-medium"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
              {confirmId === post.id && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-bold mb-4">Confirm Delete</h3>
                    <p className="mb-4">
                      Are you sure you want to delete{" "}
                      <span className="font-semibold">{post.title}</span>?
                    </p>
                    <div className="flex gap-4 justify-end">
                      <button
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-800 font-medium"
                        onClick={() => setConfirmId(null)}
                      >
                        Cancel
                      </button>
                      <button
                        className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-white font-medium"
                        onClick={() => confirmDelete(post.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

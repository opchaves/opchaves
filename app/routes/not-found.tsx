import { NotFound, PublicError } from "@/components/not-found";
import type { Route } from "./+types/not-found";

export function loader() {
  throw new Response("Not Found", { status: 404 });
}

export function meta() {
  return [
    { title: "Not found - Paulo Chaves" },
    { name: "robots", content: "noindex" },
  ];
}

export default function NotFoundRoute() {
  return <NotFound />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return <PublicError error={error} />;
}

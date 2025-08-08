import type { Route } from "./+types/edit";

export default function BlogEdit({ params }: Route.LoaderArgs) {
  const { id } = params;
  return <div>Editing blog post {id}</div>;
}

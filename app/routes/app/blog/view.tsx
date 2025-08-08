import type { Route } from "./+types/view";

export default function BlogView({ params }: Route.LoaderArgs) {
  const { id } = params;
  return <div>Viewing blog post {id}</div>;
}

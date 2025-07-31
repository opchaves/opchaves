import { Outlet, redirect } from "react-router";
import type { Route } from "./+types/layout";
import { auth } from "@/lib/auth.server";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await auth.api.getSession({ headers: request.headers });

  if (session?.user) {
    return redirect("/dashboard", 303);
  }

  return null;
}

export default function AuthLayout({ loaderData }: Route.ComponentProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-4">
      <section className="w-full max-w-md bg-background rounded-xl shadow-lg p-8">
        <Outlet />
      </section>
    </main>
  );
}

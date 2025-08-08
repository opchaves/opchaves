import { Outlet, Link, redirect } from "react-router";
import type { Route } from "./+types/layout";
import { getAuth } from "@/lib/auth.server";
import { APP_PATH } from "@/lib/consts";

export async function loader({ request, context }: Route.LoaderArgs) {
  const session = await getAuth(context).api.getSession({
    headers: request.headers,
  });
  if (session?.user) {
    return redirect(APP_PATH, 303);
  }
  return null;
}

function AuthNavbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-10">
      <Link to="/" className="text-xl font-bold tracking-tight text-indigo-700">
        Paulo Chaves
      </Link>
    </nav>
  );
}

function AuthFooter() {
  return (
    <footer className="w-full py-6 text-center text-gray-500 border-t mt-12">
      <div className="mb-2">
        <a
          href="https://github.com/opchaves"
          target="_blank"
          rel="noopener"
          className="mx-2 hover:text-indigo-600"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/opchaves"
          target="_blank"
          rel="noopener"
          className="mx-2 hover:text-indigo-600"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/opchaves"
          target="_blank"
          rel="noopener"
          className="mx-2 hover:text-indigo-600"
        >
          X
        </a>
      </div>
      <div className="text-xs">
        &copy; {new Date().getFullYear()} Paulo Chaves. All rights reserved.
      </div>
    </footer>
  );
}

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AuthNavbar />
      <main className="flex-1 flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <section className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <Outlet />
        </section>
      </main>
      <AuthFooter />
    </div>
  );
}

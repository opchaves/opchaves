import { signOut } from "../../lib/auth-client";
import React, { useState } from "react";
import { Link, Outlet, redirect, useNavigate } from "react-router";
import type { Route } from "./+types/layout";
import { getAuth } from "@/lib/auth.server";

// Placeholder icons and avatar (replace with shadcn/ui or your icon library)
const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Avatar = ({ src }: { src?: string }) => (
  <img
    src={src || "https://ui.shadcn.com/avatars/01.png"} // Default avatar if none provided
    alt="avatar"
    className="w-8 h-8 rounded-full border border-gray-200"
  />
);

export async function loader({ request, context }: Route.LoaderArgs) {
  const session = await getAuth(context).api.getSession({
    headers: request.headers,
  });

  if (!session?.user) {
    return redirect("/auth/login"); // Redirect to login if not authenticated
  }

  return session?.user;
}

export default function DashboardLayout({ loaderData }: Route.ComponentProps) {
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [avatarDropdown, setAvatarDropdown] = useState(false);

  const image = loaderData.image || "https://ui.shadcn.com/avatars/01.png";

  // Responsive: close drawer by default on mobile
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setDrawerOpen(!mq.matches);
    const handler = (e: MediaQueryListEvent) => setDrawerOpen(!e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleSignOut = async () => {
    setAvatarDropdown(false);
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          // TODO: is `replace:true` the same as push?
          navigate("/auth/login", { replace: true });
        },
      },
    });
  };

  return (
    <div className="flex h-screen bg-muted">
      {/* Drawer */}
      <div
        className={`fixed z-30 inset-y-0 left-0 w-64 bg-white border-r border-gray-200 shadow-lg transform transition-transform duration-200 ease-in-out
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:w-64 md:block`}
      >
        <div className="flex items-center justify-between h-16 px-5 border-b">
          <span className="font-bold text-lg">Dashboard</span>
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close drawer"
          >
            <CloseIcon />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          <Link
            to="/dashboard"
            className="block px-2 py-2 rounded hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/dashboard/settings"
            className="block px-2 py-2 rounded hover:bg-gray-100"
          >
            Settings
          </Link>
        </nav>
      </div>

      {/* Overlay for mobile drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/30 md:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar */}
        <header className="flex items-center justify-between px-4 h-16 border-b bg-white">
          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 rounded hover:bg-gray-100"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open drawer"
            >
              <MenuIcon />
            </button>
            <Link to="/dashboard" className="flex items-center gap-2">
              <span className="font-bold text-lg hidden sm:block">
                KomMonei
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50"
            />
            <div className="relative">
              <button
                className="focus:outline-none"
                onClick={() => setAvatarDropdown((v) => !v)}
                aria-label="Open avatar menu"
              >
                <Avatar src={image} />
              </button>
              {avatarDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50">
                  <Link
                    to="/dashboard/settings"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    onClick={() => setAvatarDropdown(false)}
                  >
                    Settings
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

import CaretDownIcon from "@/components/icons/caret-down";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Blog", to: "/blog" },
    { name: "Resume", to: "/resume" },
    { name: "Sign in", to: "/auth/login" },
  ];

  const selected =
    menuItems.find((m) => m.to === location.pathname) || menuItems[0];

  const activePath = (val: string) =>
    val === location.pathname ? "text-gray-900 font-semibold" : "";

  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-10">
      <Link to="/" className="text-xl font-bold tracking-tight text-gray-800">
        OpChaves
      </Link>
      {/* Desktop menu */}
      <div className="hidden sm:flex gap-6 items-center text-gray-800">
        <Link
          to="/"
          className={`hover:text-gray-800 font-medium ${activePath("/")}`}
        >
          Home
        </Link>
        <Link
          to="/blog"
          className={`hover:text-gray-800 font-medium ${activePath("/blog")}`}
        >
          Blog
        </Link>
        <Link
          to="/resume"
          className={`hover:text-gray-800 font-medium ${activePath("/resume")}`}
        >
          Resume
        </Link>
        <Link
          to="/auth/login"
          className="ml-4 px-4 py-1 rounded bg-gray-600 text-white hover:bg-gray-800 font-semibold"
        >
          Sign in
        </Link>
      </div>
      {/* Mobile dropdown */}
      <div className="sm:hidden relative">
        <button
          className="flex items-center gap-2 px-3 py-2 rounded border border-gray-300 bg-white text-gray-800"
          onClick={() => setMenuOpen((open) => !open)}
          aria-haspopup="true"
          aria-expanded={menuOpen}
        >
          <span>{selected.name}</span>
          <CaretDownIcon rotate={menuOpen} />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded shadow-lg z-20">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`block px-4 py-4 text-sm text-gray-700 ${
                  selected.name === item.name
                    ? "bg-gray-200 text-gray-800 font-semibold"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-6 text-center text-gray-600 border-t mt-12">
      <div className="max-w-3xl mx-auto mb-2">
        <a
          href="https://x.com/opchaves"
          target="_blank"
          rel="noopener"
          className="mx-2 hover:text-gray-800"
        >
          X
        </a>
        <a
          href="https://linkedin.com/in/opchaves"
          target="_blank"
          rel="noopener"
          className="mx-2 hover:text-gray-800"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/opchaves"
          target="_blank"
          rel="noopener"
          className="mx-2 hover:text-gray-800"
        >
          GitHub
        </a>
        <a
          href="https://youtube.com/@opchaves"
          target="_blank"
          rel="noopener"
          className="mx-2 hover:text-gray-800"
        >
          YouTube
        </a>
      </div>
      <div className="max-w-3xl mx-auto text-xs">
        &copy; {new Date().getFullYear()} Paulo Chaves. All rights reserved.
      </div>
    </footer>
  );
}

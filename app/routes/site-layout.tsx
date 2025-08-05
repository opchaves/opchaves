import { Link, Outlet } from "react-router";

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-10">
      <Link to="/" className="text-xl font-bold tracking-tight text-indigo-700">Paulo Chaves</Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-indigo-600 font-medium">Home</Link>
        <Link to="/blog" className="hover:text-indigo-600 font-medium">Blog</Link>
        <Link to="/about" className="hover:text-indigo-600 font-medium">About</Link>
        <Link to="/resume" className="hover:text-indigo-600 font-medium">Resume</Link>
        <Link to="/auth/login" className="ml-4 px-4 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 font-semibold">Sign in</Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-6 text-center text-gray-500 border-t mt-12">
      <div className="mb-2">
        <a href="https://github.com/opchaves" target="_blank" rel="noopener" className="mx-2 hover:text-indigo-600">GitHub</a>
        <a href="https://linkedin.com/in/opchaves" target="_blank" rel="noopener" className="mx-2 hover:text-indigo-600">LinkedIn</a>
        <a href="mailto:paulo@opchaves.com" className="mx-2 hover:text-indigo-600">Email</a>
      </div>
      <div className="text-xs">&copy; {new Date().getFullYear()} Paulo Chaves. All rights reserved.</div>
    </footer>
  );
}

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

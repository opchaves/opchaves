import { PublicError } from "@/components/not-found";
import { pageMeta } from "@/lib/site";
import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta() {
  return pageMeta({
    title: "Paulo Chaves – Senior Software Engineer",
    description:
      "Senior software engineer. Most of my work is backend, especially databases, and a large share of it is React. Node.js and TypeScript.",
    path: "/",
  });
}

const links: Array<
  { label: string; to: string } | { label: string; href: string }
> = [
  { label: "Resume", to: "/resume" },
  { label: "Blog", to: "/blog" },
  { label: "GitHub", href: "https://github.com/opchaves" },
  { label: "LinkedIn", href: "https://linkedin.com/in/opchaves" },
  { label: "X", href: "https://x.com/opchaves" },
  { label: "YouTube", href: "https://youtube.com/@opchaves" },
];

const skills = [
  {
    label: "Languages",
    items: "TypeScript, JavaScript, Node.js, Ruby, SQL",
  },
  {
    label: "Frameworks",
    items: "React, React Native, Expo, Next.js, Ruby on Rails",
  },
  {
    label: "Backend",
    items:
      "PostgreSQL, Supabase, MongoDB, Redis, REST, GraphQL, transactions, distributed locks",
  },
  {
    label: "Infrastructure",
    items: "Docker, Kubernetes, GCP, GitHub Actions, Playwright",
  },
];

const linkClass =
  "text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900";

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return <PublicError error={error} />;
}

export default function Home() {
  return (
    <article className="mx-auto max-w-2xl px-8 pt-16 pb-8">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        Paulo Chaves
      </h1>
      <p className="mt-1 text-gray-500">Senior Software Engineer</p>
      <p className="mt-6 text-lg leading-relaxed text-gray-700">
        Most of my work is backend, especially databases and the services around
        them. A large share of what I ship is React. Node.js and TypeScript,
        after ten years of full-stack work.
      </p>
      <ul className="mt-6 flex flex-wrap text-sm">
        {links.map((link) => (
          <li
            key={link.label}
            className="after:mx-2 after:text-gray-300 after:content-['·'] last:after:content-none"
          >
            {"to" in link ? (
              <Link to={link.to} className={linkClass}>
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
      <dl className="mt-14 space-y-4 text-sm leading-relaxed">
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="sm:grid sm:grid-cols-[9.5rem_1fr] sm:gap-x-6"
          >
            <dt className="text-gray-500">{skill.label}</dt>
            <dd className="text-gray-800">{skill.items}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

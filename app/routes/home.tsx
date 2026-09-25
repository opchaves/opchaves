import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";
import XIcon from "@/components/icons/x";
import YoutubeIcon from "@/components/icons/youtube";

export function meta() {
  return [
    { title: "Paulo Chaves – Senior Software Engineer" },
    {
      name: "description",
      content:
        "Senior software engineer. Most of my work is backend, especially databases, and a large share of it is React. Node.js and TypeScript.",
    },
  ];
}

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[45vh] text-center px-4 max-w-4xl mx-auto pt-16 pb-8">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3 text-slate-900">
        Paulo Chaves
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-slate-500">
        Senior Software Engineer
      </h2>
      <p className="max-w-2xl text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
        Most of my work is backend, especially databases and the services around
        them. A large share of what I ship is React. Node.js and TypeScript,
        after ten years of full-stack work.
      </p>
      <div>
        <a
          href="/resume"
          className="inline-block bg-slate-900 text-white px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-all font-medium text-sm shadow-sm"
        >
          View Full Resume
        </a>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: "TypeScript, JavaScript, Node.js, Ruby, SQL",
    },
    {
      title: "Frameworks",
      skills: "React, React Native, Expo, Next.js, Ruby on Rails",
    },
    {
      title: "Backend",
      skills:
        "PostgreSQL, Supabase, MongoDB, Redis, REST, GraphQL, transactions, distributed locks",
    },
    {
      title: "Infrastructure",
      skills: "Docker, Kubernetes, GCP, GitHub Actions, Playwright",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto pb-20 pt-8 px-4 border-t border-slate-100">
      <h3 className="text-2xl font-bold mb-8 text-slate-900 text-center">
        Technical Skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-5 bg-slate-50/50 border border-slate-100 rounded-xl hover:shadow-md hover:bg-slate-50 transition-all"
          >
            <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wider">
              {category.title}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {category.skills}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SocialLinksSection() {
  const links = [
    { href: "https://x.com/opchaves", icon: <XIcon />, label: "X (Twitter)" },
    {
      href: "https://linkedin.com/in/opchaves",
      icon: <LinkedInIcon />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/opchaves",
      icon: <GithubIcon />,
      label: "GitHub",
    },
    {
      href: "https://youtube.com/@opchaves",
      icon: <YoutubeIcon />,
      label: "YouTube",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto pb-12 pt-3 px-4">
      <h3 className="text-lg font-bold mb-4 text-center text-slate-900">
        Let's Connect
      </h3>
      <div className="flex gap-4 justify-center">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener"
            aria-label={link.label}
            className="text-slate-500 hover:text-slate-900 p-2.5 rounded-full hover:bg-slate-100 transition-all text-xl"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <SocialLinksSection />
      <SkillsSection />
    </main>
  );
}

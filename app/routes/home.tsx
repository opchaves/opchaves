import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";
import XIcon from "@/components/icons/x";
import YoutubeIcon from "@/components/icons/youtube";

export function meta() {
  return [
    { title: "Paulo Chaves – Senior Fullstack Developer" },
    {
      name: "description",
      content: [
        "Senior Developer with over 10 years of experience, specializing in backend development",
        "with Node.js, developing REST and GraphQL APIs. Skilled in the development of dynamic and modern UIs",
        "to enable efficient, scalable, and maintainable solutions in web applications using React.js and TypeScript.",
      ].join(" "),
    },
  ];
}

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 mt-10 sm:mt-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text">
        Paulo Chaves
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
        Senior Fullstack Developer
      </h2>
      <p className="max-w-3xl text-lg md:text-xl text-gray-600 mb-8">
        Senior Developer with over 10 years of experience, specializing in
        backend development with{" "}
        <span className="font-semibold text-indigo-600">Node.js</span>,{" "}
        developing REST and GraphQL APIs. Skilled in the development of dynamic
        and modern UIs to enable efficient, scalable, and maintainable solutions
        in web applications using{" "}
        <span className="font-semibold text-indigo-600">React.js</span> and{" "}
        <span className="font-semibold text-indigo-600">TypeScript</span>.
      </p>

      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-800 border">
          Node.js
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-800 border">
          React
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-800 border">
          TypeScript
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-800 border">
          PostgreSQL
        </span>
      </div>
      <div className="flex gap-4 justify-center">
        <a
          href="https://github.com/opchaves"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          className="text-gray-500 hover:text-indigo-600 text-2xl"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/opchaves"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          className="text-gray-500 hover:text-indigo-600 text-2xl"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:paulo@opchaves.com"
          className="text-gray-500 hover:text-indigo-600 text-2xl"
          aria-label="Email"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="max-w-3xl mx-auto pb-12 pt-3 px-4">
      <h3 className="text-xl font-bold mb-4 text-indigo-700">Skills</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <li>
          <span className="font-semibold">Backend:</span> Node.js, TypeScript,
          PostgreSQL, REST, GraphQL, MongoDB, Docker
        </li>
        <li>
          <span className="font-semibold">Frontend:</span> React, React Router,
          Redux, Tailwind CSS, AntD, UI/UX, SSR, SPA
        </li>
      </ul>
    </section>
  );
}

function SocialLinksSection() {
  return (
    <section className="max-w-3xl mx-auto pb-12 pt-3 px-4">
      <h3 className="text-xl font-bold mb-4 text-indigo-700 text-center">
        Let's Connect
      </h3>
      <div className="flex gap-6 justify-center">
        <a
          href="https://x.com/opchaves"
          target="_blank"
          rel="noopener"
          aria-label="X (Twitter)"
          className="text-gray-500 hover:text-indigo-600 text-2xl"
        >
          <XIcon />
        </a>
        <a
          href="https://linkedin.com/in/opchaves"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          className="text-gray-500 hover:text-indigo-600 text-2xl"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/opchaves"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          className="text-gray-500 hover:text-indigo-600 text-2xl"
        >
          <GithubIcon />
        </a>
        <a
          href="https://youtube.com/@opchaves"
          target="_blank"
          rel="noopener"
          aria-label="YouTube"
          className="text-gray-500 hover:text-indigo-600 text-2xl"
        >
          <YoutubeIcon />
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialLinksSection />
      <SkillsSection />
    </>
  );
}

export function meta() {
  return [
    { title: "Paulo Chaves – Senior Fullstack Developer" },
    {
      name: "description",
      content:
        "Paulo Chaves is a senior fullstack developer specializing in Node.js, React, TypeScript, and PostgreSQL. Stronger on the backend, but passionate about frontend as well.",
    },
  ];
}

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text">
        Paulo Chaves
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
        Senior Fullstack Developer
      </h2>
      <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-8">
        I build robust, scalable web applications with{" "}
        <span className="font-semibold text-indigo-600">Node.js</span>,{" "}
        <span className="font-semibold text-blue-600">React</span>,{" "}
        <span className="font-semibold text-sky-600">TypeScript</span>, and{" "}
        <span className="font-semibold text-teal-600">PostgreSQL</span>.<br />
        Stronger on the backend, but I love crafting great frontend experiences
        too.
      </p>
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800 border">
          Node.js
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800 border">
          React
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800 border">
          TypeScript
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800 border">
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
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h3 className="text-xl font-bold mb-4 text-indigo-700">Skills & Focus</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <li>
          <span className="font-semibold">Backend:</span> Node.js, TypeScript,
          PostgreSQL, REST, GraphQL, Auth, Testing, DevOps
        </li>
        <li>
          <span className="font-semibold">Frontend:</span> React, Next.js,
          Remix, Tailwind CSS, UI/UX, SSR, SPA
        </li>
        <li>
          <span className="font-semibold">Other:</span> Docker, CI/CD, Cloud,
          Linux, Mentoring
        </li>
        <li>
          <span className="font-semibold">Soft Skills:</span> Communication,
          Leadership, Problem Solving
        </li>
      </ul>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h3 className="text-xl font-bold mb-4 text-indigo-700">
        Highlighted Projects
      </h3>
      <ul className="space-y-4">
        <li>
          <a
            href="https://github.com/opchaves/better-auth"
            target="_blank"
            rel="noopener"
            className="text-indigo-600 hover:underline font-semibold"
          >
            better-auth
          </a>{" "}
          – Modern authentication for Node.js/React apps
        </li>
        <li>
          <a
            href="https://github.com/opchaves/drizzle-seed"
            target="_blank"
            rel="noopener"
            className="text-indigo-600 hover:underline font-semibold"
          >
            drizzle-seed
          </a>{" "}
          – Type-safe seeding for Drizzle ORM
        </li>
        <li>
          <a
            href="https://github.com/opchaves/"
            target="_blank"
            rel="noopener"
            className="text-indigo-600 hover:underline font-semibold"
          >
            More on GitHub…
          </a>
        </li>
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}

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
    <section className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text">
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
          {/* X (Twitter) SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M17.53 3H21.25L13.62 10.87L22.5 21H16.08L10.77 14.68L4.77 21H1L9.08 12.56L0.5 3H7.08L11.88 8.74L17.53 3ZM16.38 19.13H18.19L6.72 4.76H4.78L16.38 19.13Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/opchaves"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          className="text-gray-500 hover:text-indigo-600 text-2xl"
        >
          {/* LinkedIn SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v5.64z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://github.com/opchaves"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          className="text-gray-500 hover:text-indigo-600 text-2xl"
        >
          {/* GitHub SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://youtube.com/@opchaves"
          target="_blank"
          rel="noopener"
          aria-label="YouTube"
          className="text-gray-500 hover:text-indigo-600 text-2xl"
        >
          {/* YouTube SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 16.02V7.98l7.273 4.02-7.273 4.02z"
              fill="currentColor"
            />
          </svg>
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

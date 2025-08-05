import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";

export function meta() {
  return [
    { title: "Resume - Paulo Chaves" },
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

export default function Resume() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold mb-1">
          Paulo Chaves da Silva Filho
        </h1>
        <h2 className="text-xl font-semibold mb-2">
          Senior Fullstack Developer
        </h2>
        <div className="flex flex-wrap items-center gap-4 text-gray-700 text-sm mb-2">
          <a
            href="https://opchaves.com"
            target="_blank"
            rel="noopener"
            className="hover:underline text-sm"
          >
            opchaves.com
          </a>
          <a
            href="https://github.com/opchaves"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1 hover:text-indigo-600"
            aria-label="GitHub"
          >
            <GithubIcon width={20} height={20} /> Github
          </a>
          <a
            href="https://linkedin.com/in/opchaves"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1 hover:text-indigo-600"
            aria-label="LinkedIn"
          >
            <LinkedInIcon width={20} height={20} /> LinkedIn
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-gray-700 text-sm mb-2">
          <a
            href="mailto:opaulochaves@gmail.com"
            className="hover:text-indigo-600"
            aria-label="Email"
          >
            opaulochaves@gmail.com
          </a>
          <span>Teresina-PI, Brasil</span>
        </div>
      </header>

      <section className="mb-8">
        <h3 className="text-lg font-bold mb-2 text-indigo-700">Summary</h3>
        <p>
          Senior Developer with over 10 years of experience, specializing in
          backend development with Node.js, developing REST and GraphQL APIs.
          Skilled in the development of dynamic and modern UIs to enable
          efficient, scalable, and maintainable solutions in web applications
          using React.js and TypeScript.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold mb-2 text-indigo-700">Skills</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold">Backend:</span> Node.js, TypeScript,
            PostgreSQL, REST, GraphQL, MongoDB, Docker
          </li>
          <li>
            <span className="font-semibold">Frontend:</span> React, React
            Router, Redux, Tailwind CSS, AntD, UI/UX, SSR, SPA
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold mb-2 text-indigo-700">Experience</h3>
        <div className="mb-4">
          <div className="font-semibold">
            Senior Fullstack Developer (Remote | Contractor) at Thunkable
          </div>
          <div className="text-sm text-gray-600 mb-1">
            April 2023 to Current
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Design and maintain scalable Node.js APIs using Express, GraphQL,
              and REST, integrated with MongoDB and Redis.
            </li>
            <li>
              Integrate third-party tools (e.g., Airtable, Firebase) into
              backend infrastructure.
            </li>
            <li>
              Develop React.js-based frontend interfaces with AntD and Redux.
            </li>
            <li>Collaborate with QA to author Cypress E2E tests.</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-semibold">Software Engineer at BairesDev</div>
          <div className="text-sm text-gray-600 mb-1">
            July 2020 to December 2022
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Enhanced Canvas LMS components (e.g., Gradebook) at Instructure
              using Rails and React.js.
            </li>
            <li>
              Supported A/B testing at BrooksBell with JavaScript and Adobe
              Target.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-semibold">Software Engineer at Movinga</div>
          <div className="text-sm text-gray-600 mb-1">
            August 2019 to March 2020
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Migrated Rails backend to Node.js with Express for improved
              scalability.
            </li>
            <li>Built UIs with Next.js and Material-UI.</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-bold mb-2 text-indigo-700">Education</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Computer Science, Loyola University Chicago – 2014 - 2015</li>
          <li>
            Systems Analysis and Development, Federal Institute of Technology in
            Piaui – 2013 - 2019
          </li>
        </ul>
      </section>
    </main>
  );
}

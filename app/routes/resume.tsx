import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";

export function meta() {
  return [
    { title: "Resume - Paulo Chaves" },
    {
      name: "description",
      content: [
        "Senior Software Engineer with 10+ years of experience.",
        "Currently architecting AI-driven platforms at Thunkable to enable",
        "natural language app generation. Main stack is Node.js, React, and",
        "Ruby on Rails with an AI-augmented development using Claude Code.",
      ].join(" "),
    },
  ];
}

export default function Resume() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-900">
      <div id="resume">
        <header className="mb-5">
          <h1 className="text-3xl font-extrabold mb-1">
            Paulo Chaves da Silva Filho
          </h1>
          <h2 className="text-xl font-semibold mb-2">
            Senior Software Engineer
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-sm mb-2">
            <a
              href="https://opchaves.com"
              target="_blank"
              rel="noopener"
              className="hover:underline text-sm"
            >
              opchaves.com
            </a>
            <a
              href="mailto:paulo@opchaves.com"
              className="hover:underline"
              aria-label="Email"
            >
              paulo@opchaves.com
            </a>
            <a
              href="https://github.com/opchaves"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1 hover:underline"
              aria-label="GitHub"
            >
              <GithubIcon width={20} height={20} /> Github
            </a>
            <a
              href="https://linkedin.com/in/opchaves"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1 hover:underline"
              aria-label="LinkedIn"
            >
              <LinkedInIcon width={20} height={20} /> LinkedIn
            </a>
          </div>
        </header>

        <section className="mb-5">
          <h3 className="text-lg font-bold mb-2">Summary</h3>
          <p>
            Senior Software Engineer with 10+ years of experience. Currently
            architecting AI-driven platforms at Thunkable to enable natural
            language app generation. Main stack is Node.js, React, and Ruby on
            Rails with an AI-augmented development using Claude Code.
          </p>
        </section>

        <section className="mb-5">
          <h3 className="text-lg font-bold mb-2">Skills</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">AI & LLM:</span> Claude Code,
              ChatGPT, Codex, Prompt Engineering, AI-Augmented Development
            </li>
            <li>
              <span className="font-semibold">Backend:</span> Node.js,
              TypeScript, Ruby on Rails, PostgreSQL, MongoDB, Redis, REST,
              GraphQL
            </li>
            <li>
              <span className="font-semibold">Frontend:</span> React.js, React
              Router, Next.js, Vite, Tailwind CSS, TypeScript, UI/UX
            </li>
            <li>
              <span className="font-semibold">Infrastructure & Ops:</span>{" "}
              Docker, Kubernetes, GCP, CI/CD (GitHub Actions), Git
            </li>
            <li>
              <span className="font-semibold">Testing:</span> Playwright,
              Cypress, Jest, Vitest, Truffle
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h3 className="text-lg font-bold mb-2">Experience</h3>
          <div className="mb-4">
            <div className="font-semibold">
              Senior Software Engineer at Thunkable
            </div>
            <div className="text-xs text-gray-600 my-1">
              April 2023 to Current
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Architect and develop AI-driven features using LLMs (Claude,
                ChatGPT) to transition the platform to a natural language
                interface.
              </li>
              <li>
                Maintain scalable Node.js backends with REST/GraphQL,
                integrating Google Sheets, Airtable, and Baserow for dynamic
                apps.
              </li>
              <li>
                Optimize infrastructure using Docker and Kubernetes to enable
                cross-platform app generation (React Native, Expo).
              </li>
              <li>
                Lead end-to-end feature development across database, backend,
                frontend (React, TypeScript), and mobile components.
              </li>
              <li>
                Improve operational efficiency by optimizing MongoDB performance
                and backend processes.
              </li>
              <li>
                Ensure reliability through comprehensive end-to-end testing with
                Playwright.
              </li>
              <li>
                <span className="font-semibold text-xs">Technologies:</span>{" "}
                Node.js, TypeScript, React, GraphQL, LLMs, Docker, Kubernetes,
                MongoDB, Redis.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="font-semibold">Software Engineer at BairesDev</div>
            <div className="text-xs text-gray-600 my-1">
              July 2020 to December 2022
            </div>
            <div className="text-sm mb-2 italic">
              Consulting for North American tech companies.
            </div>

            <div className="mb-3">
              <div className="font-medium text-sm">
                Blazer (formerly Brooks Bell) — Frontend Developer
              </div>
              <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
                <li>
                  Architected 50+ high-traffic A/B tests using Vanilla JS and
                  jQuery via Adobe Target, optimizing UI/UX without direct
                  source access.
                </li>
                <li>
                  Eliminated "content flicker" by optimizing script execution
                  for sub-second delivery on production sites.
                </li>
              </ul>
            </div>

            <div>
              <div className="font-medium text-sm">
                Instructure — Software Engineer
              </div>
              <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
                <li>
                  Enhanced core Canvas LMS components using Ruby on Rails,
                  React, and TypeScript.
                </li>
                <li>
                  Developed RESTful APIs and complex data models, contributing
                  to the full feature lifecycle for millions of users.
                </li>
                <li>
                  Built accessible (WCAG) and internationalized (i18n) web
                  experiences for a global audience.
                </li>
                <li>
                  <span className="font-semibold text-xs">Technologies:</span>{" "}
                  Ruby on Rails, React, TypeScript, PostgreSQL, AWS, Docker.
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <div className="font-semibold">
              Senior Fullstack Developer (Remote) at Movinga
            </div>
            <div className="text-xs text-gray-600 my-1">
              August 2019 to March 2020
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Developed scalable UIs with Next.js and React, migrating the
                site to a headless CMS (Gatsby).
              </li>
              <li>
                Built Node.js/Rails backends and integrated Salesforce APIs
                while establishing engineering best practices.
              </li>
              <li>
                <span className="font-semibold text-xs">Technologies:</span>{" "}
                Node.js, React, Gatsby, Rails, Postgres, Redis.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="font-semibold">
              Blockchain Engineer (Remote) at Lucidity Tech
            </div>
            <div className="text-xs text-gray-600 my-1">
              February 2018 to April 2019
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Developed high-throughput event processing pipelines using
                Ethereum, Smart Contracts, and Node.js/Ruby APIs.
              </li>
              <li>
                Built React.js frontends and wrote automated tests for Solidity
                contracts using Truffle.
              </li>
              <li>
                <span className="font-semibold text-xs">Technologies:</span>{" "}
                Node.js, Ruby, Ethereum, Solidity, React, Truffle.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="font-semibold">
              Software Engineer at Codeminer42
            </div>
            <div className="text-xs text-gray-600 my-1">
              January 2018 to April 2019
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Collaborated with international customers to deliver scalable
                solutions using JavaScript and Ruby.
              </li>
              <li>
                Acted as a consultant for Lucidity Tech, specializing in
                blockchain and full-stack development.
              </li>
              <li>
                <span className="font-semibold text-xs">Technologies:</span>{" "}
                JavaScript, Ruby, Ruby on Rails, REST APIs.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="font-semibold">Software Developer at SEFAZ-PI</div>
            <div className="text-xs text-gray-600 my-1">
              September 2016 to April 2017
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Developed high-performance batch jobs using Python to parse
                millions of records from Oracle to MongoDB.
              </li>
              <li>
                Managed MongoDB replica sets for data persistence and
                operational efficiency.
              </li>
              <li>
                <span className="font-semibold text-xs">Technologies:</span>{" "}
                Python, Oracle, MongoDB, Shell Scripting.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="font-semibold">
              Full-Stack Developer at Tartigrado Tecnologia
            </div>
            <div className="text-xs text-gray-600 my-1">
              January 2016 to June 2016
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Modernized legacy Java/Struts2 applications by integrating
                Spring Framework, AngularJS, and REST APIs.
              </li>
              <li>
                <span className="font-semibold text-xs">Technologies:</span>{" "}
                Java, Spring, Hibernate, Angular.js, REST.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="font-semibold">
              Full-Stack Developer at Supra Tecnologia
            </div>
            <div className="text-xs text-gray-600 my-1">
              January 2010 to December 2012
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Developed a PHP-based scheduling system for 1M+ users and led
                the migration from MySQL to PostgreSQL with Git adoption.
              </li>
              <li>
                <span className="font-semibold text-xs">Technologies:</span>{" "}
                PHP, PostgreSQL, JavaScript, Git.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">Education</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Computer Science, Loyola University Chicago – 2014 - 2015</li>
            <li>
              Systems Analysis and Development, Federal Institute of Technology
              in Piaui – 2013 - 2019
            </li>
          </ul>
        </section>
      </div>
      <div className="mt-10">
        <a
          href="#"
          className="ml-0 text-gray-800 hover:underline"
          onClick={(e) => {
            e.preventDefault();
            handlePrint();
          }}
        >
          Print
        </a>
        <a
          href="/assets/paulo-chaves-resume.pdf"
          className="ml-4 text-gray-800 hover:underline"
        >
          Download
        </a>
      </div>
    </main>
  );
}

function handlePrint() {
  const resume = document.getElementById("resume");
  if (!resume) return;

  const resumeContent = resume.innerHTML;
  const printWindow = window.open("", "", "width=800,height=600");
  const headContent = document.querySelector("head")?.innerHTML;

  if (!printWindow || !headContent) {
    console.error("Failed to open print window.");
    return;
  }

  printWindow.document.title = "paulo-chaves-resume";
  printWindow.document.write(`
    <html lang="en">
      <head>${headContent}</head>
      <body>${resumeContent}</body>
    </html>
  `);

  // wait a tiny bit for the content to load and apply styles to the print window
  setTimeout(() => {
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  }, 50);
}

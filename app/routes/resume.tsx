import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";

export function meta() {
  return [
    { title: "Resume - Paulo Chaves" },
    {
      name: "description",
      content: [
        "I’m a Senior Software Engineer with over 10 years of experience,",
        "specializing in building REST and GraphQL APIs with Node.js,",
        "powered by MongoDB, Postgres, and Redis. I also develop modern",
        "UIs with React.js leveraging TypeScript to deliver robust and highly",
        "efficient web applications. My focus is on creating efficient,",
        "maintainable solutions that drive business impact, from optimizing",
        "infrastructure to integrating tools like Google Sheets, Baserow, and Airtable.",
      ].join(" "),
    },
  ];
}

export default function Resume() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-900">
      <div id="resume">
        <header className="mb-8">
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
          <div className="flex flex-wrap items-center gap-4 text-sm mb-2">
            <a
              href="mailto:paulo@opchaves.com"
              className="hover:underline"
              aria-label="Email"
            >
              paulo@opchaves.com
            </a>
            <span>Teresina-PI, Brasil</span>
          </div>
        </header>

        <section className="mb-8">
          <h3 className="text-lg font-bold mb-2">Summary</h3>
          <p>
            I’m a Senior Software Engineer with over 10 years of experience,
            specializing in building REST and GraphQL APIs with Node.js, powered
            by MongoDB, Postgres, and Redis. I also develop modern UIs with
            React.js leveraging TypeScript to deliver robust and highly
            efficient web applications. My focus is on creating efficient,
            maintainable solutions that drive business impact, from optimizing
            infrastructure to integrating tools like Google Sheets, Baserow, and
            Airtable.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold mb-2">Skills</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">Backend:</span> Node.js,
              TypeScript, PostgreSQL, Ruby on Rails, REST, GraphQL, MongoDB,
              Docker
            </li>
            <li>
              <span className="font-semibold">Frontend:</span> React.js, React
              Router, Redux, Tailwind CSS, AntD, UI/UX, SSR, SPA
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-bold mb-2">Experience</h3>
          <div className="mb-4">
            <div className="font-semibold">
              Senior Software Engineer at Thunkable
            </div>
            <div className="text-xs text-gray-600 my-1">
              April 2023 to Current
            </div>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Architect and develop AI-driven application generation features
                using LLMs (Claude, ChatGPT) via APIs, transitioning the
                platform from Blockly/drag-and-drop to a natural language
                interface.
              </li>
              <li>
                Develop and maintain scalable Node.js backends with REST and
                GraphQL APIs, integrating data sources like Google Sheets,
                Airtable, and Baserow to power dynamic web, iOS, and Android
                applications.
              </li>
              <li>
                Build and optimize infrastructure using Docker and Kubernetes to
                enable seamless app generation across platforms (React Native,
                Expo).
              </li>
              <li>
                Lead end-to-end feature development, managing database, backend,
                frontend (React.js, TypeScript), and mobile components.
              </li>
              <li>
                Migrate extensive JavaScript codebases to TypeScript, enhancing
                maintainability and type safety.
              </li>
              <li>
                Optimize backend processes and MongoDB performance to improve
                operational efficiency and scalability.
              </li>
              <li>
                Implement end-to-end tests with Playwright, ensuring robust
                feature validation and application reliability.
              </li>
              <li>
                <span className="font-semibold text-xs">Technologies:</span>{" "}
                Node.js, TypeScript, React.js, GraphQL, LLMs (Claude, ChatGPT),
                Docker, Kubernetes, MongoDB.
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
                (Experimentation)
              </div>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>
                  Architected and injected 100+ high-traffic A/B tests using
                  Vanilla JavaScript and jQuery via Adobe Target, enabling rapid
                  experimentation without direct source code access.
                </li>
                <li>
                  Engineered complex UI/UX overrides on live production sites,
                  utilizing advanced DOM manipulation to re-structure page
                  layouts and functional components.
                </li>
                <li>
                  Eliminated "content flicker" and layout shifts by optimizing
                  script execution and leveraging Adobe Target's custom code
                  editor for sub-second delivery.
                </li>
              </ul>
            </div>

            <div>
              <div className="font-medium text-sm">
                Instructure — Software Engineer
              </div>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>
                  Enhanced core Canvas LMS components (e.g., Gradebook) using
                  Ruby on Rails, React, and TypeScript.
                </li>
                <li>
                  Developed RESTful APIs and complex data models in production
                  with Rails, utilizing ActiveRecord and background job
                  processing.
                </li>
                <li>
                  Contributed to feature development from start to finish,
                  clarifying requirements, scoping solutions, and collaborating
                  across disciplines to implement changes.
                </li>
                <li>
                  Built accessible (WCAG) and internationalized (i18n) web
                  experiences for a global audience of millions of users.
                </li>
                <li>
                  <span className="font-semibold text-xs">Technologies:</span>{" "}
                  Ruby on Rails, React.js, TypeScript, PostgreSQL, AWS, Docker.
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
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Work across the stack to develop scalable, performant and
                well-tested applications.
              </li>
              <li>
                Work on designing, building and maintaining efficient, reusable,
                and reliable code.
              </li>
              <li>Work on building UIs with Next.js and React.js.</li>
              <li>
                Work on migrating company's website to a headless CMS + Gatsby
                (JAM stack).
              </li>
              <li>
                Work on practicing and contributing to engineering best
                practices.
              </li>
              <li>
                Work on communicating and coordinating with fellow engineers,
                product owners, and users.
              </li>
              <li>
                Work on integrating Salesforce (API, views, reports) with
                Movinga services.
              </li>
              <li>
                <span className="font-semibold text-xs">Technologies:</span>{" "}
                Node.js, React.js, Gatsby, Rails, Postgres, Redis.
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
            <ul className="list-disc pl-5 space-y-1">
              <li>Work with Ethereum, Dapps, Smart Contracts, and Solidity.</li>
              <li>
                Develop an event processing pipeline that handles thousands of
                tracking events per second, stores them, transforms them, and
                forwards them to third party analytics services.
              </li>
              <li>
                Integrate large and complex data sets from multiple sources into
                a single unified system through APIs.
              </li>
              <li>Development of APIs using Node.js and Ruby.</li>
              <li>
                Write automated tests for Smart Contracts using Truffle and
                Mocha.
              </li>
              <li>Frontend development with React.js.</li>
              <li>
                <span className="font-semibold text-xs">Technologies:</span>{" "}
                Node.js, Ruby, Ethereum, Solidity, React.js, Truffle, Mocha.
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
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Build and maintain high-quality software for international
                customers and internal tools using JavaScript and Ruby.
              </li>
              <li>
                Collaborate with cross-functional teams to deliver scalable
                solutions following engineering best practices.
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
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Developed high-performance batch jobs for the Department of
                Taxation and Finance.
              </li>
              <li>
                Built Python scripts to parse tens of millions of CSV files
                stored as CLOBs in Oracle databases into JSON format.
              </li>
              <li>
                Configured and managed a three-node MongoDB replica set
                (primary, secondary, and arbiter) for data persistence.
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
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Developed a web application for a non-profit organization using
                Java and modern frameworks.
              </li>
              <li>
                Integrated Spring Framework into a legacy Struts2 application
                and implemented Spring Data to enhance database access and
                maintainability.
              </li>
              <li>
                Built new features using AngularJS for the frontend,
                communicating with the Struts2 backend via REST APIs.
              </li>
              <li>
                <span className="font-semibold text-xs">Technologies:</span>{" "}
                Java, Struts2, Spring, Hibernate, jQuery, Angular.js,
                Foundation.
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
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Developed a web application for the public health system,
                improving appointment and exam scheduling for over a million
                people.
              </li>
              <li>
                Responsible for the adoption and implementation of Git version
                control within the company.
              </li>
              <li>
                Led the refactoring of the system from MySQL with raw queries to
                PostgreSQL, introducing an ActiveRecord framework to abstract
                database access.
              </li>
              <li>
                <span className="font-semibold text-xs">Technologies:</span>{" "}
                PHP, MySQL, PostgreSQL, JavaScript, HTML, CSS, Git.
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

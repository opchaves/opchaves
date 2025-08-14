import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";

export function meta() {
  return [
    { title: "Resume - Paulo Chaves" },
    {
      name: "description",
      content: [
        "I’m a Senior Full Stack Engineer with over 10 years of experience,",
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
            Senior Full Stack Engineer
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
            I’m a Senior Full Stack Engineer with over 10 years of experience,
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
              Senior Fullstack Developer (Remote | Contractor) at Thunkable
            </div>
            <div className="text-xs text-gray-600 my-1">
              April 2023 to Current
            </div>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Develop and maintain scalable Node.js backends with REST and
                GraphQL APIs, integrating data sources like Google Sheets,
                Airtable, and Baserow to power dynamic web, iOS, and Android
                applications.
              </li>
              <li>
                Build and optimize infrastructure using Docker and Kubernetes to
                enable seamless app generation across platforms.
              </li>
              <li>
                Lead end-to-end feature development, managing database, backend,
                frontend (React.js, TypeScript), and mobile (React Native, Expo)
                components.
              </li>
              <li>
                Migrate extensive JavaScript codebases to TypeScript, enhancing
                maintainability and type safety.
              </li>
              <li>
                Optimize backend processes to reduce GCP storage costs,
                improving operational efficiency.
              </li>
              <li>
                Enhance MongoDB performance by optimizing queries, enabling
                replica sets, and managing version upgrades for reliability and
                scalability.
              </li>
              <li>
                Implement end-to-end tests with Cypress, ensuring robust feature
                validation and application reliability.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="font-semibold">Software Engineer at BairesDev</div>
            <div className="text-xs text-gray-600 my-1">
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
            <div className="text-xs text-gray-600 my-1">
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

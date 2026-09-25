import type { ReactNode } from "react";
import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";

export function meta() {
  return [
    { title: "Resume - Paulo Chaves" },
    {
      name: "description",
      content:
        "Senior software engineer, backend-focused, with a large share of the work in React. At Thunkable AI: Supabase, Postgres, and platform MongoDB. Before that, Rails and React on Canvas LMS.",
    },
  ];
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-sm font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
      {children}
    </h3>
  );
}

function Job({
  title,
  dates,
  note,
  children,
}: {
  title: string;
  dates: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <article className="mb-4 break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-xs text-gray-600 shrink-0">{dates}</p>
      </div>
      {note ? <p className="text-sm text-gray-700 mt-0.5">{note}</p> : null}
      {children}
    </article>
  );
}

function Bullets({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">{children}</ul>;
}

export default function Resume() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-900 print:max-w-none print:px-0 print:py-0">
      <div id="resume">
        <header className="mb-5">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Paulo Chaves da Silva Filho
          </h1>
          <p className="text-lg font-semibold text-gray-800 mt-0.5">
            Senior Software Engineer
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm mt-2">
            <a href="https://opchaves.com" className="hover:underline">
              opchaves.com
            </a>
            <a href="mailto:paulo@opchaves.com" className="hover:underline">
              paulo@opchaves.com
            </a>
            <a
              href="https://github.com/opchaves"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1 hover:underline"
            >
              <GithubIcon width={18} height={18} /> Github
            </a>
            <a
              href="https://linkedin.com/in/opchaves"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1 hover:underline"
            >
              <LinkedInIcon width={18} height={18} /> LinkedIn
            </a>
          </div>
        </header>

        <section className="mb-5">
          <SectionTitle>Summary</SectionTitle>
          <p className="text-sm leading-relaxed">
            Senior software engineer. Backend is most of the work, and a large
            share of it is React. At Thunkable AI, that means the cloud database
            on Supabase and Postgres, and the platform MongoDB: version
            upgrades, storage, and consistency. Before that, Rails and React on
            Canvas LMS, used by millions of students and teachers.
          </p>
        </section>

        <section className="mb-5">
          <SectionTitle>Skills</SectionTitle>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Languages:</span> TypeScript,
              JavaScript, Node.js, Ruby, SQL
            </li>
            <li>
              <span className="font-semibold">Frameworks:</span> React, React
              Native, Expo, Next.js, Ruby on Rails
            </li>
            <li>
              <span className="font-semibold">Backend:</span> PostgreSQL,
              Supabase, MongoDB, Redis, REST, GraphQL, transactions, distributed
              locks
            </li>
            <li>
              <span className="font-semibold">Infrastructure:</span> Docker,
              Kubernetes, GCP, GitHub Actions, Playwright
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <SectionTitle>Experience</SectionTitle>

          <Job
            title="Senior Software Engineer, Thunkable"
            dates="April 2023 – Present"
          >
            <Bullets>
              <li>
                Main engineer on Thunkable Cloud DB, the Supabase and Postgres
                store behind apps made with Thunkable AI. Describing an app
                proposes the tables, columns, and permissions in chat. On
                approval, the integration creates a database in the creator's
                Supabase account, and the app signs users in and reads and
                writes that data.
              </li>
              <li>
                A large part of the work is React, alongside the Supabase and
                Postgres integration.
              </li>
              <li>
                Built App Secrets. Creators enter third-party API keys in a
                form, the keys stay on the server, and calls are proxied so the
                generated app never holds them.
              </li>
              <li>
                Plan and own Thunkable's MongoDB code: version upgrades and
                storage optimization.
              </li>
              <li>
                Introduced MongoDB transactions for multi-document writes, Redis
                distributed locks so concurrent edits stop colliding, and a
                GraphQL DataLoader that removes N+1 queries.
              </li>
            </Bullets>
          </Job>

          <Job
            title="Software Engineer, BairesDev"
            dates="July 2020 – December 2022"
            note="Consulting for North American product companies."
          >
            <div className="mt-2 pl-3 border-l border-gray-200">
              <h5 className="text-sm font-medium">
                Blazer (formerly Brooks Bell) — Frontend Developer
              </h5>
              <Bullets>
                <li>
                  Shipped 50+ A/B tests in vanilla JavaScript and jQuery through
                  Adobe Target, changing production UI on sites I did not have
                  source access to.
                </li>
                <li>
                  Removed content flicker by getting the experiment script onto
                  the page in under a second.
                </li>
              </Bullets>
            </div>
            <div className="mt-3 pl-3 border-l border-gray-200">
              <h5 className="text-sm font-medium">
                Instructure — Software Engineer
              </h5>
              <Bullets>
                <li>
                  Shipped REST APIs, data models, and core UI on Canvas LMS
                  (Ruby on Rails, React, and TypeScript), used by millions of
                  students and teachers.
                </li>
                <li>
                  Built accessible (WCAG) and internationalized features for
                  that global user base.
                </li>
              </Bullets>
            </div>
          </Job>

          <Job
            title="Senior Full-Stack Developer (Remote), Movinga"
            dates="August 2019 – March 2020"
          >
            <Bullets>
              <li>
                Rebuilt the site in Next.js and React and moved it onto a
                headless CMS (Gatsby).
              </li>
              <li>
                Built Node.js and Rails backends and integrated Salesforce.
              </li>
            </Bullets>
          </Job>

          <Job
            title="Software Engineer, Codeminer42"
            dates="January 2018 – April 2019"
            note="Remote consulting engagement at Lucidity Tech."
          >
            <Bullets>
              <li>
                Built Ethereum event-processing pipelines for Lucidity: Solidity
                contracts, plus the Node.js and Ruby APIs in front of them.
              </li>
              <li>
                Built the React app and the Truffle test suite for those
                contracts.
              </li>
            </Bullets>
          </Job>

          <Job
            title="Software Developer, SEFAZ-PI"
            dates="September 2016 – April 2017"
          >
            <Bullets>
              <li>
                Wrote Python batch jobs that parsed millions of records from
                Oracle into MongoDB, and operated the replica sets those jobs
                wrote to.
              </li>
            </Bullets>
          </Job>

          <div className="mb-1">
            <h4 className="font-semibold text-sm mb-1">Earlier</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <span className="font-medium">
                  Full-Stack Developer, Tartigrado Tecnologia
                </span>{" "}
                <span className="text-gray-600">
                  · January 2016 – June 2016.
                </span>{" "}
                Replaced Struts2 screens with Spring, AngularJS, and REST.
              </li>
              <li>
                <span className="font-medium">
                  Full-Stack Developer, Supra Tecnologia
                </span>{" "}
                <span className="text-gray-600">
                  · January 2010 – December 2012.
                </span>{" "}
                Built a PHP scheduling system for 1M+ users, migrated it from
                MySQL to PostgreSQL, and moved the code onto Git.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <SectionTitle>Education</SectionTitle>
          <ul className="text-sm space-y-1">
            <li className="flex flex-wrap justify-between gap-x-4">
              <span>
                Systems Analysis and Development, Federal Institute of
                Technology in Piaui
              </span>
              <span className="text-gray-600 shrink-0">2013 – 2019</span>
            </li>
            <li className="flex flex-wrap justify-between gap-x-4">
              <span>Computer Science, Loyola University Chicago</span>
              <span className="text-gray-600 shrink-0">2014 – 2015</span>
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-8 print:hidden">
        <a
          href="/assets/paulo-chaves-resume.pdf"
          className="text-sm text-gray-800 hover:underline"
        >
          Download PDF
        </a>
      </div>
    </main>
  );
}

import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";
import XIcon from "@/components/icons/x";
import YoutubeIcon from "@/components/icons/youtube";

export function meta() {
  return [
    { title: "Paulo Chaves – Senior Software Engineer" },
    {
      name: "description",
      content: [
        "Senior Software Engineer with 10+ years of experience.",
        "Currently architecting AI-driven platforms at Thunkable to enable",
        "natural language app generation. Expert in Node.js, React, and",
        "Ruby on Rails with an AI-augmented development workflow.",
      ].join(" "),
    },
  ];
}

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[40vh] text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 mt-10 sm:mt-2 bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text">
        Paulo Chaves
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
        Senior Software Engineer
      </h2>
      <p className="max-w-3xl text-lg md:text-xl text-gray-700 mb-8">
        I’m a Senior Software Engineer with a decade of experience building
        systems that scale and solutions that last. Currently, I’m at{" "}
        <span className="font-semibold">Thunkable</span> helping to bridge the
        gap between human ideas and mobile apps by using LLMs to enable natural
        language creation.
      </p>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="max-w-3xl mx-auto pb-12 pt-3 px-4">
      <h3 className="text-xl font-bold mb-4 text-gray-700">Skills</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
        <li>
          <span className="font-semibold">AI & LLM:</span> Claude Code, Codex,
          Gemini, AI-Augmented Development
        </li>
        <li>
          <span className="font-semibold">Backend:</span> Node.js, TypeScript,
          Ruby on Rails, PostgreSQL, MongoDB, Redis, GraphQL
        </li>
        <li>
          <span className="font-semibold">Frontend:</span> React, React Router,
          Next.js, Vite, Tailwind CSS, TypeScript
        </li>
        <li>
          <span className="font-semibold">Infrastructure & Ops:</span> Docker,
          Kubernetes, GCP, AWS, CI/CD (GitHub Actions), Git
        </li>
        <li>
          <span className="font-semibold">Testing:</span> Playwright, Cypress,
          Jest, Vitest
        </li>
      </ul>
    </section>
  );
}

const mailQuery =
  "subject=Let's%20collaborate!&body=Hey%20Paulo%2C%0A%0AI'd%like%20to%20connect%20about%20business%20or%20engineering%20collaboration.%0A";

function SocialLinksSection() {
  return (
    <section className="max-w-3xl mx-auto pb-12 pt-3 px-4">
      <h3 className="text-xl font-bold mb-4 text-center text-gray-700">
        Let's Connect
      </h3>
      <div className="flex gap-6 justify-center">
        <a
          href="https://x.com/opchaves"
          target="_blank"
          rel="noopener"
          aria-label="X (Twitter)"
          className="text-gray-500 hover:text-gray-800 text-2xl"
        >
          <XIcon />
        </a>
        <a
          href="https://linkedin.com/in/opchaves"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          className="text-gray-500 hover:text-gray-800 text-2xl"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/opchaves"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          className="text-gray-500 hover:text-gray-800 text-2xl"
        >
          <GithubIcon />
        </a>
        <a
          href="https://youtube.com/@opchaves"
          target="_blank"
          rel="noopener"
          aria-label="YouTube"
          className="text-gray-500 hover:text-gray-800 text-2xl"
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

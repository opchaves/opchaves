import EmailIcon from "@/components/icons/email";
import GithubIcon from "@/components/icons/github";
import InstagramIcon from "@/components/icons/instagram";
import LinkedInIcon from "@/components/icons/linkedin";
import XIcon from "@/components/icons/x";
import YoutubeIcon from "@/components/icons/youtube";

export function meta() {
  return [
    { title: "Paulo Chaves – Senior Full Stack Engineer" },
    {
      name: "description",
      content: [
        "I’m a Senior Full Stack Engineer with over 10 years of experience,",
        "specializing in building REST and GraphQL APIs with Node.js,",
        "powered by MongoDB, Postgres, and Redis. I also develop modern",
        "UIs with React.js leveraging TypeScript to deliver robust and highly",
        "efficient web applications. Experienced in remote and collaborative",
        "environments, I thrive on solving complex challenges and delivering value through code.",
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
        Senior Full Stack Engineer
      </h2>
      <p className="max-w-3xl text-lg md:text-xl text-gray-700 mb-8">
        I’m a Senior Full Stack Engineer with over 10 years of experience,
        specializing in building REST and GraphQL APIs with{" "}
        <span className="font-semibold">Node.js</span>, powered by{" "}
        <span className="font-semibold">MongoDB</span>,{" "}
        <span className="font-semibold">Postgres</span>, and{" "}
        <span className="font-semibold">Redis</span>. I also develop modern UIs
        with <span className="font-semibold">React.js</span> leveraging{" "}
        <span className="font-semibold">TypeScript</span> to deliver robust and
        highly efficient web applications. Experienced in remote and
        collaborative environments, I thrive on solving complex challenges and
        delivering value through code.
      </p>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="max-w-3xl mx-auto pb-12 pt-3 px-4">
      <h3 className="text-xl font-bold mb-4 text-gray-700">Skills</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <li>
          <span className="font-semibold">Backend:</span> Node.js, TypeScript,
          PostgreSQL, REST, GraphQL, MongoDB, Docker, Ruby on Rails
        </li>
        <li>
          <span className="font-semibold">Frontend:</span> React, React Router,
          Redux, Tailwind CSS, AntD, UI/UX, SSR, SPA
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
        <a
          href={`mailto:paulo@opchaves.com?${mailQuery}`}
          target="_blank"
          rel="noopener"
          aria-label="Email"
          className="text-gray-500 hover:text-gray-800 text-2xl"
        >
          <EmailIcon />
        </a>
        <a
          href="https://instagram.com/opchaves"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          className="text-gray-500 hover:text-gray-800 text-2xl"
        >
          <InstagramIcon />
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

export default function Resume() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">
        Resume
      </h1>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-2">Paulo Chaves</h2>
        <p className="mb-4 text-gray-700">Senior Fullstack Developer</p>
        <ul className="mb-4 text-gray-700">
          <li>
            <span className="font-semibold">Email:</span> paulo@opchaves.com
          </li>
          <li>
            <span className="font-semibold">GitHub:</span>{" "}
            <a
              href="https://github.com/opchaves"
              className="text-indigo-600 hover:underline"
            >
              opchaves
            </a>
          </li>
          <li>
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/in/opchaves"
              className="text-indigo-600 hover:underline"
            >
              opchaves
            </a>
          </li>
        </ul>
        <h3 className="font-bold mt-4 mb-2">Tech Stack</h3>
        <p className="mb-2">
          Node.js, React, TypeScript, PostgreSQL, GraphQL, Docker, CI/CD, Cloud,
          Linux
        </p>
        <h3 className="font-bold mt-4 mb-2">Experience</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Lead developer on multiple SaaS products</li>
          <li>Open source author: better-auth, drizzle-seed</li>
          <li>Mentor and team lead for backend and fullstack teams</li>
        </ul>
        <h3 className="font-bold mt-4 mb-2">Education</h3>
        <p>BSc in Computer Science (details on request)</p>
        <div className="mt-6">
          <a
            href="/resume-paulo-chaves.pdf"
            className="text-indigo-600 hover:underline font-semibold"
            download
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}

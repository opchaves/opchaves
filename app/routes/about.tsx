export default function About() {
  return (
    <section className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10 mt-12">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center tracking-tight">
        About Paulo Chaves
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed text-center mb-4">
        Hi, I'm Paulo Chaves, a senior fullstack developer with a passion for
        building robust, scalable, and delightful web applications. My main
        stack is <span className="font-semibold text-indigo-600">Node.js</span>,{" "}
        <span className="font-semibold text-blue-600">React</span>,{" "}
        <span className="font-semibold text-sky-600">TypeScript</span>, and{" "}
        <span className="font-semibold text-teal-600">PostgreSQL</span>.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed text-center mb-4">
        I thrive on backend challenges—APIs, authentication, data modeling,
        performance—but I also enjoy crafting beautiful and usable frontends. I
        love open source, mentoring, and learning new things.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed text-center">
        When I'm not coding, you might find me reading, hiking, or exploring new
        tech. Let's build something great together!
      </p>
    </section>
  );
}

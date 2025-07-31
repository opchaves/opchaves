export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <section className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 mt-12">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 text-center tracking-tight">
          About Our Application
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Welcome to our modern web app, crafted with the latest technologies
          and a focus on user experience. We leverage{" "}
          <span className="font-semibold text-indigo-600">Tailwind CSS v4</span>{" "}
          for rapid, beautiful UI development. Our mission is to deliver fast,
          accessible, and delightful experiences for everyone.
        </p>
      </section>
    </main>
  );
}

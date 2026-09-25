import { isRouteErrorResponse, Link } from "react-router";

export function NotFound() {
  return (
    <article className="mx-auto max-w-2xl px-8 pt-16 pb-8">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        404
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-gray-700">
        The requested page could not be found.
      </p>
      <p className="mt-6 text-sm">
        <Link
          to="/"
          className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
        >
          Home
        </Link>
      </p>
    </article>
  );
}

export function PublicError({ error }: { error: unknown }) {
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }

  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    details = error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <article className="mx-auto max-w-2xl px-8 pt-16 pb-8">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        Error
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-gray-700">{details}</p>
      {stack ? (
        <pre className="mt-6 overflow-x-auto text-xs text-gray-600">
          <code>{stack}</code>
        </pre>
      ) : null}
    </article>
  );
}

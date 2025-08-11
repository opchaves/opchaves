import type { ZodError } from "zod";

// the `error` field contains a general error message, usually displayed at the top of the form
type ZodFieldError<T> = Partial<Record<keyof T, string>> & { error?: string };

export function zodErrorToFieldMessages<T>(
  error: ZodError<T>,
): ZodFieldError<T> {
  const messages = {} as ZodFieldError<T>;
  for (const issue of error.issues) {
    const field = issue.path.join(".") as keyof T;
    if (field && !(field in messages)) {
      (messages as Record<string, string>)[field as string] = issue.message;
    }
  }
  return messages;
}

// see https://github.com/epicweb-dev/invariant/blob/main/src/index.ts
export class InvariantError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, InvariantError.prototype);
  }
}

export function invariant(
  condition: unknown,
  message: string | (() => string),
): asserts condition {
  if (!condition) {
    throw new InvariantError(
      typeof message === "function" ? message() : message,
    );
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

// Converts Zod 4 errors to { field: message } format
import type { ZodError } from "zod";

export function zodErrorToFieldMessages(
  error: ZodError,
): Record<string, string> {
  const messages: Record<string, string> = {};
  for (const issue of error.issues) {
    const field = issue.path.join(".");
    if (field && !messages[field]) {
      messages[field] = issue.message;
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

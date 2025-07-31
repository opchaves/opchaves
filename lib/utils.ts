import { env } from "./env";

// see https://github.com/epicweb-dev/invariant/blob/main/src/index.ts
export class InvariantError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, InvariantError.prototype);
  }
}

export function invariant(condition: unknown, message: string | (() => string)): asserts condition {
  if (!condition) {
    throw new InvariantError(typeof message === 'function' ? message() : message);
  }
}

export const hasGithubAuth = !!env.GITHUB_CLIENT_ID && !!env.GITHUB_CLIENT_SECRET;

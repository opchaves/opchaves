import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import * as schema from "../database/schema";
import { env } from "./env";
import type { AppLoadContext } from "react-router";

console.log(">>>> env", env);

function authBuilder(ctx: AppLoadContext) {
  return betterAuth({
    database: drizzleAdapter(ctx.db, {
      provider: "sqlite",
      schema,
    }),
    trustedOrigins: [env.CLIENT_ORIGIN],
    baseURL: env.BETTER_AUTH_URL,
    advanced: {
      crossSubDomainCookies: {
        enabled: true,
      },
    },
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
    },
    socialProviders: {
      github: {
        clientId: env.GITHUB_CLIENT_ID,
        clientSecret: env.GITHUB_CLIENT_SECRET,
      },
    },
    user: {
      additionalFields: {
        role: {
          type: "string",
          required: false,
          defaultValue: "user",
          input: false, // don't allow user to set role
        },
      },
    },
  });
}

let authInstance: ReturnType<typeof authBuilder> | null = null;

export function getAuth(ctx: AppLoadContext) {
  if (!authInstance) {
    authInstance = authBuilder(ctx);
  }
  return authInstance;
}

export type Auth = ReturnType<typeof getAuth>;

import type { BetterAuthOptions } from "better-auth";
import { betterAuth } from "better-auth";
import type { AppLoadContext } from "react-router";
import { env } from "./env";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "../database/schema";
import { createAuthMiddleware, APIError } from "better-auth/api";

export function createBetterAuth(database: BetterAuthOptions["database"]) {
  return betterAuth({
    database,
    trustedOrigins: [env.CLIENT_ORIGIN],
    baseURL: env.BETTER_AUTH_URL,
    advanced: {
      ipAddress: {
        ipAddressHeaders: ["cf-connecting-ip"],
      },
      crossSubDomainCookies: {
        enabled: true,
      },
    },
    rateLimit: {
      storage: "database",
      modelName: "rateLimit",
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
          input: false,
        },
      },
    },
    databaseHooks: {
      user: {
        create: {
          before: async (user) => {
            // to try production mode locally, run `npm run preview`
            const isProd = import.meta.env.PROD;
            if (isProd && !env.ALLOWED_EMAILS?.includes(user.email)) {
              console.log({
                message: "Email is not allowed",
                email: user.email,
              });
              throw new APIError("BAD_REQUEST", {
                message: "Email is not allowed",
              });
            }
            return { data: { ...user } };
          },
        },
      },
    },
  });
}

let authInstance: ReturnType<typeof createBetterAuth> | null = null;

export function getAuth(ctx: AppLoadContext) {
  if (!authInstance) {
    const database = drizzleAdapter(ctx.db, { provider: "sqlite", schema });
    authInstance = createBetterAuth(database);
  }

  return authInstance;
}

export type Auth = ReturnType<typeof getAuth>;

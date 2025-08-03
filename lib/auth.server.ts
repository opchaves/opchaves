import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db, schema } from "../database/db";
import { env } from "../lib/env";

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "pg", schema }),
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

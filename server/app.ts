import { createRequestHandler } from "@react-router/express";
import { drizzle } from "drizzle-orm/postgres-js";
import express from "express";
import postgres from "postgres";
import "react-router";

import { env } from "@/lib/env";
import { DatabaseContext } from "@/database/context";
import * as schema from "@/database/schema";

declare module "react-router" {
  interface AppLoadContext {
    VALUE_FROM_EXPRESS: string;
  }
}

export const app = express();

const client = postgres(env.DATABASE_URL);
const db = drizzle(client, { schema });
app.use((_, __, next) => DatabaseContext.run(db, next));

app.use(
  createRequestHandler({
    build: () => import("virtual:react-router/server-build"),
    getLoadContext() {
      return {
        VALUE_FROM_EXPRESS: "Hello from Express",
      };
    },
  }),
);

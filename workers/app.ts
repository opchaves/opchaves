import { drizzle } from "drizzle-orm/d1";
import { createRequestHandler, RouterContextProvider } from "react-router";
import * as schema from "@/database/schema";
import { dbContext } from "@/lib/context";

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);

export default {
  async fetch(request, env) {
    const db = drizzle(env.DB, { schema });

    const context = new RouterContextProvider();
    context.set(dbContext, db);

    return requestHandler(request, context);
  },
} satisfies ExportedHandler<Env>;

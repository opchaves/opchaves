import { type DrizzleD1Database } from "drizzle-orm/d1";
import * as schema from "@/database/schema";
import { createContext } from "react-router";

export const dbContext = createContext<DrizzleD1Database<typeof schema>>();

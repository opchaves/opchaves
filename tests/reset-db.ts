import { db } from "../database/db";
import * as schema from "../database/schema";

export async function resetDb() {
  // Get all exported pgTable instances from schema
  const tableNames = Object.values(schema)
    .filter((v: any) => v && typeof v === "object" && v["_"] && v["_"].name)
    .map((v: any) => v["_"].name);

  if (tableNames.length === 0) throw new Error("No tables found in schema");

  // Truncate all tables except migration/meta tables
  const sql = `TRUNCATE TABLE ${tableNames.map(n => `"${n}"`).join(", ")} RESTART IDENTITY CASCADE;`;
  await db.execute(sql);
  
  console.log("Database reset successfully");
}

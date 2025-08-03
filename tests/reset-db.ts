import { getTableName } from "drizzle-orm";
import { db } from "../database/db";
import * as schema from "../database/schema";

export async function resetDb() {
  const tableNames = Object.keys(schema).map((key) =>
    getTableName(schema[key]),
  );

  if (tableNames.length === 0) throw new Error("No tables found in schema");

  // Truncate all tables except migration/meta tables
  const sql = `TRUNCATE TABLE ${tableNames.map((n) => `"${n}"`).join(", ")} RESTART IDENTITY CASCADE;`;
  await db.execute(sql);
}

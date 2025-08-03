import { execSync } from "child_process";
import { resetDb } from "./reset-db";

export default async () => {
    await resetDb();
};

import compression from "compression";
import express from "express";
import morgan from "morgan";
import { loadEnvFile } from "node:process";

// Load environment variables from the appropriate .env file based on NODE_ENV
const { NODE_ENV = "development" } = process.env;
// built code lives under build/server/assets, so we need to adjust the path
let envFile = null;
if (NODE_ENV === "test") envFile = ".env.test";
if (NODE_ENV === "development") envFile = ".env";
console.log("NODE_ENV:", NODE_ENV);
console.log(`Loading environment file: ${envFile}`);

if (envFile) {
  try {
    loadEnvFile(envFile);
  } catch (error) {
    console.warn(`Failed to load environment file: ${envFile}`, error);
    process.exit(1);
  }
}

// Short-circuit the type-checking of the built output.
const BUILD_PATH = "./build/server/index.js";
const DEVELOPMENT = NODE_ENV === "development";
const PORT = Number.parseInt(process.env.PORT || "3000");

const app = express();

app.use(compression());
app.disable("x-powered-by");

if (DEVELOPMENT) {
  console.log("Starting development server");
  const viteDevServer = await import("vite").then((vite) =>
    vite.createServer({
      server: { middlewareMode: true },
    }),
  );
  app.use(viteDevServer.middlewares);
  app.use(async (req, res, next) => {
    try {
      const source = await viteDevServer.ssrLoadModule("./server/app.ts");
      return await source.app(req, res, next);
    } catch (error) {
      if (typeof error === "object" && error instanceof Error) {
        viteDevServer.ssrFixStacktrace(error);
      }
      next(error);
    }
  });
} else {
  console.log("Starting production server");
  app.use(
    "/assets",
    express.static("build/client/assets", { immutable: true, maxAge: "1y" }),
  );
  app.use(morgan("tiny"));
  app.use(express.static("build/client", { maxAge: "1h" }));
  app.use(await import(BUILD_PATH).then((mod) => mod.app));
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

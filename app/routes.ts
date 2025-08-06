import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/site-layout.tsx", [
    index("routes/home.tsx"),
    route("/blog", "routes/blog.tsx"),
    route("/resume", "routes/resume.tsx"),
  ]),

  route("/resume.pdf", "routes/resume-pdf.ts"),
  route("/api/auth/*", "routes/api/auth.ts"),

  layout("routes/auth/layout.tsx", [
    route("/auth/login", "routes/auth/login.tsx"),
    route("/auth/register", "routes/auth/register.tsx"),
  ]),

  ...prefix("dashboard", [
    layout("routes/dashboard/layout.tsx", [
      index("routes/dashboard/index.tsx"),
      route("/settings", "routes/dashboard/settings.tsx"),
    ]),
  ]),
] satisfies RouteConfig;

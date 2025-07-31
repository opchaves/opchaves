import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  route("/api/auth/*", "routes/api/auth.ts"),

  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),

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

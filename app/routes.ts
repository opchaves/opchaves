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

  route("/api/auth/*", "routes/api/auth.ts"),

  layout("routes/auth/layout.tsx", [
    route("/auth/login", "routes/auth/login.tsx"),
    route("/auth/register", "routes/auth/register.tsx"),
  ]),

  ...prefix("app", [
    layout("routes/app/layout.tsx", [
      index("routes/app/index.tsx"),
      route("/settings", "routes/app/settings.tsx"),
    ]),
  ]),

  ...prefix("app/blog", [
    layout("routes/app/blog/layout.tsx", [
      index("routes/app/blog/index.tsx"),
      route("/new", "routes/app/blog/new.tsx"),
      route("/:id", "routes/app/blog/view.tsx"),
      route("/:id/edit", "routes/app/blog/edit.tsx"),
    ]),
  ]),
] satisfies RouteConfig;

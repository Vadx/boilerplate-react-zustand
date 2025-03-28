import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("components/layouts/layout-wrap.tsx", [
    index("routes/home.tsx"),
    route("/articles", "routes/articles.tsx"),
    route("/users", "routes/users.tsx"),
  ]),
  layout("components/layouts/layout-auth.tsx", [
    route("login", "routes/auth/login.tsx"),
    route("register", "routes/auth/register.tsx"),
    route("forgot-password", "routes/auth/forgot-password.tsx"),
    route("reset-password", "routes/auth/reset-password.tsx"),
  ]),
] satisfies RouteConfig;

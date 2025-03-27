import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/layout-wrap.tsx", [
    index("routes/home.tsx"),
    route("/articles", "routes/articles.tsx"),
    route("/users", "routes/users.tsx"),
  ])
] satisfies RouteConfig;

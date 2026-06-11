import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),

  route("apps", "routes/apps.tsx", [
    index("routes/appPages/appsList.tsx"),
    route(":appSlug", "routes/appPages/appDetail.tsx"),
    route(":appSlug/privacy", "routes/appPages/appPrivacy.tsx"),
  ]),
] satisfies RouteConfig;

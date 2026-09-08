import { Outlet } from "react-router";
import type { RouteObject } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Layout from "../components/Layout/Layout";
import AppsPage from "../pages/AppsPage";
import AppDetailPage from "../pages/AppDetailPage";
import AppPrivacyPage from "../pages/AppPrivacyPage";
import NotFoundPage from "../pages/NotFoundPage";

const routes = {
  public: [
    { index: true, element: <HomePage /> },
    {
      path: "apps",
      children: [
        { index: true, element: <AppsPage /> },
        { path: ":appSlug", element: <AppDetailPage /> },
        { path: ":appSlug/privacy", element: <AppPrivacyPage /> },
      ],
    },
    { path: "about", element: <AboutPage /> },
    { path: "*", element: <NotFoundPage /> },
  ],
};

const AppRouter: RouteObject[] = [
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: routes.public,
  },
];

export default AppRouter;

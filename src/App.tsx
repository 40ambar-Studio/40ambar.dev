import { createBrowserRouter, RouterProvider } from "react-router";
import AppRouter from "./routes/AppRouter";

export default function App() {
  const router = createBrowserRouter(AppRouter);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

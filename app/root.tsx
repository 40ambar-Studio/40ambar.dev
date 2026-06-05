import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:wght@400;500;600;700&display=swap",
  },
];

/* ---------- Inline theme script – runs BEFORE first paint to prevent FOUC ---------- */

const themeScript = `
  (function(){
    var t = localStorage.getItem("theme");
    if (!t) { t = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"; }
    document.documentElement.setAttribute("data-theme", t);
  })();
`;

/* ---------- Layout (shell) ---------- */

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/* ---------- App (page wrapper) ---------- */

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Error Boundary ---------- */

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 700,
          margin: 0,
          color: "var(--primary)",
        }}
      >
        {message}
      </h1>
      <p style={{ marginTop: "0.5rem", color: "var(--text-secondary)" }}>
        {details}
      </p>
      {stack && (
        <pre
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            overflowX: "auto",
            fontSize: "0.8rem",
            textAlign: "left",
            background: "var(--bg-secondary)",
            borderRadius: "8px",
            maxWidth: "100%",
          }}
        >
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

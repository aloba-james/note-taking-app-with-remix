import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

import styles from "./styles/main.css";
import MainNavigation from "./components/MainNavigation";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
  ];
}

export function CatchBoundary() {
  const caughtResponse = useCatch();

  return (
    <html lang="en">
      <head>
        <Meta />
        <title>{caughtResponse.statusText}</title>
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main className="error">
          <h1>{caughtResponse.statusText}</h1>
          <p>{caughtResponse.data?.message || 'Something went wrong'}</p> 
          <p>
            Back to <Link to="/">Home</Link>
          </p>
        </main>
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <title>An error occurred</title>
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main className="error">
          <h1>An error occurred</h1>
          <p>
            {error.message}
          </p>
          <p>
            Back to <Link to="/">Home</Link>
          </p>
        </main>
        <Scripts />
      </body>
    </html>
  );
}

export const meta = () => {
  return {
    charset: "utf-8",
    title: "Remix Notes",
    viewport: "width=device-width,initial-scale=1",
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

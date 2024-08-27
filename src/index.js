import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { ProtectedRoute } from "./components";
import { AuthProvider } from "./contexts/AuthContext";
import { Dashboard, Login, PrivacyPolicy, SongDetail, NoAccess, Support } from "./pages";
import "./styles/Global.css";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: (
      <Login />
    ),
  },
  {
    path: "no-access",
    element: <NoAccess />,
  },
  {
    path: "dashboard",
    element: (
        <Dashboard />
    ),
  },
  {
    path: "song/:id",
    element: (
      <ProtectedRoute>
        <SongDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: "folder/:id",
    element: (
      <ProtectedRoute>
        {/* <SongDetail /> */}
      </ProtectedRoute>
    ),
  },
  {
    path: "privacypolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "support",
    element: <Support />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);

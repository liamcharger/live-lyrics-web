import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { ProtectedRoute } from "./components";
import { AuthProvider } from "./contexts/AuthContext";
import { Dashboard, Login, PrivacyPolicy, SongDetail } from "./pages";
import "./styles/Global.css";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);

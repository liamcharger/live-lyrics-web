import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './styles/index.css';
import App from './App';
import { Login, Dashboard, PrivacyPolicy, SongDetail } from './pages';
import { ProtectedRoute } from './components';
import { AuthProvider } from './contexts/AuthContext';
import './styles/Global.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "login",
    element: (
      <Login />
    ),
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
    path: "privacypolicy",
    element: (
      <PrivacyPolicy />
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
);

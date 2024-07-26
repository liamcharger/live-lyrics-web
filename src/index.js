import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './styles/index.css';
import App from './App';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProtectedRoute from './components/ProtectedRoute';
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

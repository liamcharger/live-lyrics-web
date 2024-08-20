import React from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { Loading } from "../components";
// import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  // const { user, loading } = useAuth();
  const location = useLocation();

  // if (loading) {
  //   return <Loading />;
  // }

  // Redirect everything to a "Still in development" page while under development

  return <Navigate to="/no-access" state={{ from: location }} />;

  // if (!user) {
  //   return <Navigate to="/login" state={{ from: location }} />;
  // }

  // return children;
};

export default ProtectedRoute;

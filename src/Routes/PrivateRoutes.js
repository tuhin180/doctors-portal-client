import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthUserContext } from "../context/UserContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthUserContext);
  const location = useLocation();
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;

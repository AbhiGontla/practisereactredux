import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  // Check if the user is logged in
  if (!user || user == null) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the child component
  return children;
};

export default ProtectedRoute;
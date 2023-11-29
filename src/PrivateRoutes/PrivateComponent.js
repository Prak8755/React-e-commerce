import React from "react";
import { Navigate } from "react-router-dom";

const PrivateComponent = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("login"));

  if (!auth) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default PrivateComponent;

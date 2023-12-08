import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem('role');

  return (
    <Route
      {...rest}
      render={(props) =>
        token && role === 'admin' ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;

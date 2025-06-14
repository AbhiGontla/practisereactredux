import React from "react";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="lead">
        Sorry, the page you are looking for does not exist.
      </p>

      <NavLink to="/home" className="btn btn-primary mt-3">
        Go Back to Home
      </NavLink>
    </div>
  );
}

export default ErrorPage;

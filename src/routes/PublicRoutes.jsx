/** @format */

import { useAuth } from "../api/zustand/useAuth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({
  component,
  redirectTo = "/",
  restricted = false,
}) => {
      const { isLoggedIn } = useAuth();
  const shouldRedirect = restricted && isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

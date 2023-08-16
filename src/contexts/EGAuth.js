import PropTypes from "prop-types";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "./ContextProvider";

export default function EGRequireAuth({ allowedRoles }) {
  const { auth } = useStateContext();
  const location = useLocation();

  let hasAllowedRole = false;

  if (allowedRoles) {
    if (typeof allowedRoles === "string") {
      hasAllowedRole = allowedRoles === auth?.role;
    } else if (Array.isArray(allowedRoles)) {
      hasAllowedRole =
        allowedRoles &&
        allowedRoles.some((roleObject) => roleObject[auth?.role]);
    }
  }

  // eslint-disable-next-line no-nested-ternary
  return hasAllowedRole ? (
    <Outlet />
  ) : auth?.username ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
}

EGRequireAuth.defaultProps = {
  allowedRoles: null,
};

EGRequireAuth.propTypes = {
  allowedRoles: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

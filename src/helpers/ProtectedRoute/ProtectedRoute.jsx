import { Navigate, Route } from "react-router-dom";
export const ProtectedRoute = ({ token, children, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (token) {
          return children;
        }

        if (!token) {
          return <Navigate to="/login" replace />;
        }

        return null;
      }}
    />
  );
};

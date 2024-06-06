import { Outlet, Navigate } from "react-router";
import { useAuth } from "../../auth/auth";

const ProtectedRoute = () => {
  const auth = useAuth()
  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

import { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

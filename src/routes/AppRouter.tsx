import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, HomePage } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas publicas */}
        <Route path="/" element={<LoginPage />} />

        {/* Rotas Privadas */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

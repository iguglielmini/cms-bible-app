import * as React from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider, ThemeProvider } from "./context";
import { AppRouter } from "./routes/AppRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

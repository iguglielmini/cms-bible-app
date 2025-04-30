import { createContext, useMemo, useState, useContext, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "../themes/theme";

type ThemeMode = "light" | "dark";

const ThemeContext = createContext({
  mode: "light" as ThemeMode,
  toggleTheme: () => {},
});

export function useThemeMode() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("dark");

  const theme = useMemo(
    () => (mode === "dark" ? darkTheme : lightTheme),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

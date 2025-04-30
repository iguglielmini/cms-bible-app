import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
      paper: "#fff",
    },
    primary: {
      main: "#1976d2",
    },
  },
  spacing: 4,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    primary: {
      main: "#90caf9",
    },
  },
  spacing: 4,
});

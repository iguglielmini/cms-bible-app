import { useNavigate } from "react-router-dom";
import { useAuth, useThemeMode } from "../../context";
import { Button } from "@mui/material";

export default function LoginPage() {
  const { login } = useAuth();
  const { toggleTheme, mode } = useThemeMode();
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/home");
  }

  return (
    <div>
      <p>Login Page</p>
      <Button variant="contained" onClick={toggleTheme}>
        Mudar tema {mode === "dark" ? "light" : "dark"}
      </Button>
    </div>
  );
}

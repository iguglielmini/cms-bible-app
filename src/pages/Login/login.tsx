import { useNavigate } from "react-router-dom";
import { useAuth, useThemeMode } from "../../context";
import { Box, Button } from "@mui/material";
import { ButtonCustom } from "../../components/basics/ButtonCustom/ButtonCustom";

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

      <Box display="flex" alignItems="center" flexWrap="wrap" gap="16px">
        <ButtonCustom variant="contained" customSize="xs"> xs</ButtonCustom>
        <ButtonCustom variant="contained" customSize="sm"> sm</ButtonCustom>
        <ButtonCustom variant="contained" customSize="md"> md</ButtonCustom>
        <ButtonCustom variant="contained" customSize="lg"> lg</ButtonCustom>
        <ButtonCustom variant="contained" customSize="xl"> xl</ButtonCustom>
        <ButtonCustom variant="contained" customSize="xxl"> xxl</ButtonCustom>
        <ButtonCustom variant="contained" customSize="xxxl"> xxxl</ButtonCustom>
      </Box>
    </div>
  );
}

import { useAuth } from "../../context";
import { Box, Button } from "@mui/material";

export default function HomePage() {
  const { logout } = useAuth();

  return (
    <Box>
      <p>Home Page</p>
      <Button variant="contained" onClick={logout}>Sair</Button>
    </Box>
  );
}

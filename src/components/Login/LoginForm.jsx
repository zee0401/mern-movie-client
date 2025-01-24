import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000000",
  boxShadow: 24,
  p: 4,
};

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isLoading, isError, error } = useLogin({ onClose });

  const handleLogin = () => {
    mutate({ email, password });
  };

  return (
    <Box sx={style}>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>

        {isError && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error?.response?.data ||
              error?.message ||
              "Login failed. Please try again."}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default LoginForm;

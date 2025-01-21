import {
  ThemeProvider,
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  // Define a custom theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2", // Blue
      },
      secondary: {
        main: "#ff4081", // Pink
      },
      mode: "dark",
    },
    typography: {
      fontFamily: "Arial, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This ensures that global CSS resets are applied */}
      <AppBar position="sticky">
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
      {/* Main content area */}
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

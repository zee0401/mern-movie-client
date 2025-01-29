import {
  ThemeProvider,
  CssBaseline,
  Container,
  AppBar,
  Box,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  // Define a custom theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#ff4081",
      },
      edit: {
        main: "#ffe417",
      },
      delete: {
        main: "#ff0000",
      },
      mode: "dark",
    },
    typography: {
      fontFamily: "Arial, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Header />
        </AppBar>
      </Box>
      {/* Main content area */}
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

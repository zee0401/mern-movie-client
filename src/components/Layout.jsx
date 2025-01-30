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
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFF6DA",
      },
      secondary: {
        main: "#18214c",
      },
      edit: {
        main: "#ffe417",
      },
      delete: {
        main: "#ff0000",
      },
      text: {
        primary: "#FFF6DA",
        secondary: "#FFF6DA",
        blue: "#0b002f",
        gray: "#808b94",
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
      <Box
        sx={{
          flexGrow: 1,
          background:
            "linear-gradient(168deg, rgba(20, 20, 23, 0) 3.66%, rgba(20, 20, 23, 0.60) 100%), radial-gradient(circle at top right, hsla(220.2941176470588, 100%, 60%, 0.25) 0%, rgba(0, 0, 0, 0) 30%), radial-gradient(circle at bottom left, rgba(189, 167, 227, 0.25) 0%, rgba(0, 0, 0, 0) 30%), #110C21;",
        }}
      >
        <AppBar position="static">
          <Header />
        </AppBar>
        {/* Main content area */}
        <Container
          maxWidth="lg"
          sx={{
            marginTop: 4,
          }}
        >
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;

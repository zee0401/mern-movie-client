import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import HeaderButton from "./HeaderButton";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

export default function ButtonAppBar() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Toolbar
      sx={{
        backgroundColor: "#df07dc",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box display="flex" alignItems="center">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Box display="flex" alignItems="center">
            <MovieFilterIcon sx={{ mr: 1 }} />
            <Typography variant="h6" component="div">
              Movies
            </Typography>
          </Box>
        </Link>
      </Box>

      <HeaderButton />
    </Toolbar>
  );
}

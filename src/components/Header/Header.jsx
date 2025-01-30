import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import HeaderButton from "./HeaderButton";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Toolbar
      sx={{
        background:
          "linear-gradient(168deg, rgba(20, 20, 23, 0) 3.66%, rgba(20, 20, 23, 0.60) 100%), radial-gradient(circle at top right, rgba(51, 118, 255, .25) 0%, rgba(0, 0, 0, 0) 30%), radial-gradient(circle at bottom left, rgba(189, 167, 227, .25) 0%, rgba(0, 0, 0, 0) 30%), #110C21;",
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

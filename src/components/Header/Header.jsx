import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import HeaderButton from "./HeaderButton";

export default function ButtonAppBar() {
  return (
    <Toolbar sx={{ backgroundColor: "#df07dc" }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      ></IconButton>
      <MovieFilterIcon sx={{ mr: 1 }} />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Movies
      </Typography>
      <HeaderButton login="Admin Login" search="Browse Movies" />
    </Toolbar>
  );
}

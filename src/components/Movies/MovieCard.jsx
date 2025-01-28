/* eslint-disable react/prop-types */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ScheduleIcon from "@mui/icons-material/Schedule";

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ maxWidth: 200, borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={movie.name}
          height="300"
          image={movie.image}
          title={movie.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            sx={{ fontSize: "13px" }}
            component="div"
            nowarap
          >
            {movie.name}
          </Typography>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              color: "#6c757d",
              overflow: "hidden",
              textOverflow: "ellipsis",
              mb: "10px",
            }}
            variant="body2"
            component="div"
          >
            {movie.description}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex">
              <StarIcon fontSize="small" sx={{ color: "#ffe417" }} />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                {movie.rating}
              </Typography>
            </Box>
            <Box display="flex">
              <ScheduleIcon fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                {movie.duration}
              </Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Typography variant="body2" color="text.secondary">
              {movie.year}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;

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
import { convertedDate } from "../../utility/dateConvert";
import { movieDurationFormat } from "../../utility/movieDurationFormat";
import TodayIcon from "@mui/icons-material/Today";

const MovieCard = ({ movie }) => {
  const fallbackImage =
    "https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-AOBSIAmLWOs.jpg";
  return (
    <Card sx={{ maxWidth: 200, borderRadius: 3, borderBottom: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={movie.name}
          height="300"
          image={movie.image || fallbackImage}
          onError={(e) => (e.target.src = fallbackImage)}
          title={movie.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            sx={{ fontSize: "13px" }}
            component="div"
            nowarap
            color="text.primary"
          >
            {movie.name}
          </Typography>
          {/* <Typography
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
          </Typography> */}
          <Box display="flex" justifyContent="space-between">
            <Box display="flex">
              <StarIcon sx={{ color: "#ffe417", fontSize: "17px" }} />
              <Typography variant="body2" color="text.gray" sx={{ ml: 0.1 }}>
                {movie.rating}
              </Typography>
            </Box>
            <Box display="flex">
              <ScheduleIcon sx={{ color: "gray", fontSize: "17px" }} />
              <Typography variant="body2" color="text.gray">
                {movieDurationFormat(movie.duration)}
              </Typography>
            </Box>
            <Box display="flex">
              <TodayIcon sx={{ color: "gray", fontSize: "17px" }} />
              <Typography variant="body2" color="text.gray">
                {convertedDate(movie.releaseDate)}
              </Typography>
            </Box>
          </Box>
          <Box>
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

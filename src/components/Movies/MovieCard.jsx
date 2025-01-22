/* eslint-disable react/prop-types */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={movie.title}
          height="300"
          image={movie.img}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
